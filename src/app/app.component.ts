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

  constructor(private router: Router, private route: ActivatedRoute) {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/' },
    { label: 'Despesas', link: '/despesas' },
    { label: 'Sair', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
