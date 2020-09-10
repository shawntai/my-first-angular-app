import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RapperUniverseService } from '../../app/rapper-universe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedRappers = [];
  activatedRoute: ActivatedRoute;
  ruService: RapperUniverseService;
  race2Load = 'all';
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, ruService: RapperUniverseService) {
    this.activatedRoute = activatedRoute;
    this.ruService = ruService;
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.race2Load = params.race;
        this.selectedRappers = this.ruService.getSelectedRappers(this.race2Load);
      }
    );
    this.subscription = this.ruService.rappersChanged.subscribe(
      () => {
        this.selectedRappers = this.ruService.getSelectedRappers(this.race2Load);
      }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
