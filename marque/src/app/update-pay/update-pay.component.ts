import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pays } from '../model/pays.model';

@Component({
  selector: 'app-update-pay',
  templateUrl: './update-pay.component.html',
  styleUrls: ['./update-pay.component.css']
})

  export class UpdatePayComponent implements OnInit {
    @Input()
    pay!: Pays;
  
    @Input()
  ajout!:boolean;

    @Output()
    payUpdated = new EventEmitter<Pays>();
  
    constructor() { }
  
    ngOnInit(): void {
      console.log("ngOnInit du composant UpdatePay ", this.pay);
    }
  
    savePay() {
     
      this.payUpdated.emit(this.pay);
    }
  
  }

