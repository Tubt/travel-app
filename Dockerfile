FROM node:22.13.0-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Install serve globally for production serving
RUN npm install -g serve

# Expose port
EXPOSE 5173

# Start the app using serve
CMD ["serve", "-s", "dist", "-l", "5173"] 