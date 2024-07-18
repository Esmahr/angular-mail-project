import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileSettingsComponent } from './components/settings/profile-settings/profile-settings.component';
import { MailSettingsComponent } from './components/settings/mail-settings/mail-settings.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DenemeComponent } from './components/deneme/deneme.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent, data: { title: 'Home' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'deneme', component: DenemeComponent, data: { title: 'Login' } },
  {
    path: 'setting',
    component: SettingsComponent,
    children: [
      { path: '', redirectTo: 'profile-setting', pathMatch: 'full' },
      { path: 'profile-setting', component: ProfileSettingsComponent, data: { title: 'Dashboard-Menü' } },
      { path: 'mail-setting', component: MailSettingsComponent, data: { title: 'Dashboard-Siparişler' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
