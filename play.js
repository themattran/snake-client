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
  })
  
  conn.on("data", (data) => {
    console.log('Snek says:', data);
  })

  conn.on("connect", () => {
    conn.write(`Name: Kevin`)
  })
  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = {
  connect
}; 
