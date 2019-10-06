import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Movie} from '../Movies';
import {Location} from '@angular/common';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  pelicula:Movie = new Movie("", "","","",0,"")
  id:string
  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location) { }

  getUrl(id:string):string{
    var hola= "https://api.themoviedb.org/3/movie/" + id + "?api_key=e69dc01db9a3655b900f21756285d275"
    return hola
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }
  getDetails() {
    this.http.get(this.getUrl(this.id)).subscribe( (data:any) => {
      console.log(data)
      var img = "http://image.tmdb.org/t/p/w185//" + data.poster_path
      this.pelicula = new Movie(data.original_title, this.id, data.release_date, img, data.vote_average, data.overview)
      console.log(this.pelicula)
    })}
  getBack(){
    this.location.back();
  }

}
