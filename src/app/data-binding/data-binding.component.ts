import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  /*styles:[//aplicando estilos com metadado styles. Use apenas se o estilo tiver menos de 5 linhas. Caso contrário use styleUrls conforme acima.
    `
      .highlight{
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]*/
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://github.com/pedroh-go';
  cursoAngular: boolean = true;
  urlImagem: string =
    'https://st3.depositphotos.com/2435397/17055/i/450/depositphotos_170557180-stock-photo-cartoon-scene-wolf-piglets-traditional.jpg';

  //Declaração de variáveis usando TypeScript para Tipar
  conteudoAtual: string = '';
  conteudoSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';

  //Objeto Pessoa
  pessoa = {nome: '', idade: 18};

  nomeDoCurso: string = 'Curso Angular';//Variável para teste de compartilhamento de dados entre componentes.

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Olá mundo');
  }

  onKeyUp(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement>evento.target).value);
    this.conteudoAtual = (<HTMLInputElement>evento.target).value;
  }

  onKeyUpValue(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.nome = elemento.value;
    }
  }

  onSave(valor: string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }


  constructor() {}

  ngOnInit(): void {}
}
