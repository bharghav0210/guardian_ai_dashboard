TOXIC_WORDS = [
    "hate",
    "kill",
    "stupid",
    "idiot",
    "fraud"
]


def detect_harassment(text: str):

    text = text.lower()

    for word in TOXIC_WORDS:

        if word in text:

            return {
                "risk": "High",
                "flagged": True,
                "matched_word": word
            }

    return {
        "risk": "Low",
        "flagged": False
    }