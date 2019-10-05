export class Movie {
  nombre:string;
  fechaLanzamiento:string;
  imagen:string;
  media:number;

  constructor(nombre:string, fecha:string, imagen:string, media:number) {
    this.nombre = nombre;
    this.fechaLanzamiento = fecha;
    this.imagen = imagen;
    this.media = media;

  }
}
