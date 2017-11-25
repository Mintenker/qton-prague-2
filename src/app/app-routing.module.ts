import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PlatformComponent } from './platform/platform.component';
import { DashboardComponent } from './platform/dashboard/dashboard.component';
import { IssuesComponent } from './platform/issues/issues.component';
import { ProjectsComponent } from './platform/projects/projects.component';
import { SolutionsComponent } from './platform/solutions/solutions.component';

const routes: Routes = [{
  path: '',
  children: [
    {path: 'landing', component: LandingComponent},
    {
      path: 'platform',
      component: PlatformComponent,
      children: [
        {path: 'issues', component: IssuesComponent},
        {path: 'projects', component: ProjectsComponent},
        {path: 'solutions', component: SolutionsComponent},
        {path: '', redirectTo: 'issues', pathMatch: 'full'},
      ]
    },
    {path: '**', redirectTo: 'landing'},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
