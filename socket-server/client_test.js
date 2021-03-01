const WebSocket = require('ws');
 
const heroku = 'web-socket-playground.herokuapp.com'
const local = `localhost:8080`
const ws = new WebSocket(`ws://${heroku}`);
 
ws.on('open', function open() {
  ws.send("something2");
});
 
ws.on('message', function incoming(data) {
  console.log(JSON.parse(data));
});