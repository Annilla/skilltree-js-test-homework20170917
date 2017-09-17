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

module.exports = ShoppingCart;