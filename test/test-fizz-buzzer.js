// Fizz buzz tester

// import chai, declare expect variable
const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {

    //test the normal case
    it('should determine if num is divisible by 15, 5, or 3', function () {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [{
                a: 15,
                expected: 'fizz-buzz'
            },
            {
                a: 5,
                expected: 'buzz'
            },
            {
                a: 3,
                expected: 'fizz'
            }
        ];
        // for each set of inputs (a, b), `adder` should
        // produce the expected value
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if arg not number', function () {
        // range of bad inputs where not both are numbers
        const badInputs = ['a', '1', false];

        badInputs.forEach(function (input) {
            expect(function () {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});