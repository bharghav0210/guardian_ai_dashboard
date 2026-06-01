from fastapi import APIRouter

from app.database import SessionLocal

from app.models.audit import AuditLog

from app.services.analytics_service import (

    get_dashboard_metrics,

    get_severity_distribution,

    get_threat_trends
)

router = APIRouter()


# =====================================================
# GET AUDIT LOGS
# =====================================================

@router.get("/audit-logs")
def get_audit_logs():

    db = SessionLocal()

    logs = db.query(AuditLog).all()

    db.close()

    return logs


# =====================================================
# DASHBOARD METRICS
# =====================================================

@router.get("/dashboard-metrics")
def dashboard_metrics():

    metrics = get_dashboard_metrics()

    return metrics


# =====================================================
# SEVERITY DISTRIBUTION
# =====================================================

@router.get("/severity-distribution")
def severity_distribution():

    data = get_severity_distribution()

    return data


# =====================================================
# THREAT TRENDS
# =====================================================

@router.get("/threat-trends")
def threat_trends():

    data = get_threat_trends()

    return data