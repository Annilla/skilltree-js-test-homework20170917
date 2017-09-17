let mocha = require('mocha');
let chai = require('chai');
let sinon = require('sinon');
let ShoppingCart = require('../src/shoppingCart');

// Use TDD should
chai.should();

describe('ShoppingCart', () => {
    // 取得條件參數設定
    describe('#getLevelConfig(level)', () => {

        // 每次測試前重新 new ShoppingCart()
        let shoppingCart;
        beforeEach(() => {
            shoppingCart = new ShoppingCart();
        });

        it('取得 Normal 設定值', () => {
            // Arrange
            let level = 'Normal';
            let expected = {
                atLeastPay: 1000,
                moq: 3,
                discount: 0.85
            };

            // Act
            let actual = shoppingCart.getLevelConfig(level);
            
            // Assert
            actual.should.deep.equal(expected);
        });

        it('取得 VIP 設定值', () => {
            // Arrange
            let level = 'VIP';
            let expected = {
                atLeastPay: 500,
                moq: 0,
                discount: 0.8
            };

            // Act
            let actual = shoppingCart.getLevelConfig(level);
            
            // Assert
            actual.should.deep.equal(expected);
        });

    });
});