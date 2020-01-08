import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsquizComponent } from './actionsquiz.component';

describe('ActionsquizComponent', () => {
  let component: ActionsquizComponent;
  let fixture: ComponentFixture<ActionsquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
