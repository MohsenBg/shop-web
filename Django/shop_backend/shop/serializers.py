from rest_framework import serializers

from .models import Shop


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shop
        field = ('id', 'name', 'slug', 'description', 'size',
                 'image', 'price', 'star',)
