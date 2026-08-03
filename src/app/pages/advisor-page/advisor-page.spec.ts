import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorPage } from './advisor-page';

describe('AdvisorPage', () => {
  let component: AdvisorPage;
  let fixture: ComponentFixture<AdvisorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvisorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
