# --- Build Stage ---
FROM node:14 as build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build-css

# --- Final Stage ---
FROM python:3.10

ARG SECRET_KEY
ARG DATABASE_NAME
ARG DATABASE_USER
ARG DATABASE_PASSWORD
ARG DATABASE_HOST
ARG DATABASE_PORT
ARG ALLOWED_HOSTS
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV SECRET_KEY=${SECRET_KEY}
ENV DATABASE_NAME=${DATABASE_NAME}
ENV DATABASE_USER=${DATABASE_USER}
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD}
ENV DATABASE_HOST=${DATABASE_HOST}
ENV DATABASE_PORT=${DATABASE_PORT}
ENV ALLOWED_HOSTS=${ALLOWED_HOSTS}

WORKDIR /app

COPY . .

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

RUN python manage.py collectstatic --noinput

EXPOSE 8000

CMD ["gunicorn", "--workers=3", "--bind", "0.0.0.0:8000", "iclanding.wsgi:application"]
