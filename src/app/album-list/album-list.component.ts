import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../album.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { routing } from '../app.routing';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
  providers: [AlbumService]
})

export class AlbumListComponent implements OnInit {
  albums: FirebaseListObservable<any[]>;
  filterByGenre: String = "allGenres";
  admin: boolean;

  constructor(private router: Router, private albumService: AlbumService, private adminService: AdminService) { }

  ngOnInit() {
    console.log(this.admin);
    this.albums = this.albumService.getAlbums();
    this.admin = this.adminService.getAdmin();
    console.log(this.admin);
  }

  clickDetails(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  }

  onChange(selectGenre) {
    this.filterByGenre = selectGenre;
  }

}
