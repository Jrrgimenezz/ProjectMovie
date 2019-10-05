export class Movie {
  nombre:string;
  fechaLanzamiento:string;
  imagen:string;
  media:number;
  id:string;

  constructor(nombre:string, fecha:string, imagen:string, media:number, id:string) {
    this.nombre = nombre;
    this.fechaLanzamiento = fecha;
    this.imagen = imagen;
    this.media = media;
    this.id = id;

  }
}
