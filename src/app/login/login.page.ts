import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email!: string;
  senha!: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.email = '';
    this.senha = '';
  }

  ionViewWillEnter() {
    this.email = '';
    this.senha = '';
  }

  entrar() {
    if (this.email && this.senha) {
      this.auth
        .login(this.email, this.senha)
        .then(() => {
          this.router.navigate(['/tabs/home']);
        })
        .catch((error) => {
          this.presentErrorToast('Erro no login');
          this.senha = '';
        });
    } else {
      this.presentErrorToast('Por favor, informe o email e/ou a senha.');
    }
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }

  fechar() {
    this.router.navigate(['tabs/home']);
  }
}
