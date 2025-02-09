import { Pipe, PipeTransform } from '@angular/core';
import { Client } from 'src/app/interfaces/client';

@Pipe({
  name: 'rateSearch'
})
export class RateSearchPipe implements PipeTransform {

  transform(clients:Client[] , search:number): Client[] {
    return clients.filter(client =>{
      if(search <= 0){
        return client
      }
      else{
        return client.rate == search;
      }
    });
  }

}
