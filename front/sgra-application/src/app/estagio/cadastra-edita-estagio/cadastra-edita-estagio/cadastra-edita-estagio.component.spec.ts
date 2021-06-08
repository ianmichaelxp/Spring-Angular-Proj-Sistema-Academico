import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraEditaEstagioComponent } from './cadastra-edita-estagio.component';

describe('CadastraEditaEstagioComponent', () => {
  let component: CadastraEditaEstagioComponent;
  let fixture: ComponentFixture<CadastraEditaEstagioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraEditaEstagioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraEditaEstagioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
