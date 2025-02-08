import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform( users:User[],word:string ):User[] {
    return users.filter((user)=>user.status?.toLowerCase().includes(word.toLowerCase()));
  }
}
