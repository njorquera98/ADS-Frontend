import { Component, ElementRef, ViewChild } from '@angular/core';
import { createPopper } from '@popperjs/core';
import { AuthService } from '../../../../shared/services/auth.service';
import { UsuarioRol } from '../../../../models/usuario.model';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../../shared/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  dropdownPopoverShow = false;
  @ViewChild('btnDropdownUserRef', { static: false })
  btnDropdownUserRef?: ElementRef;
  @ViewChild('popoverDropdownUserRef', { static: false })
  popoverDropdownUserRef?: ElementRef;
  
  dropdownRolPopoverShow = false;
  @ViewChild('btnDropdownUserRolRef', { static: false })
  btnDropdownUserRolRef?: ElementRef;
  @ViewChild('popoverDropdownUserRolRef', { static: false })
  popoverDropdownUserRolRef?: ElementRef;

  isDarkMode: boolean;

  rolActual: UsuarioRol = UsuarioRol.Profesor;
  rolName = "profesor";

  constructor(public authService: AuthService, private router: Router, private usuariosService: UsuariosService) {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  cambiarRol(event: any) {
    this.authService.cambiarCuenta(+event);
    this.rolActual = +event;
    this.rolName = this.getRoleName();
    this.router.navigate([this.getRoleName() + '/ayudantias']);
  }

  ngAfterViewInit(): void {
    createPopper(
      this.btnDropdownUserRef?.nativeElement,
      this.popoverDropdownUserRef?.nativeElement,
      {
        placement: 'bottom-end',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
      }
    );

    createPopper(
      this.btnDropdownUserRolRef?.nativeElement,
      this.popoverDropdownUserRolRef?.nativeElement,
      {
        placement: 'bottom-start',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
      }
    );
  }

  public toggleDropdown(event: any) {
    this.dropdownPopoverShow = !this.dropdownPopoverShow;
  }

  public toggleDropdownRol(event: any) {
    this.dropdownRolPopoverShow = !this.dropdownRolPopoverShow;
  }

  public toggleTheme(): void {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        this.isDarkMode = true;
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        this.isDarkMode = false;
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        this.isDarkMode = false;
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        this.isDarkMode = true;
      }
    }
  }

  getRoleName() {
    switch(this.rolActual){
      case UsuarioRol.Profesor: return 'profesor';
      case UsuarioRol.Estudiante: return 'estudiante';
      case UsuarioRol.Director: return 'director';
      case UsuarioRol.Secretaria: return 'secretaria';
      default: return ''
    }
  }

  getUserFullName() {
    return this.authService.cuenta_actual?.nombre + ' ' + this.authService.cuenta_actual?.apellido_paterno;
  }

  getUserImage() {
    return this.authService.cuenta_actual?.image_url;
  }
}
