import { NgModule } from '@angular/core';

// el objetivo de este modulo es exportar todos los modulos que voy a necesitar de primeNg
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  exports: [
    MenuModule
  ]
})
export class PrimeNgModule { }
