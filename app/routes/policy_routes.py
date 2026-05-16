from fastapi import APIRouter, Form
from app.database import SessionLocal
from app.models.policy import Policy

router = APIRouter()


# =========================================
# CREATE POLICY
# =========================================
@router.post("/create-policy")
def create_policy(
    name: str = Form(...),
    ai_model: str = Form(...),
    risk_score: str = Form(...),
    action: str = Form(...),
    automation: str = Form(...)
):

    db = SessionLocal()

    policy = Policy(
        name=name,
        ai_model=ai_model,
        risk_score=risk_score,
        action=action,
        automation=automation
    )

    db.add(policy)
    db.commit()
    db.refresh(policy)

    db.close()

    return {
        "message": "Policy created successfully",
        "policy_id": policy.id
    }


# =========================================
# GET ALL POLICIES
# =========================================
@router.get("/policies")
def get_policies():

    db = SessionLocal()

    policies = db.query(Policy).all()

    result = []

    for policy in policies:
        result.append({
            "id": policy.id,
            "name": policy.name,
            "ai_model": policy.ai_model,
            "risk_score": policy.risk_score,
            "action": policy.action,
            "automation": policy.automation
        })

    db.close()

    return result


# =========================================
# DELETE POLICY
# =========================================
@router.delete("/delete-policy/{policy_id}")
def delete_policy(policy_id: int):

    db = SessionLocal()

    policy = db.query(Policy).filter(
        Policy.id == policy_id
    ).first()

    if not policy:
        db.close()

        return {
            "message": "Policy not found"
        }

    db.delete(policy)
    db.commit()

    db.close()

    return {
        "message": "Policy deleted successfully"
    }