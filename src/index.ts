//import { totalPrice } from "./price-calculate.module.js";
// import { normalizationData } from "./normalize-data.module.js";
// import { posts } from "./task_3/posts.js";
import {COMMENTS_URL} from "./task_4/constants.js";
import {getData} from "./get-data.module.js";

// TASK 2
// console.log('Price with installment and months: ', totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
// console.log('Price with installment: ', totalPrice({ price: 100000, discount: 25, isInstallment: true }));
// console.log('Price with discount: ', totalPrice({ price: 100000, discount: 25 }));

// TASK 3
// console.log(normalizationData(posts));

// TASK 4
getData(COMMENTS_URL).then(res => {
	res.map(post => {
		console.log(`ID: ${post.id}, Email: ${post.email}`);
	})
})