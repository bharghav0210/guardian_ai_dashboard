from fastapi import APIRouter

router = APIRouter()


# =====================================================
# WORKFLOWS
# =====================================================

@router.get("/workflows")
def get_workflows():

    return {

        "workflows": [

            {
                "name":
                "Threat Detection Pipeline",

                "progress":
                "82%",

                "status":
                "Running"
            },

            {
                "name":
                "AI Risk Assessment",

                "progress":
                "100%",

                "status":
                "Completed"
            },

            {
                "name":
                "Behavioral Analysis Engine",

                "progress":
                "57%",

                "status":
                "Active"
            }
        ]
    }

