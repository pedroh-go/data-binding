import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

/* Ciclos de vida do Componente:
  ngOnChanges(um dos mais usados), ngOnInit(um dos mais usados), ngDoCheck, ngAfterContentInit, ngAfterContentChecked,
  ngAfterViewChecked, ngAfterViewInit, ngOnDestroys
*/

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css'],
})
export class CicloComponent implements
    OnChanges, //um dos mais usados, prefira este se tiver usando input-property nos componentes
    OnInit, //um dos mais usados. prefira este SE NÃO tiver usando input-property nos componentes
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  /* Ciclos de vida do Componente:
    ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked,
    ngAfterViewChecked, ngAfterViewInit, ngOnDestroys
   */
  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
