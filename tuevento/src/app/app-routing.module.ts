import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/share/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegEventoComponent } from './components/pages/reg-evento/reg-evento.component';
import { VieweventsComponent } from './components/pages/viewevents/viewevents.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { EventComponent } from './components/pages/event/event.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'events', component: VieweventsComponent, canActivate: [UserAuthGuard]},
  {path: 'eventsC', component: RegEventoComponent, canActivate: [UserAuthGuard]},
  {path: '', component: HomeComponent},
  {path: 'id/:id', component: EventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
