function ShoppingCart () {}

// 取得條件參數設定
ShoppingCart.prototype.getLevelConfig = function (level) {
    let config;

    switch (level) {
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