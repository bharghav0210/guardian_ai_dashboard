from datetime import datetime
from datetime import timedelta

import hashlib

from jose import jwt
from jose import JWTError

from fastapi import Depends
from fastapi import HTTPException

from fastapi.security import OAuth2PasswordBearer

from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.user import User


# ==========================================
# JWT CONFIG
# ==========================================

SECRET_KEY = "guardian_ai_secret"

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="login"
)


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
# PASSWORD HASHING
# ==========================================

def hash_password(password: str):

    return hashlib.sha256(
        password.encode()
    ).hexdigest()


# ==========================================
# VERIFY PASSWORD
# ==========================================

def verify_password(

    plain_password: str,

    hashed_password: str
):

    return (

        hash_password(
            plain_password
        )

        == hashed_password
    )


# ==========================================
# CREATE JWT TOKEN
# ==========================================

def create_access_token(

    data: dict
):

    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({
        "exp": expire
    })

    encoded_jwt = jwt.encode(

        to_encode,

        SECRET_KEY,

        algorithm=ALGORITHM
    )

    return encoded_jwt


# ==========================================
# GET CURRENT USER
# ==========================================

def get_current_user(

    token: str = Depends(oauth2_scheme),

    db: Session = Depends(get_db)
):

    credentials_exception = HTTPException(

        status_code=401,

        detail="Invalid authentication credentials"
    )

    try:

        payload = jwt.decode(

            token,

            SECRET_KEY,

            algorithms=[ALGORITHM]
        )

        username: str = payload.get("sub")

        if username is None:

            raise credentials_exception

    except JWTError:

        raise credentials_exception

    user = db.query(User).filter(
        User.username == username
    ).first()

    if user is None:

        raise credentials_exception

    return user
