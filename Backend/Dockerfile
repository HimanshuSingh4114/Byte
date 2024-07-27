# Use the official Node.js 16 image as the base image
FROM node:16

# Create and change to the app directory
WORKDIR /backend/

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 8000

# Run the backend service on container startup
CMD ["npm", "start"]
