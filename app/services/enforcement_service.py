def enforce_action(risk_score: int):

    if risk_score >= 90:

        return "Blocked Immediately"

    elif risk_score >= 70:

        return "Flagged & User Notified"

    elif risk_score >= 40:

        return "Monitor Activity"

    return "Safe"