from fastapi import APIRouter
from fastapi import Form
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.evidence import Evidence

router = APIRouter()


# =====================================================
# DATABASE SESSION
# =====================================================

def get_db():

    db = SessionLocal()

    try:

        yield db

    finally:

        db.close()


# =====================================================
# ADD EVIDENCE
# =====================================================

@router.post("/add-evidence")
def add_evidence(

    case_id: int = Form(...),

    evidence_type: str = Form(...),

    evidence_name: str = Form(...),

    description: str = Form(...),

    submitted_by: str = Form(...),

    submitted_role: str = Form(...),

    threat_level: str = Form(...),

    forensic_notes: str = Form(...),

    db: Session = Depends(get_db)
):

    # =============================================
    # DETERMINE VERIFICATION
    # =============================================

    if threat_level == "Critical":

        verification_status = "Priority Review"

    elif threat_level == "High":

        verification_status = "Under Review"

    else:

        verification_status = "Pending"

    # =============================================
    # CREATE EVIDENCE
    # =============================================

    evidence = Evidence(

        case_id=case_id,

        evidence_type=evidence_type,

        evidence_name=evidence_name,

        description=description,

        submitted_by=submitted_by,

        submitted_role=submitted_role,

        verification_status=
        verification_status,

        threat_level=threat_level,

        forensic_notes=forensic_notes
    )

    db.add(evidence)

    db.commit()

    db.refresh(evidence)

    return {

        "message":
        "Evidence added successfully",

        "evidence": {

            "evidence_id": evidence.id,

            "case_id": evidence.case_id,

            "evidence_type":
            evidence.evidence_type,

            "submitted_by":
            evidence.submitted_by,

            "verification_status":
            evidence.verification_status,

            "chain_of_custody":
            evidence.chain_of_custody
        }
    }


# =====================================================
# GET ALL EVIDENCE
# =====================================================

@router.get("/evidence")
def get_evidence(

    db: Session = Depends(get_db)
):

    evidence = db.query(Evidence).all()

    return evidence


# =====================================================
# VERIFY EVIDENCE
# =====================================================

@router.put("/verify-evidence/{evidence_id}")
def verify_evidence(

    evidence_id: int,

    verification_status: str = Form(...),

    db: Session = Depends(get_db)
):

    evidence = db.query(Evidence).filter(

        Evidence.id == evidence_id

    ).first()

    if not evidence:

        return {

            "error":
            "Evidence not found"
        }

    evidence.verification_status = (
        verification_status
    )

    db.commit()

    return {

        "message":
        "Evidence verified successfully",

        "evidence_id": evidence.id,

        "verification_status":
        evidence.verification_status
    }

