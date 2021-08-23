import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  sex = ['Maschio', 'Femmina', 'Non specifico'];

  confirmationMessage =
    "Compilando questo modulo autorizzi l'utilizzo dell'immagine e il trattamento dei dati personali. Vuoi procedere?";

  constructor() {}
}
