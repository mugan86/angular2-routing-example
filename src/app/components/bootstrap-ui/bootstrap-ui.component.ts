import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-ui',
  templateUrl: './bootstrap-ui.component.html',
  styleUrls: ['./bootstrap-ui.component.css']
})
export class BootstrapUiComponent implements OnInit {
  public oneAtATime: boolean = true;
  uiElementsHidden = [true, true, true];
  constructor() { }

  ngOnInit() {
  }

}
