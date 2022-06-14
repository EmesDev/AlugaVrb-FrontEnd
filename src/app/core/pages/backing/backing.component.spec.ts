import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackingComponent } from './backing.component';

describe('BackingComponent', () => {
  let component: BackingComponent;
  let fixture: ComponentFixture<BackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
