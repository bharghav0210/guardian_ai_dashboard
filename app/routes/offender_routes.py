from fastapi import APIRouter
from fastapi import Form

from app.ai.offender_detector import (
    detect_repeat_offender
)

router = APIRouter()


# =====================================================
# REPEAT OFFENDER ANALYSIS
# =====================================================

@router.post("/detect-offender")
def detect_offender(

    username: str = Form(...),

    offense_count: int = Form(...)

):

    result = detect_repeat_offender(

        username=username,

        offense_count=offense_count
    )

    return {

        "message": "Offender analysis completed",

        "analysis": result
    }