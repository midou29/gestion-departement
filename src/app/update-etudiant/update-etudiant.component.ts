import { Component, OnInit } from '@angular/core';
import { EtudiantService } from "../etudiant.service";
import { Etudiant } from "../etudiant";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  id: number;
  etudiant: Etudiant;

  constructor(private route: ActivatedRoute,private router: Router,
    private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.etudiant = new Etudiant();

    this.id = this.route.snapshot.params['id'];

    this.etudiantService.getEtudiant(this.id)
      .subscribe(data => {
        console.log(data)
        this.etudiant = data;
      }, error => console.log(error));
  }

  updateEtudiant() {
      this.etudiantService.updateEtudiant(this.id, this.etudiant)
        .subscribe(data => console.log(data), error => console.log(error));
      this.etudiant = new Etudiant();

    }

    onSubmit() {
      this.updateEtudiant();

      Swal.fire({

        icon: 'success',
        title: 'étudiant a été modifié avec succés',
        showConfirmButton: true,

      })




        this.gotoList();
    }

    gotoList() {
      this.router.navigate(['/etudiants']);
    }








}
