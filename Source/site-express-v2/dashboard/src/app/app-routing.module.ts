import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Unit1Component } from 'src/pages/unit1/unit1.component';
import { Unit2Component } from 'src/pages/unit2/unit2.component';
import { Unit3Component } from 'src/pages/unit3/unit3.component';
import { Unit4Component } from 'src/pages/unit4/unit4.component';
import { Unit5Component } from 'src/pages/unit5/unit5.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'unit1', component: Unit1Component },
  { path: 'unit2', component: Unit2Component },
  { path: 'unit3', component: Unit3Component },
  { path: 'unit4', component: Unit4Component },
  { path: 'unit5', component: Unit5Component },
  { path: ':unit/:idAutomate', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
