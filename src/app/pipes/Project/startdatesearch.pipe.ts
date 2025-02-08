import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Pipe({
  name: 'startdatesearch',
})
export class StartdatesearchPipe implements PipeTransform {
  transform(projects: Project[], word: string): Project[] {
    if (!word) return projects; // If no search term, return all projects

    // Convert the search date to UTC for comparison
    const searchDate = new Date(word);
    searchDate.setHours(0, 0, 0, 0); // Ensure the time is at the start of the day

    return projects.filter((project) => {
      const projectStartDate = new Date(project.startDate);
      projectStartDate.setHours(0, 0, 0, 0); // Normalize to start of the day
      return projectStartDate.getTime() === searchDate.getTime();
    });
  }
}
