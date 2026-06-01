from app.database import SessionLocal

from app.models.audit import AuditLog
from app.models.alert import Alert
from app.models.policy import Policy
from app.models.workflow import Workflow


# =====================================================
# DASHBOARD METRICS
# =====================================================

def get_dashboard_metrics():

    db = SessionLocal()

    # =========================================
    # TOTAL COUNTS
    # =========================================

    total_alerts = db.query(Alert).count()

    total_policies = db.query(Policy).count()

    total_workflows = db.query(Workflow).count()

    total_audits = db.query(AuditLog).count()

    # =========================================
    # CRITICAL ALERTS
    # =========================================

    critical_alerts = db.query(Alert).filter(
        Alert.severity == "Critical"
    ).count()

    # =========================================
    # AVG RISK SCORE
    # =========================================

    logs = db.query(AuditLog).all()

    if len(logs) > 0:

        avg_risk_score = round(

            sum(log.risk_score for log in logs)

            / len(logs),

            2
        )

    else:

        avg_risk_score = 0

    # =========================================
    # SAFEGUARD METRICS
    # =========================================

    safeguards_triggered = db.query(AuditLog).filter(
        AuditLog.action_taken != "Safe"
    ).count()

    db.close()

    return {

        "active_policies": total_policies,

        "risk_alerts_24h": total_alerts,

        "automated_safeguards": safeguards_triggered,

        "audit_logs": total_audits,

        "average_risk_score": avg_risk_score,

        "critical_alerts": critical_alerts,

        "total_workflows": total_workflows
    }


# =====================================================
# SEVERITY DISTRIBUTION
# =====================================================

def get_severity_distribution():

    db = SessionLocal()

    critical = db.query(AuditLog).filter(
        AuditLog.severity == "Critical"
    ).count()

    high = db.query(AuditLog).filter(
        AuditLog.severity == "High"
    ).count()

    medium = db.query(AuditLog).filter(
        AuditLog.severity == "Medium"
    ).count()

    low = db.query(AuditLog).filter(
        AuditLog.severity == "Low"
    ).count()

    db.close()

    return {

        "Critical": critical,

        "High": high,

        "Medium": medium,

        "Low": low
    }


# =====================================================
# THREAT TRENDS
# =====================================================

def get_threat_trends():

    db = SessionLocal()

    logs = db.query(AuditLog).all()

    trend_data = []

    for log in logs:

        trend_data.append({

            "event_type": log.event_type,

            "severity": log.severity,

            "risk_score": log.risk_score,

            "workflow_type": log.workflow_type,

            "created_at": log.created_at
        })

    db.close()

    return trend_data