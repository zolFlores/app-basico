import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicoComponent } from './basico/basico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotonComponent } from './boton/boton.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { CitiesComponent } from './cities/cities.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicoComponent,
    BotonComponent,
    FormNewItemComponent,
    CitiesComponent,
    FilterPipe,
    ContactoComponent,
    ReactiveComponent,
    HomeComponent,
    NavbarComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
