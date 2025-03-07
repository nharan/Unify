#!/bin/bash

# Install dependencies
echo "Installing server dependencies..."
cd server
bun install

echo "Installing client dependencies..."
cd ../client
bun install

# Build client for production
echo "Building client for production..."
bun run build

# Start the server in the background
echo "Starting server on port 5000..."
cd ../server
bun run index.ts --port 5000 &

# Serve the client build using a simple HTTP server
echo "Serving client on port 5173..."
cd ../client
bun install -g serve
serve -s dist -l 5173 