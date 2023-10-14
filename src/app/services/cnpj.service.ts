import { Injectable, signal } from '@angular/core';
import { CnpjInfo } from '../models/cnpj-info.model';
import { MessageService } from './message.service'; 

@Injectable({ providedIn: 'root' })
export class CnpjService {
  cnpjInfo = signal<CnpjInfo[]>([]);
  private baseUrl = 'https://backend-cnpj.vercel.app/v1/cnpj'; 

  constructor(private messageService: MessageService) { }

  async buscaCnpj(cnpj: string): Promise<CnpjInfo> {

    const url = `${this.baseUrl}/${cnpj}`; 
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.log(`fetched CNPJ info for ${cnpj}`);
        return data as CnpjInfo;
      })
      .catch(error => {
        this.log(`Error fetching CNPJ info: ${error.message}`);
        throw error;
      });
  }

  private log(message: string) {
    this.messageService.add(`CnpjService: ${message}`);
  }
}
