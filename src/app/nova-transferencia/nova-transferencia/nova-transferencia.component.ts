import { Transferencia } from './../../models/transferencia.models';
import { TransferenciaService } from './../../service/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {

  ngOnInit(): void {}

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitado nova transferência');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado =>{
        console.log(resultado);
        this.limpar_campos();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
  }

  limpar_campos(){
    this.valor = 0;
    this.destino = 0;
  }
}
