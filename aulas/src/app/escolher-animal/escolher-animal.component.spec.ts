import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherAnimalComponent } from './escolher-animal.component';

describe('EscolherAnimalComponent', () => {
  let component: EscolherAnimalComponent;
  let fixture: ComponentFixture<EscolherAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolherAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
