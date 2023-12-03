# Use the official Nginx image as the base image
FROM nginx:latest

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the HTML, CSS, and JS files to the container
COPY index.html .
COPY style.css .
COPY script.js .

# Expose port 80 for the Nginx web server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
