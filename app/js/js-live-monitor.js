/**
 * Execute the tests, and if something fails, send it to the server.
 */
runTests = function() {
  var errors = [];
  var buildId = 17;
  var buildToken = '45974c049b94a808ede67034c3ad2dec';

  var customTests = function() {
    return [
      {
        id: "it should find the a visible add to cart link",
        result: function() {
          var element = document.querySelector('a.cart');
          return !!element && element.offsetParent !== null;
        }
      },
    ]
  };

  result = customTests();
  result.forEach(function(row) {
    if (!!row.result()) {
      return;
    }

    errors.push(row.id);
  });

  var request = new XMLHttpRequest();

  var data = {
    build: buildId,
    errors: errors.join("\r\n")
  };

  var serializeObject = function(obj) {
    var pairs = [];
    for (var prop in obj) {
      if (!obj.hasOwnProperty(prop)) {
        continue;
      }
      pairs.push(prop + '=' + obj[prop]);
    }
    return pairs.join('&');
  };

  html2canvas(document.body, {
    onrendered: function(canvas) {
      data.image = canvas.toDataURL("image/png");

      var image = document.createElement('img');
      image.src = canvas.toDataURL("image/png");
      document.body.appendChild(image);

      request.open('POST', 'http://localhost/shoov/www/api/v1.0/js-lm-incidents?token=' + buildToken, true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

      request.onload = function() {
        if (request.status !== 200) {
          console.log('Request failed.  Returned status of ' + request.status);
        }
      };

      request.send(encodeURI(serializeObject(data)));
    }
  });

};
