# Deployment Guide for Unify

This guide explains how to deploy the Unify application on a server so it can be accessed from any client using the server's IP address.

## Prerequisites

- A server with a public IP address
- Node.js and npm installed
- Bun installed (see [Bun installation guide](https://bun.sh/docs/installation))
- PM2 installed globally (`npm install -g pm2`)
- Serve installed globally (`bun install -g serve`)

## Deployment Steps

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd Unify
```

### 2. Configure Environment Variables

1. Create a production environment file for the client:

```bash
cp client/.env.example client/.env.production
```

2. Edit `client/.env.production` and set the following variables:

```
VITE_SERVER_PORT=5000
VITE_WS_REMOTE_URL=ws://199.195.150.143:5000
VITE_DEBUG_MODE=false
VITE_PEERJS_SECURE=true
```

Replace `199.195.150.143` with your server's public IP address if different.

### 3. Build the Client

```bash
cd client
bun install
bun run build
cd ..
```

### 4. Deploy Using PM2

PM2 will manage your processes and ensure they stay running:

```bash
npm install -g pm2
pm2 start ecosystem.config.js
```

This will start both the server on port 5000 and serve the client on port 5173.

### 5. Configure PM2 to Start on Boot (Optional)

```bash
pm2 startup
pm2 save
```

### 6. Set Up a Reverse Proxy (Optional but Recommended)

For a production environment, it's recommended to set up Nginx or Apache as a reverse proxy to:
- Serve on standard ports (80/443)
- Enable HTTPS
- Improve security

#### Example Nginx Configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /ws/ {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

## Accessing the Application

After deployment, you can access the application by:

1. Using the server's IP address: `http://199.195.150.143:5173`
2. Or if you set up a domain and reverse proxy: `http://your-domain.com`

## Troubleshooting

- **WebSocket Connection Issues**: Ensure your firewall allows connections on ports 5000 and 5173
- **CORS Issues**: If you encounter CORS errors, you may need to configure CORS settings in the server
- **PeerJS Connection Issues**: Ensure your network allows WebRTC connections 