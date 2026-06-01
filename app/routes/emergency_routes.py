from fastapi import APIRouter
from fastapi import Form

from app.services.emergency_service import (
    detect_emergency_threat
)

router = APIRouter()


# =====================================================
# EMERGENCY THREAT DETECTION
# =====================================================

@router.post("/emergency-scan")
def emergency_scan(

    content: str = Form(...)

):

    result = detect_emergency_threat(
        content
    )

    return {

        "message":
        "Emergency threat analysis completed",

        "analysis": result
    }