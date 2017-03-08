import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-ui-accordion',
  templateUrl: './bootstrap-ui-accordion.component.html',
  styleUrls: ['./bootstrap-ui-accordion.component.css']
})
export class BootstrapUiAccordionComponent implements OnInit {
  //Accordion, only one open in this time. False: open one or more in this time
  oneAtATime = true;
  uiElementsHidden = [false, true, true];
  constructor() { }

  ngOnInit() {
  }

}
