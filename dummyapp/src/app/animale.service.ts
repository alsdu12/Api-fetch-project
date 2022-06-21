import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimaleService {
  constructor(private http: HttpClient) {}
  getData() {
    let url =
      'https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=pending&status=sold';
   
    return this.http.get(url);
  }

 
}
