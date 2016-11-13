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
    var args = function1[1];
    function1[0].apply(null, args);
    if (function2.called !== true) {
      throw new Error("Assertion failed: " + function1 + " did not call: " + function2);
    }
  }
};
