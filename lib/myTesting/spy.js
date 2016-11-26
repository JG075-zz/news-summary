var spy = {
  on: function Spy(myFunction) {
    Spy.called = false;
    (function() {
      Spy.called = true;
    })();
  },

  onAndReturn: function Spy(returnValue) {
    return returnValue;
  }
};
