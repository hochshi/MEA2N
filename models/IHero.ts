import * as mongoose from "mongoose";

export interface IHero extends mongoose.Document {
    id: number;
    name: string;
    power: string;
    amountPeopleSaved: number;
    createdAt: Date;
    modifiedAt: Date;
}
