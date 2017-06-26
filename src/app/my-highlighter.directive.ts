/* Directive */
import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlighter]'
})
export class MyHighlighterDirective {

  constructor(private el: ElementRef) { }

  /* If value is even then set green color else set red color on mouse enter event */
  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: any) {
    var value = +(event.target.innerText);
    if (value % 2 == 0) {
      this.highlight('Green');
    }
    else {
      this.highlight('Red');
    }
  }

  /* remove color on mouse leave event */
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
