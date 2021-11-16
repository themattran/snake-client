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
    }, 1000)

    setInterval(() => {
      conn.write(`Move: down`);
    }, 1000)

    setInterval(() => {
      conn.write(`Move: right`);
    }, 2500)


  })
  
  conn.on("data", (data) => {
    console.log('Snek says:', data);
  })

  return conn;
};

module.exports = {
  connect
}; 

