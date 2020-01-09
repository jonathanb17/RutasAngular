import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapicerasComponent } from './lapiceras.component';

describe('LapicerasComponent', () => {
  let component: LapicerasComponent;
  let fixture: ComponentFixture<LapicerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapicerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapicerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
