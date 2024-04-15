import json
import os
from typing import Any
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView

from notes_agg import settings

class HomeView(LoginRequiredMixin, TemplateView):
    template_name = "core/main.html"

    def get_context_data(self, **kwargs: Any) -> dict[str, Any]:
        context =  super().get_context_data(**kwargs)
        app_base_path = "/static/core/dist/"
        manifest_file = os.path.join(settings.BASE_DIR, "core", 'static/core/dist', '.vite', 'manifest.json')
        with open(manifest_file, "r") as f:
            manifest = json.load(f)
        context['main_css'] = app_base_path + manifest.get('index.html').get('css')[0]
        context['main_js'] = app_base_path + manifest.get('index.html').get('file')
        return context

home = HomeView.as_view()