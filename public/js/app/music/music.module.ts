/**
 * Created by mlingolu on 1/30/17.
 */

import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {WidgetsModule} from "../widgets/widget.module";
import {HttpModule} from "@angular/http";

import {MusicRouting} from "./music.routing";

import { MusicComponent } from './music.component';
import {MusicDetailsComponent} from "./music-details/music-details.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        WidgetsModule,
        HttpModule,
        MusicRouting
    ],
    exports: [],
    declarations: [
        MusicComponent,
        MusicDetailsComponent
    ],
    providers: [

    ],
})
export class MusicModule { }
