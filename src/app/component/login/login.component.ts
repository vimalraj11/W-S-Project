import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fieldTextType!: boolean;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  email="";
  password="";
  check(){
    if( this.email == localStorage.getItem("myEmail") && this.password == localStorage.getItem("myPassword")){
      this.route.navigate(['/layout']);
    }
  }

  toggleFieldTextType() : void {
    this.fieldTextType = !this.fieldTextType;
  };

}
