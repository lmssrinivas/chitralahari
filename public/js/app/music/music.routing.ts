import {Routes, RouterModule} from "@angular/router";
import {MusicComponent} from "./music.component";
/**
 * Created by mlingolu on 1/31/17.
 */


const routes :Routes = [
    {
        path : 'music',
        component : MusicComponent
    }
]


export const MusicRouting = RouterModule.forChild(routes);