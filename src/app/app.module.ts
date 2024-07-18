import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/navs/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navs/navbar/navbar.component';
import { SidenavDescComponent } from './components/navs/sidenav-desc/sidenav-desc.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidenavItemComponent } from './components/navs/sidenav-item/sidenav-item.component';
import { SidenavDropdownComponent } from './components/navs/sidenav-dropdown/sidenav-dropdown.component';
import { SidenavMailItemComponent } from './components/navs/sidenav-mail-item/sidenav-mail-item.component';
import { MailDetailComponent } from './components/mail-detail/mail-detail.component';
import { FormsModule } from '@angular/forms';
import { MailSettingsComponent } from './components/settings/mail-settings/mail-settings.component';
import { ProfileSettingsComponent } from './components/settings/profile-settings/profile-settings.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DenemeComponent } from './components/deneme/deneme.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    NavbarComponent,
    SidenavDescComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    SidenavItemComponent,
    SidenavDropdownComponent,
    SidenavMailItemComponent,
    MailDetailComponent,
    MailSettingsComponent,
    ProfileSettingsComponent,
    LandingPageComponent,
    DenemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
