import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/nav/nav.component';
import { HeaderComponent } from './component/header/header.component';
import {RouterOutlet} from "@angular/router";
import { BrandListComponent } from './brand/view/brand-list/brand-list.component';
import {BrandService} from "./brand/service/brand.service";
import {HttpClientModule} from "@angular/common/http";
// import { BrandAddComponent } from './brand/view/brand-add/brand-add.component';
import {FormsModule} from "@angular/forms";
import { BrandViewComponent } from './brand/view/brand-view/brand-view.component';
import { BrandEditComponent } from './brand/view/brand-edit/brand-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    BrandListComponent,
    BrandViewComponent,
    BrandEditComponent
    // BrandAddComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet,
        HttpClientModule,
        FormsModule
    ],
  providers: [
    BrandService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
