import { Component, OnInit } from '@angular/core';
import { EnseignantService } from "../enseignant.service";
import { Enseignant } from "../enseignant";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from "rxjs";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-enseignant',
  templateUrl: './create-enseignant.component.html',
  styleUrls: ['./create-enseignant.component.css']
})
export class CreateEnseignantComponent implements OnInit {
  createForm: FormGroup;
  enseignant: Enseignant = new Enseignant();
  submitted = false;


  constructor(private formBuilder: FormBuilder , private   enseignantService: EnseignantService,
    private router: Router) {

     }

  ngOnInit() {


    this.createForm = this.formBuilder.group({

              nom: ['', Validators.required],
              prenom: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
            contact: ['', Validators.required],

            });    }

  get f() { return this.createForm.controls; }


  newEnseignant(): void {
     this.submitted = false;
     this.enseignant = new Enseignant();
   }

   save() {

     this.enseignantService.createEnseignant(this.enseignant)

       .subscribe(data => console.log(data), error => console.log(error));

     this.enseignant = new Enseignant();





     Swal.fire({

       icon: 'success',
       title: 'Enseignant a été ajouté avec succés',
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
     this.router.navigate(['/enseignants']) }






}
