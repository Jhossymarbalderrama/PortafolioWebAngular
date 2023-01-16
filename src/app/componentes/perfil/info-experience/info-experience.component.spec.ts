import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoExperienceComponent } from './info-experience.component';

describe('InfoExperienceComponent', () => {
  let component: InfoExperienceComponent;
  let fixture: ComponentFixture<InfoExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
