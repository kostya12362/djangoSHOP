# djangoSHOP

pip install -r required.txt
sudo apt-get install rabbitmq
rabbitmq-server

Open new terminal 
celery -A djangoSHOP worker -l info
Open old terminal
celery -A djangoSHOP flower
