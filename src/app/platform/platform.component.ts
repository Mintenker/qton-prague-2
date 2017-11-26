import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {

  menuRoutes: { route: string, icon: string, label: string }[] = [
    {route: 'issues', icon: 'feedback', label: 'Problémy'},
    {route: 'projects', icon: 'dashboard', label: 'Projekty'},
    {route: 'solutions', icon: 'info', label: 'Řešení'},
  ];

  constructor(private router: Router) {

  }

  logout(): void {
    this.router.navigateByUrl('landing');
  }
}
