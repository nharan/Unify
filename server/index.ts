import { Server } from "bun";
import { createId, init } from "./utils/helpers";
import { message, open, close } from "./utils/websocketHandler";
const { port } = init();

const server: Server = Bun.serve<{ id: string }>({
  port: port,
  fetch(req, server) {
    // Add CORS headers for HTTP requests
    if (req.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }
    
    // Handle WebSocket upgrade
    const upgraded = server.upgrade(req, { data: { id: createId() } });
    if (upgraded) {
      return undefined;
    }
    
    // Return regular HTTP response with CORS headers
    return new Response("Welcome to Unify Server 🌐", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
  websocket: {
    message,
    open,
    close: (ws) => close(ws, server),
  },
});

console.log(`Listening on http://${server.hostname}:${server.port}`);
console.log(`WebSocket on ws://${server.hostname}:${server.port}`);
