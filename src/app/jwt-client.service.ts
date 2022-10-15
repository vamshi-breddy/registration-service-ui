import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }

  public generateToken(request: any){
     return this.http.post("http://localhost:9090/authenticate",request,{responseType: 'text' as 'json'});
  }

  // public welcome(token) {
  //   let tokenStr = 'Bearer ' + token;
  //   const headers = new HttpHeaders().set('Authorization', tokenStr);
  //   return this.httpClient.get<string>("http://localhost:9191/", {headers, responseType: 'text' as 'json' });
  // }
  
}
