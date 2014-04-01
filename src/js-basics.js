;(function(){


  function getWindowObject(window) {
    if (typeof window == 'undefined') {
      var window = new FakeWindow();
    }
    return window;
  }


  // simple constructs

  (function(){})();

  (function(){

    var x = 'outer';
    (function(){

      var x = 'inner';

    })();
    console.log(x);

  })();


  (function(){

    var x = 'outer';
    (function(){

      x = 'inner';

    })();
    console.log(x);

  })();

  var x;

  x = '4' + 4;

  x = 4 + '4';

  x = 4 - '4';

  x = 4 * '4';

  x = 4 + false;

  x = 4 - false;

  x = false - 4;


  x = 4 - {};

  x = {} - 4;

  x = 4 - [];

  x = 4 - [1];

  x = 4 - [1,2];

  x = 4 - 1/0;

  x = 040 + 4;


})();

