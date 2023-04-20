import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements OnInit {

  //Recebe um valor do componente pai 'data-binding.component.ts' para este componente filho.
  @Input() valor: any = 0;

  @ViewChild('campoInput') campoValorInput!: ElementRef; // O "!" é para não exigir a inicialização da variável

  /*
  EventEmitter: usado para passar eventos para frente ou
  seja passar um evento deste componente filho para o componente pai 'data-binding.component.ts'*/
  @Output() mudouValor =  new EventEmitter();// @Output() usado para expor um valor ou evento, nesse caso será exposto para o componente pai 'data-binding.component.ts'

  incrementa() {

   // console.log(this.campoValorInput.nativeElement.value);

    this.campoValorInput.nativeElement.value++;
    //this.valor++;
    //passa informações para o componente pai 'data-binding.component.ts
    this.mudouValor.emit({novoValor: this.valor}); //emit() pode receber como argumento desde string até objetos complexos
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    //this.valor--;
    //passa informações para o componente pai 'data-binding.component.ts
    this.mudouValor.emit({novoValor: this.valor}); //emit() pode ter como argumento desde string até objetos complexos
  }

  constructor() {}

  ngOnInit(): void {}
}
