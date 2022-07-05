
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 500000,
    years: 30,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('2533.43');
});


it("should return a result with 2 decimal places", function () {
  // ..
  const values = {
    amount: 450000,
    years: 30,
    rate: 5.3
  };
  expect(calculateMonthlyPayment(values)).toEqual('2498.87');
});

it("should handle terribly high interest rates", function () {
  const values = {
    amount: 475000,
    years: 30,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('39187.50');
});
/// etc
