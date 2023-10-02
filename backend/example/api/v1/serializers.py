from rest_framework import serializers
from example.models import Example,Example

class ExampleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Example
        fields = "__all__"