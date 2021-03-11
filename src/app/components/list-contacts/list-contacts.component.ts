import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  
  contacts;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
     this.contactService.getContacts().subscribe(contacts => {
       this.contacts = contacts;
       console.log(contacts);
     })
  }

}
