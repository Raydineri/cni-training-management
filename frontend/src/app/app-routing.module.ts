import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DacaComponent } from './daca/daca.component';
import { UfrComponent } from './ufr/ufr.component';
import { FormComponent } from './form/form.component';
import { DossierComponent } from './dossier/dossier.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './services/auth.guard';
import { AjouterComponent } from './ajouter/ajouter.component';
import { DossierrecudacaComponent } from './dossierrecudaca/dossierrecudaca.component';
import { DossierenvoyedacaComponent } from './dossierenvoyedaca/dossierenvoyedaca.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'daca',canActivate:[AuthGuard] ,component: DacaComponent },
  { path: 'ufr',canActivate:[AuthGuard], component: UfrComponent },
  { path: 'form', component: FormComponent},
  { path: 'dossier', component: DossierComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'ajouter', component: AjouterComponent },
  { path: 'dossierrecudaca', component: DossierrecudacaComponent },
  { path: 'dossierenvoyedaca', component: DossierenvoyedacaComponent },
  { path: '**',component: NotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }