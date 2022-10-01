import { Component, OnInit } from '@angular/core';
import { WorldBankService } from '../service/worldbank.service';

@Component({
  selector: 'app-worldbank-component',
  templateUrl: './worldbank.component.html',
  styleUrls: ['./worldbank.component.css']
})
export class WorldBankComponent {
  countries;s
  public isNaoEncontrado = false;
  public isProblema = false;
  public isCampoObrigatorio = false;
  constructor(private service: WorldBankService) { }

  getWorldBank(country) {
    this.isCampoObrigatorio = false;
    if(country == '' || country == undefined) {
      this.isCampoObrigatorio = true;
      return;
    }
    this.isNaoEncontrado = false;
    this.isProblema = false;
    this.countries = null;
    try {
      this.service.getWorldBank(country).subscribe((data:any)=>{
        this.countries = data;
      }, (error: any)=> {
        if(error.status == '404') {
          this.isNaoEncontrado = true;
        } else {
          this.isProblema = true;
        }
      })
    } catch (err) {
      this.isProblema = true;
    }
  }

}
