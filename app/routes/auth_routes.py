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


# ==========================================
# DATABASE SESSION
# ==========================================

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# ==========================================
# SIGNUP
# ==========================================

@router.post("/signup")

def signup(
    fullname: str = Form(...),
    email: str = Form(...),
    username: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.username == username
    ).first()

    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="Username already exists"
        )

    user = User(
        fullname=fullname,
        email=email,
        username=username,
        password=hash_password(password)
    )

    db.add(user)

    db.commit()

    return {
        "message": "User created successfully"
    }


# ==========================================
# LOGIN
# ==========================================

@router.post("/login")

def login(
    username: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.username == username
    ).first()

    if not user:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if not verify_password(
        password,
        user.password
    ):

        raise HTTPException(
            status_code=401,
            detail="Invalid password"
        )

    token = create_access_token(
        data={
            "sub": user.username,
            "role": user.role
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "username": user.username,
        "role": user.role
    }


# ==========================================
# PROTECTED PROFILE ROUTE
# ==========================================

@router.get("/me")

def get_me(
    current_user: User = Depends(get_current_user)
):

    return {
        "id": current_user.id,
        "fullname": current_user.fullname,
        "email": current_user.email,
        "username": current_user.username,
        "role": current_user.role
    }