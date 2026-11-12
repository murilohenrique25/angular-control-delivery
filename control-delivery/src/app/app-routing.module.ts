import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuardService } from './services/auth.guard.service';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { EntregadorComponent } from './pages/entregador/entregador.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { MatrizComponent } from './pages/matriz/matriz.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AssinarEntregaComponent } from './pages/entrega/assinar-entrega/assinar-entrega.component';
import { EntregaComponent } from './pages/entrega/entrega.component';
import { FormaPagamentoComponent } from './pages/forma-pagamento/forma-pagamento.component';
import { MapaEntregaComponent } from './pages/mapa-entrega/mapa-entrega.component';
import { InserirEntregaComponent } from './pages/inserir-entrega/inserir-entrega.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '*', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuardService] },
  { path: 'entregador', component: EntregadorComponent, canActivate: [AuthGuardService] },
  { path: 'matriz', component: MatrizComponent, canActivate: [AuthGuardService] },
  { path: 'relatorios', component: RelatoriosComponent, canActivate: [AuthGuardService] },
  { path: 'servicos', component: ServicosComponent, canActivate: [AuthGuardService] },
  { path: 'inserir-entrega', component: InserirEntregaComponent, canActivate: [AuthGuardService] },
  { path: 'assinar-entregas', component: AssinarEntregaComponent, canActivate: [AuthGuardService] },
  { path: 'entregas', component: EntregaComponent, canActivate: [AuthGuardService] },
  { path: 'forma-pagamento', component: FormaPagamentoComponent, canActivate: [AuthGuardService] },
  { path: 'mapa-entrega', component: MapaEntregaComponent, canActivate: [AuthGuardService] },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
