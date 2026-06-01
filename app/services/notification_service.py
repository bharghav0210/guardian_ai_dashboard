from datetime import datetime


def generate_notification(

    username: str,

    threat_level: str,

    action_taken: str

):

    notification = {

        "username": username,

        "threat_level": threat_level,

        "action_taken": action_taken,

        "message": f"""

Guardian AI Alert:

Threat Level: {threat_level}

Action Taken: {action_taken}

Please review your security dashboard.

        """,

        "timestamp": datetime.utcnow()
    }

    return notification