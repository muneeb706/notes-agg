from django.contrib.auth.models import User
from django.test import Client, TestCase


class UserProfileAPITest(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username="testuser", password="12345")

    def test_user_profile(self):
        self.client.login(username="testuser", password="12345")

        response = self.client.get("/api/v1/profile/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"username": "testuser"})

    def tearDown(self):
        self.user.delete()
