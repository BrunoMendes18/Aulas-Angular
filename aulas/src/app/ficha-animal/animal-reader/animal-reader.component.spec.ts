import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalReaderComponent } from './animal-reader.component';

describe('AnimalReaderComponent', () => {
  let component: AnimalReaderComponent;
  let fixture: ComponentFixture<AnimalReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
