import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
currentAcno:any
  currentUser: any
  userDetails: any = {

    1000: { username: "anu", acno: 1000, password: "abc123", balance: 0,transactions:[] },
    1001: { username: "abu", acno: 1001, password: "abc12", balance: 0,transactions:[] },
    1002: { username: "sha", acno: 1002, password: "abc132", balance: 0,transactions:[] },
    1003: { username: "subin", acno: 1003, password: "abc143", balance: 0,transactions:[] }
  }
  register(acno: any, uname: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      return false
    }
    else {
      userDetails[acno] = { username: uname, acno: acno, password: psw, balance: 0,transactions:[] }
      console.log(userDetails);
      return true
    }
  }

  login(acno: any, psw: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        //store currentUser
        this.currentUser = userDetails[acno]["username"]
this.currentAcno=acno
        return true
      }
      else {
        return false

      }
    }
    else {
      return false
    }
  }




  deposit(acno: any, psw: any, amnt: any) {
    var amount = parseInt(amnt)
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        userDetails[acno]["balance"] += amount
console.log(userDetails);

//add transaction data
userDetails[acno]["transactions"].push(
  {Type:"Credit",
Amount:amnt}
)
console.log(userDetails);


        return userDetails[acno]["balance"]
      }
      else {
        return false
      }
    }
    return false


  }

  withdrow(acno: any, psw: any, amnt: any) {
    var amount = parseInt(amnt)
    var userDetails = this.userDetails

    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        if (amount <= userDetails[acno]["balance"]) {
          userDetails[acno]["balance"] -= amount
// add transaction

          userDetails[acno]["transactions"].push(
            {Type:"Debit",
          Amount:amount}
          )



          return userDetails[acno]["balance"]
        }
        else {
          alert("insufficient balance")
        }
      }
      else {
        return false
      }
    }
    return false


  }


getTransaction(acno:any){
  return this.userDetails[acno].transactions
}


  // constructor() { }
}







