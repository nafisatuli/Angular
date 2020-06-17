import { Directive, HostListener, HostBinding } from '@angular/core';

//creating my own directive
@Directive({
    selector: '[appDropdown]'
   //attribute selector
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
