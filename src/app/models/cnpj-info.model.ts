  export interface CnpjInfo {
    status: string;
    ultima_atualizacao: string;
    cnpj: string;
    tipo: string;
    porte: string;
    nome: string;
    fantasia: string;
    abertura: string;
    atividade_principal: Atividade[];
    atividades_secundarias: Atividade[];
    natureza_juridica: string;
    logradouro: string;
    numero: string;
    complemento: string;
    cep: string;
    bairro: string;
    municipio: string;
    uf: string;
    email: string;
    telefone: string;
    efr: string;
    situacao: string;
    data_situacao: string;
    motivo_situacao: string;
    situacao_especial: string;
    data_situacao_especial: string;
    capital_social: string;
    qsa: QSA[];
  }

  export interface Atividade {
    code: string;
    text: string;
  }
  
  export interface QSA {
    nome: string;
    qual: string;
    pais_origem?: string;
    nome_rep_legal?: string;
    qual_rep_legal?: string;
  }
  
  export interface Billing {
    free: boolean;
    database: boolean;
  }
  