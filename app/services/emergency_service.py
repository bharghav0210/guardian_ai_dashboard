# =====================================================
# EMERGENCY ESCALATION ENGINE
# =====================================================

def detect_emergency_threat(

    content: str

):

    text = content.lower()

    emergency_detected = False

    risk_level = "Low"

    escalation_action = "Monitor"

    priority = "Normal"

    recommended_response = (
        "No immediate action required"
    )

    # =================================================
    # EMERGENCY KEYWORDS
    # =================================================

    emergency_keywords = [

        "kill",
        "suicide",
        "bomb",
        "mass attack",
        "terror",
        "murder",
        "school shooting",
        "self harm",
        "extreme violence"
    ]

    detected = False

    for keyword in emergency_keywords:

        if keyword in text:

            detected = True

            break

    # =================================================
    # CLASSIFICATION
    # =================================================

    if detected:

        emergency_detected = True

        risk_level = "Critical"

        escalation_action = (
            "Notify Emergency Team"
        )

        priority = "Immediate"

        recommended_response = (
            "Lock Account & Escalate"
        )

    return {

        "risk_level": risk_level,

        "emergency_detected": emergency_detected,

        "escalation_action": escalation_action,

        "priority": priority,

        "recommended_response": recommended_response
    }