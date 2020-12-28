from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import *
from .serializer import PoemSerializer, Watermelon
from django.core.files.base import ContentFile
import base64
import uuid
from utils.W_predict import get_score
import  random
def get_random(image):
    return random.randint(50,100)

class WaterApiView(APIView):
    def post(self, request):
        print('收到')
        data = request.data
        picture = data.get('img', None)
        if not picture:
            return Response(status=HTTP_400_BAD_REQUEST)
        format, imgstr = picture.split(';base64,')
        ext = format.split('/')[-1]
        picture = ContentFile(base64.b64decode(imgstr), name=f'{str(uuid.uuid4())}.' + ext)

        model_data = {
            'score': 0,
            'img': picture
        }
        serializer = Watermelon(data=model_data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

        serializer.save()
        score = get_score(picture.name)
        # score= get_random(picture.name)
        serializer.score=score
        print(score)
        if not serializer.is_valid():
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
        serializer.save()
        data= serializer.data.copy()
        data['score'] = score

        return Response(data, status=200)


def index(requests):
    return render(requests, template_name='index.html')
