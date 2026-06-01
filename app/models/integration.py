from sqlalchemy import Column, Integer, String
from app.database import Base


class Integration(Base):

    __tablename__ = "integrations"

    id = Column(Integer, primary_key=True, index=True)

    platform_name = Column(String)

    integration_status = Column(String)

    account_email = Column(String)