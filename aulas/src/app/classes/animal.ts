export class Animal
{
  nome:string;
  nomeDoDono:string;
  especie:string;
  imagemAnimal:string;
  dataProximaConsulta:Date | undefined;

  constructor(nome:string,nomeDoDono:string,especie:string,imagemAnimal:string)
  {
    this.dataProximaConsulta=undefined;
    this.nome=nome;
    this.nomeDoDono=nomeDoDono;
    this.especie=especie;
    this.imagemAnimal=imagemAnimal;
  }

}
