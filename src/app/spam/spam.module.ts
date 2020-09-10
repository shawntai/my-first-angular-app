import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//import { SpamRoutingModule } from './spam-routing.module';
import { SpamComponent } from './spam.component';

const routes: Routes = [
  {path: '', component: SpamComponent}
]

@NgModule({
  declarations: [SpamComponent],
  imports: [
    CommonModule,
    //SpamRoutingModule
    RouterModule.forChild(routes)
  ]
})
export class SpamModule { }
