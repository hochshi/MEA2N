"use strict";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import * as logger from "morgan";
import {HeroesAPI} from "./routes/api/heroes.route";
import {Fe} from "./routes/api/fe.route";

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
        this.routes();
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

        // mount logger
        this.app.use(logger("dev"));

        //mount json form parser
        this.app.use(bodyParser.json());

        //mount query string parser
        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.app.use(bodyParser.json({type: 'application/vnd.api+json'}));

        //add static paths
        this.app.use('/models', express.static(path.join(__dirname, 'models')));
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

// error handlers

// development error handler
// will print stacktrace
        if (this.app.settings.env === 'development') {
            this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
                res.status(err.status || 500);
                res.render('error', {
                    message: err.message,
                    error: err
                });
            });
        }
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
        //var index: indexRoute.Index = new indexRoute.Index();

        //home page
        //router.get("/", index.index.bind(index.index));

        //router = registerAPI(router);

        var heroesAPI: HeroesAPI = new HeroesAPI();
        router.get("/api/heroes", heroesAPI.getAll.bind(heroesAPI.getAll));

        router.get("*", Fe.index.bind(Fe.index));

        //use router middleware
        this.app.use(router);
    }
}

// var server = Server.bootstrap();
// export = server.app;