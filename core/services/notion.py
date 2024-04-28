import requests
from django.conf import settings


class NotionClient:
    def __init__(self):
        self.token = settings.NOTION_SECRET
        self.base_url = "http://api.notion.com/v1"
        self.headers = {
            "Authorization": f"Bearer {self.token}",
            "Notion-Version": "2022-06-28",
        }

    def get_reading_list_database_pages(self):
        url = f"{self.base_url}/databases/{settings.NOTION_READING_LIST_DB_ID}/query"
        response = requests.get(url, headers=self.headers)
        pages = response.json()["results"]
        res = []
        for page in pages:
            page_title_list = page["properties"]["Name"]["title"]
            res.append(
                {
                    "name": (
                        page_title_list[0]["plain_text"]
                        if page_title_list
                        else "Undefined"
                    ),
                    "url": page["url"],
                }
            )
        return res
