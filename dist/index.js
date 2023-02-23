import { totalPrice } from "./price-calculate.module.js";
console.log('Price with installment and months: ', totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
console.log('Price with installment: ', totalPrice({ price: 100000, discount: 25, isInstallment: true }));
console.log('Price with discount: ', totalPrice({ price: 100000, discount: 25 }));
//# sourceMappingURL=index.js.map