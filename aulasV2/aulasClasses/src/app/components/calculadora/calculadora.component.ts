import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  number1:number=0;
  number2:number=0;

  ph:PhoneBookService
  constructor(private pService:PhoneBookService) {
    this.ph=pService;
 }

  ngOnInit(): void {
  }


}

