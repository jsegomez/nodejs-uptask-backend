const express = require('express');
const cors = require('cors');

class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();

    this.routes();
  }

  middlewares(){
    this.app.use(cors());

    this.app.unsubscribe(express.json());
  }

  routes(){}

  listen(){
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
