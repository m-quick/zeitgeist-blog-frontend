from fastapi import FastAPI
import json
from typing import Dict, List

app = FastAPI()

data = json.load(open("./data/posts.json", "r"))


@app.get("/")
def get_posts() -> Dict[str, List]:
    return {"posts": data}
