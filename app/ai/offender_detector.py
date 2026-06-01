# =====================================================
# REPEAT OFFENDER DETECTION ENGINE
# =====================================================

def detect_repeat_offender(

    username: str,

    offense_count: int

):

    risk_level = "Low"

    recommended_action = "Monitor"

    repeat_offender = False

    # =================================================
    # RISK CLASSIFICATION
    # =================================================

    if offense_count >= 10:

        risk_level = "Critical"

        recommended_action = (
            "Permanent Suspension"
        )

        repeat_offender = True

    elif offense_count >= 5:

        risk_level = "High"

        recommended_action = (
            "Suspend Account"
        )

        repeat_offender = True

    elif offense_count >= 3:

        risk_level = "Medium"

        recommended_action = (
            "Issue Final Warning"
        )

        repeat_offender = True

    else:

        risk_level = "Low"

        recommended_action = "Monitor"

        repeat_offender = False

    return {

        "username": username,

        "offense_count": offense_count,

        "risk_level": risk_level,

        "recommended_action": recommended_action,

        "repeat_offender": repeat_offender
    }