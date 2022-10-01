import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldBankService {
url = 'http://localhost:8080/v1/worldbank/';

  constructor(private http: HttpClient) { }

  getWorldBank(country: string) {
    return this.http.get(this.url + country);
  }

}
