import { CatalogService } from './catalog/catalog.service';
import { DataStorageService } from './shared/data-storage.service';
import { DropDownDirective } from './shared/dropdown.directive';
import { BasketDetailComponent } from './ip-register/basket-detail/basket-detail.component';
import { BaskerService } from './basket.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'

import { CatalogComponent } from './catalog/catalog.component';
import { DetailStartComponent } from './catalog/detail-start/detail-start.component';
import { DetailComponent } from './catalog/detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { IpRegisterComponent } from './ip-register/ip-register.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CatalogComponent,
    IpRegisterComponent,
    ContactsComponent,
    AboutComponent,
    DetailComponent,
    DetailStartComponent,
    BasketDetailComponent,
    DropDownDirective
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [BaskerService, DataStorageService, CatalogService, CatalogService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
