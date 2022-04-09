import { createServer } from 'http';
import express, { Application } from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import path from 'path';

import { Socket } from 'socket.io';
import { socketController } from '../sockets/controller';
import informationRoutes from '../routes/information_user.routes';
import userRoutes from '../routes/users.routes';
import authRoutes from '../routes/auth.routes';
import db from '../db/connection';
class Server {
  private app: Application;
  private port: string;
  private server;
  private io;

  private apiPaths = {
    users: '/api/users',
    informatiom_user: '/api/informatiom_user',
    auth: '/api/auth'
  };

  constructor() {
    console.clear();

    this.app = express();
    this.port = process.env.PORT || '8000';
    this.app.use(cors());

    this.server = createServer(this.app);
    //CORDS
    this.app.use(cors());
    this.server = createServer(this.app);
    this.io = require('socket.io')(this.server, {
      cors: {
        origins: [`http://localhost:8080`],
      },
    });

    //Definir mis rutas
    this.dbConnection();
    this.middlewares();
    this.routes();
    //sockets
    this.sockets();
  }

  middlewares() {
    //CORDS
    // this.app.use(cors());
    //Lectura del body
    this.app.use(express.json());
    //Capeta Pública
    this.app.use(express.static(path.join(__dirname, '../public')));

    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true,
      })
    );
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Base de datos Online");
    } catch (error) {
      throw new Error("" + error);
    }
  }


  routes() {
    this.app.use(this.apiPaths.users,userRoutes );
    this.app.use(this.apiPaths.informatiom_user, informationRoutes);
    this.app.use(this.apiPaths.auth, authRoutes);

  }
  sockets() {
    this.io.on('connection', (socket: Socket) =>
      socketController(socket, this.io)
    );
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Servidor corriendo http://localhost:${this.port}`);
    });
  }
}

export default Server;
