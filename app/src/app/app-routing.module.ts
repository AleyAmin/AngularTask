import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent},
  {path: 'addContact', component: ContactFormComponent},
  {path: 'editContact/:id', component: ContactFormComponent},
  {path: 'search',component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
