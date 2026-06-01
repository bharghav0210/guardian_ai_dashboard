from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean
from sqlalchemy import DateTime

from datetime import datetime

from app.database import Base


class Device(Base):

    __tablename__ = "devices"

    id = Column(Integer, primary_key=True)

    device_name = Column(String)

    device_type = Column(String)

    operating_system = Column(String)

    app_installed = Column(String)

    reputation = Column(String)

    risk_score = Column(Integer)

    device_status = Column(String)

    threat_detected = Column(Boolean)

    linked_account = Column(String)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )