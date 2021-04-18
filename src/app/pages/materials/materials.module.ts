import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { PackedComponent } from './packed/packed.component';
import { AddedComponent } from './added/added.component';
import { SteelsComponent } from './steels/steels.component';
import { PrefabricatedComponent } from './prefabricated/prefabricated.component';
import { OthersComponent } from './others/others.component';


@NgModule({
  declarations: [PackedComponent, AddedComponent, SteelsComponent, PrefabricatedComponent, OthersComponent],
  imports: [
    CommonModule,
    MaterialsRoutingModule
  ]
})
export class MaterialsModule { }
