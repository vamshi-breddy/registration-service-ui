import { Component, Input, OnInit} from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest:any;
  token:any;

  constructor(private service:JwtClientService) { }

  ngOnInit(): void {
    this.authRequest={
      "userName":"vamshi",
      "password":"password"
    }
    this.token={};
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp = this.service.generateToken(authRequest);
    // resp.subscribe(data=>console.log("Token: "+data));
    resp.subscribe((data)=>this.token=data);
  }

}
