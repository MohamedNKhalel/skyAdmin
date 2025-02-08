import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Pipe({
  name: 'namesearch'
})
export class NamesearchPipe implements PipeTransform {

  transform(projects: Project[],word: string): Project[] {
    return projects.filter(project=> project.name.toLowerCase().includes(word.toLowerCase()));
  }

}
