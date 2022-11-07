import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PushDeleteDirective } from './push-delete.directive';


@NgModule({
  declarations: [PushDeleteDirective],
  imports: [
    CommonModule
  ],
  exports: [PushDeleteDirective]
})
export class PushDeleteModule { }
