from django.urls import path
from django.conf.urls import include

from . import views

app_name = 'honoradar'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
    path('senddata/', views.senddata, name='senddata'),
    path('getdata/', views.getdata, name='getdata'),
]


#Add URL maps to redirect the base URL to our application
from django.views.generic import RedirectView
urlpatterns += [
    path('', RedirectView.as_view(url='/honoradar/', permanent=True)),
]
