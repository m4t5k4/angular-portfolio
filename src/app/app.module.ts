import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { BayerComponent } from './bayer/bayer.component';
import { VentigrateComponent } from './ventigrate/ventigrate.component';
import { ContactComponent } from './contact/contact.component';
import { MeComponent } from './me/me.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    BayerComponent,
    VentigrateComponent,
    ContactComponent,
    MeComponent,
    EducationComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    
  ],
  providers: [importProvidersFrom([BrowserAnimationsModule])],
  bootstrap: [AppComponent]
})
export class AppModule { }
