import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  isLoading: boolean;

  constructor(private userService: UserService) {
    this.isLoading = true;
    this.userService.getUserByUsername('rojasmi1').subscribe(user => {
      this.user = user;
      this.isLoading = false;
    });
  }

  ngOnInit() {
  }

}
