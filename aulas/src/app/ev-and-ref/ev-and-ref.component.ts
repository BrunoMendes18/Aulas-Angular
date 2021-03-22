import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  @ViewChild ('refExp') referencia:ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  cor:string="black";

  changeColor(corR:string)
  {
    this.cor=corR;
  }

  analisarReferencia()
  {
    console.log(this.referencia.nativeElement.value);
    this.referencia.nativeElement.style.background="black";

  }

}
