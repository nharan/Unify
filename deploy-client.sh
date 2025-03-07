#!/bin/bash

# Install dependencies
echo "Installing client dependencies..."
cd client
bun install

# Build client for production
echo "Building client for production..."
bun run build

# Serve the client build using a simple HTTP server
echo "Serving client on port 5173..."
bun install -g serve
serve -s dist -l 5173 