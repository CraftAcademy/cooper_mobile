import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CooperProvider } from '../cooper/cooper';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonProvider {
  constructor(public http: Http, private cooper: CooperProvider) {}
  public gender: string;
  public age: number;

  doAssessment(user: any, distance: number): string {
    return this.cooper.assess(user, distance);
  }
}
