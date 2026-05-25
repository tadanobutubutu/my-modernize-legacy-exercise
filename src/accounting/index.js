// Accounting logic
function processTransaction(type, amount) {
  if (type === 'credit') {
    return amount;
  } else if (type === 'debit') {
    return -amount;
  }
}
