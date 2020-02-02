import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionListComponent } from './attribution-list.component';

describe('AttributionListComponent', () => {
  let component: AttributionListComponent;
  let fixture: ComponentFixture<AttributionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
