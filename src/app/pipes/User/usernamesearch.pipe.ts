import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Pipe({
  name: 'usernamesearch'
})
export class UsernamesearchPipe implements PipeTransform {

  transform(users:User[],word:string): User[] {
    return users.filter((user)=>user.name?.toLocaleLowerCase().includes(word.toLowerCase()));
  }

}
