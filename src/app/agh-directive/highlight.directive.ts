import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    console.log('sadlifh')
    this.el.nativeElement.style.backgroundColor = 'blue'
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlite('red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlite('blue')
  }
  
  highlite(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
