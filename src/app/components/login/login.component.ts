import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageLogin } from '@po-ui/ng-templates';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  loginSubmit(formData: PoPageLogin) {
    console.log('loginSubmit', formData);

    this.loginService.login(formData.login, formData.password)
      .subscribe((response) => {
        if (response.items != undefined) {
          console.log("Login efetuado com sucesso");
          localStorage.setItem('logged', 'true');
          this.router.navigate(['/despesas']);
          return;
        }
        console.log("Login falhou");
        alert('Usuário/senha inválidos');
      });
  }

}
