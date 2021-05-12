import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {OwlModule} from 'ngx-owl-carousel'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { FooterComponent } from './footer/footer.component';
import { PricesSectionComponent } from './prices-section/prices-section.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ScreensComponent } from './screens/screens.component';

@NgModule({
  declarations: [
    
    AppComponent,
    NavComponent,
    FeaturesSectionComponent,
    FooterComponent,
    PricesSectionComponent,
    HomeComponent,
    AboutComponent,
    ScreensComponent,
  ],
  imports: [
    OwlModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule,
    // SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
