import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertsListComponent } from './pages/experts-list/experts-list.component';
import { TagsListComponent } from './pages/tags-list/tags-list.component';
import { CreateExpertComponent } from './pages/create-expert/create-expert.component';
import { ExpertDetailComponent } from './views/expert-detail/expert-detail.component';
import { CreateTagComponent } from './pages/create-tag/create-tag.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {ExpertRemarksComponent} from './pages/expert-remarks/expert-remarks.component';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    redirectTo:'experts'
  },
  {
    path: 'home', 
    pathMatch: 'full',
    component: HomePageComponent},
  {
    path: 'experts', 
    component: ExpertsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'expert-detail', 
    component: ExpertDetailComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'tags', 
    component: TagsListComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'new-expert', 
    component: CreateExpertComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'expert-remarks', 
    component: ExpertRemarksComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'new-tag', 
    component: CreateTagComponent,
    canActivate: [AuthGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
