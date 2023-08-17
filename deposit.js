/**
 * 1. get the deposit btn. and add click event on it
 * 2. get the input field. covert the input value into the number. called current deposit.
 * 3. get the total deposit total field. then get the value. convert it into the number.;
 * 4. total the deposit.
 * 5. display the total amount.
 * 6. input field will be empty
 * 7. 
 * get the total balance field and update it.
 */

// step-1: 
document.querySelector('.deposit-btn').addEventListener('click', ()=> {
    // step-2:
    const depositInputField = document.querySelector('#deposit-input');
    const depositInputValue = depositInputField.value;
    const currentDeposit = parseFloat(depositInputValue);

    // step-3:
    const depositTotalElement = document.querySelector('.deposit')
    const depositTotal = depositTotalElement.innerText;
    const previousDepositTotalAmount = parseFloat(depositTotal);
    
    // step-4:
    const depositAmount = previousDepositTotalAmount + currentDeposit;

    // step-5:
    depositTotalElement.innerText = depositAmount;
    depositInputField.value = '';

    // step-7:
    const balanceTotalElement =  document.querySelector('.balance');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);
    const currentTotalBalance = balanceTotal + currentDeposit;
    balanceTotalElement.innerText = currentTotalBalance;
});
