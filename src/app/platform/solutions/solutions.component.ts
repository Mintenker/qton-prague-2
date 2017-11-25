import { Component } from '@angular/core';
import { SolutionModel } from '../../shared/solution.model';
import { MOCK_SOLUTIONS } from '../../shared/mocks';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {

  solutions: SolutionModel[] = MOCK_SOLUTIONS;
}
