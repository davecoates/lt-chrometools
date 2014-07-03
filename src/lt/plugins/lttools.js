(function (window) {
  var cache = [];
  function replacer(key, value) {
    if(cache.length > 20) {
      return;
    }
    if(window.jQuery && value instanceof jQuery) {
      return "[jQuery $(" + value.selector + ")]";
    }
    if(value instanceof Element) {
      return "[Element " + value.tagName.toLowerCase() + (value.id != "" ? "#" : "") + value.id + "]";
    }
    if(typeof(value) == "object") {
      if(cache.indexOf(value) > -1) {
        return "circular";
      }
      cache.push(value);
      return value;
    }
    if(typeof value == "function") {
      return "[function]";
    }
    return value;
  }

  function sheetUriParts(sheet) {
    return sheet.href.replace(/\?.*$/, '').split('/');
  }


  function removeStylesheet(path) {
    var parts = path.split('/'),
    filename = parts.pop(),
    sheets = document.querySelectorAll('link[rel=stylesheet]'),
    matches = [], i;

    for (i = 0;i < sheets.length; i++) {
      var p = sheetUriParts(sheets[i]);
      if (p[p.length - 1] === filename) {
        matches.push(sheets[i]);
      }
    }

    if (matches.length === 0) {
      return false;
    }

    var bestMatch;
    if (matches.length === 1) {
      bestMatch = matches[0];
    } else {
      parts = parts.reverse();
      var highest = -1, match;
      for (i = 0; i < matches.length; i++) {
        match = matches[i];
        var length = 0, 
        components = sheetUriParts(match).slice(0, -1).reverse(), j;
        for (j = 0; j < components.length && j < parts.length; j++) {
          if (components[j] !== parts[j]) {
            break;
          } else {
            length++;
          }
        }
        if (length > highest) {
          highest = length;
          bestMatch = match;
        }
      }
    }
    bestMatch.parentNode.removeChild(bestMatch);
    return bestMatch;
  }


  function safeStringify(res) {
    cache = [];
    return JSON.stringify(res, replacer);
  }
  window.lttools = {
    watch: function(exp, meta) {
      var w = {
        exp: safeStringify(exp),
        meta: meta
      };
      console.group("__LTTOOLS_GROUP_NAME__")
      console.log(w);
      console.groupEnd();
    },
    removeStylesheet: removeStylesheet
  };
}(window));

