import { Pipe, PipeTransform } from '@angular/core';
import { Client } from 'src/app/interfaces/client';

@Pipe({
  name: 'visibiltySearch'
})
export class VisibiltySearchPipe implements PipeTransform {

  transform(clients: Client[], search: string): Client[] {
    return clients.filter(client=>{
      if(search == "true"){
        return client.visible == true
      }
      else if(search == "false"){
        return client.visible == false
      }
      else{
        return client;
      }
    });
  }

}
