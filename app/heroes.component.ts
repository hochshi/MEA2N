import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "../models/hero";
import {HeroService} from "./hero.service";
@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    errorMessage: string;
    mode = 'Observable';

    constructor(private heroService: HeroService,
                private router: Router) {
    }

    getHeroes(): void {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    addHero(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    // addHero (name: string) {
    //     if (!name) { return; }
    //     this.heroService.addHero(name)
    //         .subscribe(
    //             hero  => this.heroes.push(hero),
    //             error =>  this.errorMessage = <any>error);
    // }
    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            });
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}