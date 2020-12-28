from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Poem, Watermelon
from random import choice


class PoemSerializer(ModelSerializer):
    class Meta:
        model = Poem
        fields = '__all__'


class Watermelon(ModelSerializer):
    poem = SerializerMethodField()

    class Meta:
        model = Watermelon
        fields = '__all__'


    @staticmethod
    def get_poem(obj):
        poem = choice(Poem.objects.all())
        return poem.text
