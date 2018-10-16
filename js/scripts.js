//business logic
function BankAccount(name, currentBalance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.transaction = function() {
  return this.balance + (this.deposit - this.withdrawal)
}


// var transaction = function() {
//   if (depositAmountInput != "") {
//     currentBalance += depositAmountInput
//   } else if (withdrawalAmountInput != "") {
//     currentBalance -= depositAmountInput
//   }
// }

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
    var newBankAccount = new BankAccount(nameInput, initialDepositInput);
    if (initialDepositInput != "") {
      newBankAccount.balance = initialDepositInput;
      $("#balance").text(newBankAccount.balance);
    } else if (initialDepositInput == "") {
      $("#output-sentence").text("Put mo money in to start an account with us.");
    }
    clearRegistration();
    $('#transaction').click(function(event){
    event.preventDefault();
    var depositAmountInput = parseInt($('#deposit-amount').val());
    var withdrawalAmountInput = parseInt($('#withdrawal-amount').val());
    newBankAccount.deposit = depositAmountInput;
    newBankAccount.withdrawal = withdrawalAmountInput;
    newBankAccount.transaction();
    $("#balance").text(newBankAccount.balance);
    clearTransaction();
    })
  })
});
