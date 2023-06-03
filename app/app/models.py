from django.db import models

class Country(models.Model):
    country = models.CharField(max_length=50,unique=True,verbose_name='country name')
    def __str__(self):
        return str(self.country)

class State(models.Model):
    country = models.ForeignKey(Country,on_delete=models.CASCADE,related_name='state')
    state = models.CharField(max_length=50,unique=True,verbose_name='state name')
    def __str__(self):
        return str(self.state)
