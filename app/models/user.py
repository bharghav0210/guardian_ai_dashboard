from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean

from app.database import Base


class User(Base):

    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    fullname = Column(String, nullable=False)

    email = Column(String, unique=True, nullable=False)

    username = Column(String, unique=True, nullable=False)

    password = Column(String, nullable=False)

    role = Column(String, default="User")

    is_active = Column(Boolean, default=True)