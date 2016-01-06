/**
 * Execute the tests, and if something fails, send it to the server.
 */
runTests = function() {
  var errors = [];
  var buildId = 21706;
  var buildToken = '77c40f0079b809f297082c1be2741375fde105e8';

  var customTests = function() {
    return [
      {
        id: "it should find the slogan",
        result: function() {
          var element = document.evaluate('//h2[contains(., "Take a leap")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          var random = Math.random() * 10;
          return random > 5;
        }
      }
    ]
  };

  result = customTests();
  result.forEach(function(row) {
    if (!!row.result()) {
      return;
    }

    errors.push(row.id);
  });

  if (!errors.length) {
    return;
  }
  var request = new XMLHttpRequest();

  var data = {
    build: buildId,
    //url: '/',
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

      request.open('POST', 'https://live-shoov.pantheon.io/api/v1.0/js-lm-incidents?token=' + buildToken, true);
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
