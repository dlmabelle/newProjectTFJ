import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient) {
  }

  readAPI(URL: string, postData) {
    return this.http.post(URL, postData);
  }

  login() {
    let postData = {
      "username": "admin",
      "password": "admin",
    }
    this.readAPI('http://localhost:3000/users', JSON.stringify(postData))
    .subscribe((data) => {
    console.log(data);
  });
  }
  ngOnInit() {
  }

}
