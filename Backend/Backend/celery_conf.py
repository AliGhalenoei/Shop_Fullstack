from celery.schedules import crontab
from kombu import Queue , Exchange


default_exchange = Exchange('default' , 'direct')
email_exchange = Exchange('email' , 'direct')

task_queues = {
    Queue('default' , exchange = default_exchange , routing_key = 'default'),
    Queue('email' , exchange = email_exchange , routing_key = 'email'),
}

task_routes = {
    'api.tasks.send_email_task':{'queue':'email'}
}

task_default_queue = 'default'
task_default_exchenge = 'default'
task_default_routing_key = 'default'