import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {

  menuRoutes: { route: string, icon: string, label: string }[] = [
    {route: 'dashboard', icon: 'dashboard', label: 'Nastenka'},
    {route: 'issues', icon: 'question_answer', label: 'Problemy'},
    {route: 'projects', icon: 'list', label: 'Projekty'},
    {route: 'solutions', icon: 'build', label: 'Reseni'},
  ];

  constructor(private router: Router) {

  }

  logout(): void {
    this.router.navigateByUrl('landing');
  }
}
