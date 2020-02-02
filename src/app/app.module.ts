import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { CreateEnseignantComponent } from './create-enseignant/create-enseignant.component';
import { EnseignantDetailsComponent } from './enseignant-details/enseignant-details.component';
import { EnseignantListComponent } from './enseignant-list/enseignant-list.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { HttpClientModule } from '@angular/common/http';
import { SectionListComponent } from './section-list/section-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { CreateAbsenceComponent } from './create-absence/create-absence.component';
import { AbsenceListComponent } from './absence-list/absence-list.component';
import { AttributionListComponent } from './attribution-list/attribution-list.component';
import { SearchPipe } from './search.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {AuthGuard} from './auth.guard';
import {LoginAuthService} from './login-auth.service';
import {UserService} from './user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateEtudiantComponent,
    EtudiantDetailsComponent,
    EtudiantListComponent,
    CreateEnseignantComponent,
    EnseignantDetailsComponent,
    EnseignantListComponent,
    UpdateEtudiantComponent,
    UpdateEnseignantComponent,
    SectionListComponent,
    MatiereListComponent,
    CreateAbsenceComponent,
    AbsenceListComponent,
    AttributionListComponent,
    SearchPipe,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   HttpClientModule,
   NgbModule,



  ],


  providers: [UserService , AuthGuard, LoginAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
