from app.database import SessionLocal

from app.models.audit import AuditLog
from app.models.alert import Alert
from app.models.policy import Policy


# =====================================================
# GENERATE WEEKLY SAFETY REPORT
# =====================================================

def generate_weekly_report():

    db = SessionLocal()

    # =================================================
    # TOTAL THREATS
    # =================================================

    total_threats = db.query(Alert).count()

    # =================================================
    # CRITICAL ALERTS
    # =================================================

    critical_alerts = db.query(Alert).filter(
        Alert.severity == "Critical"
    ).count()

    # =================================================
    # TOTAL POLICIES
    # =================================================

    active_policies = db.query(Policy).count()

    # =================================================
    # RISK ANALYTICS
    # =================================================

    logs = db.query(AuditLog).all()

    if len(logs) > 0:

        average_risk_score = round(

            sum(log.risk_score for log in logs)

            / len(logs),

            2
        )

    else:

        average_risk_score = 0

    # =================================================
    # SAFEGUARDS
    # =================================================

    safeguards_triggered = db.query(AuditLog).filter(
        AuditLog.action_taken != "Safe"
    ).count()

    # =================================================
    # TOP THREAT TYPE
    # =================================================

    top_threat = "DM Harassment"

    # =================================================
    # SYSTEM STATUS
    # =================================================

    if critical_alerts >= 5:

        system_status = "High Risk"

    else:

        system_status = "Protected"

    db.close()

    return {

        "total_threats": total_threats,

        "critical_alerts": critical_alerts,

        "active_policies": active_policies,

        "average_risk_score": average_risk_score,

        "safeguards_triggered": safeguards_triggered,

        "top_threat": top_threat,

        "system_status": system_status
    }
