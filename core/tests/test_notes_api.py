import json
import os
from unittest.mock import patch

from django.contrib.auth.models import User
from django.test import Client, TestCase
from django.urls import reverse

MOCK_RESPONSES_DIR = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "mock_responses"
)


class NotesAPITest(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username="testuser", password="12345")

    @patch("requests.get")
    def test_success(self, mock_get):
        with open(
            os.path.join(MOCK_RESPONSES_DIR, "get_reading_list_database_query.json")
        ) as f:
            mock_response = json.load(f)
        mock_get.return_value.status_code = 200
        mock_get.return_value.json.return_value = mock_response

        self.client.login(username="testuser", password="12345")

        response = self.client.get(reverse("notes"))

        response_data = response.json()

        self.assertEqual(len(response_data), 18)

        for item in response_data:
            self.assertIsNotNone(item.get("url"))
            self.assertIsNotNone(item.get("name"))

    def tearDown(self):
        self.user.delete()
