function ShoppingCart () {}

// 取得條件參數設定
ShoppingCart.prototype.getLevelConfig = function (level) {
    let config;

    switch (level) {
        case 'VIP':
            config = {
                atLeastPay: 500,
                moq: 0,
                discount: 0.8
            };
            break;
        default:
            config = {
                atLeastPay: 1000,
                moq: 3,
                discount: 0.85
            };
    }

    return config;
};

// 是否滿額
ShoppingCart.prototype.checkLeastPay = function (price, atLeastPay){
    if (atLeastPay <= price) {
        return true;
    }
    return false;
};

// 是否達到最低商品數
ShoppingCart.prototype.checkMOQ = function (quantity, moq){
    if (moq <= quantity) {
        return true;
    }
    return false;
};

// 折扣計算
ShoppingCart.prototype.discountPay = function (price, rate){
    return price * rate;
};

module.exports = ShoppingCart;