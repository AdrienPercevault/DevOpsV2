FROM python:3.7.3-alpine

ADD . /Documents/devops_python/Unite5

WORKDIR /Documents/devops_python/Unite5

RUN pip install -r requirements.txt

RUN mkdir /Documents/devops_python/Json

RUN chmod +x JsonCreation.py

CMD ["python", "JsonCreation.py"]

RUN ls -la /Documents/devops_python/Json