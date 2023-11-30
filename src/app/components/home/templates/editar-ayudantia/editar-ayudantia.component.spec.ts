import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAyudantiaComponent } from './editar-ayudantia.component';

describe('EditarAyudantiaComponent', () => {
  let component: EditarAyudantiaComponent;
  let fixture: ComponentFixture<EditarAyudantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAyudantiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarAyudantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
