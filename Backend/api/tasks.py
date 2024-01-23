from celery import shared_task
from django.core.mail import send_mail

@shared_task
def send_email_task(email , phone , subject , message):
    messages = 'email : {0} \n phone : {1} \n subject : {2} \n message : {3} \n'.format(
        email,
        phone,
        subject,
        message
    )
    send_mail(
        subject,
        messages,
        'testpass935@gmail.com',
        ['testpass935@gmail.com'],
        fail_silently=False
    )
    return True
