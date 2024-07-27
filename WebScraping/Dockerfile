# Use the official Python 3.11 image as the base image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV FLASK_APP=app.py

# Create and change to the app directory
WORKDIR /WebScraping

# Copy the requirements file and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which the Flask app will run
EXPOSE 5001

# Run the Flask application
CMD ["flask", "run", "--host=0.0.0.0", "--port=5001"]
