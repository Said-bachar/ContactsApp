import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  
  statusContact:boolean = false; 
  contact: Contact = {
    name:'',
    phone: null
  }
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  newContact() {
    this.contactService.createContact(this.contact);
    this.contact.name  = "";
    this.contact.phone = null;
    this.statusContact = false;
  }

}
