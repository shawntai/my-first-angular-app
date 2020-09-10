import { Component, OnInit } from '@angular/core';
import { RapperUniverseService } from '../../app/rapper-universe.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  selectedRace = 'all';
  ruService: RapperUniverseService;

  constructor(ruService: RapperUniverseService) {
    this.ruService = ruService;
  }

  ngOnInit(): void {
  }

  /*getSelectedRappers() {
    return this.ruService.getSelectedRappers(this.selectedRace);
  }*/

}
