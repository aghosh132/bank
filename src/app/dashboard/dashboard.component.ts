import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

acno:any
psw:any
amnt:any

acno1:any
  psw1:any
  amnt1:any



user:any

constructor(private ds:DataService){

this.user=this.ds.currentUser


// access data from dataservice aand store in varriable
}


deposit(){
var acno=this.acno
var psw=this.psw
var amnt=this.amnt

const result=this.ds.deposit(acno,psw,amnt)

if (result) {
  alert(`your acc has been credited with amount ${amnt} and the availabe balance is Rs.${result}`)
}
else{
  alert("your acc num or password is incorrect")
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
}
