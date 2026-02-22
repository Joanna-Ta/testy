const price = 100;
const discount = 0.2;
const calculateDiscountedPrice = (price, discount) => {
    return price - (price * discount);
};
const discountedPrice = calculateDiscountedPrice(price, discount);
console.log("Cena po rabacie", discountedPrice);