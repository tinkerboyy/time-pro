import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { Store } from "store";

// feature modules

// containers
import { AppComponent } from "./containers/app/app.component";
import { AuthModule } from "../auth/auth.module";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppNavComponent } from "./components/app-nav/app-nav.component";
import { HealthModule } from "../health/health.module";

// components

// routes
export const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "schedule" }
];

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(ROUTES),
    HealthModule
  ],
  declarations: [AppComponent, AppNavComponent, AppHeaderComponent],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
