from fastapi import APIRouter
from fastapi import Form

from app.database import SessionLocal

from app.models.policy import Policy

from app.ai.risk_engine import generate_risk_score

router = APIRouter()


# =====================================
# CREATE POLICY
# =====================================

@router.post("/create-policy")
def create_policy(

    policy_name: str = Form(...),

    trigger_type: str = Form(...),

    ai_model: str = Form(...),

    action_type: str = Form(...),

    automation_level: str = Form(...)

):

    db = SessionLocal()

    risk_score = generate_risk_score(trigger_type)

    policy = Policy(

        policy_name=policy_name,

        trigger_type=trigger_type,

        ai_model=ai_model,

        risk_score=risk_score,

        action_type=action_type,

        automation_level=automation_level
    )

    db.add(policy)

    db.commit()

    db.refresh(policy)

    db.close()

    return {

        "message": "Policy created successfully",

        "policy": {

            "id": policy.id,

            "policy_name": policy.policy_name,

            "risk_score": policy.risk_score,

            "automation_level": policy.automation_level
        }
    }


# =====================================
# GET ALL POLICIES
# =====================================

@router.get("/policies")
def get_policies():

    db = SessionLocal()

    policies = db.query(Policy).all()

    db.close()

    return policies


# =====================================
# DELETE POLICY
# =====================================

@router.delete("/delete-policy/{policy_id}")
def delete_policy(policy_id: int):

    db = SessionLocal()

    policy = db.query(Policy).filter(
        Policy.id == policy_id
    ).first()

    if policy:

        db.delete(policy)

        db.commit()

    db.close()

    return {
        "message": "Policy deleted successfully"
    }