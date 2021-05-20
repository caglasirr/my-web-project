import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeaturesSectionComponent} from './features-section/features-section.component';
import {PricesSectionComponent} from './prices-section/prices-section.component';
import {HomeComponent} from './home/home.component';
import {ScreensComponent} from './screens/screens.component';
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component'
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  
  {path:'iletisim', component:ContactFormComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'ozellikler', component: FeaturesSectionComponent},
  {path: 'fiyatlar', component: PricesSectionComponent},
  {path: 'ekranlar', component: ScreensComponent},
  {path: 'hakkinda', component: AboutComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
