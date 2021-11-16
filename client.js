const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('connection successful');   
    conn.write(`Name: MET`);
  })
  
  conn.on("data", (data) => {
    console.log('Snek says:', data);
  })

  return conn;
};

module.exports = {
  connect
}; 

