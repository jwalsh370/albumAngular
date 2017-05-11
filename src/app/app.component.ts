import { Component, OnInit } from '@angular/core';
import { AdminService} from './admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AdminService]
})
export class AppComponent implements OnInit {
  title = 'Album Funder';
  admin: boolean;
  adminString: string;

  constructor(private adminService: AdminService){}

  ngOnInit() {
    this.admin = this.adminService.getAdmin();
    this.adminString = this.adminService.getAdminString();
  }

}
