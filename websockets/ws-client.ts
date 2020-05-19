import { WebSocket } from "https://deno.land/x/websocket/mod.ts";

//https://stackoverflow.com/questions/37764665/typescript-sleep
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

const endpoint = "ws://127.0.0.1:8888";
const ws: WebSocket = new WebSocket(endpoint);
ws.on("open", function() {
  console.log("ws connected!");
});
ws.on("message", function (message: string) {
  console.log(message);
});


(async () => { 
    
    console.log('Delay 50ms')

    await delay(50);
    
    console.log('After delay')

    await ws.send("ping to websocket...");
    
})();

