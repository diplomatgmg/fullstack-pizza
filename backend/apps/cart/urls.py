from django.urls import path

from .views import CartDetailAPIView

urlpatterns = [
    path("cart/", CartDetailAPIView.as_view(), name="cart"),
]
