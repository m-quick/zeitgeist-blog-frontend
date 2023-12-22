from pydantic import BaseModel


class Post(BaseModel):
    title: str
    content: str


ORIGINS = ["http://localhost:3000"]

DATA_PATH = "./data/posts.json"
