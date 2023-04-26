import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]',
})
export class DemoDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.style.fontWeight = 'bold';
  }
}
