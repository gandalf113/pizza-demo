const DELIVERY_PRICE = 6;

export const getPriceSum = (items) => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        sum += item.item.price * item.amount;
    }
    return sum.toFixed(2);
}

export const getTotalSum = (items, delivery) => {
    const sum = getPriceSum(items);
    const deliveryPrice = delivery ? DELIVERY_PRICE : 0;
    const total = Number.parseFloat(sum) + Number.parseFloat(deliveryPrice);
    return total.toFixed(2);
}