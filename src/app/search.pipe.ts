import { Pipe, PipeTransform } from '@angular/core';
import { Absence } from "./absence";
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(nabsences: Absence[], term:string): any {
    console.log('term', term);
    return term ? nabsences.filter(nabsences => nabsences.etudiant.nom.toLowerCase().indexOf(term.toLowerCase()) !== -1) : nabsences;

  }

}
