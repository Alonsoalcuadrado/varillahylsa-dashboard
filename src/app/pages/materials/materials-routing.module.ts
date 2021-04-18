import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddedComponent } from './added/added.component';
import { OthersComponent } from './others/others.component';
import { PackedComponent } from './packed/packed.component';
import { PrefabricatedComponent } from './prefabricated/prefabricated.component';
import { SteelsComponent } from './steels/steels.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'envasados',
    pathMatch: 'full'
  },
  {
    path: 'envasados',
    component: PackedComponent,
    pathMatch: 'full'
  },
  {
    path: 'agregados',
    component: AddedComponent,
    pathMatch: 'full'
  },
  {
    path: 'aceros',
    component: SteelsComponent,
    pathMatch: 'full'
  },
  {
    path: 'prefabricados',
    component: PrefabricatedComponent,
    pathMatch: 'full'
  },
  {
    path: 'otros',
    component: OthersComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }
