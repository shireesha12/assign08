/*eslint-env browser*/
var balance = 0;  
var owName;
var depositAmount;
var withdrawalAmount;
var html = " "; 
document.getElementById("name").addEventListener("click", function () {
    "use strict";
    owName = window.prompt("enter your name");
    html += "Owner name is :" + owName + "<br>";
    html += "balance is :" + balance + "<br>";
   document.getElementById("accoutdetails").innerHTML = html;
});

document.getElementById("deposit").addEventListener("click", function () {
    "use strict";
    depositAmount = parseInt(window.prompt("enter deposit amount"),10);
    html += "Deposit amount is :" + depositAmount + "<br>";
    account.deposit(depositAmount) + "<br>";
    html += "balance is :" + balance + "<br>"
   document.getElementById("accoutdetails").innerHTML = html;
    
    
});

document.getElementById("withdrawal").addEventListener("click", function () {
    "use strict";
    withdrawalAmount = window.prompt("enter withdrawal amount");
    html += "Withdrawal amount is :" + withdrawalAmount + "<br>";
    account.withdraw(withdrawalAmount);
    html += "balance is :" + balance + "<br>";
   document.getElementById("accoutdetails").innerHTML = html;  
    
});

var bankAccount = function(ownername){ 
    
    return {
    getBalance: function(){
      return balance
    },
    deposit: function(amount){      
      balance += amount;      
      return balance;
    },
    withdraw: function(amount){
      
      if(amount <= balance){
        balance -= amount;
        return "you have enough amount to withdrwal";
      }
      else{
        return "your amount to low please deposite";
      }
    }
  }
};

var account = bankAccount(owName);

 



