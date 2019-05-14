/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org
//
//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.
//
//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });
//
//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });
//
//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }
//
//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var expect = chai.expect;

  // it('has a prefix of 38 and a length of 14', function() {
  //   //throw new Error('Delete me!');
  //
  //   if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
  //     throw new Error('Test failed');
  //   }
  // });
  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  });

  // it('has a prefix of 39 and a length of 14', function() {
  //   if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
  //     throw new Error('Test failed');
  //   }
  // });
  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club');
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  // var assert = function(isTrue) {
  //   if(!isTrue) {
  //     throw new Error('Test failed');
  //   }
  //
  // };
  var expect = chai.expect;

  // it('has a prefix of 34 and a length of 15', function() {
  //   assert(detectNetwork('343456789012345') === 'American Express');
  // });
  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  // it('has a prefix of 37 and a length of 15', function() {
  //   assert(detectNetwork('373456789012345') === 'American Express');
  // });
  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  //var assert = chai.assert;
  var expect = chai.expect;


  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  // it('has a prefix of 4 and a length of 16', function() {
  //   assert(detectNetwork('4123456789012345') === 'Visa');
  // });
  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  // it('has a prefix of 4 and a length of 19', function() {
  //   assert(detectNetwork('4123456789012345678') === 'Visa');
  // });
  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  //var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });

});


describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function(){
    expect(detectNetwork('6011345678901234')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
    expect(detectNetwork('6011005040203314567')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function(){
    expect(detectNetwork('6511345678901234')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function(){
    expect(detectNetwork('6511005040203314567')).to.equal('Discover');
  });

  //644-649
  for(var prefix = 644; prefix <= 649; prefix++){
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(prefix + '1345678901234')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix + '1005040203314567')).to.equal('Discover');
      });
    })(prefix)
  }
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  //len 12-19
  //prefix 5018
  let card = '501829450435'
  for(var len = 12; len <= 19; len++){
    (function(len, card){
       it('has a prefix of 5018 and a length of ' + len, function(){
         expect(detectNetwork(card)).to.equal('Maestro');
      });
    })(len, card)
    card += '0';
   }


   //5020
   card = '502029340435'
   for(var len = 12; len <= 19; len++){
     (function(len, card){
       it('has a prefix of 5020 and a length of ' + len, function(){
         expect(detectNetwork(card)).to.equal('Maestro');
       });
     })(len, card)
     card += '0';
    }


    //5038
    card = '503829340435'
    for(var len = 12; len <= 19; len++){
      (function(len, card){
        it('has a prefix of 5018 and a length of ' + len, function(){
          expect(detectNetwork(card)).to.equal('Maestro');
        });
      })(len, card)
      card += '0';
     }

     //6304
    card = '630429340435'
    for(var len = 12; len <= 19; len++){
      (function(len, card){
        it('has a prefix of 5018 and a length of ' + len, function(){
          expect(detectNetwork(card)).to.equal('Maestro');
        });
      })(len, card)
      card += '0';
     }
});

describe('China UnionPay', function() {
  var expect = chai.expect;

  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  //622126-622925
  for(let prefix = 622126; prefix <= 622925; prefix++){
    let card = prefix + '1234567890';
    for(let len = 16; len <= 19; len++){
      (function(len, card, prefix){
        it('has a prefix of ' + prefix + ' and a length of ' + len, function(){
          expect(detectNetwork(card)).to.equal('China UnionPay');
        });
      })(len, card, prefix)
      card += '0';
    }
  }

  //624-626
  for(let prefix = 624; prefix <= 626; prefix++){
    let card = prefix + '1234567890123';
    for(let len = 16; len <= 19; len++){
      (function(len, card, prefix){
        it('has a prefix of ' + prefix + ' and a length of ' + len, function(){
          expect(detectNetwork(card)).to.equal('China UnionPay');
        });
      })(len, card, prefix)
      card += '0';
    }
  }

  //6282-6288
  for(let prefix = 6282; prefix <= 6288; prefix++){
    let card = prefix + '123456789012';
    for(let len = 16; len <= 19; len++){
      (function(len, card, prefix){
        it('has a prefix of ' + prefix + ' and a length of ' + len, function(){
          expect(detectNetwork(card)).to.equal('China UnionPay');
        });
      })(len, card, prefix)
      card += '0';
     }
   }


});


describe('Switch', function() {

  var expect = chai.expect;

  //Switch: (prefix) 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759 + (length) 16, 18, or 19

  /*Pseudo-code:
  1) let all prefix into an array and loop thru array to get each prefix
  2) define the card with qualified length by appending 0's after the prefix
  3) use full test coverage function like above for the test with @card, prefix[i]
  */
  let prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];

  for(let i = 0; i < prefixes.length; ++i){
    let prefix = prefixes[i].toString(); //convert 4903 -> '4903'

    //define card starting with prefix up to len == 16
    let card = prefix;
    for(let j = 0; j < 16-prefix.length; j++){
      card += '0';
    }

    //len == 16
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        expect(detectNetwork(card)).to.equal('Switch');
      });
    })(card, prefixes[i])

    //len == 18
    card = card + '23'; //make a 18-length string
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 18', function(){
        expect(detectNetwork(card)).to.equal('Switch');
      });
    })(card, prefixes[i])

    //len == 19
    card = card + '2'; //make a 19-length string by adding 1 more char into current card str
    (function(card, prefix){
      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(card)).to.equal('Switch');
      });
    })(card, prefixes[i])
   }

});
