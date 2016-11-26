var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(assertionToCheck, assertion) {
    if (assertionToCheck !== assertion) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not equal to: " + assertion);
    }
  },

  isTypeOf: function(assertionToCheck, assertion) {
    if (typeof(assertionToCheck) !== assertion) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not type of: " + assertion);
    }
  },

  belongsToPrototype: function(assertionToCheck, assertion) {
    if (Object.getPrototypeOf(assertionToCheck).constructor.name !== assertion) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not prototype of: " + assertion);
    }
  },

  makesCall: function(function1, function2) {
    if (function1.length > 1) {
      function1[0][function1[1]]();
    } else {
      function1[0]();
    }
    if (function2.length > 1) {
      function2 = function2[0][function2[1]][function2[2]];
    }
    if (function2.called !== true) {
      throw new Error("Assertion failed: " + function1 + " did not call: " + function2);
    }
  }
};
