import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  mensagemDeErro: string;

  constructor(
    protected $formBuilder: FormBuilder,
    protected $loginService: LoginService,
    protected $router: Router,
    protected $localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.$formBuilder.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onLogin(): void {
    this.limparMensagemDeErro();
    if (this.loginForm.invalid) {
      this.imprimirMensagemDeErro('Login form inválido!');
    } else {
      const valoresDoFormulario = this.loginForm.getRawValue();
      const dadosDoUsuario = this.$loginService.login(valoresDoFormulario);
      if (dadosDoUsuario) {
        // Tudo deu certo

        this.$localStorageService.setId(dadosDoUsuario.id);
        this.$router.navigate(['tabela', dadosDoUsuario.nome]);
        this.limparMensagemDeErro();
      } else {
        this.imprimirMensagemDeErro('Usuário não autenticado');
      }
    }
  }

  limparMensagemDeErro(): void {
    this.mensagemDeErro = '';
  }

  imprimirMensagemDeErro(mensagem: string): void {
    this.mensagemDeErro = mensagem;
  }

}
