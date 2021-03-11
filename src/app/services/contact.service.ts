
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;
  contactDoc: AngularFirestoreDocument<Contact>;

  constructor(private afs: AngularFirestore) {
      
     this.contactsCollection =this.afs.collection('contacts')
     this.contacts = this.contactsCollection.snapshotChanges().pipe(map((actions: any) => {
      return actions.map(a => {
         const data = a.payload.doc.data() as Contact;
         const id = a.payload.doc.id;
         return {id, ...data};
      });
        
    }));
  }
    getContacts() {
       return this.contacts;
    }

    createContact(contact: Contact) {
      this.contactsCollection.add(contact);
    }

    updateContact(contact: Contact) {
       this.contactDoc = this.contactsCollection.doc<Contact>(contact.id); // recupere the doc
       this.contactDoc.update(contact); // update an elt of the doc
    }

    destroyContact(contact) {
      this.contactDoc = this.contactsCollection.doc<Contact>(contact.id);
       this.contactDoc.delete();
    }
}

