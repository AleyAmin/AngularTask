import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from './../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contact!: Contact[];
  i !: number;
  newContacts!: FormGroup;
  message!: string;
  editedcontact!: any;
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {

    this.contact = this.contactService.getContacts();
    console.log(this.contact);
    
    this.i = this.contact.length + 1;

    this.newContacts = new FormGroup(
      {
        'name': new FormControl(''),
        'number': new FormControl(''),
      }
    )

    console.log(this.route.snapshot.paramMap.get("id"));
    if (this.route.snapshot.paramMap.get("id") != null) {
      this.editedcontact = this.contact.find((x: any) => x.id == this.route.snapshot.paramMap.get("id"));
      this.newContacts.get("name")?.setValue(this.editedcontact.name);
      this.newContacts.get("number")?.setValue(this.editedcontact.number);

    }

  }
  saveContactNew(newContacts: any) {
    if (this.editedcontact!= null) {
      console.log(this.editedcontact);
      
      newContacts.id=this.editedcontact.id;
      this.contactService.updateContact(newContacts)
      this.router.navigate(['contacts']);

    }

    else if (newContacts.name != '' && newContacts.number != '') {
      this.contactService.addContact(newContacts, this.i)
      console.log(newContacts);

      this.router.navigate(['contacts']);
    }
    else {
      this.message = "Value Cannot be empty."
    }
  }
}
