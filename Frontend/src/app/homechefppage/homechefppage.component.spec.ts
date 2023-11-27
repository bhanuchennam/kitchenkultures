import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechefppageComponent } from './homechefppage.component';

describe('HomechefppageComponent', () => {
  let component: HomechefppageComponent;
  let fixture: ComponentFixture<HomechefppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomechefppageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomechefppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
