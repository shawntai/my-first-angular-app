import { Component, OnInit } from '@angular/core';
import { RapperUniverseService } from '../../app/rapper-universe.service';

@Component({
  selector: 'app-create-rapper',
  templateUrl: './create-rapper.component.html',
  styleUrls: ['./create-rapper.component.css']
})
export class CreateRapperComponent implements OnInit {

  availableOptions = [
    { display: 'None', value: '' },
    { display: 'Black', value: 'black' },
    { display: 'White', value: 'white' }
  ]

  ruService: RapperUniverseService;

  constructor(ruService: RapperUniverseService) {
    this.ruService = ruService;
  }

  ngOnInit(): void {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.controls.name.invalid);
    this.ruService.addRapper(submittedForm.value);
  }

}
