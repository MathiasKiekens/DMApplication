import { Component, OnInit } from '@angular/core';
import bcrypt from 'bcrypt';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.ValidatePlayerLogin('mathias.kiekens@gmail.com', 'i&uefhdhf').then(function (data)
    {
      console.log(data);
      if (data == true) {
        console.log("valid");
      }
      else
      {
        console.log("not valid");
      }
    });
  }

  private HashPassword(plainTextPassword: string): string {
    let result: string = "";
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(plainTextPassword, salt, function(err, hash) {
        result = hash;
      });
    });

    return result;
  }

}
