import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemContainerComponent } from './user-item-container.component';

describe('UserItemComponent', () => {
  let component: UserItemContainerComponent;
  let fixture: ComponentFixture<UserItemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserItemContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
