from fastapi import APIRouter

router = APIRouter()


@router.get("/integrations")
def get_integrations():

    return {
        "platforms": [
            "Instagram",
            "WhatsApp",
            "Telegram",
            "Discord"
        ]
    }