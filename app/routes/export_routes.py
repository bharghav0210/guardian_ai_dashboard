from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.audit import AuditLog

import io
import csv

router = APIRouter()


@router.get("/export-audit-logs")
def export_audit_logs():

    db = SessionLocal()

    logs = db.query(AuditLog).all()

    output = io.StringIO()

    writer = csv.writer(output)

    writer.writerow([
        "Action",
        "Username",
        "Details",
        "Timestamp"
    ])

    for log in logs:

        writer.writerow([
            log.action,
            log.username,
            log.details,
            log.timestamp
        ])

    output.seek(0)

    return StreamingResponse(

        iter([output.getvalue()]),

        media_type="text/csv",

        headers={
            "Content-Disposition":
            "attachment; filename=audit_logs.csv"
        }
    )