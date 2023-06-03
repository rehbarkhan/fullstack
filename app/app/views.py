from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView,ListAPIView
from .serializers import StateSer,CountrySer
from .models import State as S, Country as C
from rest_framework.response import Response
from rest_framework.views import APIView

class State(APIView):
    def get(self,request,pk):
        s = S.objects.filter(country__id=pk)
        ser = StateSer(s,many=True)
        return Response(ser.data)
    

class Country(ListAPIView):
    serializer_class = CountrySer
    queryset = C.objects.all()

