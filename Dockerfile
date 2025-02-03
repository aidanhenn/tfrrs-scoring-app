# Use Node.js 20.5.1 base image
FROM node:20.5.1

# Set working directory
WORKDIR /app

# Ensure Puppeteer cache is cleaned
RUN rm -rf /tmp/puppeteer_cache /tmp/puppeteer_cache_*

# Clean npm cache
RUN npm cache clean --force

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Install required dependencies for Puppeteer
RUN apt-get update && apt-get install -y \
    libxfixes3 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 \
    libxi6 libxtst6 libxrandr2 libasound2 libatk1.0-0 libcups2 \
    libdbus-1-3 libgdk-pixbuf2.0-0 libgtk-3-0 libnspr4 libnss3 \
    libxss1 libxshmfence1 libdrm2 libgbm1

# Install Puppeteer globally
RUN npm install -g puppeteer

# Copy the rest of your files
COPY . .

# Ensure Puppeteer installs Chrome
RUN npx puppeteer browsers install chrome

# Expose app port
EXPOSE 3000

# Ensure the cache is cleaned before running
ENTRYPOINT ["/bin/sh", "-c", "rm -rf /tmp/puppeteer_cache /tmp/puppeteer_cache_* && npm start"]
