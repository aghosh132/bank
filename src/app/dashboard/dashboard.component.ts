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

adetails:any







constructor(private ds:DataService ,private fb:FormBuilder ,private router:Router){

this.user=this.ds.currentUser
this.adetails=new Date()





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
  this.ds.deposit(acno,psw,amnt).subscribe((result:any)=>{
    alert(result.message)
  },
  result=>{
    alert(result.error.message);
  }
    )
  }
else{
  alert("form is invalid")
}


}


withdrow(){
  var acno=this.acno1
  var psw=this.psw1
  var amnt=this.amnt1
  
  this.ds.withdrow(acno,psw,amnt).subscribe((result:any)=>{
  
    alert(result.message)
  },
  result=>{
  
    alert(result.error.message)
  }
  )
}



logout(){
localStorage.removeItem("currentUser")
localStorage.removeItem("currentAcno")
this.router.navigateByUrl("")
}


deleteACC(){
  this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")
}

ondeleteAcc(event:any){

this.ds.deleteAcc(event).subscribe((result:any)=>{
  alert(result.message)
  this.logout()
  // this.router.navigateByUrl("")
})
}

cancelchild(){
  this.acno=""
}

}

