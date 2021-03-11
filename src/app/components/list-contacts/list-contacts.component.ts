import { Contact } from 'src/app/models/contact';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  
  contacts;
  myContact: Contact;
  statusContact = false;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
     this.contactService.getContacts().subscribe(contacts => {
       this.contacts = contacts;
       console.log(contacts);
     })
  }

  updateContact(contact) {
    this.contactService.updateContact(contact);
    this.statusContact = false;
  }

  editContact(contact) {
    this.statusContact = true;
    this.myContact = contact;
  }

}
