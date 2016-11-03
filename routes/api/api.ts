"use strict";
import {Router} from "express";
import {HeroesAPI} from "./heroes.route";

export function registerAPI(router: Router) {
    var heroesAPI = new HeroesAPI();
    return router.get("/api/hereos", heroesAPI.getAll.bind(heroesAPI.getAll));
}