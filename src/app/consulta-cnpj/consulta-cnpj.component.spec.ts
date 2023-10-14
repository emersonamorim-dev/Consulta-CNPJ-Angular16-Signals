import 'zone.js';
import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaCnpjComponent } from './consulta-cnpj.component';
import { CnpjService } from '../services/cnpj.service';
import { of } from 'rxjs';

describe('ConsultaCnpjComponent', () => {
  let component: ConsultaCnpjComponent;
  let fixture: ComponentFixture<ConsultaCnpjComponent>;
  let cnpjService: CnpjService;

  beforeEach(async () => {
    const cnpjServiceMock = {
      buscaCnpj: jest.fn().mockReturnValue(of({}))
    };

    await TestBed.configureTestingModule({
      declarations: [ ConsultaCnpjComponent ],
      providers: [{ provide: CnpjService, useValue: cnpjServiceMock }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaCnpjComponent);
    component = fixture.componentInstance;
    cnpjService = TestBed.inject(CnpjService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate CNPJ correctly', () => {
    expect(component.checkCnpjValidity('')).toBe(false);
    expect(component.checkCnpjValidity('12345678901234')).toBe(true);
  });

  it('should call cnpjService.buscaCnpj when CNPJ is valid', () => {
    component.setBuscaCnpjValueForTest('12345678901234');  
    expect(cnpjService.buscaCnpj).toHaveBeenCalledWith('12345678901234');
  });
});
