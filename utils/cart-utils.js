export const getPriceSum = (items) => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        sum += item.item.price * item.amount;
    }
    return sum.toFixed(2);
}