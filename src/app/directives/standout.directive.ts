import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[standOutBackground]'
})

export class StandOutBackgroundDirective {
  constructor(el: ElementRef, renderer: Renderer){
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'red');
  }
}
