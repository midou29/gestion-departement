import { Component, OnInit } from '@angular/core';
import { EtudiantDetailsComponent } from '../etudiant-details/etudiant-details.component';
import { Observable } from "rxjs";
import { EtudiantService } from "../etudiant.service";
import { Etudiant } from "../etudiant";
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {LoginAuthService} from '../login-auth.service';
import {UserService} from '../user.service';
@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {
  public loginuser: any={};
  public users: any=[];


 etudiants: Observable<Etudiant[]>;
  constructor(private etudiantService: EtudiantService, private route:ActivatedRoute,private  authService :LoginAuthService, private userService:UserService,
    private router: Router) {

      this.authService.isLoggedIn();
        this.loginuser=JSON.parse(localStorage.getItem('currentUser'));


     }

  ngOnInit() {   this.reloadData();
  }


  reloadData() {
    this.etudiants = this.etudiantService.getEtudiantsList();
  }



  updateEtudiant(id: number){
    this.router.navigate(['update', id]);
  }

  etudiantDetails(id: number){
    this.router.navigate(['details', id]);
  }



  deleteEtudiant(id:number) {
       Swal.fire({
         title: 'êtes-vous sûre?',
         text: 'Vous ne pourrez pas récupérer cet utilisateur !',
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
 this.etudiantService.deleteEtudiant(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));

      } else if (result.dismiss === Swal.DismissReason.cancel) {
           Swal.fire(
             'Annulé',
             'Cet étudiant est en sécurité 🙂',
             'error'
           )
         }
       });
     }

     pageAjouter(){
           this.router.navigate(['add']);
     }


}
