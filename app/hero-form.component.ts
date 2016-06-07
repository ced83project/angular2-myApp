import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { NgForm }    from '@angular/common';
import { Hero }    from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent implements OnInit {

  @Input() hero: Hero;
  @Output() close = new EventEmitter();

  powers = ['Choose a power...', 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero();

  error: any;
  submitted = false;
  navigated = false;
  
  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }
  
  
  ngOnInit() {
    if (this.routeParams.get('id') !== null) {
      let id = +this.routeParams.get('id');
      this.navigated = true;
      this.heroService.getHero(id)
          .then(hero => this.model = hero);
    } else {
      this.navigated = false;
      this.model = new Hero();
    }
  }

  onSubmit() { 
    this.submitted = true; 
    this.heroService
        .save(this.model)
        .then(hero => {
          this.model = hero; // saved hero, w/ id if new
          this.cancel(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  
  cancel(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
  
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;
  reset() {
    this.model = new Hero();
    this.active = false;
    setTimeout(()=> this.active=true, 0);
  }
  
}