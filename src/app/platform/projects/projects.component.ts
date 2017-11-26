import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_PROJECTS } from '../../shared/mocks';
import { ProjectModel } from '../../shared/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: ProjectModel[] = MOCK_PROJECTS;

  constructor(private router: Router) {

  }

  redirectToDetail(id: number): void {
    this.router.navigateByUrl(`platform/projects/${id}`);
  }
}
