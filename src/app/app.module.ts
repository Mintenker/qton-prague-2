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
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PlatformComponent,
    DashboardComponent,
    IssuesComponent,
    ProjectsComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
