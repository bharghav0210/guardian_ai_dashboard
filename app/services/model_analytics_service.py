from app.database import SessionLocal

from app.models.audit import AuditLog


# =====================================================
# AI MODEL PERFORMANCE ANALYTICS
# =====================================================

def generate_model_analytics():

    db = SessionLocal()

    logs = db.query(AuditLog).all()

    total_logs = len(logs)

    # =================================================
    # THREAT DETECTION COUNT
    # =================================================

    threats_detected = db.query(AuditLog).filter(
        AuditLog.risk_score >= 70
    ).count()

    # =================================================
    # FALSE POSITIVE SIMULATION
    # =================================================

    false_positives = db.query(AuditLog).filter(
        AuditLog.risk_score < 30
    ).count()

    # =================================================
    # DETECTION ACCURACY
    # =================================================

    if total_logs > 0:

        detection_accuracy = round(

            (threats_detected / total_logs) * 100,

            2
        )

    else:

        detection_accuracy = 0

    # =================================================
    # ENFORCEMENT SUCCESS
    # =================================================

    successful_actions = db.query(AuditLog).filter(
        AuditLog.action_taken != "Safe"
    ).count()

    if total_logs > 0:

        enforcement_success_rate = round(

            (successful_actions / total_logs) * 100,

            2
        )

    else:

        enforcement_success_rate = 0

    # =================================================
    # MODEL CONFIDENCE
    # =================================================

    model_confidence = min(

        95,

        detection_accuracy + 5
    )

    db.close()

    return {

        "model_name": "Guardian NLP Classifier",

        "detection_accuracy": detection_accuracy,

        "false_positives": false_positives,

        "threats_detected": threats_detected,

        "enforcement_success_rate":
        enforcement_success_rate,

        "model_confidence": model_confidence
    }