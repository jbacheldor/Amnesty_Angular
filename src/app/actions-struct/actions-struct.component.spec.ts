import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsStructComponent } from './actions-struct.component';

describe('ActionsStructComponent', () => {
  let component: ActionsStructComponent;
  let fixture: ComponentFixture<ActionsStructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsStructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
