import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from './../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[] = [];

  constructor(private contactServcie: ContactService){}
  
  ngOnInit(): void {
    this.contacts = this.contactServcie.getContacts();
    console.log(this.contacts);
    
  }

  deleteContact(id: number):void{
    this.contactServcie.deleteContact(id);
    this.contacts = this.contactServcie.getContacts();
  }
}
