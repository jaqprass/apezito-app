import { Component, OnInit } from '@angular/core';
import { RotasService } from '../services/rotas/rotas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walkingroute',
  templateUrl: './walkingroute.page.html',
  styleUrls: ['./walkingroute.page.scss'],
})
export class WalkingroutePage implements OnInit {
  constructor(private rotasService: RotasService, private router: Router) {}

  ngOnInit() {}

  exibeMapa() {
    const enderecos = this.rotasService.getPercurso();
    this.router.navigate(['tabs/mapa'], { state: { enderecos: enderecos } });
  }
}
