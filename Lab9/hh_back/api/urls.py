from django.urls import path
from .views import (
    CompanyListView, CompanyDetailView, CompanyVacanciesView,
    VacancyListView, VacancyDetailView, top_ten_vacancies, api_root
)

urlpatterns = [
    path('', api_root, name='api-root'),
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacanciesView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top-ten-vacancies'),
]