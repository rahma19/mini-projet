import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShopComponent } from "./shop/shop.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "shop", component: ShopComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", component: ErrorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
