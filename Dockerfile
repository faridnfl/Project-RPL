# Gunakan image Node.js sebagai base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi untuk produksi
RUN npm run build

# Set environment variables
ENV NITRO_PRESET=node

# Jalankan aplikasi
CMD ["npm", "start"]
