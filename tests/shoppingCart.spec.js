let mocha = require('mocha');
let chai = require('chai');
let sinon = require('sinon');
let ShoppingCart = require('../src/shoppingCart');

// Use TDD should
chai.should();

describe('ShoppingCart', () => {

    // 每次測試前重新 new ShoppingCart()
    let shoppingCart;
    beforeEach(() => {
        shoppingCart = new ShoppingCart();
    });
    
    // 取得條件參數設定
    describe('#getLevelConfig(level)', () => {
        let dataSets = [
            {
                level: 'Normal',
                expected: {
                    atLeastPay: 1000,
                    moq: 3,
                    discount: 0.85
                }
            },
            {
                level: 'VIP',
                expected: {
                    atLeastPay: 500,
                    moq: 0,
                    discount: 0.8
                }
            }
        ];

        dataSets.forEach((data) => {
            it(`取得 ${data.level} 設定值`, () => {
                // Act
                let actual = shoppingCart.getLevelConfig(data.level);
                
                // Assert
                actual.should.deep.equal(data.expected);
            });
        });
    });

    // 是否滿額
    describe('#checkLeastPay(price, atLeastPay)', () => {
        it('滿額', () => {
            // Arrange
            let price = 500;
            let atLeastPay = 500;
            let expected = true;
        
            // Act
            let actual = shoppingCart.checkLeastPay(price, atLeastPay);
        
            // Assert
            actual.should.be.true;
        });
    });
});