import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegEventoComponent } from './components/reg-evento/reg-evento.component';
import { VieweventsComponent } from './components/viewevents/viewevents.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'events', component: VieweventsComponent},
  {path: 'eventsC', component: RegEventoComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
