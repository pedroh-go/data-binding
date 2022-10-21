import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'] //,
  //inputs: ['nomeCurso: nome']//também funciona como o decorator @Input('nome') definido dentro da classe abaixo.
})
export class InputPropertyComponent implements OnInit {

  /**
   * decorator '@Input(nome)' irá expor a propriedade 'nome' para o selector 'app-curso' e assim será visível em 'data-binding.component.html'
   * dessa forma 'nome' será exposto externamente e 'nomeCurso' para uso interno.
   */
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
