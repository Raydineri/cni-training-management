import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  
  dossier: any = {
    ministere: '',
    entreprise: '',
    application: '',
    nom_vis_a_vis: '', 
    tel_vis_a_vis: 0,
    portable_vis_a_vis: 0,  
    email: '',
    reference_bc: '',
    date_bc: new Date(),
    date_bo_bc: new Date(),
    date_livraison: new Date(),
    date_limite_formation: new Date(),
    remarque: ''
  }

  
  constructor(private data: DataService , private router: Router) { }

  ngOnInit(): void {
  }
ajouter(){

  
this.data.create(this.dossier)
.subscribe(
  res => {
    console.log(res);  // Afficher la réponse dans la console
    this.router.navigate(['/daca'])
  },
  err => {
    console.log(err);
  }
);
}
}


