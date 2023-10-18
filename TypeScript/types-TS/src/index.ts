// -------------- Types -------------- //
// ---- one of the reasons why we should be use typescript instead javascript
// ---- here be an error : 

// let hatPrice = 100;
// console.log(`Hat price: ${hatPrice}`);
// let bootsPrice = "100";
// console.log(`Boots price: ${bootsPrice}`);
// if (hatPrice == bootsPrice) { // error (100 == "100"): types number and string have no overlap
// console.log("Prices are the same");
// } else {
// console.log("Prices are different");
// }
// let totalPrice = hatPrice + bootsPrice;
// console.log(`Total Price: ${totalPrice}`);

// result: 
// Hat price: 100
// Boots price: 100
// Prices are the same (it should be not true, but type coertion has been carried out)
// Total Price: 100100 (javascript crazy things, it convert the number value to string and paste those strings values)


