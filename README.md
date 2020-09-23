# djangoSHOP
Basic shop

## Installation

```bash
pip install -r required.txt
sudo apt-get install rabbitmq
rabbitmq-server
```

Open new terminal 

```bash
celery -A djangoSHOP worker -l info
Open old terminal
celery -A djangoSHOP flower
http://localhost:5555/
```
