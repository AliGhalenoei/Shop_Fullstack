from celery import Celery
from datetime import timedelta
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE' , 'Backend.settings')

app = Celery('Backend' , broker = 'amqp://guest:guest@localhost:5672')

app.config_from_object('Backend.celery_conf')

app.autodiscover_tasks()

app.conf.broker_url = 'amqp://'
app.conf.result_backend = 'rpc://'
app.conf.task_serilizer = 'json'
app.conf.result_serializer = 'pickle'
app.conf.accept_content =['json' ,'pickle']
app.conf.result_expires = timedelta(days=1)
app.conf.task_always_eager = False
app.conf.worker_prefetch_multiplier = 1





