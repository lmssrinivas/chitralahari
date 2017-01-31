/**
 * Created by mlingolu on 1/31/17.
 */

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'music',
      pathMatch:'full'
  }
];


export const AppRouting= RouterModule.forRoot(routes);