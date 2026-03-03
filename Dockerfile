# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the build output to the subpath directory
COPY --from=build /app/dist /usr/share/nginx/html/self_care_bingo

# Copy the custom nginx configuration
COPY vite-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
