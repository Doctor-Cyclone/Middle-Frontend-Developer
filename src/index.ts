//import { totalPrice } from "./price-calculate.module.js";
import { normalizationData } from "./normalize-data.module.js";
import { posts } from "./task_3/posts.js";

// TASK 2
// console.log('Price with installment and months: ', totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
// console.log('Price with installment: ', totalPrice({ price: 100000, discount: 25, isInstallment: true }));
// console.log('Price with discount: ', totalPrice({ price: 100000, discount: 25 }));

// TASK 3
console.log(normalizationData(posts));