import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { ShopComponent } from "./shop/shop.component";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";
import { DetailComponent } from "./detail/detail.component";
import { ContactComponent } from "./contact/contact.component";
import { ModificationComponent } from "./modification/modification.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShopComponent,
    LoginComponent,
    ErrorComponent,
    DetailComponent,
    ContactComponent,
    ModificationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
