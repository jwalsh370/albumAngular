import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;
  currentAlbum: FirebaseObjectObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  getAlbumById(albumId: string) {
    return this.database.object('albums/' + albumId);
  }

  donate(albumId: string, amount: string, currentAmount: string) {
    var firebaseAlbum = this.getAlbumById(albumId);
    var newAmount: number = parseInt(currentAmount) + parseInt(amount);
    firebaseAlbum.update({currentAmount: newAmount});
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

}
