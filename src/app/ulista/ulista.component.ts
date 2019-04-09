import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signed } from '../dtos/signed';
import { SignedserviceService } from '../signedservice.service';

@Component({
  selector: 'app-ulista',
  templateUrl: './ulista.component.html',
  styleUrls: ['./ulista.component.css'],
})
export class UlistaComponent implements OnInit {
  signed: Signed;
  listaSigned: Signed[];

  constructor(
    private route: Router,
    private signedService: SignedserviceService
  ) { }

  ngOnInit() {
    this.llenarLista();
  }

  llenarLista() {
    this.listaSigned = [];
    this.signedService.getAll()
    .subscribe(
        (res) => {
          this.listaSigned = res;
          console.log(this.listaSigned);
         }, err => {
          console.log('Error:');
          console.log(err);
        }, () => {
          console.log('¡Servicio Finalizado!');
        }
    );
  }

  public onSelect(este: Signed) {
    this.route.navigate(['detalle/' + este.user.nombre]);
  }

}
