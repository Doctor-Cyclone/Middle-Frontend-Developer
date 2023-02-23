export const totalPrice = ({ price, discount, isInstallment, months = 12 }) => {
    if (isInstallment && months) {
        return (price - (price * (discount / 100))) / months;
    }
    return price - (price * (discount / 100));
};
//# sourceMappingURL=price-calculate.module.js.map