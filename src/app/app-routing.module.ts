import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertsListComponent } from './pages/experts-list/experts-list.component';
import { TagsListComponent } from './pages/tags-list/tags-list.component';
import { CreateExpertComponent } from './pages/create-expert/create-expert.component';




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
    path: 'tags', 
    component: TagsListComponent,
  },
  {
    path: 'new-expert', 
    component: CreateExpertComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
