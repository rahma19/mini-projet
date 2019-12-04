import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShopComponent } from "./shop/shop.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";
import { DetailComponent } from "./detail/detail.component";
import { ContactComponent } from "./contact/contact.component";
import { ModificationComponent } from "./modification/modification.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "shop", component: ShopComponent },
  { path: "contact", component: ContactComponent },
  { path: "modification", component: ModificationComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "shop/:id", component: DetailComponent },
  { path: "**", component: ErrorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
