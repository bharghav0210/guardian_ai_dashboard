from fastapi import FastAPI

from app.database import Base
from app.database import engine

from app.routes.auth_routes import router as auth_router

from app.models.user import User

app = FastAPI(
    title="Guardian AI Backend"
)

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)


@app.get("/")
def home():

    return {
        "message": "Guardian AI Backend Running"
    }