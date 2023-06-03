FROM python:3.9-alpine
LABEL maintainer="md.rehbar@outlook.com"

COPY ./app /app
COPY ./requirements.txt /requirements.txt
COPY ./scripts /scripts

RUN pip install --upgrade pip && \
    pip install --root-user-action=ignore -r /requirements.txt && \
    apk add --no-cache nodejs npm && \
    adduser -D app && \
    chown -R app:app /app && \
    chmod -R +x /app && \
    chown -R app:app /scripts && \
    chmod -R +x /scripts

WORKDIR /app
USER app