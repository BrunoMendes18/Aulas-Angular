import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvAndRefComponent } from './ev-and-ref.component';

describe('EvAndRefComponent', () => {
  let component: EvAndRefComponent;
  let fixture: ComponentFixture<EvAndRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvAndRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvAndRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
