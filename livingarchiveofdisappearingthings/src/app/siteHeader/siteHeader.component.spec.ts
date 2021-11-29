import { ComponentFixture, TestBed } from '@angular/core/testing';

import { siteHeaderComponent } from './siteHeader.component';

describe('HeaderComponent', () => {
  let component: siteHeaderComponent;
  let fixture: ComponentFixture<siteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ siteHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(siteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
