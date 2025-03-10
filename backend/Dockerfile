# Use a Maven image with OpenJDK 17 for both building and running the application
FROM maven:3.8.1-openjdk-17

# Set the working directory inside the container
WORKDIR /app

# Copy the entire project (pom.xml, src/, etc.) into the container
COPY . .

# Install dependencies and run the application
# Skip tests for faster builds in development
CMD ["mvn", "spring-boot:run", "-Dspring-boot.run.profiles=dev"]
