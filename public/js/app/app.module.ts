/**
 * Created by mlingolu on 1/26/17.
 */


import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {MaterialModule} from "@angular/material";
import {MusicModule} from "./music/music.module";
import {WidgetsModule} from "./widgets/widget.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        HttpModule,
        CommonModule,
        MaterialModule.forRoot(),
        MusicModule,
        WidgetsModule
    ],
    exports: [],
    declarations: [AppComponent],
    bootstrap:[AppComponent],
    providers: [ ],
})
export class AppModule { }

