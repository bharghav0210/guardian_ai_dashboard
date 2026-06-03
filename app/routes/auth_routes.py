from fastapi import APIRouter
from fastapi import Form
from fastapi import HTTPException
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.user import User

from app.auth import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user
)

router = APIRouter()


# =====================================================
# DATABASE SESSION
# =====================================================

def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


# =====================================================
# SIGNUP
# =====================================================

@router.post("/signup")
def signup(

    fullname: str = Form(...),

    email: str = Form(...),

    username: str = Form(...),

    password: str = Form(...),

    plan_type: str = Form(...),

    db: Session = Depends(get_db)
):

    # =================================================
    # NORMALIZE PLAN TYPE
    # =================================================

    plan_type = plan_type.lower()

    # =================================================
    # VALIDATE PLAN TYPE
    # =================================================

    valid_plans = [

        "individual",

        "enterprise",

        "government"
    ]

    if plan_type not in valid_plans:

        raise HTTPException(

            status_code=400,

            detail="Invalid plan type"
        )

    # =================================================
    # CHECK EXISTING USER
    # =================================================

    existing_user = db.query(User).filter(
        User.username == username
    ).first()

    if existing_user:

        raise HTTPException(

            status_code=400,

            detail="Username already exists"
        )

    # =================================================
    # DETERMINE DASHBOARD MODE
    # =================================================

    if plan_type == "government":

        dashboard_mode = "government"

        role = "government"

    elif plan_type == "enterprise":

        dashboard_mode = "enterprise"

        role = "enterprise"

    else:

        dashboard_mode = "individual"

        role = "individual"

    # =================================================
    # CREATE USER
    # =================================================

    user = User(

        fullname=fullname,

        email=email,

        username=username,

        password=hash_password(password),

        role=role,

        plan_type=plan_type,

        dashboard_mode=dashboard_mode
    )

    db.add(user)

    db.commit()

    db.refresh(user)

    # =================================================
    # SUCCESS RESPONSE
    # =================================================

    return {

        "message": "User created successfully",

        "user": {

            "id": user.id,

            "fullname": user.fullname,

            "email": user.email,

            "username": user.username,

            "role": user.role,

            "plan_type": user.plan_type,

            "dashboard_mode":
            user.dashboard_mode,

            "is_active":
            user.is_active
        }
    }


# =====================================================
# LOGIN
# =====================================================

@router.post("/login")
def login(

    username: str = Form(...),

    password: str = Form(...),

    db: Session = Depends(get_db)
):

    # =================================================
    # FIND USER
    # =================================================

    user = db.query(User).filter(
        User.username == username
    ).first()

    if not user:

        raise HTTPException(

            status_code=404,

            detail="User not found"
        )

    # =================================================
    # VERIFY PASSWORD
    # =================================================

    if not verify_password(

        password,

        user.password
    ):

        raise HTTPException(

            status_code=401,

            detail="Invalid password"
        )

    # =================================================
    # CHECK ACCOUNT STATUS
    # =================================================

    if not user.is_active:

        raise HTTPException(

            status_code=403,

            detail="Account disabled"
        )

    # =================================================
    # CREATE JWT TOKEN
    # =================================================

    token = create_access_token(

        data={

            "sub": user.username,

            "role": user.role,

            "plan_type": user.plan_type
        }
    )

    # =================================================
    # LOGIN RESPONSE
    # =================================================

    return {

        "access_token": token,

        "token_type": "bearer",

        "username": user.username,

        "role": user.role,

        "plan_type": user.plan_type,

        "dashboard_mode":
        user.dashboard_mode,

        "is_active":
        user.is_active
    }


# =====================================================
# CURRENT USER PROFILE
# =====================================================

@router.get("/me")
def get_me(

    current_user: User = Depends(
        get_current_user
    )
):

    return {

        "id": current_user.id,

        "fullname": current_user.fullname,

        "email": current_user.email,

        "username": current_user.username,

        "role": current_user.role,

        "plan_type":
        current_user.plan_type,

        "dashboard_mode":
        current_user.dashboard_mode,

        "is_active":
        current_user.is_active
    }
