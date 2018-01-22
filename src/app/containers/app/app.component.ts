import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "store";
import {
  AuthService,
  User
} from "../../../auth/shared/services/auth/auth.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div>
      <app-header
        [user]="user$ | async"
        (logout)="onLogout()"
      >
      </app-header>
      <app-nav
        *ngIf="(user$ | async)?.authenticated"
        >
      </app-nav>
      <div class="wrapper">
        <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  subscription: Subscription;
  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>("user");
    console.log(this.user$);
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigateByUrl("/auth/login");
  }
}
