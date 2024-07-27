# Use the official Python 3.9 image as the base image
FROM python:3.9

# Create and change to the app directory
WORKDIR /backendchatbot/

# Copy requirements.txt
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the local code to the container image
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Run the backend service on container startup
CMD ["python", "app.py"]
