import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstagiosComponent } from './lista-estagios.component';

describe('ListaEstagiosComponent', () => {
  let component: ListaEstagiosComponent;
  let fixture: ComponentFixture<ListaEstagiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstagiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstagiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
