import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiscapacidadComponent } from './discapacidad/discapacidad.component';
import { InclusionComponent } from './inclusion/inclusion.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TestComponent } from './test/test.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'discapacidad', component: DiscapacidadComponent },
  { path: 'inclusión', component: InclusionComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'test', component: TestComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);