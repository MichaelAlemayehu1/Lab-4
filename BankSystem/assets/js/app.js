let profile = {
    firstName : "",
    lastName : "",
    limit : "10000",
    balance : "5000",
    canWithdraw : false,
    checkBalance : function() {console.log("Your current Account Balance is: " + this.balance)},
    deposit: function() {
      let Amount = prompt("Input amount to deposit to account: ");
      this.balance = parseInt(this.balance) + parseInt(Amount);
      
      console.log("Amount : " + Amount + " has been added to your account" + " your new balance is : " + this.balance);
    },


    withdraw : function() {
      let withdrawAmount = prompt("Input an amount to withdraw: ");
      if (parseInt(withdrawAmount) < parseInt(this.limit) && parseInt(withdrawAmount) <= parseInt(this.balance)){
          this.balance = parseInt(this.balance) - parseInt(withdrawAmount);
          console.log("You have withdrawn " + parseInt(withdrawAmount) + " your new balance is " + this.balance);
      }
      
      else if  (parseInt(withdrawAmount) > parseInt(this.balance)){
          console.log("You have insufficient funds for this withdrawal");
      } else if (parseInt(withdrawAmount) > parseInt(this.limit)){
        console.log("The Amount you have entered is above the limit. Please revise!");
      }
    },
    
    transfer : function() {},


};








































(function init() {
    
    while (true) {
      var selectedOperation = prompt(
        "Please Select Your Operation.\n 1.Check Balance\n 2.Deposit\n 3.Withdraw\n 4.Transfer\n 0 to Quit"
      );
      if (selectedOperation == "0"){
        break;
      }
      switch (selectedOperation) {
        case "1":
          profile.checkBalance();
          break;
        case "2":
          profile.deposit();
          break;
        case "3":
          profile.withdraw();
          break;
        case "4":
          profile.transfer();
          break;
      }
    }
    
  })();