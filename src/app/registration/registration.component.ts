import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  message:any;
  user: any;

  constructor(private service:UserRegistrationService) { }

  ngOnInit(): void {
    this.user = {};
  }

  public registerNow(){
    let resp = this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data)
  }

}
