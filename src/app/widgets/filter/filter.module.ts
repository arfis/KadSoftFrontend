import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterComponent} from "./filter.component";
import {AccordionModule, SelectButtonModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {MatSelectModule, MatSlideToggleModule} from "@angular/material";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        AccordionModule,
        SelectButtonModule,
        FormsModule,
        MatSelectModule,
        MatSlideToggleModule,
        SharedModule,
    ],
    declarations: [
        FilterComponent
    ],
    exports: [
        FilterComponent
    ]
})
export class FilterModule {
}
