from django.contrib.auth.models import User
from django.test import Client, TestCase


class HomeViewTest(TestCase):
    def setUp(self):
        # Create a test client
        self.client = Client()

        # Create a test user
        self.test_user = User.objects.create_user(
            username="testuser", password="testpassword"
        )

    def test_home_view(self):
        # Log in the test user
        self.client.login(username="testuser", password="testpassword")

        # Send a GET request to the home view
        response = self.client.get("/")

        # Check that the response status code is 200
        self.assertEqual(response.status_code, 200)

        # Check that the home.html template was used
        self.assertTemplateUsed(response, "core/main.html")
