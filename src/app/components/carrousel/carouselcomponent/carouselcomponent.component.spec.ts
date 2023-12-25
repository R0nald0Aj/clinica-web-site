import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselcomponentComponent } from './carouselcomponent.component';

describe('CarouselcomponentComponent', () => {
  let component: CarouselcomponentComponent;
  let fixture: ComponentFixture<CarouselcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselcomponentComponent]
    });
    fixture = TestBed.createComponent(CarouselcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
