import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AccordionModule, ModalModule, TooltipModule  } from 'ng2-bootstrap';

//Import routing configure file
import { Routing } from './app.routing';

//Import app all components
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component'
import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BootstrapUiComponent } from './components/bootstrap-ui/bootstrap-ui.component';
import { BootstrapUiAccordionComponent } from './components/bootstrap-ui-accordion/bootstrap-ui-accordion.component';
import { BootstrapUiModalComponent } from './components/bootstrap-ui-modal/bootstrap-ui-modal.component';
import { BootstrapUiTooltipComponent } from './components/bootstrap-ui-tooltip/bootstrap-ui-tooltip.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    ContactComponent,
    LayoutComponent,
    AppComponent,
    BootstrapUiComponent,
    BootstrapUiAccordionComponent,
    BootstrapUiModalComponent,
    BootstrapUiTooltipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing, // Import paths info
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule .forRoot()
  ],
  providers: [Http],
  bootstrap: [AppComponent]
})
export class AppModule { }
