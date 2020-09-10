import { Component, OnInit } from '@angular/core';

import { RapperUniverseService } from './rapper-universe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  ruService: RapperUniverseService;

  constructor(ruService: RapperUniverseService) {
    this.ruService = ruService;
  }

  ngOnInit(){
    this.ruService.fetchData();
  }
}
