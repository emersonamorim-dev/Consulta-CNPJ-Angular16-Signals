import 'zone.js';
import 'zone.js/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CnpjService } from './cnpj.service';
import { MessageService } from './message.service';
import { CnpjInfo } from '../models/cnpj-info.model';

describe('CnpjService', () => {
  let service: CnpjService;
  let httpMock: HttpTestingController;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CnpjService, MessageService]
    });

    service = TestBed.inject(CnpjService);
    httpMock = TestBed.inject(HttpTestingController);
    messageService = TestBed.inject(MessageService);

    expect(service).toBeTruthy();
    expect(httpMock).toBeTruthy();
    expect(messageService).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();  
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch CNPJ info successfully', async () => {
    const cnpj = '12345678901234';  
    const mockCnpjInfo: CnpjInfo = {
      status: 'OK',
      cnpj: '12345678901234',
      porte: 'MICRO EMPRESA',
      nome: 'Test Company Ltda',
      ultima_atualizacao: '2023-10-13',
      tipo: 'MATRIZ',
      fantasia: 'Test Company',
      abertura: '2020-01-01',
      atividade_principal: [{ code: '1234', text: 'Test Activity' }],
      atividades_secundarias: [{ code: '1234', text: 'Test Activity' }],
      natureza_juridica: '1234',
      logradouro: 'Test Street',
      numero: '123',
      complemento: 'Test',
      cep: '12345-678',
      bairro: 'Test Neighborhood',
      municipio: 'Test City',
      uf: 'TS',
      email: 'test@test.com',
      telefone: '123456789',
      efr: 'Test',
      situacao: 'Active',
      data_situacao: '2023-10-13',
      motivo_situacao: 'Test',
      situacao_especial: 'Test',
      data_situacao_especial: '2023-10-13',
      capital_social: '10000',
      qsa: [{ nome: 'Test Name', qual: 'Test Qual', pais_origem: 'Test Country', nome_rep_legal: 'Test Legal', qual_rep_legal: 'Test Qual' }]
    };

    spyOn(messageService, 'add');

    service.buscaCnpj(cnpj).then(data => {
      expect(data).toEqual(mockCnpjInfo);
      expect(messageService.add).toHaveBeenCalled();
    });

    const req = httpMock.expectOne(`http://localhost:3000/v1/cnpj/${cnpj}`);
    expect(req.request.method).toEqual('GET');

    req.flush(mockCnpjInfo); 
  });
});
