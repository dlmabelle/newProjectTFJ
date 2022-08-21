import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.page.html',
  styleUrls: ['./listing-page.page.scss'],
})
export class ListingPagePage implements OnInit {
  employes = null;

  constructor(private http: HttpClient) {
    this.readAPI('http://localhost:3000/employees')
      .subscribe((data) => {
        this.employes = data;
      console.log( this.employes);
    });
  }
  readAPI(URL: string) {
    return this.http.get(URL);
  }

  ngOnInit() {
  }

  

}
