import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupremeService {
  url = 'https://www.supremenewyork.com';
  headers: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) { }

  async getItems(){
    this.setHeaders()
    
    // return await this.http.get( `${this.url}/shop.json?_=1607377779866`, { headers: this.headers } ).toPromise();    
    return await fetch(`${this.url}/shop.json?_=1607377779862`, {
      method: 'GET',
      headers: {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'upgrade-insecure-requests' : '1',
        'sec-fetch-site': 'none',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
        
      }
    })
  }

  setHeaders(){
    this.headers = new HttpHeaders().set('accept', `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9`)
    .set('accept-language', 'ru,ru-RU;q=0.9,en-US;q=0.8,en-GB;q=0.7,en;q=0.6')
    .set('sec-fetch-site', 'none')
    .set('upgrade-insecure-requests', '1')
    .set('sec-fetch-user', '?1')
    .set('sec-fetch-dest', 'document')
  }

// `  accept-encoding: gzip, deflate, br
//   : `

//   `pragma: no-cache
//   sec-fetch-dest: empty
//   sec-fetch-mode: cors


}
