from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from typing import Dict, List

app = FastAPI()

origins = ["http://localhost:3000"]  # Update with your React app's URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = json.load(open("./data/posts.json", "r"))


@app.get("/")
def get_posts() -> Dict[str, List]:
    return {"posts": data}
