import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTccsComponent } from './lista-tccs.component';

describe('ListaTccsComponent', () => {
  let component: ListaTccsComponent;
  let fixture: ComponentFixture<ListaTccsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTccsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTccsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
