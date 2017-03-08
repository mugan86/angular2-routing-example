import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-ui-accordion',
  templateUrl: './bootstrap-ui-accordion.component.html',
  styleUrls: ['./bootstrap-ui-accordion.component.css']
})
export class BootstrapUiAccordionComponent implements OnInit {

  uiElementsHidden = [false, true, true];
  constructor() { }

  ngOnInit() {
  }

}
