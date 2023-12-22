import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { DespesasService } from './despesas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogged: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLogged = localStorage.getItem('logged') == 'true';
    console.log('isLogged', this.isLogged);
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/' },
    { label: 'Despesas', link: '/despesas' },
    { label: 'Sair', action: this.logout.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
