import { Image } from "./Image.model";
import { Pays } from "./pays.model";

export class Marque {
    idMarque? : number;
    nomMarque? : string;
    chiffreaffaire? : number;
     dateValidation? : Date ;
     secteurActivite? : string;
     slogan? : string;
    
  pays?: any;
  image! : Image
  images!: Image[];

imageStr!:string


    }

export { Pays };
