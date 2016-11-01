"use strict";
import * as express from "express";

module Route {
    export class Index {
        public index(req: express.Request, res: express.Response, next: express.NextFunction) {
            //render page
            res.sendFile("app/index.html");
        }
    }
}

export = Route;