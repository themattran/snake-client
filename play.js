const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15', // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('connection successful'); 
    //conn.write(`Name: KEV`);
    
    setInterval(() => {
      conn.write(`Move: right`);
    }, 50)

    setInterval(() => {
      conn.write(`Move: down`);
    }, 100)

    setInterval(() => {
      conn.write(`Move: right`);
    }, 250)


  })
  
  conn.on("data", (data) => {
    console.log('Snek says:', data);
  })

  return conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {

    if (key === '\u0003') {
      process.exit(); 
    }


}; 

// console.log("Connecting ...");
// connect();

module.exports = {
  connect,
  setupInput
}; 
