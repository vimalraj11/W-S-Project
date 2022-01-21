import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fieldTextType!: boolean;
  fieldTextType1!: boolean;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  firstname="";
  lastname="";
  email="";
  number=""
  password="";
  cpassword="";

  save(){
    localStorage.setItem("fName",this.firstname);
    localStorage.setItem("lName",this.lastname);
    localStorage.setItem('myNumber',this.number)
    localStorage.setItem("myEmail",this.email);
    localStorage.setItem("myPassword",this.password);
    localStorage.setItem("confirmPassword",this.cpassword);
    this.route.navigate(['/']);
  }

  toggleFieldTextType() : void {
    this.fieldTextType = !this.fieldTextType;
  };

  toggleFieldTextType1() : void {
    this.fieldTextType1 = !this.fieldTextType1;
  };

}
