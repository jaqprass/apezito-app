import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RotasService {
  constructor() {}

  getPercurso(): string[] {
    const percurso: string[] = [
      'Av. Túlio de Rose, s/n - Jardim Europa, Porto Alegre - RS',
      'Av. João Pessoa - Farroupilha, Porto Alegre - RS',
      'R. Comendador Caminha, s/n - Moinhos de Vento, Porto Alegre - RS',
      'Av. Borges de Medeiros, 2035 - Menino Deus, Porto Alegre - RS',
    ];

    return percurso;
  }
}
