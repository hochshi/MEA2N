import * as mongoose from "mongoose";
import {IHero} from "./IHero";

export let Schema = mongoose.Schema;

let schema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    power: {
        type: String,
        required: true
    },
    amountPeopleSaved: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    if (this._doc) {
        let doc = <IHero>this._doc;
        let now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.modifiedAt = now;
    }
    next();
    return this;
});

export let HeroSchema = mongoose.model<IHero>('hero', schema, 'heroes', true);