import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedishComponent } from './deletedish.component';

describe('DeletedishComponent', () => {
  let component: DeletedishComponent;
  let fixture: ComponentFixture<DeletedishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
