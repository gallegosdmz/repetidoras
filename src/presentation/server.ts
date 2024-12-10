import cors from 'cors';
import express, { Router } from 'express';

interface Options {
    port: number;
    public_path?: string;
}

export class Server {
    public readonly app = express();
    private serverListener?: any;
    private readonly port: number;
    private readonly publicPath: string;

    constructor( options: Options ) {
        const { port, public_path = 'uploads' } = options;
        this.port = port;
        this.publicPath = public_path;

        this.configure();
    }

    private configure() {
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }));
        this.app.use( cors() );

        this.app.use( express.static( this.publicPath ) );
    }

    public setRoutes( router: Router ) {
        this.app.use( router );
    }

    async start() {
        this.serverListener = this.app.listen( this.port, () => {
            console.log(`Server running on port ${ this.port }`);
        });
    }

    public close() {
        this.serverListener.close();
    }

}