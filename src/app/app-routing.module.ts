import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'rappers-list', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':race', component: ListComponent }
  ] },
  { path: 'new-rapper', loadChildren: () => import('./create-rapper/create-rapper.module').then(m => m.CreateRapperModule) },
  { path: 'spam', loadChildren: () => import('./spam/spam.module').then(m => m.SpamModule) },
  { path: '**', redirectTo: '/rappers-list/all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
