from django.urls import path
from django.conf.urls import include

from . import views

app_name = 'honoradar'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('senddata/', views.senddata, name='senddata'),
    path('getdata/', views.getdata, name='getdata'),
]


#Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='/honoradar/', permanent=True)),
]
