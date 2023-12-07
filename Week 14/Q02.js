function cartprice(...num1){
    let i;
    let sum=0;
    for(i=0;i<num1.length;i++){
        sum=sum+num1[i];
    }
    return sum;
}
let value=cartprice(100,10,20,20);
console.log("The Total Price of items in cart is ",value);