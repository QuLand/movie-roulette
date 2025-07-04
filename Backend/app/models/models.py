from sqlalchemy.orm import relationship
from datetime import datetime
from sqlalchemy import String, Integer, Column, DateTime, ForeignKey
from Backend.app.database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    viewed_movies = relationship("ViewHistory", back_populates="user")


class Movie(Base):
    __tablename__ = 'movies'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    poster_url = Column(String(255))
    added_at = Column(DateTime, default=datetime.utcnow)

    viewed_by = relationship("ViewHistory", back_populates="movie")


class ViewHistory(Base):
    __tablename__ = 'view_history'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    movie_id = Column(Integer, ForeignKey('movies.id'), nullable=False)
    viewed_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="viewed_movies")
    movie = relationship("Movie", back_populates="viewed_by")


