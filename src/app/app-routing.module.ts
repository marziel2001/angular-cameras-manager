import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BrandListComponent} from "./brand/view/brand-list/brand-list.component";
import {BrandViewComponent} from "./brand/view/brand-view/brand-view.component";
import {BrandEditComponent} from "./brand/view/brand-edit/brand-edit.component";
// import {BrandAddComponent} from "./brand/view/brand-add/brand-add.component";


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
  }

  // },
  // {
  //   component: BrandAddComponent,
  //   path: "brands/add"
  // }
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
