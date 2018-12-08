/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    sum=0;
    for(i=0;i<prices.length;i++){
        if(prices[i+1]!==undefined && prices[i+1]>prices[i]){
            sum+=prices[i+1]-prices[i];  
        }
    }
    return sum;
};
