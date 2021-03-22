import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escolher-animal',
  templateUrl: './escolher-animal.component.html',
  styleUrls: ['./escolher-animal.component.css']
})
export class EscolherAnimalComponent implements OnInit {

  constructor() { }

  @Input() animalRecebido;

  ngOnInit(): void {
  }

}
