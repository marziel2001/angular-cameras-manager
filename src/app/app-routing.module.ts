import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BrandListComponent} from "./brand/view/brand-list/brand-list.component";
import {BrandViewComponent} from "./brand/view/brand-view/brand-view.component";
// import {BrandAddComponent} from "./brand/view/brand-add/brand-add.component";


const routes: Routes = [
  {
    component: BrandListComponent,
    path: "brands"
  },
  {
    component: BrandViewComponent,
    path: "brands/:uuid"
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
