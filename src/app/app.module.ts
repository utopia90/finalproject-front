import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';



import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpertDetailComponent } from './pages/expert-detail/expert-detail.component';
import { CreateExpertComponent } from './pages/create-expert/create-expert.component';
import { ExpertsListComponent } from './pages/experts-list/experts-list.component';
import { TagsListComponent } from './pages/tags-list/tags-list.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ExpertsListPageComponent } from './views/experts-list-page/experts-list-page.component';
import { TasksListPageComponent } from './views/tasks-list-page/tasks-list-page.component';
import { ExpertFormComponent } from './components/forms/expert-form/expert-form.component';
import { HeaderComponent } from './components/elements/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ExpertsTableComponent } from './components/elements/experts-table/experts-table.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TagsTableComponent } from './components/elements/tags-table/tags-table.component';
import { ToolbarListsComponent } from './components/elements/toolbar-lists/toolbar-lists.component';
import { ToolbarBackComponent } from './components/elements/toolbar-back/toolbar-back.component';
import { CreateTagComponent } from './pages/create-tag/create-tag.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpertDetailComponent,
    CreateExpertComponent,
    ExpertsListComponent,
    TagsListComponent,
    ErrorPageComponent,
    ExpertsListPageComponent,
    TasksListPageComponent,
    ExpertFormComponent,
    HeaderComponent,
    ExpertsTableComponent,
    TagsTableComponent,
    ToolbarListsComponent,
    ToolbarBackComponent,
    CreateTagComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
