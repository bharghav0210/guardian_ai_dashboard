from fastapi import APIRouter
from fastapi import Depends

from app.rbac import require_role

router = APIRouter()


# =====================================================
# ADMIN DASHBOARD
# =====================================================

@router.get("/admin/dashboard")
def admin_dashboard(

    current_user = Depends(
        require_role([
            "Admin",
            "National Command"
        ])
    )
):

    return {

        "message":
        "Welcome to Admin Command Center",

        "user": current_user.username,

        "role": current_user.role,

        "permissions": [

            "Full Platform Access",

            "Threat Intelligence",

            "System Monitoring",

            "National Operations"
        ]
    }


# =====================================================
# ENTERPRISE ANALYTICS
# =====================================================

@router.get("/enterprise/analytics")
def enterprise_analytics(

    current_user = Depends(
        require_role([
            "Analyst",
            "Supervisor",
            "Admin",
            "National Command"
        ])
    )
):

    return {

        "message":
        "Enterprise analytics access granted",

        "user": current_user.username,

        "role": current_user.role
    }


# =====================================================
# GOVERNMENT OPERATIONS
# =====================================================

@router.get("/government/operations")
def government_operations(

    current_user = Depends(
        require_role([
            "Officer",
            "Supervisor",
            "National Command"
        ])
    )
):

    return {

        "message":
        "Government operations access granted",

        "user": current_user.username,

        "role": current_user.role
    }
