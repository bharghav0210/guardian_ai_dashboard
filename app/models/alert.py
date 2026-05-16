from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from app.database import Base


class Alert(Base):

    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True)

    title = Column(String)

    severity = Column(String)

    source = Column(String)

    status = Column(String)

    risk_score = Column(Integer)