import express from 'express';
import { userRouter } from './routes/user.route.js';
import { chatRouter } from './routes/chat.route.js';

export class Server {
    constructor(port) {
        this.app = express();

        this.setMiddlewares();

        this.setRoutes();

        this.listen(port);
    }

    setMiddlewares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    setRoutes() {
        this.app.use(express.static('public'));
        this.app.use('/api', userRouter);
        this.app.use('/api/message', chatRouter);
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log("app started. Listen at port " + port);
        });
    }
}
