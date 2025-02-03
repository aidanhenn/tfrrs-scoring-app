# Use Node.js 20.5.1 base image
FROM node:20.5.1

# Set working directory
WORKDIR /app

# Ensure Puppeteer cache is cleaned before installation
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
    libxss1 libxshmfence1 libdrm2 libgbm1 curl unzip

# Install Google Chrome manually
RUN apt-get update && apt-get install -y wget gnupg && \
    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && apt-get install -y google-chrome-stable


# Install Puppeteer globally and Chrome
RUN npm install -g puppeteer
RUN npx puppeteer browsers install chrome

# Copy the rest of your files
COPY . .

# Expose app port
EXPOSE 3000

# Ensure the cache is cleaned before running
ENTRYPOINT ["/bin/sh", "-c", "rm -rf /tmp/puppeteer_cache /tmp/puppeteer_cache_* && npm start"]
