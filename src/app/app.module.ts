import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Import app all components
import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component'
import { ContactComponent } from './components/contact/contact.component';

//Import routing configure file
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing // Import paths info
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
