import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { SharedModule } from '../shared/shared.module';
import { RpgsListComponent } from './components/rpgs-list/rpgs-list.component';
import { RpgComponent } from './containers/rpg/rpg.component';
import { RpgsRoutingModule } from './rpgs-routing.module';



@NgModule({
  declarations: [
    RpgComponent,
    RpgsListComponent
  ],
  imports: [
    CommonModule,
    RpgsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class RpgsModule { }
