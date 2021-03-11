
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;

  constructor(private afs: AngularFirestore) {

     this.contactsCollection =this.afs.collection('contacts')
     this.contacts = this.contactsCollection.valueChanges();
    }

    getContacts() {
       return this.contacts;
    }

    createContact(contact: Contact) {
      this.contactsCollection.add(contact);
    }
}

