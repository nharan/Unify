# Unify

This project is a video chat app that allows users to chat with random people based on their preferences. It uses a variety of technologies including ReactJS for the frontend, Redux Toolkit for state management, PeerJS for WebRTC, React useWebSocket, BunJS for the backend, and Docker for containerization and orchestration.

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Running the App](#running-the-app)
  - [Using BunJS](#using-bunjs)
  - [Using Docker Compose](#using-docker-compose)
- [Contributing](#contributing)
- [License](#license)

## Description

It allows users to engage in video chats using WebRTC technology. It also allows users to send text messages to each other using WebRTC DataChannel. The app is built using ReactJS for the frontend, Redux Toolkit for state management, PeerJS for WebRTC, React useWebSocket, BunJS for the backend, and Docker for containerization and orchestration.

## Technologies Used

- [ReactJS](https://reactjs.org) (Frontend)
- [Redux Toolkit](https://redux.js.org) (State Management)
- [PeerJS](https://peerjs.com) (WebRTC)
- [React useWebSocket](https://www.npmjs.com/package/react-use-websocket) (WebSockets)
- [BunJS](https://bun.sh) (Backend)
- [Docker](https://www.docker.com) (Containerization)
- [Docker Compose](https://docs.docker.com/compose) (Container Orchestration)

## Prerequisites

Before running the app, ensure that BunJS is installed on your machine. Installation instructions can be found [here](https://bun.sh/docs/installation). If you are unable to install BunJS, you can use the Docker Compose file to run the app with Docker.

## Running the app

### Using BunJS

#### Running the backend

- Go to the `server` directory

```
cd server
```

- Install the dependencies

```bash
bun install
```

- Run the app

```bash
bun run index.ts
```

This will start a WebSocket and HTTP server on port 3000.

Optionally:

> You can Specify the port using the `--port` flag, e.g., `bun run index.ts --port 5000`. Enable debug mode using `--debug` flag, e.g., `bun run index.ts --debug`.

> If you decide to change the default port, you will need to update the `VITE_SERVER_PORT` variable in the `.env.local` file in the `client` directory. You can do that by copying the `.env.example` file and renaming it to `.env.local`. Then, update the `VITE_SERVER_PORT` variable to the port you specified.

#### Running the frontend

- Go to the `client` directory

```bash
cd client
```

- Install the dependencies

```bash
bun install
```

- Run the app

```bash
bun run dev
```

This will start the app on port 5173. Navigate to `http://localhost:5173` to view the app.

### Using Docker Compose

- Run the following command at the root of the project to start the app:

```bash
docker compose up -d --build
```

Wait for the app to start. This may take a few minutes the first time you run the command.

Navigate to `http://localhost:5173` to view the app.

- To stop the app, run the following command:

```bash
docker compose down
```

## License

This project is licensed under the MIT license. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details.
