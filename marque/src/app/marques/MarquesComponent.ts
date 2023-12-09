import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../MarqueService';
import { Image } from '../model/Image.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
})
export class MarquesComponent implements OnInit {
  marques: Marque[] = [];
  currentMarque: Marque = new Marque();

  constructor(private marqueService: MarqueService,public authService: AuthService) {}

  ngOnInit(): void {
    this.chargerMarques();
  }

  chargerMarques(){
    this.marqueService.listeMarques().subscribe(m => {
    //  console.log(prods);
      this.marques = m;

      this.marques.forEach((m) => {
        m.imageStr = 'data:' + m.image.type + ';base64,' + m.image.image;
        }); 

      });
  }

  supprimerMarque(marque: Marque): void {
    const conf = confirm('Etes-vous sûr ?');
    if (conf && marque.idMarque !== undefined) {
      this.marqueService.supprimerMarque(marque.idMarque).subscribe(
        () => {
          console.log('Marque supprimée avec succès !');
          this.chargerMarques();
        },
        (error: any) => {
          console.error('Une erreur s\'est produite lors de la suppression de la marque :', error);
        }
      );
    }
  }
}
