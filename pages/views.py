from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
def index(request):

  if request.method == 'POST':

    name = request.POST['fname'] + ' ' + request.POST['lname']
    email = request.POST['mail']
    telno = request.POST['number']
    msg = request.POST['message']

    msg_body = f'Name: {name}\nEmail: {email}\nMobile No.: {telno}\n\n{msg}'
    send_mail(name, msg_body, 'rajpurohitkishan52@gmail.com', ['radhecaterersinfo@gmail.com'], fail_silently=False)
  
  return render(request, 'index.html', {})

def menu(request):
  return render(request, 'menu.html', {})

def gallery(request):
  return render(request, 'gallery.html', {})

def contact(request):
  return render(request, 'contact.html', {})