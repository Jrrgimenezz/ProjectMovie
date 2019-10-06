export class Movie {
  nombre:string;
  fechaLanzamiento:string;
  imagen:string;
  media:number;
  id:string;
  resumen:string;
  constructor(nombre:string, id:string, fecha?:string, imagen?:string, media?:number, resumen?:string) {
    this.nombre = nombre;
    this.fechaLanzamiento = fecha;
    this.imagen = imagen;
    this.media = media;
    this.id = id;
    this.resumen = resumen;
  }
}
