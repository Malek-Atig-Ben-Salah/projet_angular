export class Apprtement {
  id: number;
  numAppart: number;
  surface: number;
  terasse: string;
  surfaceTerrace: number;
  categorie: string;
  description: string;
  residence: number;

  constructor(
    id: number,
    numAppart: number,
    surface: number,
    terasse: string,
    surfaceTerrace: number,
    categorie: string,
    description: string,
    residence: number
  ) {
    this.id = id;
    this.numAppart = numAppart;
    this.surface = surface;
    this.terasse = terasse;
    this.surfaceTerrace = surfaceTerrace;
    this.categorie = categorie;
    this.description = description;
    this.residence = residence;
  }
}
