function calculateLoan()
{

var principle= document.querySelector("principle").value;

var interestRate= document.querySelector("interestRate").value;

var paymentAmount= document.querySelector("payment").value;

var repaymentYears=document.querySelector("years").value;

var interest= ((interestRate/12)/100);

var balance = ((principle-paymentAmount) + (interest));



}

//let principle = prompt("What is your loan amount?")//

//let interestRate= prompt ("what is your interest rate?")//

//let payment= prompt ("what is your payment amount?")//