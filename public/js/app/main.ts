/**
 * Created by mlingolu on 1/26/17.
 */

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";


platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => {
        console.error(err);
    });