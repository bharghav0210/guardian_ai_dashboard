from fastapi import APIRouter
from fastapi import Form

from app.database import SessionLocal

from app.models.alert import Alert

from app.ai.risk_engine import generate_risk_score

from app.services.enforcement_service import enforce_action

router = APIRouter()


# =========================================
# CREATE ALERT
# =========================================

@router.post("/create-alert")
def create_alert(

    title: str = Form(...),

    description: str = Form(...),

    source: str = Form(...)

):

    db = SessionLocal()

    # AI RISK SCORE
    risk_score = generate_risk_score(description)

    # ENFORCEMENT ACTION
    enforcement_action = enforce_action(risk_score)

    # SEVERITY LOGIC
    if risk_score >= 90:
        severity = "Critical"

    elif risk_score >= 70:
        severity = "High"

    elif risk_score >= 40:
        severity = "Medium"

    else:
        severity = "Low"

    # CREATE ALERT
    alert = Alert(

        title=title,

        description=description,

        severity=severity,

        risk_score=risk_score,

        source=source,

        enforcement_action=enforcement_action
    )

    db.add(alert)

    db.commit()

    db.refresh(alert)

    db.close()

    return {

        "message": "Alert created successfully",

        "alert": {

            "id": alert.id,

            "title": alert.title,

            "severity": alert.severity,

            "risk_score": alert.risk_score,

            "enforcement_action": alert.enforcement_action
        }
    }


# =========================================
# GET ALERTS
# =========================================

@router.get("/alerts")
def get_alerts():

    db = SessionLocal()

    alerts = db.query(Alert).all()

    db.close()

    return alerts