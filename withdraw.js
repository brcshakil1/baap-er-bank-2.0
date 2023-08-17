document.querySelector('.withdraw-btn').addEventListener('click', ()=> {
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInputField.value;
    const withdraw = parseFloat(withdrawInputValue);
    
    withdrawInputField.value = '';

    const withdrawTotalElement = document.querySelector('.withdraw');
    const withdrawTotal = withdrawTotalElement.innerText;
    const previousWithdrawTotalAmount = parseFloat(withdrawTotal);

    const withdrawAmount = previousWithdrawTotalAmount + withdraw;
    withdrawTotalElement.innerText = withdrawAmount;

    const balanceTotalElement =  document.querySelector('.balance');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);
    const currentTotalBalance = balanceTotal - withdraw;
    balanceTotalElement.innerText = currentTotalBalance;
})