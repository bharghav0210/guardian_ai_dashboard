from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database import Base


class Evidence(Base):

    __tablename__ = "evidence"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    # =====================================
    # CASE LINKING
    # =====================================

    case_id = Column(Integer)

    # =====================================
    # EVIDENCE DETAILS
    # =====================================

    evidence_type = Column(String)

    evidence_name = Column(String)

    description = Column(String)

    # =====================================
    # SUBMISSION
    # =====================================

    submitted_by = Column(String)

    submitted_role = Column(String)

    # =====================================
    # VERIFICATION
    # =====================================

    verification_status = Column(
        String,
        default="Pending"
    )

    # =====================================
    # CHAIN OF CUSTODY
    # =====================================

    chain_of_custody = Column(
        String,
        default="Maintained"
    )

    # =====================================
    # INTELLIGENCE METADATA
    # =====================================

    threat_level = Column(String)

    forensic_notes = Column(String)

