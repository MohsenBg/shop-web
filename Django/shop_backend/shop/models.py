from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.


class Shop(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField()
    description = models.CharField(max_length=800)
    size = ArrayField(
        models.CharField(
            max_length=200
        )
    )
    image = models.URLField()
    price = models.FloatField()
    star = models.FloatField()

    class Meta:
        ordering = ['name', ]

    def __str__(self):
        if self is None:
            return f'None'
        else:
            return self.name
