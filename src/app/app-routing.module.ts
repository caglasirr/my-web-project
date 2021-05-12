import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeaturesSectionComponent} from './features-section/features-section.component';
import {PricesSectionComponent} from './prices-section/prices-section.component';
import {HomeComponent} from './home/home.component';
import {ScreensComponent} from './screens/screens.component';
import {FooterComponent} from './footer/footer.component';

const routes: Routes = [
  {path:'ozellikler', component: FeaturesSectionComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'fiyatlar', component: PricesSectionComponent},
  {path: 'ekranlar', component: ScreensComponent},
  {path: 'hakkinda', component: FooterComponent},
  {path:'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
