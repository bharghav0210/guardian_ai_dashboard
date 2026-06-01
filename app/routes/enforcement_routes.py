from fastapi import APIRouter

router = APIRouter()


@router.get("/enforcement-status")
def enforcement_status():

    return {
        "active_cases": 18,
        "blocked_content": 52,
        "automated_actions": 120
    }