// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../static/images/github-logo.svg":[["github-logo.a2687a6a.svg","../static/images/github-logo.svg"],"../static/images/github-logo.svg"],"./../../static/images/1x1-keycap.svg":[["1x1-keycap.c7b1c5b2.svg","../static/images/1x1-keycap.svg"],"../static/images/1x1-keycap.svg"],"./../../static/images/1x1.25-keycap.svg":[["1x1.25-keycap.fa5fea1d.svg","../static/images/1x1.25-keycap.svg"],"../static/images/1x1.25-keycap.svg"],"./../../static/images/1x1.5-keycap.svg":[["1x1.5-keycap.22d15c41.svg","../static/images/1x1.5-keycap.svg"],"../static/images/1x1.5-keycap.svg"],"./../../static/images/1x1.75-keycap.svg":[["1x1.75-keycap.daf3f51d.svg","../static/images/1x1.75-keycap.svg"],"../static/images/1x1.75-keycap.svg"],"./../../static/images/1x2.25-keycap.svg":[["1x2.25-keycap.a20c6fde.svg","../static/images/1x2.25-keycap.svg"],"../static/images/1x2.25-keycap.svg"],"./../../static/images/1x2.75-keycap.svg":[["1x2.75-keycap.622f6680.svg","../static/images/1x2.75-keycap.svg"],"../static/images/1x2.75-keycap.svg"],"./../../static/images/1x4.5-keycap.svg":[["1x4.5-keycap.631befba.svg","../static/images/1x4.5-keycap.svg"],"../static/images/1x4.5-keycap.svg"],"./../../static/icons/play.svg":[["play.1a310495.svg","../static/icons/play.svg"],"../static/icons/play.svg"],"./../../static/icons/looping-arrows.svg":[["looping-arrows.fb009ca9.svg","../static/icons/looping-arrows.svg"],"../static/icons/looping-arrows.svg"],"./../../static/icons/brush.svg":[["brush.a0fed599.svg","../static/icons/brush.svg"],"../static/icons/brush.svg"],"./../../static/icons/geometry.svg":[["geometry.cf292055.svg","../static/icons/geometry.svg"],"../static/icons/geometry.svg"],"./../../static/icons/code.svg":[["code.1501942e.svg","../static/icons/code.svg"],"../static/icons/code.svg"],"./../../static/icons/bezier.svg":[["bezier.2fc552e7.svg","../static/icons/bezier.svg"],"../static/icons/bezier.svg"],"./../../static/icons/react.svg":[["react.d7d27edf.svg","../static/icons/react.svg"],"../static/icons/react.svg"],"./../../static/icons/node.svg":[["node.79821661.svg","../static/icons/node.svg"],"../static/icons/node.svg"],"./../../static/icons/redux.svg":[["redux.8f450f1f.svg","../static/icons/redux.svg"],"../static/icons/redux.svg"],"./../../static/icons/typescript.svg":[["typescript.7a1ff955.svg","../static/icons/typescript.svg"],"../static/icons/typescript.svg"],"./../../static/icons/webpack.svg":[["webpack.40ac52b9.svg","../static/icons/webpack.svg"],"../static/icons/webpack.svg"],"./../../static/icons/nextjs.svg":[["nextjs.14b54186.svg","../static/icons/nextjs.svg"],"../static/icons/nextjs.svg"],"./../../static/icons/scss.svg":[["scss.c97ea908.svg","../static/icons/scss.svg"],"../static/icons/scss.svg"],"./../../static/icons/docker.svg":[["docker.009c9f11.svg","../static/icons/docker.svg"],"../static/icons/docker.svg"],"./../../static/icons/figma.svg":[["figma.b99fade2.svg","../static/icons/figma.svg"],"../static/icons/figma.svg"],"./../../static/icons/graphql.svg":[["graphql.514df199.svg","../static/icons/graphql.svg"],"../static/icons/graphql.svg"],"./../../static/icons/photoshop.svg":[["photoshop.ea945766.svg","../static/icons/photoshop.svg"],"../static/icons/photoshop.svg"],"./../../static/icons/phone.svg":[["phone.c14e4cd9.svg","../static/icons/phone.svg"],"../static/icons/phone.svg"],"./../../static/icons/mail.svg":[["mail.9f5da6b7.svg","../static/icons/mail.svg"],"../static/icons/mail.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57191" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)