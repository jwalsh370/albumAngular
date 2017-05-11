import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { routing } from '../app.routing';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  providers: [AlbumService]
})

export class AlbumListComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;

  filterByGenre: String = "allGenres";

  constructor(private router: Router, private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  clickDetails(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  }

  onChange(selectGenre) {
    this.filterByGenre = selectGenre;

  }
}
