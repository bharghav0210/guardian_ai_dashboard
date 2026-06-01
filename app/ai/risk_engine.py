import random


def generate_risk_score(trigger_type: str):

    high_risk_keywords = [
        "harassment",
        "phishing",
        "scam",
        "unsafe",
        "threat"
    ]

    trigger = trigger_type.lower()

    for keyword in high_risk_keywords:

        if keyword in trigger:

            return random.randint(75, 95)

    return random.randint(20, 70)