import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateRapperComponent } from './create-rapper.component';

const routes: Routes = [
  {path: '', component: CreateRapperComponent}
]

@NgModule({
  declarations: [CreateRapperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CreateRapperModule { }
