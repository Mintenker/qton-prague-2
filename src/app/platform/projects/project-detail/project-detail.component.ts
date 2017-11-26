import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectModel } from '../../../shared/project.model';
import { MOCK_PROJECTS } from '../../../shared/mocks';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {

  project: ProjectModel;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      (params: { id: string }) => {
        this.project = MOCK_PROJECTS.find(({id}) => id === +params.id);
      }
    );
  }


  redirectToList(): void {
    this.router.navigateByUrl('platform/projects');
  }
}
