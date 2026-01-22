# Use Java 17 (perfect for Spring Boot)
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy jar file
COPY target/usernest-0.0.1-SNAPSHOT.jar app.jar

# Expose port (Render will map it)
EXPOSE 8080

# Run Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]