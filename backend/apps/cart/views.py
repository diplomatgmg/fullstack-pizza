from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import Cart, CartItem
from .serializers import CartSerializer
from ..pizza.models import Pizza


class CartDetailAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)

    @staticmethod
    def get_cart(user):
        return Cart.objects.get_or_create(user=user)[0]

    @staticmethod
    def get_pizza(pizza_id):
        try:
            return Pizza.objects.get(pk=pizza_id)
        except Pizza.DoesNotExist:
            return None

    @staticmethod
    def update_cart_item_quantity(cart, pizza):
        try:
            cart_item = CartItem.objects.get(cart=cart, pizza=pizza)
            cart_item.quantity += 1
            cart_item.save()
        except CartItem.DoesNotExist:
            CartItem.objects.create(cart=cart, pizza=pizza)

    @staticmethod
    def decrease_cart_item_quantity(cart, pizza):
        try:
            cart_item = CartItem.objects.get(cart=cart, pizza=pizza)
            if cart_item.quantity > 1:
                cart_item.quantity -= 1
                cart_item.save()
            else:
                cart_item.delete()
        except CartItem.DoesNotExist:
            pass

    def get(self, request):
        cart = self.get_cart(request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)

    def post(self, request):
        pizza_id = request.data.get("pizza")
        pizza = self.get_pizza(pizza_id)

        if not pizza:
            return Response(
                {"error": "Pizza not found"}, status=status.HTTP_404_NOT_FOUND
            )

        cart = self.get_cart(request.user)
        self.update_cart_item_quantity(cart, pizza)

        serializer = CartSerializer(cart)
        return Response(serializer.data)

    def delete(self, request):
        pizza_id_or_all = request.data.get("pizza", "all")
        cart = self.get_cart(request.user)
        serializer = CartSerializer(cart)

        if pizza_id_or_all == "all":
            CartItem.objects.filter(cart=cart).delete()
            return Response(serializer.data)

        pizza = self.get_pizza(pizza_id_or_all)
        cart = self.get_cart(request.user)

        try:
            cart_item = CartItem.objects.get(cart=cart, pizza=pizza)
            cart_item.delete()
        except CartItem.DoesNotExist:
            pass

        serializer = CartSerializer(cart)
        return Response(serializer.data)

    def patch(self, request):
        pizza_id = request.data.get("pizza")
        pizza = self.get_pizza(pizza_id)
        cart = self.get_cart(request.user)

        self.decrease_cart_item_quantity(cart, pizza)

        serializer = CartSerializer(cart)
        return Response(serializer.data)
