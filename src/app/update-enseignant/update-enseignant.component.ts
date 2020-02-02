import { Component, OnInit } from '@angular/core';
import { EnseignantService } from "../enseignant.service";
import { Enseignant } from "../enseignant";
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {

  id: number;
  enseignant: Enseignant;

  constructor(private route: ActivatedRoute,private router: Router, private enseignantService: EnseignantService) { }

  ngOnInit() {
    this.enseignant = new Enseignant();

    this.id = this.route.snapshot.params['id'];

    this.enseignantService.getEnseignant(this.id)
      .subscribe(data => {
        console.log(data)
        this.enseignant = data;
      }, error => console.log(error));
  }

  updateEnseignant() {
      this.enseignantService.updateEnseignant(this.id, this.enseignant)
        .subscribe(data => console.log(data), error => console.log(error));
      this.enseignant = new Enseignant();

    }

    onSubmit() {
      this.updateEnseignant();



      Swal.fire({

        icon: 'success',
        title: 'Enseignant a été modifié avec succés',
        showConfirmButton: true,

      })



        this.gotoList();
    }

    gotoList() {
      this.router.navigate(['/enseignants']);
    }



}
