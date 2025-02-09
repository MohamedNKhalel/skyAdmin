import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';

@Pipe({
  name: 'sendDateSearch'
})
export class SendDateSearchPipe implements PipeTransform {

  transform(contacts:Contact[],date:string): Contact[] {
    if(!date) return contacts
    const searchDate = new Date(date);
    searchDate.setHours(0,0,0,0);

    return contacts.filter((contact)=>{
      const contactSearchDate = new Date(contact.date);
      contactSearchDate.setHours(0,0,0,0);
      return contactSearchDate.getTime() === searchDate.getTime();
    })
  }

}
