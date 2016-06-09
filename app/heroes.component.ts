import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES }            from '@angular/router-deprecated';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFormComponent } from './hero-form.component';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [ROUTER_DIRECTIVES, HeroDetailComponent, HeroFormComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes() {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes)
        .catch(error => this.error = error); // TODO: Display error message
  }
  
  ngOnInit() {
    this.getHeroes();
  }
  
  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  
  onAdd() {
    this.addingHero = true;
    this.selectedHero = null;
  }
  onSelect(hero: Hero) {
    console.log("onSelect");
    this.selectedHero = hero;
    this.addingHero = false;
  }
  onUpdate(hero: Hero, event: any) {
    console.log("onUpdate");
    event.stopPropagation();
    this.selectedHero = hero;
    this.addingHero = true;
  }
  onDelete(hero: Hero, event: any) {
    console.log("onDelete");
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

