import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  @ViewChild ('refExp') referencia:ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  name:string="";
  arrayAnimais:Array<string>=["cão","gato","papagaio","texugo"];

  changeName(event){
    this.name=event.target.value;
  }

  analisarReferencia()
  {
    console.log(this.referencia.nativeElement.value);
    this.referencia.nativeElement.style.background="red";

  }

  analisarReferenciaPorParametro(referenciaParametro)
  {
    console.log(referenciaParametro);
    referenciaParametro.style.background="red";

  }

}
