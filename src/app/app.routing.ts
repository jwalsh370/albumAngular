import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AlbumListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
