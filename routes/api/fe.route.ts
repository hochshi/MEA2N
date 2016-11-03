"use strict";
import * as express from "express";
import * as path from "path";

export class Fe {
    public static index(req: express.Request, res: express.Response, next: express.NextFunction) {
        //render page
        res.sendFile("index.html", {root: path.resolve(__dirname, '../../public')});
    }
}
