import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { SectionListComponent } from './section-list/section-list.component';
import { EnseignantDetailsComponent } from './enseignant-details/enseignant-details.component';
import { CreateEnseignantComponent } from './create-enseignant/create-enseignant.component';
import { EnseignantListComponent } from './enseignant-list/enseignant-list.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { CreateAbsenceComponent } from './create-absence/create-absence.component';
import { AbsenceListComponent } from './absence-list/absence-list.component';
import { AttributionListComponent } from './attribution-list/attribution-list.component';
import{LoginComponent} from './login/login.component';
import{SignupComponent} from './signup/signup.component';
import{AuthGuard} from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'etudiants', component: EtudiantListComponent , canActivate:[AuthGuard] },
  { path: 'add', component: CreateEtudiantComponent },
  { path: 'update/:id', component: UpdateEtudiantComponent },
  { path: 'details/:id', component: EtudiantDetailsComponent },
  { path: 'sections', component: SectionListComponent },
  { path: 'enseignants', component: EnseignantListComponent },

  { path: 'addEnseignant', component: CreateEnseignantComponent },
  { path: 'updateEnseignant/:id', component: UpdateEnseignantComponent },
  { path: 'detailsEnseignant/:id', component: EnseignantDetailsComponent },
    { path: 'matieres', component: MatiereListComponent },
    { path: 'absences', component: AbsenceListComponent },
    { path: 'addAbsence', component: CreateAbsenceComponent} ,
{ path: 'addAttribution', component:AttributionListComponent},
{path:'signup', component: SignupComponent},
{path:'login', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
