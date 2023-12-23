import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BrandListComponent} from "./brand/view/brand-list/brand-list.component";
import {BrandViewComponent} from "./brand/view/brand-view/brand-view.component";
import {BrandEditComponent} from "./brand/view/brand-edit/brand-edit.component";
import {BrandCreateComponent} from "./brand/view/brand-create/brand-create.component";
import {ModelListComponent} from "./model/view/model-list/model-list.component";

const routes: Routes = [
  {
    component: BrandListComponent,
    path: "brands"
  },
  {
    component: BrandViewComponent,
    path: "brands/:uuid"
  },
  {
    component: BrandEditComponent,
    path: "brands/:uuid/edit"
  },
  {
    component: BrandCreateComponent,
    path: "brands-create"
  },
  {
    component: ModelListComponent,
    path: "brands/:uuid/models"
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
