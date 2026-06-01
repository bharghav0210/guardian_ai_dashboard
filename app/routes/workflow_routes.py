from fastapi import APIRouter
from fastapi import Form

from app.services.workflow_service import execute_workflow

router = APIRouter()


# =========================================
# EXECUTE AI WORKFLOW
# =========================================

@router.post("/execute-workflow")
def run_workflow(

    content: str = Form(...),

    workflow_type: str = Form(...),

    automation_level: str = Form(...)

):

    result = execute_workflow(

        content=content,

        workflow_type=workflow_type,

        automation_level=automation_level
    )

    return {

        "message": "Workflow executed successfully",

        "result": result
    }