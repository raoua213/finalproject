import { PaiementComponent } from './components/paiement/paiement.component';
import { ProfilEleveComponent } from './components/classe/profil-eleve/profil-eleve.component';
import { ClasseComponent } from './components/classe/classe.component';
import { LoginComponent } from './components/login/login.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEleveComponent } from './components/classe/liste-eleve/liste-eleve.component';
import { EmployeComponent } from './components/employe/employe.component';
import { ProfilEmployeComponent } from './components/employe/profil-employe/profil-employe.component';
import { PresenceComponent } from './components/employe/presence/presence.component';
import { StockComponent } from './components/stock/stock.component';
import { ActiviteComponent } from './components/classe/activite/activite.component';

import { ListeEmployeComponent } from './components/employe/liste-employe/liste-employe.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  {path:'login',component:LoginComponent},
  {path:'classe',component:ClasseComponent},
  {path:'profileleve/:id',component:ProfilEleveComponent},
    {path:'liste/:id',component:ListeEleveComponent},
    {path:'activite',component: ActiviteComponent},
  {path:'employe',component: EmployeComponent},
  {path:'profilemp/:id',component:ProfilEmployeComponent},
  {path:'presence',component:PresenceComponent},
  {path:'listemp',component:ListeEmployeComponent},
{path:'stock',component:StockComponent},
{path:'paiement', component:PaiementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
