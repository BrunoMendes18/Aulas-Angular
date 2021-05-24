import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  corBackGround="";

  changeColor()
  {
    this.corBackGround=this.corBackGround=='red' ? 'white':'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
