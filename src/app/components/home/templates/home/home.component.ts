import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createPopper } from "@popperjs/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dropdownPopoverShow = false;
  
  @ViewChild("btnDropdownUserRef", { static: false }) btnDropdownUserRef?: ElementRef;
  @ViewChild("popoverDropdownUserRef", { static: false }) popoverDropdownUserRef?: ElementRef;

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
    event.preventDefault();
    this.dropdownPopoverShow = !this.dropdownPopoverShow;
  }
}
