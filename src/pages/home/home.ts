import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};
  result: string;

  constructor(public navCtrl: NavController, private person: PersonProvider) {
    this.user = { distance: 1000, age: 20 };
  }

  calculate(user) {
    this.result = this.person.doAssessment(user, user.distance);
  }
}
