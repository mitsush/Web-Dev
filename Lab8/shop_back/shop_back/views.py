from django.http import HttpResponse

def homepage(request):
    return HttpResponse("<h1>Welcome to the Shop API</h1><p>Visit <a href='/api/'>API</a> for endpoints.</p>")