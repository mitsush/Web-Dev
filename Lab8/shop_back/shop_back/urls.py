from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

urlpatterns = [
    path('', lambda request: HttpResponse("Hello from the homepage!")),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]