const getExpensesTotal = (expenses) => {
    return expenses
    .map((e) => e.amount)
    .reduce((prev, amount) => prev+amount , 0);
}

export default getExpensesTotal;