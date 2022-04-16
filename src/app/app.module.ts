import { CatalogComponent } from './catalog/catalog.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { UserInterceptor } from './author/user-interceptor.service';
import { BaskerService } from './basket.service';
import { CatalogService } from './catalog/catalog.service';
import { DetailStartComponent } from './catalog/detail-start/detail-start.component';
import { DetailComponent } from './catalog/detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { BasketDetailComponent } from './ip-register/basket-detail/basket-detail.component';
import { IpRegisterComponent } from './ip-register/ip-register.component';
import { MainComponent } from './main/main.component';
import { DataStorageService } from './shared/data-storage.service';
import { DropDownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    IpRegisterComponent,
    ContactsComponent,
    AboutComponent,
    DetailStartComponent,
    BasketDetailComponent,
    DropDownDirective,
    AuthorComponent,
    DetailComponent,
    CatalogComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [
    BaskerService,
    DataStorageService,
    CatalogService,
    CatalogService,
    {provide:HTTP_INTERCEPTORS,
    useClass: UserInterceptor,
    multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
