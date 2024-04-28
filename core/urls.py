from django.urls import path

from core import views

urlpatterns = [
    path("api/v1/profile/", views.user_profile, name="user_profile"),
    path("api/v1/notes/", views.notes, name="notes"),
    path("", views.home, name="home"),
]
