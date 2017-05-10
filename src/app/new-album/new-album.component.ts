import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css'],
  providers: [AlbumService]
})
export class NewAlbumComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService) { }

  ngOnInit() {
  }

  submit(albumName, artistName, description, genre, goal, manager, reward, url){
  var  newAlbum: Album = new Album (albumName, artistName, description, genre, goal, manager, reward, url);
  this.albumService.addAlbum(newAlbum);
  }

}
