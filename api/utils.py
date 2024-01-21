import pandas as pd
from typing import List, Dict


def sort_posts(posts: List[Dict[str, str]]) -> List[Dict[str, str]]:
    posts_df = pd.DataFrame(posts)
    posts_df["pubDate"] = pd.to_datetime(posts_df["pubDate"]).dt.strftime("%d %B %Y")
    posts_df_sorted = posts_df.sort_values("pubDate", ascending=False)
    posts_df_sorted["pubDate"] = posts_df_sorted["pubDate"].astype(str)
    posts_sorted = posts_df_sorted.to_dict("records")
    return posts_sorted
