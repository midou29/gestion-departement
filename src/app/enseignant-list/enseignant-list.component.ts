import { Component, OnInit } from '@angular/core';
import { EnseignantDetailsComponent } from '../enseignant-details/enseignant-details.component';
import { Observable } from "rxjs";
import { EnseignantService } from "../enseignant.service";
import { Enseignant } from "../enseignant";
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.css']
})
export class EnseignantListComponent implements OnInit {
  enseignants: Observable<Enseignant[]>;
   constructor(private enseignantService: EnseignantService, private router: Router, private route:ActivatedRoute) { }

   ngOnInit() {   this.reloadData();
   }


   reloadData() {
     this.enseignants = this.enseignantService.getEnseignantsList();
   }



   updateEnseignant(id: number){
     this.router.navigate(['updateEnseignant', id]);
   }

   EnseignantDetails(id: number){
     this.router.navigate(['detailsEnseignant', id]);
   }

pageAjouter(){
      this.router.navigate(['addEnseignant']);
}


deleteEnseignant(id:number) {


     Swal.fire({
       title: 'êtes-vous sûre?',
       text: 'Vous ne pourrez pas récupérer cet Enseignant !',
       icon:'warning' ,
       showCancelButton: true,
       confirmButtonText: 'oui',
       cancelButtonText: 'Non',
     }).then((result) => {
       if (result.value) {

         Swal.fire(
           'supprimé!',
           'cet étudiant est supprimé.',
           'success'
         )
         this.enseignantService.deleteEnseignant(id)
           .subscribe(
             data => {
               console.log(data);
               this.reloadData();
             },
             error => console.log(error));






    } else if (result.dismiss === Swal.DismissReason.cancel) {
         Swal.fire(
           'Annulé',
           'Cet Enseignant est en sécurité 🙂',
           'error'
         )
       }
     });
   }






















}
