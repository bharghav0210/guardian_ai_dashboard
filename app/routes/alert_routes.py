from fastapi import APIRouter, Form
from app.database import SessionLocal
from app.models.alert import Alert

router = APIRouter()


@router.post("/create-alert")
def create_alert(
    title: str = Form(...),
    severity: str = Form(...)
):

    db = SessionLocal()

    alert = Alert(
        title=title,
        severity=severity
    )

    db.add(alert)
    db.commit()
    db.close()

    return {
        "message": "Alert created"
    }


@router.get("/alerts")
def get_alerts():

    db = SessionLocal()

    alerts = db.query(Alert).all()

    db.close()

    return alerts