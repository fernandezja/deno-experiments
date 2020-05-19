import { WebSocket, WebSocketServer } from "https://deno.land/x/websocket/mod.ts";

const wss = new WebSocketServer(8888);

wss.on("connection", function (ws: WebSocket) {
  ws.on("message", function (message: string) {
    console.log(message);
    ws.send(message)
  });
});