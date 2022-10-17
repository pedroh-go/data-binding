import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://github.com/pedroh-go';
  cursoAngular: boolean =  true;
  urlImagem: string = 'https://st3.depositphotos.com/2435397/17055/i/450/depositphotos_170557180-stock-photo-cartoon-scene-wolf-piglets-traditional.jpg';

  valorAtual: string = '';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("Olá mundo");
  }

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
