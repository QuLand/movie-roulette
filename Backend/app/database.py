from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase


SQLALCHEMY_DATABASE_URL = "mysql://root:9021090210@localhost/test"

engine = create_engine(SQLALCHEMY_DATABASE_URL, pool_size=10, max_overflow=3, pool_pre_ping=True, pool_recycle=3600)

Session = sessionmaker(bind=engine)

class Base(DeclarativeBase):
    pass


def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()