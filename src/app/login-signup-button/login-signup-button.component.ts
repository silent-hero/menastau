import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login-signup-button',
  templateUrl: './login-signup-button.component.html',
  styleUrls: ['./login-signup-button.component.css']
})
export class LoginSignupButtonComponent implements OnInit {

  constructor(public userService: UserService, public sharedService: SharedService) { }

  ngOnInit()
  {

  }

}
