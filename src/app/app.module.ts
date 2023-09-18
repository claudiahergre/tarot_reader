import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsejoComponent } from './pages/consejo/consejo.component';
import { SiONoComponent } from './pages/si-o-no/si-o-no.component';
import { AutoestimaComponent } from './pages/autoestima/autoestima.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsejoComponent,
    SiONoComponent,
    AutoestimaComponent,
    HomeComponent
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
