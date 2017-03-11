import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'Example to Use Angular 2 and different routes';


  computeTotal = (a,b) => a = a*b;
  ngOnInit() {
    // here, write codes that will run soon as the child components are loaded
    // In this case <cart-window> and <cart-controls>
    console.log(this.computeTotal(2,3));
  }

  ngOnDestroy() {
    // write code that runs when component is destroyed
  }

  ngDoCheck() {
    // Custom change detection
  }
  ngOnChanges(changes) {
    // Called right after the bindings have been checked but only
    // if one of the bindings has changed.

  }
  ngAfterContentInit() {
    // write code that runs when component content has been initialized
  }
  ngAfterContentChecked() {
    // write code that runs when component content has been Checked
  }
  ngAfterViewInit() {
    // write code that runs when component views are initialized
  }
  ngAfterViewChecked() {
    // write code that runs when component views have been checked
  }
}
