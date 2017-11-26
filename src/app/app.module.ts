import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { PlatformComponent } from './platform/platform.component';
import { DashboardComponent } from './platform/dashboard/dashboard.component';
import { IssuesComponent } from './platform/issues/issues.component';
import { ProjectsComponent } from './platform/projects/projects.component';
import { SolutionsComponent } from './platform/solutions/solutions.component';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { SolutionDetailComponent } from './platform/solutions/solution-detail/solution-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PlatformComponent,
    DashboardComponent,
    IssuesComponent,
    ProjectsComponent,
    SolutionsComponent,
    SolutionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
