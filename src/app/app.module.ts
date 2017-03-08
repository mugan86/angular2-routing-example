import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AccordionModule } from 'ng2-bootstrap';

//Import routing configure file
import { Routing } from './app.routing';

//Import app all components
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component'
import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BootstrapUiComponent } from './components/bootstrap-ui/bootstrap-ui.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    ContactComponent,
    LayoutComponent,
    AppComponent,
    BootstrapUiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing, // Import paths info
    AccordionModule.forRoot()
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
