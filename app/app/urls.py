from django.urls import path
from .views import State,Country

urlpatterns = [
    path('state/<int:pk>/',State.as_view()),
    path('country/',Country.as_view())
]
