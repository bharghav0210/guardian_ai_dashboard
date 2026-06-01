from fastapi import APIRouter

from app.services.model_analytics_service import (
    generate_model_analytics
)

router = APIRouter()


# =====================================================
# AI MODEL ANALYTICS
# =====================================================

@router.get("/model-analytics")
def model_analytics():

    analytics = generate_model_analytics()

    return {

        "message":
        "AI model analytics generated",

        "analytics": analytics
    }