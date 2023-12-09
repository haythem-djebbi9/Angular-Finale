import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarqueService } from '../MarqueService';
import { Marque } from '../model/marque.model';
import { Pays } from '../model/pays.model';
import { Image } from '../model/Image.model';

@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styleUrls: ['./update-marque.component.css']
})
export class UpdateMarqueComponent implements OnInit {
  currentMarque: Marque = new Marque();
  pays: Pays[] = [];
  updatedPaysId!: number;
  myImage! :string;
  
  

  uploadedImage!: File;
  isImageUpdated: Boolean=false;
  constructor(private activatedRoute: ActivatedRoute, private marqueService: MarqueService, private router: Router) { }

  ngOnInit() {
    this.marqueService.listePays().
    subscribe(pa => {this.pays = pa;
      console.log(pa);
  });

    this.marqueService.consulterMarque(this.activatedRoute.snapshot.params['id']).subscribe(marque => {
      this.currentMarque = marque;
      this.updatedPaysId = this.currentMarque.pays.idPays;
      this.marqueService
.loadImage(this.currentMarque.image.idImage)
.subscribe((img: Image) => {
this.myImage = 'data:' + img.type + ';base64,' + img.image;
}); 
    });
  }

  updateMarque(): void {
    this.currentMarque.pays = this.pays.find(pays => pays.idPays == this.updatedPaysId);
    if (this.currentMarque.pays) {
      this.marqueService.updateMarque(this.currentMarque).subscribe(marque => {
        this.router.navigate(['marques']);
      });
      if (this.isImageUpdated)
{this.marqueService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
this.currentMarque.image = img;
this.marqueService
.updateMarque(this.currentMarque)
.subscribe((prod) => {
this.router.navigate(['marques']);
});
});
}
else{
this.marqueService
.updateMarque(this.currentMarque)
.subscribe((prod) => {
this.router.navigate(['marques']);
});
}

    }
  }
  onImageUpload(event: any) {
    if(event.target.files && event.target.files.length) {
    this.uploadedImage = event.target.files[0];
    this.isImageUpdated =true;
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => { this.myImage = reader.result as string; };
    }
    }
    onAddImageProduit(){
      this.marqueService
      .uploadImageMar(this.uploadedImage,this.uploadedImage.name,this.updatedPaysId = this.currentMarque.pays?.idPays || 0
        )
          .subscribe( (img : Image) => {
                this.currentMarque.images.push(img);
             });
    }
  
    supprimerImage(img: Image) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.marqueService.supprimerImage(img.idImage).subscribe(() => {
          //supprimer image du tableau currentProduit.images 
          const index = this.currentMarque.images.indexOf(img, 0);
          if (index > -1) {
            this.currentMarque.images.splice(index, 1);
          }
        });
    }
}
