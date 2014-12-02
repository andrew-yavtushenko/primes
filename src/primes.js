"use strict";
var Primes = function(num) {
  var response = [];
  for (var candidate = 2; candidate <= Math.sqrt(num)+1; candidate++) {
    while (num % candidate == 0) {
      response.push(candidate);
      num /=candidate;
    }
  }
  if (num > 1) {
    response.push(num);
  }
  return response;
};