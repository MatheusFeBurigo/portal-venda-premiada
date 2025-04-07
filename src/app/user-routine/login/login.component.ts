import { Component, OnInit } from '@angular/core';
import { PoModalPasswordRecoveryType, PoPageBlockedUserReasonParams, PoPageLoginRecovery } from '@po-ui/ng-templates';
import { PoDialogService, PoNotificationService } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit { 

  constructor(
    private poDialog: PoDialogService, 
    private router: Router, 
    private authService: AuthService,
    private poNotificationService: PoNotificationService
  ) {}

  ngOnInit(): void {}

  attempts = 3;
  exceededAttempts!: number;
  hideRememberUser: boolean = true;    
  loading: boolean = false;
  loginErrors: string[] = [];
  passwordErrors: string[] = [];
  params: PoPageBlockedUserReasonParams = { attempts: 3, hours: 1 };

  passwordRecovery: PoPageLoginRecovery = {
    url: '',
    type: PoModalPasswordRecoveryType.All,
    contactMail: 'ti@gtsdobrasil.com.br'
  };
  
  showPageBlocked: boolean = false;

  checkLogin(formData: { login: string; password: string; }) {
    this.loading = true;

    this.authService.login(formData.login, formData.password).subscribe(
      (response) => {
        localStorage.setItem('access_token', response.access_token);
        this.router.navigate(['/home']);
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.generateAttempts();

        if (error.error && error.error.error === 'Invalid credentials') {
          this.poNotificationService.error('Usuário ou senha incorretos');
        } else {
          this.poNotificationService.error('Erro ao tentar realizar login');
        }
      }
    );
  }

  passwordChange() {
    if (this.passwordErrors.length) {
      this.passwordErrors = [];
    }
  }

  loginChange() {
    if (this.loginErrors.length) {
      this.loginErrors = [];
    }
  }

  private generateAttempts() {
    if (this.attempts >= 1) {
      this.attempts--;
      this.exceededAttempts = this.attempts;
    }
    if (this.attempts === 0) {
      this.showPageBlocked = true;
    }
  }
}
