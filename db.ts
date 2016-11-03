"use strict";
import * as mongoose from "mongoose";

export module DB {
    export function setupDB() {
        mongoose.connect('mongodb://localhost/heros');
    }
}



