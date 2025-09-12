import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DacaComponent } from './daca/daca.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormComponent } from './form/form.component';
import { UfrComponent } from './ufr/ufr.component';
import { DossierComponent } from './dossier/dossier.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjouterComponent } from './ajouter/ajouter.component';
import { DossierrecudacaComponent } from './dossierrecudaca/dossierrecudaca.component';
import { DossierenvoyedacaComponent } from './dossierenvoyedaca/dossierenvoyedaca.component';
import { DossierrecuufrComponent } from './dossierrecuufr/dossierrecuufr.component';
import { DossierenvoyeufrComponent } from './dossierenvoyeufr/dossierenvoyeufr.component';
@NgModule({
  declarations: [
    AppComponent,
    DacaComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    UfrComponent,
    DossierComponent,
    LoginComponent,
    UserComponent,
    AjouterComponent,
    DossierrecudacaComponent,
    DossierenvoyedacaComponent,
    DossierrecuufrComponent,
    DossierenvoyeufrComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule ,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }