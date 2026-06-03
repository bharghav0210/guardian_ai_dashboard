
from fastapi import APIRouter

router = APIRouter()


# =====================================================
# INVESTIGATIONS
# =====================================================

@router.get("/investigations")
def get_investigations():

    return {

        "investigations": [

            {
                "id": 1,

                "threat":
                "Phishing Attack",

                "analyst":
                "Alex Morgan",

                "status":
                "Investigating"
            },

            {
                "id": 2,

                "threat":
                "Malware Distribution",

                "analyst":
                "Sarah Lee",

                "status":
                "Open"
            },

            {
                "id": 3,

                "threat":
                "Credential Leak",

                "analyst":
                "Guardian AI",

                "status":
                "Resolved"
            }
        ]
    }

