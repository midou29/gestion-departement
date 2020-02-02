import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { SectionService } from "../section.service";
import { Section } from "../section";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {
  sections: Observable<Section[]>;
  closeResult: string;
  section: Section = new Section();
   constructor(private sectionService: SectionService,private modalService: NgbModal,
     private router: Router) { }



   ngOnInit() {   this.reloadData();

   }

   newSection(): void {

      this.section = new Section();
    }

    save() {
      this.sectionService.createSection(this.section)
        .subscribe(data => console.log(data), error => console.log(error));
      this.section = new Section();
      Swal.fire({

        icon: 'success',
        title: 'Section a été ajouté avec succés',
        showConfirmButton: true,

      })


    }

Ajouter(){
  this.save();
}


   openLg(content) {
     this.modalService.open(content, { size: 'lg' });
   }


   reloadData() {
     this.sections = this.sectionService.getSectionsList();
   }


   deleteSection(id: number) {
     this.sectionService.deleteSection(id)
       .subscribe(
         data => {
           console.log(data);
           this.reloadData();
         },
         error => console.log(error));
   }








}
