import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HeaderComponent } from './components/widgets/header/header.component';
import { CarouselcomponentComponent } from './components/carrousel/carouselcomponent/carouselcomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { CardDoctorComponent } from './components/card/card-doctor/card-doctor.component';
import { CardInfoComponent } from './components/card/card-info/card-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CarouselcomponentComponent,
    CardInfoComponent,
    CardDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarousel,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
