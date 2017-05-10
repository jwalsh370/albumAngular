import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: string;
  albumToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private albumService: AlbumService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

  clickSupport(amount: string, currentAmount: string) {
    this.albumService.donate(this.albumId, amount, currentAmount);
  }
}
