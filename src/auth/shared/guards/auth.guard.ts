import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";

@Injectable()
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    return this.authService.authState.map(user => {
      if (!user) {
        this.router.navigateByUrl("/auth/login");
      }
      return !!user;
    });
  }
}
