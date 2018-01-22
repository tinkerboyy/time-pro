import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { SharedModule } from "./shared/shared.module";

export const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
      },
      {
        path: "login",
        loadChildren: "./login/login.module#LoginModule"
      },
      {
        path: "register",
        loadChildren: "./register/register.module#RegisterModule"
      }
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBS8ZgTULLwmA8CSU0qer-9M-htTYAEtOg",
  authDomain: "time-pro.firebaseapp.com",
  databaseURL: "https://time-pro.firebaseio.com",
  projectId: "time-pro",
  storageBucket: "time-pro.appspot.com",
  messagingSenderId: "578150644745"
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [],
  providers: []
})
export class AuthModule {}
