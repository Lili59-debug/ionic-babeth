import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'qui',
    loadChildren: () => import('./pages/qui/qui.module').then( m => m.QuiPageModule)
  },
  {
    path: 'adherer',
    loadChildren: () => import('./pages/adherer/adherer.module').then( m => m.AdhererPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./pages/produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'rayons',
    loadChildren: () => import('./pages/rayons/rayons.module').then( m => m.RayonsPageModule)
  },
  {
    path: 'oubli',
    loadChildren: () => import('./pages/oubli/oubli.module').then( m => m.OubliPageModule)
  },
  {
    path: 'cgv',
    loadChildren: () => import('./pages/cgv/cgv.module').then( m => m.CgvPageModule)
  },
  {
    path: 'mentions-legales',
    loadChildren: () => import('./pages/mentions-legales/mentions-legales.module').then( m => m.MentionsLegalesPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
