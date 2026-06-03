
from fastapi import FastAPI

from app.database import Base, engine

from app.models.case import Case

from app.models.evidence import Evidence

from fastapi.middleware.cors import CORSMiddleware
# =====================================================
# ROUTE IMPORTS
# =====================================================

from app.routes.auth_routes import router as auth_router

from app.routes.policy_routes import router as policy_router

from app.routes.alert_routes import router as alert_router

from app.routes.dashboard_routes import (
    router as dashboard_router
)

from app.routes.export_routes import router as export_router

from app.routes.workflow_routes import (
    router as workflow_router
)

from app.routes.integration_routes import (
    router as integration_router
)

from app.routes.enforcement_routes import (
    router as enforcement_router
)

from app.routes.analytics_routes import (
    router as analytics_router
)

from app.routes.notification_routes import (
    router as notification_router
)

from app.routes.device_routes import (
    router as device_router
)

from app.routes.offender_routes import (
    router as offender_router
)

from app.routes.multimodal_routes import (
    router as multimodal_router
)

from app.routes.report_routes import (
    router as report_router
)

from app.routes.emergency_routes import (
    router as emergency_router
)

from app.routes.model_analytics_routes import (
    router as model_analytics_router
)

from app.routes.admin_routes import (
    router as admin_router
)

from app.routes.case_routes import (
    router as case_router
)

from app.routes.evidence_routes import (
    router as evidence_router
)

# =====================================================
# IMPORT MODELS
# =====================================================

from app.models.user import User
from app.models.policy import Policy
from app.models.alert import Alert
from app.models.audit import AuditLog
from app.models.device import Device


# =====================================================
# CREATE DATABASE TABLES
# =====================================================

Base.metadata.create_all(bind=engine)


# =====================================================
# FASTAPI APP
# =====================================================

app = FastAPI(

    title="Guardian AI Backend",

    version="2.0.0",

    description=(
        "AI-Powered Safety Enforcement "
        "& Risk Monitoring Platform"
    )
)


# ==========================================
# CORS MIDDLEWARE
# ==========================================

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:3000"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]
)



# =====================================================
# INCLUDE ROUTERS
# =====================================================

app.include_router(auth_router)

app.include_router(policy_router)

app.include_router(alert_router)

app.include_router(dashboard_router)

app.include_router(export_router)

app.include_router(workflow_router)

app.include_router(integration_router)

app.include_router(enforcement_router)

app.include_router(analytics_router)

app.include_router(notification_router)

app.include_router(device_router)

app.include_router(offender_router)

app.include_router(multimodal_router)

app.include_router(report_router)

app.include_router(emergency_router)

app.include_router(model_analytics_router)

app.include_router(admin_router)

app.include_router(case_router)

app.include_router(evidence_router)
# =====================================================
# ROOT ROUTE
# =====================================================

@app.get("/")
def home():

    return {

        "message":
        "Guardian AI Backend Running Successfully",

        "version": "2.0.0",

        "status": "active"
    }


# =====================================================
# HEALTH CHECK
# =====================================================

@app.get("/health")
def health_check():

    return {

        "server": "running",

        "database": "connected",

        "api_status": "healthy"
    }

