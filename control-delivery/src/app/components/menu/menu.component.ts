import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private submenuState: { [key: string]: boolean } = {};
  constructor(private route: Router) { }

  toggleSubmenu(menu: string) {
    this.submenuState[menu] = !this.submenuState[menu];
  }

  // Verifica se o submenu está aberto
  isSubmenuOpen(menu: string): boolean {
    return !!this.submenuState[menu];
  }

  logout() {
    //aqui será método para sair e apagar sessionStore
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
