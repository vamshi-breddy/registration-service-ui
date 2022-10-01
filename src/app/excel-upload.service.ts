import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExcelUploadService {

  constructor(private http:HttpClient) { }

  public uploadFile(formData:any){
    return this.http.post("http://localhost:9090/user/upload",formData);
  }
}
