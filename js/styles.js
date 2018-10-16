//business logic
function BankAccount(name, currentBalance) {
  this.name = name;
  this.currentBalance = currentBalance;
}

BankAccount.prototype.deposit = function() {

}
var transaction = function() {
  if (depositAmountInput != "") {
    currentBalance += depositAmountInput
  } else if (withdrawalAmountInput != "") {
    currentBalance -= depositAmountInput
  }
}
//add: branch functionality for if both deposit and withdrawal

var register = function() {
  if (initialDepositInput != "") {
    currentBalance = initialDepositInput;
  } else if (initialDepositInput == "") {
    $("#output-sentence").text("Put mo money in to start an account with us.");
  }
}


//user interface
$(document).ready(function({
  $('#register').click(function(event){
    event.preventDefault();
    var nameInput = $('#name').val();
    var initialDepositInput = parseInt($('#initial-deposit').val());
    var newBankAccount = new BankAccount(nameInput, initialDepositInput, depositAmountInput, withdrawalAmountInput)
    register();
})
$('#transaction').click(function(event){
  event.preventDefault();
    var depositAmountInput = parseInt($('#deposit-amount').val());
    var withdrawalAmountInput = parseInt($('#withdrawal-amount').val());


    transaction();
  })
}));
