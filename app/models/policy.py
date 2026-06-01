from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database import Base


class Policy(Base):

    __tablename__ = "policies"

    id = Column(Integer, primary_key=True)

    policy_name = Column(String)

    trigger_type = Column(String)

    ai_model = Column(String)

    risk_score = Column(Integer)

    action_type = Column(String)

    automation_level = Column(String)

    status = Column(String, default="Active")