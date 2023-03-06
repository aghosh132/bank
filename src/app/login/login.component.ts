import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="your perfect banking partner"
  data1="Enter Your Acc Number"
   
  
  //accno=""
  //or
  acno:any
  psw:any
userDetails:any={

1000:{username:"anu",accno:1000,password:"abc123",balance:0},
1001:{username:"abu",accno:1001,password:"abc12",balance:0},
1002:{username:"sha",accno:1002,password:"abc132",balance:0},
1003:{username:"subin",accno:1003,password:"abc143",balance:0}
}

login(){

var acnum=this.acno
var psw=this.psw
var userDetails=this.userDetails
if (acnum in userDetails) {
  if (psw==userDetails[acnum]["password"]) {
    alert('login success')
  }
  else{
    alert('incorrect password')
  }
}
else{
  alert('incorrect accnumber')
}

}

}




  // alert('Login Worked')
// }
// acnochange(event:any){
// console.log(event);
// this.acno=event.target.value
// console.log(this.acno)
// }
// pswchange(event:any){
//   this.psw=event.target.value
//   console.log(this.psw);
  
// }
// }

// login(acnum:any,psw:any){
// console.log(acnum.value,psw.value);

//   var acnum=acnum.value
//   var psw=psw.value
//   var userDetails=this.userDetails
//   if (acnum in userDetails) {
//     if (psw==userDetails[acnum]["password"]) {
//       alert('login success')
//     }
//     else{
//       alert('incorrect password')
//     }
//   }
//   else{
//     alert('incorrect accnumber')
//   }
// } 


