import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Link1Component } from './pages/link1/link1.component';
import { Link2Component } from './pages/link2/link2.component';
import { Link3Component } from './pages/link3/link3.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'link1', component: Link1Component },
  { path: 'link2', component: Link2Component },
  { path: 'link3', component: Link3Component },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
