function Currencyconvertor(number) {
    num = parseInt(number);
    INR = number*70;
    return INR;
  }

  //Added QUnit Test
QUnit.test("Currencyconvertor", function(assert) {
    assert.equal(Currencyconvertor(1), 70, "1 Dollars == 70 INR");
    assert.equal(Currencyconvertor(10), 700, "10 Dollars == 700 INR");
    assert.equal(Currencyconvertor(50), 3500, "50 Dollars == 3500 INR");
    assert.equal(Currencyconvertor(100), 7000, "100 Dollars == 7000 INR");
    assert.equal(Currencyconvertor(500), 35000, "500 Dollars == 35000 INR");
    assert.equal(Currencyconvertor(-1), 0, "The values can't be Neagtive");

 });