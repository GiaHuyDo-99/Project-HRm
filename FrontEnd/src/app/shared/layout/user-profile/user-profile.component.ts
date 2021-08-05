import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  fullName: string;
  role: string;
  imageURL: string;
  ngOnInit(): void {
     this.fullName = JSON.parse(localStorage.getItem('access_token')).FullName;
     this.role = JSON.parse(localStorage.getItem('access_token')).Role;
     this.imageURL = JSON.parse(localStorage.getItem('access_token')).ProfileImageURL;     
  }
  checkError(){
    this.imageURL = 'assets/svg/default-avatar.jpg';
  }

}
