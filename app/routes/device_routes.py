
from fastapi import APIRouter
from fastapi import Form

from app.database import SessionLocal

from app.models.device import Device

from app.services.device_service import (
    save_device_scan
)

router = APIRouter()


# =====================================================
# SCAN DEVICE
# =====================================================

@router.post("/scan-device")
def scan_device(

    device_name: str = Form(...),

    device_type: str = Form(...),

    operating_system: str = Form(...),

    app_installed: str = Form(...),

    linked_account: str = Form(...)

):

    result = save_device_scan(

        device_name=device_name,

        device_type=device_type,

        operating_system=operating_system,

        app_installed=app_installed,

        linked_account=linked_account
    )

    return result


# =====================================================
# GET ALL DEVICES
# =====================================================

@router.get("/devices")
def get_devices():

    db = SessionLocal()

    devices = db.query(Device).all()

    db.close()

    return devices

