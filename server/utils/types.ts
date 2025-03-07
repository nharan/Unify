import { ServerWebSocket } from "bun";

export enum Event {
  JOIN = "join",
  SKIP = "skip",
  MATCH = "match",
  WAITING = "waiting",
  ONLINE = "online",
}

export interface User {
  id: string;
  ws: ServerWebSocket<unknown>;
}

export type MessageData = {
  event: Event;
  id: string;
};
