# =====================================================
# MULTIMODAL AI SAFETY ENGINE
# =====================================================

def analyze_media(

    media_name: str,

    media_description: str

):

    description = media_description.lower()

    risk_score = 5

    content_status = "Safe"

    recommended_action = "Allow Content"

    detected_labels = []

    # =================================================
    # VIOLENCE DETECTION
    # =================================================

    violence_keywords = [

        "violence",
        "blood",
        "weapon",
        "attack",
        "gun",
        "murder",
        "threat"
    ]

    for keyword in violence_keywords:

        if keyword in description:

            risk_score += 25

            detected_labels.append(
                "Violence"
            )

            break

    # =================================================
    # ADULT CONTENT DETECTION
    # =================================================

    adult_keywords = [

        "adult",
        "explicit",
        "nudity",
        "unsafe",
        "nsfw"
    ]

    for keyword in adult_keywords:

        if keyword in description:

            risk_score += 25

            detected_labels.append(
                "Adult Content"
            )

            break

    # =================================================
    # SCAM DETECTION
    # =================================================

    scam_keywords = [

        "scam",
        "phishing",
        "fake otp",
        "fraud",
        "bitcoin scam"
    ]

    for keyword in scam_keywords:

        if keyword in description:

            risk_score += 30

            detected_labels.append(
                "Scam Content"
            )

            break

    # =================================================
    # FINAL CLASSIFICATION
    # =================================================

    if risk_score >= 80:

        content_status = "Unsafe"

        recommended_action = (
            "Block Content"
        )

    elif risk_score >= 50:

        content_status = "Suspicious"

        recommended_action = (
            "Flag for Review"
        )

    else:

        content_status = "Safe"

        recommended_action = (
            "Allow Content"
        )

    # =================================================
    # EMPTY LABEL FALLBACK
    # =================================================

    if not detected_labels:

        detected_labels.append(
            "Safe Content"
        )

    return {

        "media_name": media_name,

        "risk_score": risk_score,

        "content_status": content_status,

        "detected_labels": detected_labels,

        "recommended_action": recommended_action
    }

