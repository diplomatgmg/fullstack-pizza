from django.urls import path

from .views import ProductListAPIView

urlpatterns = [
    path("products/", ProductListAPIView.as_view()),
]
