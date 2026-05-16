from fastapi import APIRouter
from app.database import SessionLocal
from app.models.policy import Policy
from app.models.alert import Alert
from app.models.audit import AuditLog

router = APIRouter()


@router.get("/dashboard-metrics")
def dashboard_metrics():

    db = SessionLocal()

    active_policies = db.query(Policy).count()

    alerts = db.query(Alert).count()

    audits = db.query(AuditLog).count()

    db.close()

    return {
        "active_policies": active_policies,
        "risk_alerts_24h": alerts,
        "automated_safeguards": 72,
        "audit_logs": audits,
        "average_risk_score": 81
    }