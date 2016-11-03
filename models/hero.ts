import {IHero} from "./IHero";
// import {HeroRepository} from './heroRepository';
// import {Promise} from "mongoose";

export class Hero {

    private _heroModel: IHero;

    constructor(heroModel: IHero) {
        this._heroModel = heroModel;
    }

    get id(): number {
        return this._heroModel.id;
    }

    get name(): string {
        return this._heroModel.name;
    }

    get power(): string {
        return this._heroModel.power;
    }

    get amountPeopleSaved(): number {
        return this._heroModel.amountPeopleSaved;
    }

    /*
     static createHero(name: string, power: string) : Promise<IHero> {
     let p = new Promise((resolve, reject) => {

     let repo = new HeroRepository();

     let hero = <IHero>{
     name: name,
     power: power,
     amountPeopleSaved: 0
     };

     repo.create(hero, (err, res) => {
     if (err) {
     reject(err);
     }
     else {
     resolve(res);
     }
     });

     });

     return p;

     }

     static findHero(name: string) : Promise<IHero> {
     let p = new Promise((resolve, reject) => {
     let repo = new HeroRepository();

     repo.find({ name : name }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
     if (err) {
     reject(err);
     }
     else {
     if (res.length) {
     resolve(res[0]);
     }
     else {
     resolve(null);
     }
     }
     });
     });

     return p;
     }

     static getAllHeros() : Promise<IHero[]> {
     let p = new Promise((resolve, reject) => {
     let repo = new HeroRepository();

     repo.find().sort({ createdAt: -1 }).limit(1).exec((err, res) => {
     if (err) {
     reject(err);
     }
     else {
     if (res.length) {
     resolve(res[0]);
     }
     else {
     resolve(null);
     }
     }
     });
     });

     return p;
     }
     */
}

Object.seal(Hero);