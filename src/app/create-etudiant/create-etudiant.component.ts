import { Component, OnInit } from '@angular/core';
import { EtudiantService } from "../etudiant.service";
import { Etudiant } from "../etudiant";
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Section } from "../section";
import { SectionService } from "../section.service";
import { Observable } from "rxjs";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {
  createForm: FormGroup;
  etudiant: Etudiant = new Etudiant();



submitted = false;
  sections: Observable<Section[]>;

  constructor(private formBuilder: FormBuilder , private   etudiantService: EtudiantService, private sectionService: SectionService, private route:ActivatedRoute,
    private router: Router) {



     }

  ngOnInit() {
    this.reloadData();

    this.createForm = this.formBuilder.group({

              nom: ['', Validators.required],
              prenom: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                cin: ['', Validators.required],
              telephone: ['', Validators.required],
             selectedsection: ['', Validators.required]
            });    }

 get f() { return this.createForm.controls; }


  newEtudiant(): void {
     this.submitted = false;
     this.etudiant = new Etudiant();
   }

   save() {



this.etudiant.section=this.createForm.controls.selectedsection.value;
     this.etudiantService.createEtudiant(this.etudiant)

       .subscribe(data => console.log(data), error => console.log(error));

     this.etudiant = new Etudiant();
     Swal.fire({

       icon: 'success',
       title: 'étudiant a été ajouté avec succés',
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
     this.router.navigate(['/etudiants']) }
     reloadData() {
       this.sections = this.sectionService.getSectionsList();
     }




}
