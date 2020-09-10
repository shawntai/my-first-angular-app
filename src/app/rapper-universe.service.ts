import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RapperUniverseService {

  allRappers = [
    { name: "Playboi Carti", race: "" },
    { name: "Mac Miller", race: "" }
  ]
  rappersChanged = new Subject<void>();
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  fetchData() {
    let url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=rapworld&q=&facet=categories&facet=bio_yearsactivestart&facet=bio_birthdate&facet=bio_yearsactiveend&facet=bio_deathdate&facet=location_city&facet=location_neighborhood&refine.categories=rapper&refine.location_city=Los Angeles';
    this.httpClient.get(url).subscribe(
      (response: Response) => {
        const fetchedData = response['records'].map((record) => {
          return {name: record.fields.name, race: ''}
        })
        console.log(fetchedData);
        this.allRappers = this.allRappers.concat(fetchedData);
        this.rappersChanged.next();
      }
    );
  }

  getSelectedRappers(selectedRace) {
    if (selectedRace === "all") return this.allRappers.slice();
    return this.allRappers.filter((rapper) => rapper.race === selectedRace)
  }

  assignRace(rapperInfo) {
    this.allRappers.find((rapper) => rapper.name === rapperInfo.name).race = rapperInfo.race;
    this.rappersChanged.next();
  }

  addRapper(newRapperInfo) {
    this.allRappers.push(newRapperInfo);
  }

}
