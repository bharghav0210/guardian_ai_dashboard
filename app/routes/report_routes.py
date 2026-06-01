from fastapi import APIRouter

from app.services.report_service import (
    generate_weekly_report
)

router = APIRouter()


# =====================================================
# WEEKLY SAFETY REPORT
# =====================================================

@router.get("/weekly-report")
def weekly_report():

    report = generate_weekly_report()

    return {

        "message": "Weekly safety report generated",

        "report": report
    }

