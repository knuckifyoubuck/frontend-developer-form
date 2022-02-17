import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendDeveloperFormComponent } from './frontend-developer-form.component';

describe('FrontendDeveloperFormComponent', () => {
  let component: FrontendDeveloperFormComponent;
  let fixture: ComponentFixture<FrontendDeveloperFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendDeveloperFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendDeveloperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
