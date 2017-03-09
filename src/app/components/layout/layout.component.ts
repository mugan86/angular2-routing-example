import { Component, OnInit } from '@angular/core';
import { CreditCardMaskPipe } from './../../pipes/credit-card-mask.pipe';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  creditCardNumber = '2131313133123174098';

  ngOnInit() {
  }

}
