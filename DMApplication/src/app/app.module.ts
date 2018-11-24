import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxAirtableModule} from 'ngx-airtable';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgxAirtableModule.forRoot({ apiKey: 'keyW0loBHUqPN99iW' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
