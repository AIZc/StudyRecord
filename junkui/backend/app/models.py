from django.db import models


# Create your models here.
class Poem(models.Model):
    text = models.CharField(max_length=50)

class Watermelon(models.Model):
    score = models.IntegerField(default=0)
    img = models.ImageField(
        max_length=254,
        blank=True,
    )
