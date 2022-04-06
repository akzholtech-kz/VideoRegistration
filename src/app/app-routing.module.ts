import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { AuthorComponent } from './author/author.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailStartComponent } from './catalog/detail-start/detail-start.component';
import { DetailComponent } from './catalog/detail/detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { IpRegisterComponent } from './ip-register/ip-register.component';
import { MainComponent } from './main/main.component';


const appRoutes: Routes = [
    {path: "", redirectTo: "/main", pathMatch: "full"},
    {path: "main", component: MainComponent},
    {path: "catalog", component: CatalogComponent, children: [
        {path: "", component: DetailStartComponent},
        {path: ":id", component: DetailComponent}
    ]},
    {path: "ip-register", component: IpRegisterComponent},
    {path: "contacts", component: ContactsComponent},
    {path: "about", component: AboutComponent},
    {path: "author", component: AuthorComponent}
]

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule{

}