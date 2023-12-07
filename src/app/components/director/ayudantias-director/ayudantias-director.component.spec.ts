import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudantiasDirectorComponent } from './ayudantias-director.component';

describe('AyudantiasDirectorComponent', () => {
  let component: AyudantiasDirectorComponent;
  let fixture: ComponentFixture<AyudantiasDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AyudantiasDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AyudantiasDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
