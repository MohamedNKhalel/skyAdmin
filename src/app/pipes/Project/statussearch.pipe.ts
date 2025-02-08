import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Pipe({
  name: 'statussearch'
})
export class StatussearchPipe implements PipeTransform {

    transform(projects: Project[],word: string): Project[] {
      return projects.filter(project=> project.status.toLowerCase().includes(word.toLowerCase()));
    }
  

}
