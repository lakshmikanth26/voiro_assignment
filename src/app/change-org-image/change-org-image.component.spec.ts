import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeOrgImageComponent } from './change-org-image.component';

describe('ChangeOrgImageComponent', () => {
  let component: ChangeOrgImageComponent;
  let fixture: ComponentFixture<ChangeOrgImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeOrgImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeOrgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
