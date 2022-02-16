import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/share/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegEventoComponent } from './components/pages/reg-evento/reg-evento.component';
import { VieweventsComponent } from './components/pages/viewevents/viewevents.component';
import { UserAuthGuard } from './guards/user-auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'events', component: VieweventsComponent, canActivate: [UserAuthGuard]},
  {path: 'eventsC', component: RegEventoComponent, canActivate: [UserAuthGuard]},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
