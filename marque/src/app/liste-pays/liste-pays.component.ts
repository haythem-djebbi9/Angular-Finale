import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../MarqueService';
import { Pays } from '../model/pays.model';

@Component({
  selector: 'app-liste-pays',
  templateUrl: './liste-pays.component.html',
  styleUrls: ['./liste-pays.component.css']
})
export class ListePaysComponent implements OnInit {
  payss: Pays[] = [];
  updatedPay: Pays = {
    idPays: 0, nomPays: '',
    continent: ''
  };
  ajout = true;

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.chargerPays();
  }

  chargerPays() {
    this.marqueService.listePays().subscribe(pays => {
      this.payss = pays;
      console.log(pays);
    });
  }

  updatePay(pay: Pays) {
    this.updatedPay = pay;
    this.ajout = false;
  }

  payUpdated(pay: Pays) {
    console.log("Pay updated event", pay);
    this.marqueService.ajouterPay(pay).subscribe(() => this.chargerPays());
  }

  supprimerPay(pay: Pays) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.marqueService.supprimerPay(pay.idPays).subscribe(() => {
        console.log("Pay supprimé");
        this.chargerPays();
      });
    }
  }
}
