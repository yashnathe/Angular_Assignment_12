import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
})
export class CompSuccessDirective {
  constructor(public eobj: ElementRef) {}

  @HostListener('mouseenter') onmouseenter() {
    this.eobj.nativeElement.style.color = 'green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.eobj.nativeElement.style.color = null;
  }
}
