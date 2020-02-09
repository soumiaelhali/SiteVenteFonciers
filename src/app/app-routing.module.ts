import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
  {path :'blog', component: BlogComponent},
  {path : 'home', component: HomeComponent},
  {path :'', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
