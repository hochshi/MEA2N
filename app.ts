"use strict";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as indexRoute from "./routes/index";
import * as mongoose from "mongoose";

/**
 * The server.
 *
 * @class Server
 */
export class Server {

    public app: express.Application;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        return new Server();
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        //create expressjs application
        this.app = express();

        //configure application
        this.config();

        //configure routes
        //this.routes();
    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     * @return void
     */
    private config() {
        //configure jade
        //this.app.set("views", path.join(__dirname, "views"));
        //this.app.use(express.static(__dirname + '/'));
        //this.app.set("view engine", "ejs");

        //mount logger
        //this.app.use(logger("dev"));

        //mount json form parser
        this.app.use(bodyParser.json());

        //mount query string parser
        this.app.use(bodyParser.urlencoded({ extended: true }));

        //add static paths
        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(express.static(path.join(__dirname, 'bower_components')));
        this.app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
        this.app.use('/app', express.static(path.join(__dirname, 'app')));

        // catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }

    /**
     * Configure routes
     *
     * @class Server
     * @method routes
     * @return void
     */
    private routes() {
        //get router
        let router: express.Router;
        router = express.Router();

        //create routes
        var index: indexRoute.Index = new indexRoute.Index();

        //home page
        router.get("/", index.index.bind(index.index));

        //use router middleware
        this.app.use(router);
    }
}

// var server = Server.bootstrap();
// export = server.app;