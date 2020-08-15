import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirtyFormCheckComponent } from './components/dirty-form-check/dirty-form-check.component';
import { HomeComponent } from './components/home/home.component';
import { FormDirtyGuard } from './services/dirty-form.guard';

const routes: Routes = [
  { path: 'dirty-form-check', component: DirtyFormCheckComponent, canDeactivate: [FormDirtyGuard] },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
