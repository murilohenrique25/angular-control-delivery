import { Component } from '@angular/core';
import { EntregaService } from '../../services/entrega.service';
import { EntregadorService } from '../../services/entregador.service';
import { Entregador } from '../../interfaces/entregador';
import { DadosEntrega } from '../../interfaces/dados-entrega';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nomeUser: string | null;
  cidade: string = '';
  dataAtual: Date = new Date();
  dadosTelaInicial: DadosEntrega | null;
  porcentagem: number;
  existeDado: boolean = false;
  entregadores: Entregador[] = [];
  constructor(private entregaService: EntregaService, private entregadorService: EntregadorService) { }

  ngOnInit() {
    this.carregarEntregadores();
    this.nomeUser = localStorage.getItem('nome');
    this.entregaService.carregarDadosTelaInicial().subscribe({
      next: (res: any) => {
        this.dadosTelaInicial = res[0];
        this.existeDado = true;
        if (this.dadosTelaInicial !== null) {
          this.porcentagem = Number(
            (
              (this.dadosTelaInicial.totalEntregaMesFinalizadas! /
                this.dadosTelaInicial.totalEntregasMes!) * 100
            ).toFixed(2)
          );
        }
      },
      error(err) {
        console.error(err);
      },
    });
  }

  carregarEntregadores() {
    this.entregadorService.carregarEntregadores().subscribe({
      next: (res: any) => {
        this.entregadores = res.body;
      },
      error: (erro) => {
        console.error(erro);
      }
    });
  }

  get entregasPendentes(): number {
    if (!this.dadosTelaInicial) {
      return 0;
    }

    return this.dadosTelaInicial.totalEntregasMes!
      - this.dadosTelaInicial.totalEntregaMesFinalizadas!;
  }
}
