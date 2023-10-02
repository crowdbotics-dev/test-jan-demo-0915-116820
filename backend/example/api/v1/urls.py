
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ExampleViewSet,ExampleViewSet,ExampleViewSet,ExampleViewSet
router = DefaultRouter()
router.register('example', ExampleViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
