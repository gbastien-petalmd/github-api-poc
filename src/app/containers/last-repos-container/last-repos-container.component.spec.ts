import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReposContainerComponent } from './last-repos-container.component';

describe('LastReposContainerComponent', () => {
  let component: LastReposContainerComponent;
  let fixture: ComponentFixture<LastReposContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastReposContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastReposContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
