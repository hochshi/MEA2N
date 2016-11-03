"use strict";
import * as express from "express";
import {HeroRepository} from "../../models/heroRepository";

export class HeroesAPI {

    private static _repo;

    constructor() {
    }

    static get repo(): HeroRepository {
        if (!HeroesAPI._repo)
            HeroesAPI._repo = new HeroRepository();
        return HeroesAPI._repo;
    }

    public getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
        //render page
        HeroesAPI.repo.find(function (err, heroes) {
            if (err)
                res.send(err);
            res.json(heroes)
        });
    }
}
