/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    max=0;min=Math.min();
    for(i=0;i<prices.length;i++){
        min = Math.min(min,prices[i]);
        max = Math.max(max,prices[i]-min);
    }
    return max;
};
