# Use the official Node.js image with version 18, specifically the lightweight "alpine" version.
# This image is ideal for reducing the size of the container.
FROM node:18-alpine

# Set the working directory inside the container to /app.
# All subsequent commands will execute in this directory.
WORKDIR /app

# Copy the dependency files (package.json and package-lock.json) from the local machine
# to the current working directory (/app) inside the container.
# Using "package*.json" ensures both package.json and package-lock.json are included.
COPY package.json package-lock.json /app/

# Install the dependencies specified in package.json using npm.
# This will create a "node_modules" directory inside the container's /app directory.
RUN npm install

# Copy all files and directories from the local project to the /app directory in the container.
# This includes source code, configuration files, and any other required resources.
COPY . .

# Expose the development server port (React uses 3000 by default).
EXPOSE 3000

# Start the development server.
CMD ["npm", "start"]