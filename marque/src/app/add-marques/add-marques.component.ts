import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../MarqueService';
import { Router } from '@angular/router';
import { Pays } from '../model/pays.model'; 
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-add-marque',
  templateUrl: './add-marques.component.html',
})
export class AddMarqueComponent implements OnInit {
  newMarque: Marque = new Marque();
  pays! : Pays[];
  newIPays!:number;
  newPays!:Pays;
  uploadedImage!: File;
  imagePath: any;


  constructor(private marqueService: MarqueService, private router: Router) {}

  ngOnInit(): void {
    this.marqueService.listePays().
    subscribe(pa => {this.pays = pa;
      console.log(pa);
  });

  }

  addMarque() {

    this.marqueService
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
    this.newMarque.image=img;
    this.newMarque.pays= this.pays.find(t => t.idPays
    == this.newIPays)!;
    this.marqueService
    .ajouterMarque(this.newMarque)
    .subscribe(() => {
    this.router.navigate(['marques']);
    });
    });
  }
  
    
    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }

}