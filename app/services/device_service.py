from app.database import SessionLocal

from app.models.device import Device


# =====================================================
# DEVICE RISK ENGINE
# =====================================================

def generate_device_risk(

    device_name: str,

    app_installed: str,

    operating_system: str

):

    risk_score = 10

    reputation = "Safe"

    device_status = "Trusted"

    threat_detected = False

    app_lower = app_installed.lower()

    os_lower = operating_system.lower()

    # =================================================
    # SUSPICIOUS APP DETECTION
    # =================================================

    suspicious_apps = [

        "mod apk",
        "unknown apk",
        "dark web",
        "cracked app",
        "spyware",
        "malware"
    ]

    for app in suspicious_apps:

        if app in app_lower:

            risk_score += 50

    # =================================================
    # ROOT/JAILBREAK DETECTION
    # =================================================

    if "rooted" in os_lower:

        risk_score += 25

    if "jailbroken" in os_lower:

        risk_score += 25

    # =================================================
    # FINAL CLASSIFICATION
    # =================================================

    if risk_score >= 90:

        reputation = "Dangerous"

        device_status = "Blocked"

        threat_detected = True

    elif risk_score >= 60:

        reputation = "Suspicious"

        device_status = "Flagged"

        threat_detected = True

    else:

        reputation = "Safe"

        device_status = "Trusted"

        threat_detected = False

    return {

        "device_name": device_name,

        "risk_score": risk_score,

        "reputation": reputation,

        "device_status": device_status,

        "threat_detected": threat_detected
    }


# =====================================================
# SAVE DEVICE SCAN
# =====================================================

def save_device_scan(

    device_name: str,

    device_type: str,

    operating_system: str,

    app_installed: str,

    linked_account: str

):

    result = generate_device_risk(

        device_name,

        app_installed,

        operating_system
    )

    db = SessionLocal()

    device = Device(

        device_name=device_name,

        device_type=device_type,

        operating_system=operating_system,

        app_installed=app_installed,

        reputation=result["reputation"],

        risk_score=result["risk_score"],

        device_status=result["device_status"],

        threat_detected=result["threat_detected"],

        linked_account=linked_account
    )

    db.add(device)

    db.commit()

    db.refresh(device)

    db.close()

    return {

        "message": "Device scanned successfully",

        "scan_result": result
    }