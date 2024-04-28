import json
import os
from typing import Any

from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from django.views.generic import TemplateView
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from notes_agg import settings


class HomeView(LoginRequiredMixin, TemplateView):
    template_name = "core/main.html"

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)
        app_base_path = "/static/core/dist/"
        manifest_file = os.path.join(
            settings.BASE_DIR, "core", "static/core/dist", ".vite", "manifest.json"
        )
        with open(manifest_file, "r") as f:
            manifest = json.load(f)
        context["main_css"] = app_base_path + manifest.get("index.html").get("css")[0]
        context["main_js"] = app_base_path + manifest.get("index.html").get("file")
        return context


home = HomeView.as_view()


# API Views


class UserProfileAPIView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = User.objects.get(username=request.user.username)
        return Response(
            {
                "username": user.username,
            }
        )


user_profile = UserProfileAPIView.as_view()


class NotesAPIView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"notes": "notes"})


notes = NotesAPIView.as_view()
