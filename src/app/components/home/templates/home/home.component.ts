import { Component, ElementRef, ViewChild } from '@angular/core';
import { createPopper } from "@popperjs/core";
import { AuthService } from '../../../../shared/services/mockups/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dropdownPopoverShow = false;
  
  @ViewChild("btnDropdownUserRef", { static: false }) btnDropdownUserRef?: ElementRef;
  @ViewChild("popoverDropdownUserRef", { static: false }) popoverDropdownUserRef?: ElementRef;

  isDarkMode: boolean;

  constructor(public authService: AuthService) {
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

  ngAfterViewInit(): void {
      createPopper(
        this.btnDropdownUserRef?.nativeElement,
        this.popoverDropdownUserRef?.nativeElement,
        {
          placement: "bottom-end",
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              }
            }
          ]
        }
      );
  }
  
  public toggleDropdown(event: any) {
    this.dropdownPopoverShow = !this.dropdownPopoverShow;
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
  
}
