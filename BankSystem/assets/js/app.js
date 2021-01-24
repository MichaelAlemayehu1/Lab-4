let profile = {
    firstName : "",
    lastName : "",
    limit : "10000",
    balance : "5000",
    receiver1: "1234",
    receiver2: "5678",

    
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
    
    transfer : function() {
      var selectUser = prompt("please select user:\n 1.Receiver acc no 1234 \n2.Receiver acc no 5678 ");

      switch(selectUser){
        case "1" :
          let transferAmount = prompt("Input amount to transfer: ");
          if(parseInt(this.balance)>parseInt(transferAmount)){
          this.balance = parseInt(this.balance) - parseInt(transferAmount);
          console.log("Amount: "+ transferAmount + " has been transferred to account number " + this.receiver1 + "'s account");
          console.log("You remain with "+ this.balance);}
          else{console.log("Insufficient Funds! " + "you only have "+ this.balance)};
          break;
          case "2" :
            let transferAmount2 = prompt("Input amount to transfer: ");
            if(parseInt(this.balance)>parseInt(transferAmount2)){
              this.balance = parseInt(this.balance) - parseInt(transferAmount2);
              console.log("Amount: "+ transferAmount2 + " has been transferred to account number " + this.receiver2 + "'s account");
              console.log("You remain with "+ this.balance);
            }
              
              else{console.log("Insufficient Funds! "+ "you only have " + this.balance)};
              
            break;
      }

    }


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