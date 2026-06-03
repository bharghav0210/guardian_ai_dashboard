from fastapi import Depends
from fastapi import HTTPException

from app.auth import get_current_user


# =====================================================
# ROLE VALIDATION MIDDLEWARE
# =====================================================

def require_role(allowed_roles: list):

    def role_checker(

        current_user = Depends(
            get_current_user
        )
    ):

        # =============================================
        # CHECK ROLE
        # =============================================

        if current_user.role not in allowed_roles:

            raise HTTPException(

                status_code=403,

                detail=(
                    "Access denied: "
                    "Insufficient permissions"
                )
            )

        return current_user

    return role_checker

