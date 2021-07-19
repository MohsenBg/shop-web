from django.shortcuts import render
from .serializers import ProductSerializer
from rest_framework import viewsets
from .models import Shop
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.authentication import BasicAuthentication

# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    authentication_classes = (BasicAuthentication)
    permissions_classes = (IsAuthenticatedOrReadOnly)
    queryset = Shop.objects.all()
    serializer_class = ProductSerializer
