import { Component } from '@angular/core';
import { DetailUser } from './model/User.model';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./styles/register.component.scss']
})
export class RegisterComponent {

  user: DetailUser;
  userImageRequired: boolean = true;
  revendaImageRequired: boolean = true;


  constructor(private router: Router, private authService: AuthService, private poNotification: PoNotificationService) {
    this.user = new DetailUser();
  }

  register(): void {   
    this.authService.register(this.user).subscribe(
      response => {
        this.poNotification.success('Registro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erro ao registrar usuário:', error);
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
