function Currencyconvertor(number) {
    const num = parseFloat(number);
    if(num<0)
    {
        throw('Value cannot be less than zero');
    }
    else
    {
        INR = num*70;
        return INR;
    }
    
  }

  //Added QUnit Test
QUnit.test("Currencyconvertor", function(assert) {
    assert.equal(Currencyconvertor(1), 70, "1 Dollars == 70 INR. These are sucess conditions");
    assert.equal(Currencyconvertor(10), 700, "10 Dollars == 700 INR. These are sucess conditions");
    assert.equal(Currencyconvertor(50), 3500, "50 Dollars == 3500 INR. These are sucess conditions");
    assert.equal(Currencyconvertor(100), 7000, "100 Dollars == 7000 INR. These are sucess conditions");
    assert.equal(Currencyconvertor(500), 35000, "500 Dollars == 35000 INR. These are sucess conditions");
    assert.equal(Currencyconvertor(-1), 0, "500 Dollars == 35000 INR. These are sucess conditions");


 });