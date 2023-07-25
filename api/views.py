from django.http import JsonResponse
from rest_framework import generics
from rest_framework.renderers import JSONRenderer
from .models import Book
from .serializers import BookSerializer


def hello(request):
    return JsonResponse({'message': 'Hello from Django!'})


class BookListCreateView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    renderer_classes = [JSONRenderer]


class BookRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    renderer_classes = [JSONRenderer]
