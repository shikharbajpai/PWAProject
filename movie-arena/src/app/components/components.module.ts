import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [
  {
    path: '', component: MainComponent, children:
      [
        { path: 'home', component: HomeComponent },
        { path: '', pathMatch: 'full', redirectTo: 'home' },
        { path: '', component: HomeComponent },
        { path: 'movies', component: MovieListComponent },
        { path: 'movie-details/:imdbID', component: MovieDetailsComponent },
        { path: '**', component: HomeComponent },
      ]
  },
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    MovieListComponent,
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),

    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
