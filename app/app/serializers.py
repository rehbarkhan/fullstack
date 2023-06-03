from rest_framework import serializers
from .models import State,Country


class CountrySer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class StateSer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = '__all__'