from django.contrib.auth.models import User
from django.test import Client, TestCase
from django.urls import reverse


class NotesAPITest(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username="testuser", password="12345")

    def test_success(self):
        self.client.login(username="testuser", password="12345")

        response = self.client.get(reverse("notes"))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"notes": "notes"})

    def tearDown(self):
        self.user.delete()
