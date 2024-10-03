import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PacientesComponent } from './pacientes/pacientes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NovopacienteComponent } from './novopaciente/novopaciente.component';
import { HttpClientModule } from '@angular/common/http'; // Importação do HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacientesComponent,
    NovopacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule  // Adicionei o HttpClientModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

