import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { HowitworksComponent } from './components/howitworks/howitworks.component'
import { ResourcesComponent } from './components/resources/resources.component'
import { AboutComponent } from './components/about/about.component'
import { ContactComponent } from './components/contact/contact.component'


const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'how-component', component: HowitworksComponent },
  { path: 'resource-component', component: ResourcesComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'contact-component', component: ContactComponent },
  { path: '**',   redirectTo: 'home-component', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
