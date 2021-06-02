import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorPorParametroComponent } from './cor-por-parametro.component';

describe('CorPorParametroComponent', () => {
  let component: CorPorParametroComponent;
  let fixture: ComponentFixture<CorPorParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorPorParametroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorPorParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
