from app.database import SessionLocal

from app.models.audit import AuditLog


def create_audit_log(

    event_type: str,

    severity: str,

    risk_score: int,

    action_taken: str,

    ai_explanation: str,

    workflow_type: str

):

    db = SessionLocal()

    audit = AuditLog(

        event_type=event_type,

        severity=severity,

        risk_score=risk_score,

        action_taken=action_taken,

        ai_explanation=ai_explanation,

        workflow_type=workflow_type
    )

    db.add(audit)

    db.commit()

    db.refresh(audit)

    db.close()

    return audit