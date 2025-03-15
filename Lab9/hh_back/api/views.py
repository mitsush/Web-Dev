from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Company, Vacancy
from .ser import CompanySerializer, VacancySerializer

# API Root
@api_view(['GET'])
def api_root(request):
    return Response({
        "companies": "/api/companies/",
        "vacancies": "/api/vacancies/",
        "top_ten_vacancies": "/api/vacancies/top_ten/"
    })

# Company Views
class CompanyListView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyVacanciesView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)

# Vacancy Views
class VacancyListView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

@api_view(['GET'])
def top_ten_vacancies(request):
    top_vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(top_vacancies, many=True)
    return Response(serializer.data)