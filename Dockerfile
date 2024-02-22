# Use an official Python runtime as the base image
FROM python:3.10

# Declare the args
ARG SECRET_KEY
ARG DATABASE_NAME
ARG DATABASE_USER
ARG DATABASE_PASSWORD
ARG DATABASE_HOST
ARG DATABASE_PORT
ARG ALLOWED_HOSTS

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV ALLOWED_HOSTS=${ALLOWED_HOSTS}

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Node.js dependencies and run the Tailwind build process
RUN npm install && \
    npm run build-css

# Upgrade pip and install any needed packages specified in requirements.txt with no cache to keep the image size down
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Collect static files - commenting out for local setup where static runs directly
# RUN python manage.py collectstatic --noinput

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run the application
CMD ["gunicorn", "--workers=3", "--bind", "0.0.0.0:8000", "iclanding.wsgi:application"]
