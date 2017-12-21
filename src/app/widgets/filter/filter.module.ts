import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from "./filter.component";
import {AccordionModule, SelectButtonModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    SelectButtonModule,
    FormsModule
  ],
  declarations: [
      FilterComponent
  ],
  exports: [
      FilterComponent
  ]
})
export class FilterModule { }
