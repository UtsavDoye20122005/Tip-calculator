document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const total = billAmount + (billAmount * (tipPercentage / 100));
    document.getElementById('totalAmount').textContent = total.toFixed(2);
});
