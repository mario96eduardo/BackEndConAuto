"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const controller_1 = require("../sockets/controller");
const information_user_routes_1 = __importDefault(require("../routes/information_user.routes"));
const users_routes_1 = __importDefault(require("../routes/users.routes"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users',
            informatiom_user: '/api/informatiom_user',
            auth: '/api/auth'
        };
        console.clear();
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.app.use((0, cors_1.default)());
        this.server = (0, http_1.createServer)(this.app);
        //CORDS
        this.app.use((0, cors_1.default)());
        this.server = (0, http_1.createServer)(this.app);
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
        this.app.use(express_1.default.json());
        //Capeta Pública
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
        this.app.use((0, express_fileupload_1.default)({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true,
        }));
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log("Base de datos Online");
            }
            catch (error) {
                throw new Error("" + error);
            }
        });
    }
    routes() {
        this.app.use(this.apiPaths.users, users_routes_1.default);
        this.app.use(this.apiPaths.informatiom_user, information_user_routes_1.default);
        this.app.use(this.apiPaths.auth, auth_routes_1.default);
    }
    sockets() {
        this.io.on('connection', (socket) => (0, controller_1.socketController)(socket, this.io));
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map