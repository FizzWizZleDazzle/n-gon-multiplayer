// Import the WebSocket module
const WebSocket = require('ws');

// Specify the IP address and port to listen on
const ip = '127.0.0.1'; // Example IP address
const port = 3000;

// Create a WebSocket server instance, listening on the specified IP address and port
const wss = new WebSocket.Server({ host: ip, port: port });

// Event listener for when a client connects
wss.on('connection', function connection(ws) {
    console.log('Client connected');
    
    function SendMessage(message) {
        ws.send(message)
    }

    SendMessage("GetPlayerNumber");

    // Event listener for when the server receives a message from the client
    ws.on('message', OnMessage(message));

  });

console.log(`WebSocket server running on ws://${ip}:${port}`);

// player object
const playerObject = {
    m : new m(),
    simulation : new simulation(),
    tech : new tech(),
    powerUps : new powerUps(),
    mobs : new mobs(),
    level : new level(),
    b : new b(),
    spawn : new spawn(),
}

const localPlayer = new playerObject();
let localPlayerNum;

//players
var players = [
    new playerObject(),
    new playerObject(),
    new playerObject(),
    new playerObject(),    
]



function OnMessage(message) {

    const [player_index, command] = message.split(":");

    if (player_index = "N"){
        localPlayerNum = message.substring(3);
        players.splice(index,1);
        players.splice(index,0,localPlayer)
    }
    else {
        switch (command){
            
        }
    }

}

