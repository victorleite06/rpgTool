import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RpgComponent } from './containers/rpg/rpg.component';


const routes: Routes = [
  { path: '', component: RpgComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpgsRoutingModule { }
