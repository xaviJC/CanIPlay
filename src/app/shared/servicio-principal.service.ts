import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicioPrincipalService {
  public tipoUsuario: string;
  constructor() { }

  public authenticate(): string {
    this.tipoUsuario = "user";
    return this.tipoUsuario;
  }

}

// export class AlbumService {

//   private url = "http://localhost:3000/albums"

//   public album: Album
//   constructor(private http: HttpClient) { }

//   getAlbums() {
//     return this.http.get(this.url + "/")
//   }

//   getAlbum(album_id: number) {
//     return this.http.get(this.url + "/?id=" + album_id)
//   }

//   postAlbum(newAlbum: Album) {
//     return this.http.post(this.url, newAlbum)
//   }

//   putAlbum(updatedAlbum: Album) {
//     return this.http.put(this.url, updatedAlbum)
//   }

//   delAlbum(id: string) {
//     return this.http.delete(this.url + "/?id=" + Number(id))
//   }

// }

