class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let low_num = prices[0]
    let profit = 0

    for (var i =1;i<prices.length;i++){
        if(prices[i]<low_num){low_num = prices[i]}else{
            if(prices[i]-low_num > profit){profit = prices[i]-low_num }
        }
    }

    return profit

    }
}
