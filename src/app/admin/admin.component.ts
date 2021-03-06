import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: boolean;
  buttonString: string;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.admin = this.adminService.getAdmin();
    this.buttonString = this.adminService.getOpposite();
  }

  clickAdmin() {
    if (this.adminService.getAdmin()) {
      this.adminService.setAdmin(false, "Guest");
    } else {
      this.adminService.setAdmin(true, "Admin");
    }
    this.router.navigate(['']);
  }

}
