from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from datetime import date
from typing import Dict, List
from constants import ORIGINS, DATA_PATH, Post


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = json.load(open(DATA_PATH, "r"))


@app.get("/")
def get_posts() -> Dict[str, List]:
    return {"posts": data}


@app.post("/create_post")
def new_post(post: Post) -> bool:
    post_id = len(data) + 1
    data.append(
        {
            "id": post_id,
            "title": post.title,
            "pubDate": str(date.today()),
            "content": post.content,
        }
    )
    with open(DATA_PATH, "w") as f:
        json.dump(data, f)
    return True
