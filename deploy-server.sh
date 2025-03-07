#!/bin/bash

# Install dependencies
echo "Installing server dependencies..."
cd server
bun install

# Start the server
echo "Starting server on port 5000..."
bun run index.ts --port 5000 --debug 