
from fastapi import APIRouter

router = APIRouter()


# =====================================================
# MODEL ANALYTICS
# =====================================================

@router.get("/model-analytics")
def get_model_analytics():

    return {

        "analytics": [

            {
                "name": "Mon",
                "threats": 24
            },

            {
                "name": "Tue",
                "threats": 31
            },

            {
                "name": "Wed",
                "threats": 18
            },

            {
                "name": "Thu",
                "threats": 42
            },

            {
                "name": "Fri",
                "threats": 37
            },

            {
                "name": "Sat",
                "threats": 29
            },

            {
                "name": "Sun",
                "threats": 51
            }
        ]
    }

