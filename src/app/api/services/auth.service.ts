import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanActivateChild {

  constructor(
    protected $router: Router,
    protected $localStorageService: LocalStorageService
  ) { }

  canActivate() {
    if (this.$localStorageService.hasId()) {
      // Aqui o usuário pode entrar
      return true;
    }

    // Aqui o usuário não pode entrar
    this.$router.navigate(['login']);
    return false;
  }

  canActivateChild() {
    return true;
  }

}
