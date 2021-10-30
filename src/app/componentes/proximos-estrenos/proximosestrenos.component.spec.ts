import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosestrenosComponent } from './proximosestrenos.component';

describe('Proximosestrenos', () => {
  let component: ProximosestrenosComponent;
  let fixture: ComponentFixture<ProximosestrenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximosestrenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximosestrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
