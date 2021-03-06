import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent} from './album-detail/album-detail.component';
import { NewAlbumComponent } from './new-album/new-album.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AlbumListComponent
  }, {
    path: 'albums/:id',
    component: AlbumDetailComponent
  }, {
    path: 'new',
    component: NewAlbumComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
