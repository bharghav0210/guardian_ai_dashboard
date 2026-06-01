PHISHING_KEYWORDS = [
    "otp",
    "bank",
    "urgent",
    "click here",
    "verify account"
]


def detect_phishing(message: str):

    message = message.lower()

    for word in PHISHING_KEYWORDS:

        if word in message:

            return {
                "phishing_detected": True,
                "keyword": word
            }

    return {
        "phishing_detected": False
    }