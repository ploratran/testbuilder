// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //name of network
  var cardNetwork = '';

  //return null if card is empty or undefined
  if(cardNumber == null || cardNumber == undefined) {return null};

  //Case1 'Diner's Club': --- prefix: 38 or 39  --- length: 14
  let prefixDC = JSON.parse(cardNumber.slice(0,2)); //number
  if((prefixDC === 34 && cardNumber.length == 14) || (prefixDC === 37 && cardNumber.length == 14)){
    cardNetwork = 'Diner\'s Club';
  }

  //Case2 'American Express': --- prefix: 34 or 37  --- length: 15
  let prefixAE = JSON.parse(cardNumber.slice(0,2)); //number
  // if((prefixAE === 34 && cardNumber.length == 15) || (prefixAE === 37 && cardNumber.length == 15)){
  //   cardNetwork = 'American Express';
  // }
  if((prefixAE === 34 || prefixAE === 37) && (cardNumber.length == 15)){
    cardNetwork = 'American Express';
  }

  //Case3 'Visa': --- prefix: 4  --- length: 13 || 16 || 19
  let prefixVisa = JSON.parse(cardNumber.slice(0,1)); //number
  if((prefixVisa === 4) && (cardNumber.length == 13 || cardNumber.length == 16 || cardNumber.length == 19)){
    cardNetwork = 'Visa';
  }

  //Case4 'MasterCard': --- prefix: 51 || 52 || 53 || 54 || 55 ---length: 16
  let prefixMaster = JSON.parse(cardNumber.slice(0,2)); //number
  if((prefixMaster === 51 || prefixMaster === 52 || prefixMaster === 53 || prefixMaster === 54 || prefixMaster === 55)
      && (cardNumber.length == 16)){
    cardNetwork = 'MasterCard';
  }

  //Case5 'Discover': --- prefix: 6011 ---length: 16 || 19
  let prefixDiscover = JSON.parse(cardNumber.slice(0,4)); //number
  if((prefixDiscover === 6001) && (cardNumber.length == 16 || cardNumber.length == 19)){
    cardNetwork = 'Discover';
  }

  //Case6 'Maestro' --prefix: 67  ---length: 16 || 19
  //test: '6759649826438453', '6799990100000000019'
  let prefixMaestro = JSON.parse(cardNumber.slice(0,2)); //number
  if((prefixMaestro === 6001) && (cardNumber.length == 16 || cardNumber.length == 19)){
    cardNetwork = 'Discover';
  }


  return cardNetwork;
};
