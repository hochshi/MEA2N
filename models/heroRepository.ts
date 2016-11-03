import {RepositoryBase} from "./repositoryBase";
import {HeroSchema} from "./HeroSchema";
import {IHero} from "./IHero";
import {DB} from "../db";

export class HeroRepository extends RepositoryBase<IHero> {

    private static singleton: HeroRepository;

    constructor() {
        if (!HeroRepository.singleton) {
            DB.setupDB();
            super(HeroSchema);
            HeroRepository.singleton = this;
        }
        return HeroRepository.singleton;
    }
}

//Object.seal(HeroRepository);