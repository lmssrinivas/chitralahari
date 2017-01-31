/**
 * Created by mlingolu on 1/30/17.
 */


import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


import { FooterComponent } from './footer/footer.component';
import {InputSearchComponent} from "./input-search/input-search.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    exports: [
        FooterComponent,
        InputSearchComponent
    ],
    declarations: [
        FooterComponent,
        InputSearchComponent
    ],
    providers: [],
})
export class WidgetsModule { }
