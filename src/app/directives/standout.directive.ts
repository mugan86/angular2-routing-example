import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[standOutBackground]'
})

export class StandOutBackgroundDirective {
  constructor(el: ElementRef, renderer: Renderer){
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#000');
    renderer.setElementStyle(el.nativeElement, 'color', '#FFF');
    renderer.setElementStyle(el.nativeElement, 'fontWeight', 'bold');
    renderer.setElementStyle(el.nativeElement, 'textAlign', 'center');
  }
}
