import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RapperUniverseService } from '../../app/rapper-universe.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() rapper;
  @Output() raceAssigned = new EventEmitter<{name:string, race:string}>();
  ruService: RapperUniverseService;

  constructor(ruService: RapperUniverseService) {
    this.ruService = ruService;
  }

  ngOnInit(): void {
  }

  assignRace(race) {
    //this.raceAssigned.emit({name: this.rapper.name, race: race});
    this.ruService.assignRace({name: this.rapper.name, race: race});
  }

}
