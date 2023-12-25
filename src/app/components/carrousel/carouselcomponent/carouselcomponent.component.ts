import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carouselcomponent',
  templateUrl: './carouselcomponent.component.html',
  styleUrls: ['./carouselcomponent.component.css']
})
export class CarouselcomponentComponent {
  images = ["../../../../assets/img/doc1.jpeg", "../../../../assets/img/doc2.jpg", "../../../../assets/img/doc3.jpg"]
}
