import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { PerfomanceDataProvider } from '../../providers/perfomance-data/perfomance-data';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};
  result: string;

  constructor(
    public navCtrl: NavController,
    private person: PersonProvider,
    private perfomanceData: PerfomanceDataProvider,
    private modalCtrl: ModalController
  ) {
    this.user = { distance: 1000, age: 20 };
  }

  calculate(user) {
    this.result = this.person.doAssessment(user, user.distance);
  }
  showResults() {
    this.modalCtrl.create(ResultsPage).present();
  }

  saveResult() {
    this.perfomanceData
      .saveData({ performance_data: { data: { message: this.result } } })
      .subscribe(data => console.log(data));
  }
}
