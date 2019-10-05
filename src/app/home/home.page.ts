import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../Movies';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  page:number = 1
  listaPeliculas = []
  constructor(private http: HttpClient) {}

  getUrl(web:string, pageNum:number):string {     //Genera la URL a la que hacer la llamada
    var e = "https://api.themoviedb.org/3/search/movie?api_key=e69dc01db9a3655b900f21756285d275&query="
    e += web + "&page=" + pageNum;
    return e;
  }

  mensajeRecibido(e) {
  console.log(e);
  this.listaPeliculas = [];
  this.http.get(this.getUrl(e, 1)).subscribe((data:any) => { console.log(data)
    this.parseData(data);
    if (data.total_pages > 1) {
      for(var i = 2; i <= data.total_pages; i++) {
        this.http.get(this.getUrl(e, i)).subscribe(data => this.parseData(data))
      }
    }
  })
}
parseData(data:any){
    for(var i = 0; i < data.results.length; i++) {
      var pelicula = data.results[i];
      this.listaPeliculas.push(new Movie(pelicula.title, pelicula.release_date, pelicula.poster_path, pelicula.vote_average, pelicula.id))
    }
    console.log(this.listaPeliculas);

  }

}
