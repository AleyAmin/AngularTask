import { Component } from '@angular/core';
import { Contact, ContactService } from '../contact.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  search : string = '';
  searchResults: Contact[] = [];

  constructor(private contactService: ContactService){}

  searchContacts():void{
    this.searchResults = this.contactService.searchContacts(this.search);
  }
}
