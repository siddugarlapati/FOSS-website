# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --production

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 4173

# Start the app
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
