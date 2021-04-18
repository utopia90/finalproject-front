import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertsListComponent } from './pages/experts-list/experts-list.component';
import { TagsListComponent } from './pages/tags-list/tags-list.component';
import { CreateExpertComponent } from './pages/create-expert/create-expert.component';
import { ExpertDetailComponent } from './pages/expert-detail/expert-detail.component';
import { CreateTagComponent } from './pages/create-tag/create-tag.component';
import { HomePageComponent } from './pages/home-page/home-page.component';




const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    redirectTo: 'experts'
  },
  {
    path: 'experts', 
    component: ExpertsListComponent,
  },
  {
    path: 'home', 
    component: HomePageComponent,
  },
  {
    path: 'expert-detail', 
    component: ExpertDetailComponent,
  },
  {
    path: 'tags', 
    component: TagsListComponent,
  },
  {
    path: 'new-expert', 
    component: CreateExpertComponent,
  },
  {
    path: 'new-tag', 
    component: CreateTagComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
