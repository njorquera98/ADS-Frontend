import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAyudantiaComponent } from './crear-ayudantia.component';

describe('CrearAyudantiaComponent', () => {
  let component: CrearAyudantiaComponent;
  let fixture: ComponentFixture<CrearAyudantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAyudantiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearAyudantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
