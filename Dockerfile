# Use Nginx as the base image
FROM nginx:alpine

# Copy the content folder into the Nginx server
COPY content /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
COPY nginx.conf /etc/nginx/nginx.conf
