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
  if((prefixDC === 38 && cardNumber.length == 14) || (prefixDC === 39 && cardNumber.length == 14)){
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
  //Case: Visa always has a prefix of 4 and a length of 13, 16, or 19
  let prefixVisa = JSON.parse(cardNumber.slice(0,1)); //number
  if((prefixVisa === 4) && (cardNumber.length == 13 || cardNumber.length == 16 || cardNumber.length == 19)){
    cardNetwork = 'Visa';
  }

  //Case4 'MasterCard': --- prefix: 51-55 ---length: 16
  let prefixMaster = JSON.parse(cardNumber.slice(0,2));
  if((prefixMaster >= 51 && prefixMaster <= 55) && (cardNumber.length == 16)){
    cardNetwork = 'MasterCard';
  }

  //Case5: Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  let prefixDiscover1 = JSON.parse(cardNumber.slice(0,4)); //6011
  let prefixDiscover2 = JSON.parse(cardNumber.slice(0,2)); //65
  let prefixDiscover3 = JSON.parse(cardNumber.slice(0,3)); //644-649
  if((prefixDiscover1 == 6011 || prefixDiscover2 == 65 || (prefixDiscover3 >= 644 && prefixDiscover3 <= 649))
      && (cardNumber.length == 16 || cardNumber.length == 19)){
    cardNetwork = 'Discover';
  }

  //Case6: Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19

  let prefixMaestro = JSON.parse(cardNumber.slice(0,4)); //number
  if((prefixMaestro === 5018 || prefixMaestro === 5020 || prefixMaestro === 5038 || prefixMaestro === 6304)
      && (cardNumber.length >= 12 && cardNumber.length <= 19)){
    cardNetwork = 'Maestro';
  }

  //Case 7: China UnionPay
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  let prefixCP1 = JSON.parse(cardNumber.slice(0,6)); // 622126-622925
  let prefixCP2 = JSON.parse(cardNumber.slice(0,3)); // 624-626
  let prefixCP3 = JSON.parse(cardNumber.slice(0,4)); // 6282-6288
  if(((prefixCP1 >= 622126 && prefixCP1 <= 622925) || (prefixCP2 >= 624 && prefixCP2 <= 626)
      || (prefixCP3 >= 6282 && prefixCP3 <= 6288))
      && (cardNumber.length >= 16 && cardNumber.length <= 19)){
    cardNetwork = 'China UnionPay';
  }
  //
  // //case 8: Switch
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
  //and a length of 16, 18, or 19
  // let prefixS1 = JSON.parse(cardNumber.slice(0,4)); //4903 4905 4911 4936 6333 6759
  // let prefixS2 = JSON.parse(cardNumber.slice(0,6)); //564182 633110
  // if((prefixS1 === 4903 || prefixS1 === 4905 || prefixS1 === 4911
  //     || prefixS1 === 4936 || prefixS1 === 6333 || prefixS1 === 6759
  //     || prefixS2 === 564182 || prefixS2 === 633110)
  //   && (cardNumber.length == 16 || cardNumber.length == 18 || cardNumber.length == 19)){
  //   cardNetwork = 'Switch';
  // }

  return cardNetwork;
};
