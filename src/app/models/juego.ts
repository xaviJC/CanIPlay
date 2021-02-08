export class Juego {

  public id_juego: number;
  public titulo_juego: string;
  public genero: string;
  public pegi: number;
  public plataforma: string[];
  public tarjeta_jugador: string;
  public tarjeta_pagos: string;
  public tarjeta_contenido: string;
  public tarjeta_internet: string;
  public caratula_juego: string;
  public pantallazo1: string;
  public pantallazo2: string;
  public pantallazo3: string;
  public pantallazo4: string;
  public votos: number;
  public puntuacionTotal: number;
  public web_oficial: string;

  constructor(id_juego: number, titulo_juego: string, genero: string, pegi: number, plataforma:string [],
    tarjeta_jugador: string, tarjeta_pagos: string, tarjeta_contenido: string, tarjeta_internet: string,
    caratula_juego: string, pantallazo1: string, pantallazo2: string, pantallazo3: string, pantallazo4: string,
    votos: number, puntuacionTotal: number, web_oficial: string) {
    this.id_juego = id_juego;
    this.titulo_juego = titulo_juego;
    this.genero = genero;
    this.pegi = pegi;
    this.plataforma = plataforma;
    this.tarjeta_jugador = tarjeta_jugador;
    this.tarjeta_pagos = tarjeta_pagos;
    this.tarjeta_contenido = tarjeta_contenido;
    this.tarjeta_internet = tarjeta_internet;
    this.caratula_juego = caratula_juego;
    this.pantallazo1 = pantallazo1;
    this.pantallazo2 = pantallazo2;
    this.pantallazo3 = pantallazo3;
    this.pantallazo4 = pantallazo4;
    this.votos = votos;
    this.puntuacionTotal = puntuacionTotal;
    this.web_oficial = web_oficial
  }

}
