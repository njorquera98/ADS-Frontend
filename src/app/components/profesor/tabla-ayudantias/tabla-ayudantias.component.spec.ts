import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAyudantiasComponent } from './tabla-ayudantias.component';

describe('TablaAyudantiasComponent', () => {
  let component: TablaAyudantiasComponent;
  let fixture: ComponentFixture<TablaAyudantiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaAyudantiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaAyudantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
