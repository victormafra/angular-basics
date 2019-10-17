import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

}
