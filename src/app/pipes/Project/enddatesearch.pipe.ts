import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Pipe({
  name: 'enddatesearch'
})
export class EnddatesearchPipe implements PipeTransform {

  transform(projects: Project[],word: string): Project[] {
        if(!word) return projects;
        const searchDate = new Date(word);
        searchDate.setHours(0, 0, 0, 0); // Ensure the time is at the start of the day

        return projects.filter((project)=>{
          const projectEndDate = new Date(project.endDate)
          projectEndDate.setHours(0,0,0);
          return projectEndDate.getTime() == searchDate.getTime();
        })
      }

}
