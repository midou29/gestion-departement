import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { AbsenceService } from "../absence.service";
import { Absence } from "../absence";
import { Router } from '@angular/router';

@Component({
  selector: 'app-absence-list',
  templateUrl: './absence-list.component.html',
  styleUrls: ['./absence-list.component.css']
})
export class AbsenceListComponent implements OnInit {
nabsences: any=[] ;
  absences: Observable<Absence[]>;

   constructor(private absenceService: AbsenceService,
     private router: Router) { }

   ngOnInit() {   this.reloadData();
   }


   reloadData() {
     this.absences = this.absenceService.getAbsencesList();
   }

   deleteAbsence(id: number) {
     this.absenceService.deleteAbsence(id)
       .subscribe(
         data => {
           console.log(data);
           this.reloadData();
         },
         error => console.log(error));
   }

pageAjouter(){
  this.router.navigate(['/addAbsence']) ;
}







}
