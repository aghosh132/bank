import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

acno:any
psw:any
amnt:any

acno1:any
  psw1:any
  amnt1:any



user:any









constructor(private ds:DataService ,private fb:FormBuilder ,private router:Router){

this.user=this.ds.currentUser


// access data from dataservice aand store in varriable
}
  ngOnInit(): void {
    if (!localStorage.getItem("currentAcno")) {
      alert("Please Login")
      this.router.navigateByUrl("")
    }
    
  }
depositForm=this.fb.group({
  acno: ['',[Validators.required,Validators.pattern('[0-9]+')]],
  
  psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
  amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]
  
})

deposit(){
var acno=this.depositForm.value.acno
var psw=this.depositForm.value.psw
var amnt=this.depositForm.value.amnt
if (this.depositForm.valid) {
  const result=this.ds.deposit(acno,psw,amnt)
  if (result) {
    alert(`your acc has been credited with amount ${amnt} and the availabe balance is Rs.${result}`)
  }
  else{
    alert("your acc num or password is incorrect")
  }
}
else{
  alert("form is invalid")
}


}


withdrow(){
  var acno=this.acno1
  var psw=this.psw1
  var amnt=this.amnt1
  
  const result=this.ds.withdrow(acno,psw,amnt)
  
  if (result) {
    alert(`your acc has been credited with amount ${amnt} and the availabe balance is Rs.${result}`)
  }
  else{
    alert("your acc num or password is incorrect")
  }
  }



logout(){
localStorage.removeItem("currentUser")
localStorage.removeItem("currentAcno")
this.router.navigateByUrl("")
}





}
