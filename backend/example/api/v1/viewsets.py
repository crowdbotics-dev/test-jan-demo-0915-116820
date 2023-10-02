from rest_framework import authentication
from example.models import Example,Example,Example
from .serializers import ExampleSerializer,ExampleSerializer,ExampleSerializer
from rest_framework import viewsets

class ExampleViewSet(viewsets.ModelViewSet):
    serializer_class = ExampleSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Example.objects.all()