from app.ai.risk_engine import generate_risk_score

from app.services.enforcement_service import enforce_action

from app.services.audit_service import create_audit_log


# =====================================================
# MAIN WORKFLOW EXECUTION ENGINE
# =====================================================

def execute_workflow(

    content: str,

    workflow_type: str,

    automation_level: str

):

    # =================================================
    # GENERATE AI RISK SCORE
    # =================================================

    risk_score = generate_risk_score(content)

    # =================================================
    # DETERMINE ENFORCEMENT ACTION
    # =================================================

    enforcement_action = enforce_action(risk_score)

    # =================================================
    # DETERMINE SEVERITY
    # =================================================

    if risk_score >= 90:

        severity = "Critical"

    elif risk_score >= 70:

        severity = "High"

    elif risk_score >= 40:

        severity = "Medium"

    else:

        severity = "Low"

    # =================================================
    # GENERATE AI EXPLANATION
    # =================================================

    explanation = generate_ai_explanation(

        content,

        risk_score
    )

    # =================================================
    # AUTOMATION EXECUTION LOGIC
    # =================================================

    if automation_level == "Manual":

        execution_status = (
            "Awaiting Human Review"
        )

    elif automation_level == "Semi-Automated":

        execution_status = (
            "AI Recommended Action Generated"
        )

    else:

        execution_status = (
            "Enforcement Executed Automatically"
        )

    # =================================================
    # STORE AUDIT LOG
    # =================================================

    create_audit_log(

        event_type=workflow_type,

        severity=severity,

        risk_score=risk_score,

        action_taken=enforcement_action,

        ai_explanation=", ".join(explanation),

        workflow_type=workflow_type
    )

    # =================================================
    # FINAL RESPONSE
    # =================================================

    return {

        "workflow_type": workflow_type,

        "risk_score": risk_score,

        "severity": severity,

        "enforcement_action": enforcement_action,

        "automation_level": automation_level,

        "execution_status": execution_status,

        "ai_explanation": explanation
    }


# =====================================================
# AI EXPLANATION ENGINE
# =====================================================

def generate_ai_explanation(

    content: str,

    risk_score: int

):

    content = content.lower()

    explanations = []

    # =================================================
    # HARASSMENT DETECTION
    # =================================================

    if "harassment" in content:

        explanations.append(
            "Harassment indicators detected"
        )

    # =================================================
    # SCAM DETECTION
    # =================================================

    if "scam" in content:

        explanations.append(
            "Potential scam patterns identified"
        )

    # =================================================
    # PHISHING DETECTION
    # =================================================

    if "phishing" in content:

        explanations.append(
            "Phishing-related behavior detected"
        )

    # =================================================
    # THREAT DETECTION
    # =================================================

    if "threat" in content:

        explanations.append(
            "Threat language detected"
        )

    # =================================================
    # CRITICAL RISK
    # =================================================

    if risk_score >= 90:

        explanations.append(
            "Critical risk behavior identified"
        )

    # =================================================
    # LOW RISK FALLBACK
    # =================================================

    if not explanations:

        explanations.append(
            "Low-risk content pattern"
        )

    return explanations