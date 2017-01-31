/**
 * Created by mlingolu on 1/30/17.
 */


import { NgModule } from '@angular/core';
import { MusicComponent } from './music.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";


import {WidgetsModule} from "../widgets/widget.module";
import {HttpModule} from "@angular/http";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WidgetsModule,
        HttpModule
    ],
    exports: [],
    declarations: [MusicComponent],
    providers: [],
})
export class MusicModule { }
