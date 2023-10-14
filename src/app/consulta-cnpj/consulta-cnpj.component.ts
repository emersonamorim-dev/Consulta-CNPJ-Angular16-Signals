import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CnpjService } from '../services/cnpj.service';
import { CnpjInfo } from '../models/cnpj-info.model';
import { EMPTY, Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { fromObservable, fromSignal } from '../utils/utils';

@Component({
  selector: 'app-consulta-cnpj',
  templateUrl: './consulta-cnpj.component.html',
  styleUrls: ['./consulta-cnpj.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultaCnpjComponent implements OnInit {
  buscaCnpj = signal<string>('');
  cnpjService = inject(CnpjService);
  isValidCnpj: boolean = true; 

  ngOnInit(): void {}

  private cnpj$: Observable<CnpjInfo> = fromSignal(this.buscaCnpj).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((cnpj: string) => {
      this.isValidCnpj = this.checkCnpjValidity(cnpj); 
      if (this.isValidCnpj && cnpj) {
        return this.cnpjService.buscaCnpj(cnpj);
      } else {
        return EMPTY; 
      }
    })
  );
  
  cnpj = fromObservable(this.cnpj$, {} as CnpjInfo);
  
  public checkCnpjValidity(cnpj: string): boolean {
    const cleanCnpj = cnpj.replace(/[^\d]+/g, '');
    if (cleanCnpj.length !== 14) {
      return false;
    }
  
    return true;
  }
}
