
import { Matiere } from './matiere';
import { Etudiant } from './etudiant';


export class Absence {
    id: number;


  type: string;
  matiere: Matiere;
  etudiant: Etudiant;
  dateAbsence: string;


}
