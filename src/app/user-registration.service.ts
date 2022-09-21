import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user: User){
     return this.http.post("http://localhost:9090/register",user,{responseType:'text' as 'json'});
  }
  
  public findUserByEmailId(email: string){
    return this.http.get("http://localhost:9090/findUser/"+email);
  }

  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }

  public deleteUser(id: number){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }
}
