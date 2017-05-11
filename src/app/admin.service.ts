import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {
  public admin: boolean = false;
  public adminString: string = "Guest";

  constructor() {}

  setAdmin(val, userString) {
    this.admin = val;
    this.adminString = userString;
    console.log(this.admin);
    console.log(this.adminString);
  }

  getAdmin() {
    return this.admin;
  }

  getAdminString() {
    return this.adminString;
  }

  getOpposite() {
    if (this.adminString === "Guest") {
      return "Admin";
    } else {
      return "Guest";
    }
  }
}
