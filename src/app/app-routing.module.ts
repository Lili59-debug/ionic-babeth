import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'qui',
    loadChildren: () => import('./qui/qui.module').then( m => m.QuiPageModule)
  },
  {
    path: 'adherer',
    loadChildren: () => import('./adherer/adherer.module').then( m => m.AdhererPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'rayons',
    loadChildren: () => import('./rayons/rayons.module').then( m => m.RayonsPageModule)
  },
  {
    path: 'oubli',
    loadChildren: () => import('./oubli/oubli.module').then( m => m.OubliPageModule)
  },
  {
    path: 'cgv',
    loadChildren: () => import('./cgv/cgv.module').then( m => m.CgvPageModule)
  },
  {
    path: 'mentions-legales',
    loadChildren: () => import('./mentions-legales/mentions-legales.module').then( m => m.MentionsLegalesPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
