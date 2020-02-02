import { Component, OnInit } from '@angular/core';
import { Enseignant} from '../enseignant';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from '../enseignant.service';
import { EnseignantListComponent } from '../enseignant-list/enseignant-list.component';
import { AttributionService } from "../attribution.service";
import { Attribution } from "../attribution";
import { Observable } from "rxjs";

@Component({
  selector: 'app-enseignant-details',
  templateUrl: './enseignant-details.component.html',
  styleUrls: ['./enseignant-details.component.css']
})
export class EnseignantDetailsComponent implements OnInit {
  id: number;
  enseignant: Enseignant;
  attributions: Observable<Attribution[]>;


  constructor(private route: ActivatedRoute,private router: Router, private attributionService: AttributionService,
    private enseignantService: EnseignantService) {


    }

  ngOnInit() {
    this.reloadData();

    this.enseignant = new Enseignant();

    this.id = this.route.snapshot.params['id'];

    this.enseignantService.getEnseignant(this.id)
      .subscribe(data => {
        console.log(data)
        this.enseignant = data;
      }, error => console.log(error));
  }
  list(){
      this.router.navigate(['enseignants']);
    }

    reloadData() {
      this.attributions = this.attributionService.getAttributionsList();
    }



}
