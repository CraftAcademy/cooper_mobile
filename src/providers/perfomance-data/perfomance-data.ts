import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable()
export class PerfomanceDataProvider {
  constructor(private tokenService: Angular2TokenService) {}

  saveData(data) {
    return this.tokenService.post('performance_data', data).map(data => data);
  }

  getResults() {
    return this.tokenService
      .get('performance_data')
      .map(results => results.json());
  }
}
