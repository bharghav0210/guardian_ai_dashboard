
from fastapi import APIRouter

router = APIRouter()


# =====================================================
# DASHBOARD OVERVIEW
# =====================================================

@router.get("/dashboard/overview")
def get_dashboard_overview():

    return {

        "total_threats": 148,

        "critical_alerts": 17,

        "active_workflows": 72,

        "system_health": "99%"
    }

