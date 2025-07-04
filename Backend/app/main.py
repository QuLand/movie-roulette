from fastapi import FastAPI, HTTPException
from authx import AuthX, AuthXConfig
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Создание таблиц, ---ДОПИСАТЬ СОЗДАНИЕ БД!!!---
# Base.metadata.create_all(bind=engine)
# print("бд 'test'и таблицы 'user, movie, view_history'созданы")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Адрес React-приложения
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

config = AuthXConfig()
config.JWT_SECRET_KEY = "SECRET_KEY"
config.JWT_ACCESS_COOKIE_NAME = "my_access_token"
config.JWT_TOKEN_LOCATION = ["cookies"]

security = AuthX(config=config)

class UserLoginSchema(BaseModel):
    username: str
    password: str


@app.post("/login")
def login():
    return {'message': 'hello stas',
            'message2': 'stas loh'}


# @app.get("/protected")
# def protected():
#     pass