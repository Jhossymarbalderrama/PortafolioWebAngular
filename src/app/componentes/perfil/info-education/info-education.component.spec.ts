import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEducationComponent } from './info-education.component';

describe('InfoEducationComponent', () => {
  let component: InfoEducationComponent;
  let fixture: ComponentFixture<InfoEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
