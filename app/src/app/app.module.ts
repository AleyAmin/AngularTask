import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactService } from './contact.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NavbarComponent,
    ContactFormComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
