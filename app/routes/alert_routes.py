from fastapi import APIRouter

router = APIRouter()


# =====================================================
# ALERTS
# =====================================================

@router.get("/alerts")
def get_alerts():

    return {

        "alerts": [

            {
                "title":
                "Phishing Campaign Detected",

                "source":
                "Email Security Engine",

                "severity":
                "Critical",

                "time":
                "2 mins ago"
            },

            {
                "title":
                "Malware Transmission Attempt",

                "source":
                "Endpoint AI Monitor",

                "severity":
                "High",

                "time":
                "12 mins ago"
            },

            {
                "title":
                "Suspicious Login Activity",

                "source":
                "Identity Protection",

                "severity":
                "Medium",

                "time":
                "25 mins ago"
            }
        ]
    }

