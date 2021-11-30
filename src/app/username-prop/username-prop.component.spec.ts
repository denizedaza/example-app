import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamePropComponent } from './username-prop.component';

describe('UsernamePropComponent', () => {
  let component: UsernamePropComponent;
  let fixture: ComponentFixture<UsernamePropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernamePropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernamePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
