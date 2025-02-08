import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform( users:User[] ,word:string):User[] {
    return users.filter(user=>user.phone.toLowerCase().includes(word.toLowerCase()));
  }

}
