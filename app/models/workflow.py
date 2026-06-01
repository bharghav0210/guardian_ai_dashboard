from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import DateTime

from datetime import datetime

from app.database import Base


class Workflow(Base):

    __tablename__ = "workflows"

    id = Column(Integer, primary_key=True)

    workflow_name = Column(String)

    workflow_type = Column(String)

    trigger_source = Column(String)

    automation_level = Column(String)

    enforcement_action = Column(String)

    ai_model = Column(String)

    workflow_status = Column(
        String,
        default="Active"
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )