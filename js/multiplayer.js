// Specify the IP address and port to listen on
const ip = 'wss://127.0.0.1'; // Example IP address
const port = 3000;

// Create a WebSocket server instance, listening on the specified IP address and port
const wss = new WebSocket(ip);

// Event listener for when a client connects
wss.on('connection', function connection(ws) {
    console.log('Client connected');
    
    function SendMessage(message) {
        ws.send(message)
    }

    SendMessage("PlayerAmount");



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
let localPlayerNum = 1;

//players
var players = []


function OnMessage(message) {

    let [player_index, command] = message.split(":");

    if (player_index = "A"){
        for (let i = 0; i < command; i++){
            players[i] = new playerObject();
        }
        SendMessage("PlayerNumber")
        SendMessage("Seed")
    }
    //Add or subtract players
    else if (player_index = "AP") {players[players.length] = new playerObject();}
    else if (player_index = "SB" && player_index < 1) {players.splice(command,1)}

    else if (player_index = "S"){
        document.getElementById("seed").placeholder = command;
    }

    else if (player_index = "N"){
        localPlayerNum = command
        players.splice(command,1);
        players.splice(command,0,localPlayer)
    }
    else {
        switch (command){
            
        }
    }

}

