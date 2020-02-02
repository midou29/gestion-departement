import { Component, OnInit } from '@angular/core';
import { AttributionService } from "../attribution.service";
import { Attribution } from "../attribution";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Matiere } from "../matiere";
import { MatiereService } from "../Matiere.service";
import { Enseignant } from "../enseignant";
import { EnseignantService } from "../enseignant.service";
import { Observable } from "rxjs";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attribution-list',
  templateUrl: './attribution-list.component.html',
  styleUrls: ['./attribution-list.component.css']
})
export class AttributionListComponent implements OnInit {
  createForm: FormGroup;
  attribution: Attribution = new Attribution();



  submitted = false;
  matieres: Observable<Matiere[]>;
  enseignants: Observable<Enseignant[]>;

  constructor(private formBuilder: FormBuilder , private enseignantService: EnseignantService, private attributionService: AttributionService,
     private matiereService: MatiereService,  private router: Router) {



     }

  ngOnInit() {

    this.reloadData();
    this.createForm = this.formBuilder.group({


                 selectedmatiere: ['', Validators.required],

             selectedenseignant: ['', Validators.required]
            });





   }




  newAttribution(): void {
     this.submitted = false;
     this.attribution = new Attribution();
   }

   save() {
     this.attribution.enseignant=this.createForm.controls.selectedenseignant.value;
     this.attribution.matiere=this.createForm.controls.selectedmatiere.value;


     this.attributionService.createAttribution(this.attribution)

       .subscribe(data => console.log(data), error => console.log(error));

       Swal.fire({

         icon: 'success',
         title: 'Attribution a été efféctué avec succés',
         showConfirmButton: true,

       })


   }

   onSubmit() {
  this.submitted = true;

  this.save();

   }


     reloadData() {
       this.enseignants = this.enseignantService.getEnseignantsList();
          this.matieres = this.matiereService.getMatieresList();
     }





}
