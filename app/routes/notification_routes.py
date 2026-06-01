from fastapi import APIRouter
from fastapi import Form

from app.services.notification_service import (
    generate_notification
)

router = APIRouter()


# =====================================================
# GENERATE REAL-TIME ALERT
# =====================================================

@router.post("/send-notification")
def send_notification(

    username: str = Form(...),

    threat_level: str = Form(...),

    action_taken: str = Form(...)

):

    notification = generate_notification(

        username=username,

        threat_level=threat_level,

        action_taken=action_taken
    )

    return {

        "message": "Notification generated successfully",

        "notification": notification
    }