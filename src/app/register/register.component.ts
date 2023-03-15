import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
acno:any
psw:any
uname:any
constructor(private  ds:DataService, private fb:FormBuilder ){

}

registerForm=this.fb.group({

acno:[''],
psw:[''],
uname:['']
})
register(): void{

var acno=this.acno
var psw=this.psw
var uname=this.uname
const result=this.ds.register(acno,uname,psw)
if (result) {
  alert('registerd')
}
else{
  alert('user already registerd')
}
}
}
