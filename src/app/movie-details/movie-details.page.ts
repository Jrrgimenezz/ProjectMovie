import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  constructor(http: HttpClient, private route: ActivatedRoute) { }

  getUrl(web:string){

  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id")
  }
  getDetails() {

  }
}
