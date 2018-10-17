//business logic
function BankAccount(name, balance, deposit, withdrawal) {
  this.name = name;
  this.balance = balance;
  this.depositAmount = deposit;
  this.withdrawalAmount = withdrawal;
}

BankAccount.prototype.deposit = function() {
  this.balance += this.depositAmount;
}

BankAccount.prototype.withdrawal = function() {
  this.balance -= this.withdrawalAmount;
}


var clearRegistration = function () {
  $('#name').val(" ");
  $('#initial-deposit').val(" ");
}

var clearTransaction = function() {
  $('#deposit-amount').val(" ");
  $('#withdrawal-amount').val(" ");
}

//user interface
$(document).ready(function(){
  $("#register-button").click(function(event){
    event.preventDefault();
    var nameInput = $('#name').val();
    var initialDepositInput = parseInt($('#initial-deposit').val());
    var newBankAccount = new BankAccount(nameInput, initialDepositInput,  0, 0);
    console.log(newBankAccount);

    if (initialDepositInput != "") {
      newBankAccount.balance = initialDepositInput;

      $("#balance").text(newBankAccount.balance);
    } else if (initialDepositInput == "") {
      $("#output-sentence").text("Put mo money in to start an account with us.");
    }
    clearRegistration();
    $('#transaction-button').click(function(event){
    event.preventDefault();
    var depositAmountInput = parseInt($('#deposit-amount').val());
    var withdrawalAmountInput = parseInt($('#withdrawal-amount').val());

    if (!depositAmountInput) {
      newBankAccount.withdrawalAmount = withdrawalAmountInput;
      newBankAccount.withdrawal();
      console.log("withdrawal");
    } else if (!withdrawalAmountInput){
      newBankAccount.depositAmount = depositAmountInput;
      newBankAccount.deposit();
      console.log("deposit");
    } else if (!withdrawalAmountInput && !depositAmountInput){
      newBankAccount.depositAmount = depositAmountInput;
      newBankAccount.deposit();
      newBankAccount.withdrawalAmount = withdrawalAmountInput;
      newBankAccount.withdrawal();
      console.log("both");
    }
    console.log(newBankAccount);
    $("#balance").text(newBankAccount.balance);
    clearTransaction();
    })
  })
});
