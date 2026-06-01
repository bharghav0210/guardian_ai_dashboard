from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime

from datetime import datetime

from app.database import Base


class AuditLog(Base):

    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True)

    event_type = Column(String)

    severity = Column(String)

    risk_score = Column(Integer)

    action_taken = Column(String)

    ai_explanation = Column(String)

    workflow_type = Column(String)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )