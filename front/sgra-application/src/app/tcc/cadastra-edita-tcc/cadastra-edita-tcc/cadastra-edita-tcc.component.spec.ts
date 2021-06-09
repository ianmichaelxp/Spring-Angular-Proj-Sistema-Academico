import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraEditaTccComponent } from './cadastra-edita-tcc.component';

describe('CadastraEditaTccComponent', () => {
  let component: CadastraEditaTccComponent;
  let fixture: ComponentFixture<CadastraEditaTccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraEditaTccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraEditaTccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
