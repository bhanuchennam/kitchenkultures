import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechefregisterComponent } from './homechefregister.component';

describe('HomechefregisterComponent', () => {
  let component: HomechefregisterComponent;
  let fixture: ComponentFixture<HomechefregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomechefregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomechefregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
