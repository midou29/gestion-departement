import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { MatiereService } from "../matiere.service";
import { Matiere } from "../matiere";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Section } from "../section";
import { SectionService } from "../section.service";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.css']
})
export class MatiereListComponent implements OnInit {

  matieres: Observable<Matiere[]>;
  closeResult: string;
  matiere: Matiere = new Matiere();
  sections: Observable<Section[]>;
   constructor(private matiereService: MatiereService,private modalService: NgbModal, private sectionService: SectionService,private formBuilder: FormBuilder,
     private router: Router) { }



   ngOnInit() {   this.reloadData();





   }

   newMatiere(): void {

      this.matiere = new Matiere();
    }

    save() {

    
      this.matiereService.createMatiere(this.matiere)
        .subscribe(data => console.log(data), error => console.log(error));
      this.matiere = new Matiere();

      Swal.fire({

        icon: 'success',
        title: 'Matiére a été ajouté avec succés',
        showConfirmButton: true,

      })

  this.router.navigate(['/matieres'])

    }

  Ajouter(){
  this.save();
  }


   openLg(content) {
     this.modalService.open(content, { size: 'lg' });
   }


   reloadData() {
     this.matieres = this.matiereService.getMatieresList();

   }


   deleteMatiere(id: number) {
     this.matiereService.deleteMatiere(id)
       .subscribe(
         data => {
           console.log(data);
           this.reloadData();
         },
         error => console.log(error));
   }

suivant(){
  this.router.navigate(["/addAttribution"])
}

}
