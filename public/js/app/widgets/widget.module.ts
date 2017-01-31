/**
 * Created by mlingolu on 1/30/17.
 */


import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule
    ],
    exports: [FooterComponent],
    declarations: [FooterComponent],
    providers: [],
})
export class WidgetsModule { }
