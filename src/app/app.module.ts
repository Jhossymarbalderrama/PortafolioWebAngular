import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProfileComponent } from './componentes/perfil/profile/profile.component';
import { InfoPersonComponent } from './componentes/perfil/info-person/info-person.component';
import { InfoExperienceComponent } from './componentes/perfil/info-experience/info-experience.component';
import { InfoEducationComponent } from './componentes/perfil/info-education/info-education.component';
import { HardSoftSkillsComponent } from './componentes/perfil/hard-soft-skills/hard-soft-skills.component';
import { CardComponent } from './componentes/login/card/card.component';
import { CardRegistroComponent } from './componentes/registro/card-registro/card-registro.component';
import { ProyectosComponent } from './componentes/perfil/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    PerfilComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    InfoPersonComponent,
    InfoExperienceComponent,
    InfoEducationComponent,
    HardSoftSkillsComponent,
    CardComponent,
    CardRegistroComponent,
    ProyectosComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
