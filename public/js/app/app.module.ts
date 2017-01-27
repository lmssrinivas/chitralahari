/**
 * Created by mlingolu on 1/26/17.
 */


import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";

import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        HttpModule,
        CommonModule
    ],
    exports: [],
    declarations: [AppComponent],
    bootstrap:[AppComponent],
    providers: [ ],
})
export class AppModule { }

