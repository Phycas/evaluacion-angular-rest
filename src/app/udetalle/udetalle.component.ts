import { Component, OnInit, Input } from '@angular/core';
import { Signed } from '../dtos/signed';
import { Router, ActivatedRoute } from '@angular/router';
import { SignedserviceService } from '../signedservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-udetalle',
  templateUrl: './udetalle.component.html',
  styleUrls: ['./udetalle.component.css'],
})
export class UdetalleComponent implements OnInit {
  state$: Observable<Signed>;
  signed: Signed;
  constructor(
    private route: Router,
    private signedService: SignedserviceService,
    public activatedRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    const username = this.activatedRoute.snapshot.paramMap.get('username');

    this.signedService.findByUsername(username)
    .subscribe(
        (res) => {
          this.signed = res;
          console.log(this.signed);
         }, err => {
          console.log('Error:');
          console.log(err);
        }, () => {
          console.log('¡Servicio Finalizado!');
        }
    );
  }

}
