from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean

from app.database import Base


class Policy(Base):

    __tablename__ = "policies"

    id = Column(Integer, primary_key=True)

    name = Column(String)

    description = Column(String)

    ai_model = Column(String)

    risk_score = Column(Integer)

    enforcement_action = Column(String)

    automation_level = Column(String)

    is_active = Column(Boolean, default=True)