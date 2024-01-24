import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliumPageComponent } from './auxilium-page.component';

describe('AuxiliumPageComponent', () => {
  let component: AuxiliumPageComponent;
  let fixture: ComponentFixture<AuxiliumPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliumPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxiliumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
