import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})
export interface Contact {

  id: number;
  name: string;
  number: string;
}
export class ContactService {

  private contacts: Contact[] = [
    { id: 1, name: 'Aley', number: '01000077617' },
    { id: 2, name: 'Boody', number: '01000000000' }
  ]
  constructor() { }

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact, id: number): void {
    contact.id = id;
    this.contacts.push(contact);
    console.log(this.contacts);

  }
  getContact(id: number): Contact | undefined {
    return this.contacts.find((cont) => cont.id === id);
  }

  updateContact(contact: Contact): void {
    console.log(this.contacts);
    
    const i = this.contacts.findIndex((cont) => cont.id === contact.id);

    this.contacts[i] = contact;

  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter((cont) => cont.id !== id);
  }

  searchContacts(query: string) {
    query = query.toLowerCase();
    return this.contacts.filter(
      (cont) => cont.name.toLowerCase().includes(query) || cont.number.includes(query)
    );
  }
}
