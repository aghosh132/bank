import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
//create global header for header overlaping
const option={
  headers:new HttpHeaders()
  
  }

@Injectable({
  providedIn: 'root'
})




export class DataService {
currentAcno:any
  currentUser: any
  userDetails: any
  // userDetails: any = {

  //   1000: { username: "anu", acno: 1000, password: "abc123", balance: 0,transactions:[] },
  //   1001: { username: "abu", acno: 1001, password: "abc12", balance: 0,transactions:[] },
  //   1002: { username: "sha", acno: 1002, password: "abc132", balance: 0,transactions:[] },
  //   1003: { username: "subin", acno: 1003, password: "abc143", balance: 0,transactions:[] }
  // }
  constructor(private http:HttpClient) { 

// this.getDetails()

  }

// saveDetails(){
// if (this.userDetails) {
//   localStorage.setItem("userDetails",JSON.stringify(this.userDetails))
// }
// if (this.currentUser) {
//   localStorage.setItem("currentUser",this.currentUser)
// }
// if (this.currentAcno) {
//   localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
// }
// }



// getDetails(){
// if (localStorage.getItem("userDetails")) {
//   this.userDetails=JSON.parse(localStorage.getItem("userDetails") || "")
// }
// if (localStorage.getItem("currentUser")) {
//   this.currentUser=localStorage.getItem("currentUser")
// }
// if (localStorage.getItem("currentAcno")) {
//   this.currentAcno=JSON.parse(localStorage.getItem("currentAcno") || "")
// }

// }






getToken(){
  // access Token 
  const token =JSON.parse(localStorage.getItem("token") || "")
// generate header
let headers = new HttpHeaders()
// check token accessd or not 
if (token) {
  // add the token into headers 
  option.headers=headers.append('access_token',token)
}
return option
}








register(acno: any, uname: any, psw: any) {
const data={acno,uname,psw}
return this.http.post('http://localhost:3000/register',data)

    // var userDetails = this.userDetails
    // if (acno in userDetails) {
    //   return false
    // }
    // else {
    //   userDetails[acno] = { username: uname, acno: acno, password: psw, balance: 0,transactions:[] }
    //   console.log(userDetails);
    //   this.saveDetails()
    //   return true
    // }
  }

  

  login(acno: any, psw: any) {

const data={acno,psw}
return this.http.post('http://localhost:3000/login',data)







//     var userDetails = this.userDetails
//     if (acno in userDetails) {
//       if (psw == userDetails[acno]["password"]) {
//         //store currentUser
//         this.currentUser = userDetails[acno]["username"]
// this.currentAcno=acno
// this.saveDetails()
//         return true
//       }
//       else {
//         return false
//       }
//     }
//     else {
//       return false
//     }
  }


  deposit(acno: any, psw: any, amnt: any) {
const data = {acno,psw,amnt}
return this.http.post("http://localhost:3000/deposit",data,this.getToken())



//     var amount = parseInt(amnt)
//     var userDetails = this.userDetails

//     if (acno in userDetails) {
//       if (psw == userDetails[acno]["password"]) {
//         userDetails[acno]["balance"] += amount
// console.log(userDetails);

// //add transaction data
// userDetails[acno]["transactions"].push(
//   {Type:"Credit",
// Amount:amnt}
// )
// console.log(userDetails);
// this.saveDetails()

//         return userDetails[acno]["balance"]
//       }
//       else {
//         return false
//       }
//     }
//     return false
  }

  withdrow(acno: any, psw: any, amnt: any) {
    const data = {acno,psw,amnt}
return this.http.post("http://localhost:3000/withdrow",data,this.getToken())
    // var amount = parseInt(amnt)
    // var userDetails = this.userDetails

    // if (acno in userDetails) {
    //   if (psw == userDetails[acno]["password"]) {
    //     if (amount <= userDetails[acno]["balance"]) {
    //       userDetails[acno]["balance"] -= amount
// add transaction

          // userDetails[acno]["transactions"].push(
          //   {Type:"Debit",
          // Amount:amount}
          // )

// this.saveDetails()

    //       return userDetails[acno]["balance"]
    //     }
    //     else {
    //       alert("insufficient balance")
    //     }
    //   }
    //   else {
    //     return false
    //   }
    // }
    // return false


  }


getTransaction(acno:any){
  const data = {acno}
  return this.http.post("http://localhost:3000/transaction",data,this.getToken())

  // return this.userDetails[acno].transactions
}






deleteAcc(acno:any){
return this.http.delete('http://localhost:3000/delete/'+acno,this.getToken())
}




  // constructor() { }
}


