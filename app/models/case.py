from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database import Base


class Case(Base):

    __tablename__ = "cases"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    # =====================================
    # CASE DETAILS
    # =====================================

    case_title = Column(String)

    description = Column(String)

    threat_type = Column(String)

    # =====================================
    # ASSIGNMENT
    # =====================================

    assigned_to = Column(String)

    assigned_role = Column(String)

    # =====================================
    # PRIORITY
    # =====================================

    priority = Column(
        String,
        default="Medium"
    )

    # =====================================
    # STATUS
    # =====================================

    status = Column(
        String,
        default="Open"
    )

    # =====================================
    # ESCALATION
    # =====================================

    escalation_level = Column(
        String,
        default="None"
    )
