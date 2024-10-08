import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import {loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
    //error handling
    try {
        //throw 'error1';
        await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
        loadCart(() => {
            //reject('error3');
            resolve('value3'); 
        });
    });

    } catch(error) {
        console.log('Unexpected error. Please try again later.');
    }
    
    renderOrderSummary();
    renderPaymentSummary();

    //return 'value2';
}
loadPage();


/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1'); 
    });
}).then((value) => {
    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
          resolve();
        });
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
