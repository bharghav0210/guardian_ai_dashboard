from fastapi import APIRouter
from fastapi import Form

from app.ai.multimodal_scan import (
    analyze_media
)

router = APIRouter()


# =====================================================
# MULTIMODAL MEDIA SCAN
# =====================================================

@router.post("/scan-media")
def scan_media(

    media_name: str = Form(...),

    media_description: str = Form(...)

):

    result = analyze_media(

        media_name=media_name,

        media_description=media_description
    )

    return {

        "message": "Media scan completed",

        "analysis": result
    }

