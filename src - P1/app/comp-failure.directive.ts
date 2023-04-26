import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(public eobj : ElementRef) { }

  @HostListener ('mouseenter') onMouseEnter() {
    this.eobj.nativeElement.style.color = 'red';
  }

  @HostListener ('mouseleave') onMouseLeave() {
    this.eobj.nativeElement.style.color = null;
  }

}
