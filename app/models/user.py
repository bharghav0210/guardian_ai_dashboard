from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean

from app.database import Base


class User(Base):

    __tablename__ = "users"

    # =====================================
    # PRIMARY KEY
    # =====================================

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    # =====================================
    # USER DETAILS
    # =====================================

    fullname = Column(
        String,
        nullable=False
    )

    email = Column(
        String,
        unique=True,
        nullable=False
    )

    username = Column(
        String,
        unique=True,
        nullable=False
    )

    password = Column(
        String,
        nullable=False
    )

    # =====================================
    # USER ROLE
    # =====================================

    role = Column(
        String,
        default="individual"
    )

    # =====================================
    # SUBSCRIPTION PLAN
    # =====================================

    plan_type = Column(
        String,
        default="individual"
    )

    # =====================================
    # DASHBOARD MODE
    # =====================================

    dashboard_mode = Column(
        String,
        default="individual"
    )

    # =====================================
    # ACCOUNT STATUS
    # =====================================

    is_active = Column(
        Boolean,
        default=True
    )

