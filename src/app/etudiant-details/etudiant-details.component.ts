import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { EtudiantListComponent } from '../etudiant-list/etudiant-list.component';

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {
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
  list(){
      this.router.navigate(['etudiants']);
    }


}
