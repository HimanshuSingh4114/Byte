# Use the official Node.js 20 image as the base image
FROM node:20

# Create and change to the app directory
WORKDIR /FrontEND/frontend-for-chatbot

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local code to the container image
COPY . .

# Build the frontend app
RUN npm run build

# Make port 5173 available to the world outside this container
EXPOSE 5173

# Run the web service on container startup
CMD ["npm", "run", "dev"]
