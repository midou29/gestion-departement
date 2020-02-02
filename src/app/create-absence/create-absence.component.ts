import { Component, OnInit } from '@angular/core';
import { AbsenceService } from "../absence.service";
import { Absence } from "../absence";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Matiere } from "../matiere";
import { MatiereService } from "../Matiere.service";
import { Etudiant } from "../etudiant";
import { EtudiantService } from "../etudiant.service";
import Swal from 'sweetalert2';
import { Observable } from "rxjs";

@Component({
  selector: 'app-create-absence',
  templateUrl: './create-absence.component.html',
  styleUrls: ['./create-absence.component.css']
})
export class CreateAbsenceComponent implements OnInit {

  createForm: FormGroup;
  absence: Absence = new Absence();



submitted = false;
  matieres: Observable<Matiere[]>;
etudiants: Observable<Etudiant[]>;

  constructor(private formBuilder: FormBuilder , private etudiantService: EtudiantService, private absenceService: AbsenceService,
     private matiereService: MatiereService,  private router: Router) {}

  ngOnInit() {
    this.reloadData();

    this.createForm = this.formBuilder.group({

              type: ['', Validators.required],
                 selectedmatiere: ['', Validators.required],

             selectedetudiant: ['', Validators.required]
            });    }

 get f() { return this.createForm.controls; }


  newAbsence(): void {
     this.submitted = false;
     this.absence = new Absence();
   }

   save() {
     this.absence.etudiant=this.createForm.controls.selectedetudiant.value;
     this.absence.matiere=this.createForm.controls.selectedmatiere.value;


     this.absenceService.createAbsence(this.absence)

       .subscribe(data => console.log(data), error => console.log(error));

     this.absence = new Absence();


     Swal.fire({

       icon: 'success',
       title: 'Absence a été ajouté avec succés',
       showConfirmButton: true,

     })







this.gotoList();
   }

   onSubmit() {
this.submitted = true;
     // stop here if form is invalid
        if (this.createForm.invalid) {
    return ;

        }


 this.save();

   }

   gotoList() {
     this.router.navigate(['/absences']) }
     reloadData() {
       this.etudiants = this.etudiantService.getEtudiantsList();
          this.matieres = this.matiereService.getMatieresList();
     }





}
