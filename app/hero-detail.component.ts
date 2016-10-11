import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  ///Selector is used so this can be html tag for this component
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
///<my-hero-detail [hero]="selectedHero"></my-hero-detail> within component template
///hero property is the target of a property binding 
///Angular insists that we declare a target property to be an input property.
  @Input()
  hero: Hero;
}
