import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolutionModel } from '../../../shared/solution.model';
import { MOCK_SOLUTIONS } from '../../../shared/mocks';

@Component({
  selector: 'app-solution-detail',
  templateUrl: './solution-detail.component.html',
  styleUrls: ['./solution-detail.component.scss']
})
export class SolutionDetailComponent {

  solution: SolutionModel;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      (params: { id: string }) => {
        this.solution = MOCK_SOLUTIONS.find(({id}) => id === +params.id);
      }
    );
  }

  redirectToList(): void {
    this.router.navigateByUrl(`platform/solutions`);
  }

}
