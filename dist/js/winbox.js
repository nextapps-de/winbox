/**
 * WinBox.js v0.2.01
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.getGlobal = function(passedInThis) {
  var possibleGlobals = ["object" == typeof globalThis && globalThis, passedInThis, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, ];
  for (var i = 0; i < possibleGlobals.length; ++i) {
    var maybeGlobal = possibleGlobals[i];
    if (maybeGlobal && maybeGlobal["Math"] == Math) {
      return maybeGlobal;
    }
  }
  return {valueOf:function() {
    throw new Error("Cannot find global object");
  }}.valueOf();
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.checkEs6ConformanceViaProxy = function() {
  try {
    var proxied = {};
    var proxy = Object.create(new $jscomp.global["Proxy"](proxied, {"get":function(target, key, receiver) {
      return target == proxied && key == "q" && receiver == proxy;
    }}));
    return proxy["q"] === true;
  } catch (err) {
    return false;
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = false;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.arrayIteratorImpl = function(array) {
  var index = 0;
  return function() {
    if (index < array.length) {
      return {done:false, value:array[index++], };
    } else {
      return {done:true};
    }
  };
};
$jscomp.arrayIterator = function(array) {
  return {next:$jscomp.arrayIteratorImpl(array)};
};
$jscomp.ASSUME_ES5 = false;
$jscomp.ASSUME_NO_NATIVE_MAP = false;
$jscomp.ASSUME_NO_NATIVE_SET = false;
$jscomp.SIMPLE_FROUND_POLYFILL = false;
$jscomp.ISOLATE_POLYFILLS = false;
$jscomp.FORCE_POLYFILL_PROMISE = false;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = false;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function(target, property, descriptor) {
  if (target == Array.prototype || target == Object.prototype) {
    return target;
  }
  target[property] = descriptor.value;
  return target;
};
$jscomp.IS_SYMBOL_NATIVE = typeof Symbol === "function" && typeof Symbol("x") === "symbol";
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(target, property) {
  var obfuscatedName = $jscomp.propertyToPolyfillSymbol[property];
  if (obfuscatedName == null) {
    return target[property];
  }
  var polyfill = target[obfuscatedName];
  return polyfill !== undefined ? polyfill : target[property];
};
$jscomp.polyfill = function(target, polyfill, fromLang, toLang) {
  if (!polyfill) {
    return;
  }
  if ($jscomp.ISOLATE_POLYFILLS) {
    $jscomp.polyfillIsolated(target, polyfill, fromLang, toLang);
  } else {
    $jscomp.polyfillUnisolated(target, polyfill, fromLang, toLang);
  }
};
$jscomp.polyfillUnisolated = function(target, polyfill, fromLang, toLang) {
  var obj = $jscomp.global;
  var split = target.split(".");
  for (var i = 0; i < split.length - 1; i++) {
    var key = split[i];
    if (!(key in obj)) {
      return;
    }
    obj = obj[key];
  }
  var property = split[split.length - 1];
  var orig = obj[property];
  var impl = polyfill(orig);
  if (impl == orig || impl == null) {
    return;
  }
  $jscomp.defineProperty(obj, property, {configurable:true, writable:true, value:impl});
};
$jscomp.polyfillIsolated = function(target, polyfill, fromLang, toLang) {
  var split = target.split(".");
  var isSimpleName = split.length === 1;
  var root = split[0];
  var ownerObject;
  if (!isSimpleName && root in $jscomp.polyfills) {
    ownerObject = $jscomp.polyfills;
  } else {
    ownerObject = $jscomp.global;
  }
  for (var i = 0; i < split.length - 1; i++) {
    var key = split[i];
    if (!(key in ownerObject)) {
      return;
    }
    ownerObject = ownerObject[key];
  }
  var property = split[split.length - 1];
  var nativeImpl = $jscomp.IS_SYMBOL_NATIVE && fromLang === "es6" ? ownerObject[property] : null;
  var impl = polyfill(nativeImpl);
  if (impl == null) {
    return;
  }
  if (isSimpleName) {
    $jscomp.defineProperty($jscomp.polyfills, property, {configurable:true, writable:true, value:impl});
  } else {
    if (impl !== nativeImpl) {
      if ($jscomp.propertyToPolyfillSymbol[property] === undefined) {
        $jscomp.propertyToPolyfillSymbol[property] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global["Symbol"](property) : $jscomp.POLYFILL_PREFIX + property;
      }
      var obfuscatedName = $jscomp.propertyToPolyfillSymbol[property];
      $jscomp.defineProperty(ownerObject, obfuscatedName, {configurable:true, writable:true, value:impl});
    }
  }
};
$jscomp.initSymbol = function() {
};
$jscomp.polyfill("Symbol", function(orig) {
  if (orig) {
    return orig;
  }
  var SymbolClass = function(id, opt_description) {
    this.$jscomp$symbol$id_ = id;
    this.description;
    $jscomp.defineProperty(this, "description", {configurable:true, writable:true, value:opt_description});
  };
  SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_;
  };
  var SYMBOL_PREFIX = "jscomp_symbol_";
  var counter = 0;
  var symbolPolyfill = function(opt_description) {
    if (this instanceof symbolPolyfill) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new SymbolClass(SYMBOL_PREFIX + (opt_description || "") + "_" + counter++, opt_description);
  };
  return symbolPolyfill;
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function(orig) {
  if (orig) {
    return orig;
  }
  var symbolIterator = Symbol("Symbol.iterator");
  var arrayLikes = ["Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"];
  for (var i = 0; i < arrayLikes.length; i++) {
    var ArrayLikeCtor = $jscomp.global[arrayLikes[i]];
    if (typeof ArrayLikeCtor === "function" && typeof ArrayLikeCtor.prototype[symbolIterator] != "function") {
      $jscomp.defineProperty(ArrayLikeCtor.prototype, symbolIterator, {configurable:true, writable:true, value:function() {
        return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
      }});
    }
  }
  return symbolIterator;
}, "es6", "es3");
$jscomp.polyfill("Symbol.asyncIterator", function(orig) {
  if (orig) {
    return orig;
  }
  return Symbol("Symbol.asyncIterator");
}, "es9", "es3");
$jscomp.iteratorPrototype = function(next) {
  var iterator = {next:next};
  iterator[Symbol.iterator] = function() {
    return this;
  };
  return iterator;
};
$jscomp.makeIterator = function(iterable) {
  var iteratorFunction = typeof Symbol != "undefined" && Symbol.iterator && iterable[Symbol.iterator];
  return iteratorFunction ? iteratorFunction.call(iterable) : $jscomp.arrayIterator(iterable);
};
$jscomp.owns = function(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
$jscomp.polyfill("WeakMap", function(NativeWeakMap) {
  function isConformant() {
    if (!NativeWeakMap || !Object.seal) {
      return false;
    }
    try {
      var x = Object.seal({});
      var y = Object.seal({});
      var map = new NativeWeakMap([[x, 2], [y, 3]]);
      if (map.get(x) != 2 || map.get(y) != 3) {
        return false;
      }
      map["delete"](x);
      map.set(y, 4);
      return !map.has(x) && map.get(y) == 4;
    } catch (err) {
      return false;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (NativeWeakMap && $jscomp.ES6_CONFORMANCE) {
      return NativeWeakMap;
    }
  } else {
    if (isConformant()) {
      return NativeWeakMap;
    }
  }
  var prop = "$jscomp_hidden_" + Math.random();
  function WeakMapMembership() {
  }
  function isValidKey(key) {
    var type = typeof key;
    return type === "object" && key !== null || type === "function";
  }
  function insert(target) {
    if (!$jscomp.owns(target, prop)) {
      var obj = new WeakMapMembership;
      $jscomp.defineProperty(target, prop, {value:obj});
    }
  }
  function patch(name) {
    if ($jscomp.ISOLATE_POLYFILLS) {
      return;
    }
    var prev = Object[name];
    if (prev) {
      Object[name] = function(target) {
        if (target instanceof WeakMapMembership) {
          return target;
        } else {
          if (Object.isExtensible(target)) {
            insert(target);
          }
          return prev(target);
        }
      };
    }
  }
  patch("freeze");
  patch("preventExtensions");
  patch("seal");
  var index = 0;
  var PolyfillWeakMap = function(opt_iterable) {
    this.id_ = (index += Math.random() + 1).toString();
    if (opt_iterable) {
      var iter = $jscomp.makeIterator(opt_iterable);
      var entry;
      while (!(entry = iter.next()).done) {
        var item = entry.value;
        this.set(item[0], item[1]);
      }
    }
  };
  PolyfillWeakMap.prototype.set = function(key, value) {
    if (!isValidKey(key)) {
      throw new Error("Invalid WeakMap key");
    }
    insert(key);
    if (!$jscomp.owns(key, prop)) {
      throw new Error("WeakMap key fail: " + key);
    }
    key[prop][this.id_] = value;
    return this;
  };
  PolyfillWeakMap.prototype.get = function(key) {
    return isValidKey(key) && $jscomp.owns(key, prop) ? key[prop][this.id_] : undefined;
  };
  PolyfillWeakMap.prototype.has = function(key) {
    return isValidKey(key) && $jscomp.owns(key, prop) && $jscomp.owns(key[prop], this.id_);
  };
  PolyfillWeakMap.prototype["delete"] = function(key) {
    if (!isValidKey(key) || !$jscomp.owns(key, prop) || !$jscomp.owns(key[prop], this.id_)) {
      return false;
    }
    return delete key[prop][this.id_];
  };
  return PolyfillWeakMap;
}, "es6", "es3");
$jscomp.MapEntry = function() {
  this.previous;
  this.next;
  this.head;
  this.key;
  this.value;
};
$jscomp.polyfill("Map", function(NativeMap) {
  function isConformant() {
    if ($jscomp.ASSUME_NO_NATIVE_MAP || !NativeMap || typeof NativeMap != "function" || !NativeMap.prototype.entries || typeof Object.seal != "function") {
      return false;
    }
    try {
      NativeMap = NativeMap;
      var key = Object.seal({x:4});
      var map = new NativeMap($jscomp.makeIterator([[key, "s"]]));
      if (map.get(key) != "s" || map.size != 1 || map.get({x:4}) || map.set({x:4}, "t") != map || map.size != 2) {
        return false;
      }
      var iter = map.entries();
      var item = iter.next();
      if (item.done || item.value[0] != key || item.value[1] != "s") {
        return false;
      }
      item = iter.next();
      if (item.done || item.value[0].x != 4 || item.value[1] != "t" || !iter.next().done) {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (NativeMap && $jscomp.ES6_CONFORMANCE) {
      return NativeMap;
    }
  } else {
    if (isConformant()) {
      return NativeMap;
    }
  }
  var idMap = new WeakMap;
  var PolyfillMap = function(opt_iterable) {
    this.data_ = {};
    this.head_ = createHead();
    this.size = 0;
    if (opt_iterable) {
      var iter = $jscomp.makeIterator(opt_iterable);
      var entry;
      while (!(entry = iter.next()).done) {
        var item = entry.value;
        this.set(item[0], item[1]);
      }
    }
  };
  PolyfillMap.prototype.set = function(key, value) {
    key = key === 0 ? 0 : key;
    var r = maybeGetEntry(this, key);
    if (!r.list) {
      r.list = this.data_[r.id] = [];
    }
    if (!r.entry) {
      r.entry = {next:this.head_, previous:this.head_.previous, head:this.head_, key:key, value:value, };
      r.list.push(r.entry);
      this.head_.previous.next = r.entry;
      this.head_.previous = r.entry;
      this.size++;
    } else {
      r.entry.value = value;
    }
    return this;
  };
  PolyfillMap.prototype["delete"] = function(key) {
    var r = maybeGetEntry(this, key);
    if (r.entry && r.list) {
      r.list.splice(r.index, 1);
      if (!r.list.length) {
        delete this.data_[r.id];
      }
      r.entry.previous.next = r.entry.next;
      r.entry.next.previous = r.entry.previous;
      r.entry.head = null;
      this.size--;
      return true;
    }
    return false;
  };
  PolyfillMap.prototype.clear = function() {
    this.data_ = {};
    this.head_ = this.head_.previous = createHead();
    this.size = 0;
  };
  PolyfillMap.prototype.has = function(key) {
    return !!maybeGetEntry(this, key).entry;
  };
  PolyfillMap.prototype.get = function(key) {
    var entry = maybeGetEntry(this, key).entry;
    return entry && entry.value;
  };
  PolyfillMap.prototype.entries = function() {
    return makeIterator(this, function(entry) {
      return [entry.key, entry.value];
    });
  };
  PolyfillMap.prototype.keys = function() {
    return makeIterator(this, function(entry) {
      return entry.key;
    });
  };
  PolyfillMap.prototype.values = function() {
    return makeIterator(this, function(entry) {
      return entry.value;
    });
  };
  PolyfillMap.prototype.forEach = function(callback, opt_thisArg) {
    var iter = this.entries();
    var item;
    while (!(item = iter.next()).done) {
      var entry = item.value;
      callback.call(opt_thisArg, entry[1], entry[0], this);
    }
  };
  PolyfillMap.prototype[Symbol.iterator] = PolyfillMap.prototype.entries;
  var maybeGetEntry = function(map, key) {
    var id = getId(key);
    var list = map.data_[id];
    if (list && $jscomp.owns(map.data_, id)) {
      for (var index = 0; index < list.length; index++) {
        var entry = list[index];
        if (key !== key && entry.key !== entry.key || key === entry.key) {
          return {id:id, list:list, index:index, entry:entry};
        }
      }
    }
    return {id:id, list:list, index:-1, entry:undefined};
  };
  var makeIterator = function(map, func) {
    var entry = map.head_;
    return $jscomp.iteratorPrototype(function() {
      if (entry) {
        while (entry.head != map.head_) {
          entry = entry.previous;
        }
        while (entry.next != entry.head) {
          entry = entry.next;
          return {done:false, value:func(entry)};
        }
        entry = null;
      }
      return {done:true, value:void 0};
    });
  };
  var createHead = function() {
    var head = {};
    head.previous = head.next = head.head = head;
    return head;
  };
  var mapIndex = 0;
  var getId = function(obj) {
    var type = obj && typeof obj;
    if (type == "object" || type == "function") {
      obj = obj;
      if (!idMap.has(obj)) {
        var id = "" + ++mapIndex;
        idMap.set(obj, id);
        return id;
      }
      return idMap.get(obj);
    }
    return "p_" + obj;
  };
  return PolyfillMap;
}, "es6", "es3");
$jscomp.polyfill("Set", function(NativeSet) {
  function isConformant() {
    if ($jscomp.ASSUME_NO_NATIVE_SET || !NativeSet || typeof NativeSet != "function" || !NativeSet.prototype.entries || typeof Object.seal != "function") {
      return false;
    }
    try {
      NativeSet = NativeSet;
      var value = Object.seal({x:4});
      var set = new NativeSet($jscomp.makeIterator([value]));
      if (!set.has(value) || set.size != 1 || set.add(value) != set || set.size != 1 || set.add({x:4}) != set || set.size != 2) {
        return false;
      }
      var iter = set.entries();
      var item = iter.next();
      if (item.done || item.value[0] != value || item.value[1] != value) {
        return false;
      }
      item = iter.next();
      if (item.done || item.value[0] == value || item.value[0].x != 4 || item.value[1] != item.value[0]) {
        return false;
      }
      return iter.next().done;
    } catch (err) {
      return false;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (NativeSet && $jscomp.ES6_CONFORMANCE) {
      return NativeSet;
    }
  } else {
    if (isConformant()) {
      return NativeSet;
    }
  }
  var PolyfillSet = function(opt_iterable) {
    this.map_ = new Map;
    if (opt_iterable) {
      var iter = $jscomp.makeIterator(opt_iterable);
      var entry;
      while (!(entry = iter.next()).done) {
        var item = entry.value;
        this.add(item);
      }
    }
    this.size = this.map_.size;
  };
  PolyfillSet.prototype.add = function(value) {
    value = value === 0 ? 0 : value;
    this.map_.set(value, value);
    this.size = this.map_.size;
    return this;
  };
  PolyfillSet.prototype["delete"] = function(value) {
    var result = this.map_["delete"](value);
    this.size = this.map_.size;
    return result;
  };
  PolyfillSet.prototype.clear = function() {
    this.map_.clear();
    this.size = 0;
  };
  PolyfillSet.prototype.has = function(value) {
    return this.map_.has(value);
  };
  PolyfillSet.prototype.entries = function() {
    return this.map_.entries();
  };
  PolyfillSet.prototype.values = function() {
    return this.map_.values();
  };
  PolyfillSet.prototype.keys = PolyfillSet.prototype.values;
  PolyfillSet.prototype[Symbol.iterator] = PolyfillSet.prototype.values;
  PolyfillSet.prototype.forEach = function(callback, opt_thisArg) {
    var set = this;
    this.map_.forEach(function(value) {
      return callback.call(opt_thisArg, value, value, set);
    });
  };
  return PolyfillSet;
}, "es6", "es3");
(function() {
  var Module = function(id, opt_exports) {
    this.id = id;
    this.exports = opt_exports || {};
  };
  Module.prototype.exportAllFrom = function(other) {
    var module = this;
    var define = {};
    for (var key in other) {
      if (key == "default" || key in module.exports || key in define) {
        continue;
      }
      define[key] = {enumerable:true, get:function(key) {
        return function() {
          return other[key];
        };
      }(key)};
    }
    $jscomp.global.Object.defineProperties(module.exports, define);
  };
  var CacheEntry = function(def, module, path) {
    this.def = def;
    this.module = module;
    this.path = path;
    this.blockingDeps = new Set;
  };
  CacheEntry.prototype.load = function() {
    if (this.def) {
      var def = this.def;
      this.def = null;
      callRequireCallback(def, this.module);
    }
    return this.module.exports;
  };
  function callRequireCallback(callback, opt_module) {
    var oldPath = currentModulePath;
    try {
      if (opt_module) {
        currentModulePath = opt_module.id;
        callback.call(opt_module, createRequire(opt_module), opt_module.exports, opt_module);
      } else {
        callback($jscomp.require);
      }
    } finally {
      currentModulePath = oldPath;
    }
  }
  var moduleCache = new Map;
  var currentModulePath = "";
  function normalizePath(path) {
    var components = path.split("/");
    var i = 0;
    while (i < components.length) {
      if (components[i] == ".") {
        components.splice(i, 1);
      } else {
        if (i && components[i] == ".." && components[i - 1] && components[i - 1] != "..") {
          components.splice(--i, 2);
        } else {
          i++;
        }
      }
    }
    return components.join("/");
  }
  $jscomp.getCurrentModulePath = function() {
    return currentModulePath;
  };
  function getCacheEntry(id) {
    var cacheEntry = moduleCache.get(id);
    if (cacheEntry === undefined) {
      throw new Error("Module " + id + " does not exist.");
    }
    return cacheEntry;
  }
  var ensureMap = new Map;
  var CallbackEntry = function(requireSet, callback) {
    this.requireSet = requireSet;
    this.callback = callback;
  };
  function maybeNormalizePath(root, absOrRelativePath) {
    if (absOrRelativePath.startsWith("./") || absOrRelativePath.startsWith("../")) {
      return normalizePath(root + "/../" + absOrRelativePath);
    } else {
      return absOrRelativePath;
    }
  }
  function createRequire(opt_module) {
    function require(absOrRelativePath) {
      var absPath = absOrRelativePath;
      if (opt_module) {
        absPath = maybeNormalizePath(opt_module.id, absPath);
      }
      return getCacheEntry(absPath).load();
    }
    function requireEnsure(requires, callback) {
      if (currentModulePath) {
        for (var i = 0; i < requires.length; i++) {
          requires[i] = maybeNormalizePath(currentModulePath, requires[i]);
        }
      }
      var blockingRequires = [];
      for (var i = 0; i < requires.length; i++) {
        var required = moduleCache.get(requires[i]);
        if (!required || required.blockingDeps.size) {
          blockingRequires.push(requires[i]);
        }
      }
      if (blockingRequires.length) {
        var requireSet = new Set(blockingRequires);
        var callbackEntry = new CallbackEntry(requireSet, callback);
        requireSet.forEach(function(require) {
          var arr = ensureMap.get(require);
          if (!arr) {
            arr = [];
            ensureMap.set(require, arr);
          }
          arr.push(callbackEntry);
        });
      } else {
        callback(require);
      }
    }
    require.ensure = requireEnsure;
    return require;
  }
  $jscomp.require = createRequire();
  $jscomp.hasModule = function(id) {
    return moduleCache.has(id);
  };
  function markAvailable(absModulePath) {
    var ensures = ensureMap.get(absModulePath);
    if (ensures) {
      for (var i = 0; i < ensures.length; i++) {
        var entry = ensures[i];
        entry.requireSet["delete"](absModulePath);
        if (!entry.requireSet.size) {
          ensures.splice(i--, 1);
          callRequireCallback(entry.callback);
        }
      }
      if (!ensures.length) {
        ensureMap["delete"](absModulePath);
      }
    }
  }
  $jscomp.registerModule = function(moduleDef, absModulePath, opt_shallowDeps) {
    if (moduleCache.has(absModulePath)) {
      throw new Error("Module " + absModulePath + " has already been registered.");
    }
    if (currentModulePath) {
      throw new Error("Cannot nest modules.");
    }
    var shallowDeps = opt_shallowDeps || [];
    for (var i = 0; i < shallowDeps.length; i++) {
      shallowDeps[i] = maybeNormalizePath(absModulePath, shallowDeps[i]);
    }
    var blockingDeps = new Set;
    for (var i = 0; i < shallowDeps.length; i++) {
      getTransitiveBlockingDepsOf(shallowDeps[i]).forEach(function(transitive) {
        blockingDeps.add(transitive);
      });
    }
    blockingDeps["delete"](absModulePath);
    var cacheEntry = new CacheEntry(moduleDef, new Module(absModulePath), absModulePath);
    moduleCache.set(absModulePath, cacheEntry);
    blockingDeps.forEach(function(blocker) {
      addAsBlocking(cacheEntry, blocker);
    });
    if (!blockingDeps.size) {
      markAvailable(cacheEntry.module.id);
    }
    removeAsBlocking(cacheEntry);
  };
  function getTransitiveBlockingDepsOf(moduleId) {
    var cacheEntry = moduleCache.get(moduleId);
    var blocking = new Set;
    if (cacheEntry) {
      cacheEntry.blockingDeps.forEach(function(dep) {
        getTransitiveBlockingDepsOf(dep).forEach(function(transitive) {
          blocking.add(transitive);
        });
      });
    } else {
      blocking.add(moduleId);
    }
    return blocking;
  }
  var blockingModulePathToBlockedModules = new Map;
  function addAsBlocking(blocked, blocker) {
    if (blocked.module.id != blocker) {
      var blockedModules = blockingModulePathToBlockedModules.get(blocker);
      if (!blockedModules) {
        blockedModules = new Set;
        blockingModulePathToBlockedModules.set(blocker, blockedModules);
      }
      blockedModules.add(blocked);
      blocked.blockingDeps.add(blocker);
    }
  }
  function removeAsBlocking(cacheEntry) {
    var blocked = blockingModulePathToBlockedModules.get(cacheEntry.module.id);
    if (blocked) {
      blockingModulePathToBlockedModules["delete"](cacheEntry.module.id);
      blocked.forEach(function(blockedCacheEntry) {
        blockedCacheEntry.blockingDeps["delete"](cacheEntry.module.id);
        cacheEntry.blockingDeps.forEach(function(blocker) {
          addAsBlocking(blockedCacheEntry, blocker);
        });
        if (!blockedCacheEntry.blockingDeps.size) {
          removeAsBlocking(blockedCacheEntry);
          markAvailable(blockedCacheEntry.module.id);
        }
      });
    }
  }
  $jscomp.registerAndLoadModule = function(moduleDef, absModulePath, shallowDeps) {
    $jscomp.require.ensure([absModulePath], function(require) {
      require(absModulePath);
    });
    $jscomp.registerModule(moduleDef, absModulePath, shallowDeps);
  };
  $jscomp.registerEs6ModuleExports = function(absModulePath, exports) {
    if (moduleCache.has(absModulePath)) {
      throw new Error("Module at path " + absModulePath + " is already registered.");
    }
    var entry = new CacheEntry(null, new Module(absModulePath, exports), absModulePath);
    moduleCache.set(absModulePath, entry);
    markAvailable(absModulePath);
  };
  $jscomp.clearModules = function() {
    moduleCache.clear();
  };
})();
this.CLOSURE_EVAL_PREFILTER = function(s) { return s; };(function(thisValue){var isChrome87 = false; try {isChrome87 =  eval(trustedTypes.emptyScript) !== trustedTypes.emptyScript } catch (e) {} if (typeof trustedTypes !== 'undefined' && trustedTypes.createPolicy &&isChrome87 ) {  var policy = trustedTypes.createPolicy('goog#devserver',{ createScript: function(s){ return s; }});  thisValue.CLOSURE_EVAL_PREFILTER = policy.createScript.bind(policy);}})(this);//src/js/template.js
$jscomp.registerAndLoadModule(function($$require, $$exports, $$module) {
  "use strict";
  Object.defineProperties($$exports, {"default":{enumerable:true, get:function() {
    return $$default;
  }}});
  const template = document.createElement("div");
  template.innerHTML = "\x3cdiv class\x3dwb-header\x3e" + "\x3cdiv class\x3dwb-icon\x3e" + "\x3cspan class\x3dwb-min\x3e\x3c/span\x3e" + "\x3cspan class\x3dwb-max\x3e\x3c/span\x3e" + "\x3cspan class\x3dwb-full\x3e\x3c/span\x3e" + "\x3cspan class\x3dwb-close\x3e\x3c/span\x3e" + "\x3c/div\x3e" + "\x3cdiv class\x3dwb-title\x3e \x3c/div\x3e" + "\x3c/div\x3e" + "\x3cdiv class\x3dwb-body\x3e\x3c/div\x3e" + "\x3cdiv class\x3dwb-n\x3e\x3c/div\x3e" + "\x3cdiv class\x3dwb-s\x3e\x3c/div\x3e" + "\x3cdiv class\x3dwb-w\x3e\x3c/div\x3e" + 
  "\x3cdiv class\x3dwb-e\x3e\x3c/div\x3e" + "\x3cdiv class\x3dwb-nw\x3e\x3c/div\x3e" + "\x3cdiv class\x3dwb-ne\x3e\x3c/div\x3e" + "\x3cdiv class\x3dwb-se\x3e\x3c/div\x3e" + "\x3cdiv class\x3dwb-sw\x3e\x3c/div\x3e";
  const $$default = function() {
    return template.cloneNode(true);
  };
}, "src/js/template.js", []);

//src/js/helper.js
$jscomp.registerAndLoadModule(function($$require, $$exports, $$module) {
  "use strict";
  Object.defineProperties($$exports, {addClass:{enumerable:true, get:function() {
    return addClass;
  }}, addListener:{enumerable:true, get:function() {
    return addListener;
  }}, getByClass:{enumerable:true, get:function() {
    return getByClass;
  }}, hasClass:{enumerable:true, get:function() {
    return hasClass;
  }}, preventEvent:{enumerable:true, get:function() {
    return preventEvent;
  }}, removeClass:{enumerable:true, get:function() {
    return removeClass;
  }}, removeListener:{enumerable:true, get:function() {
    return removeListener;
  }}, setStyle:{enumerable:true, get:function() {
    return setStyle;
  }}, setText:{enumerable:true, get:function() {
    return setText;
  }}});
  function addListener(node, event, fn, opt) {
    node.addEventListener(event, fn, opt || opt === false ? opt : true);
  }
  function removeListener(node, event, fn, opt) {
    node.removeEventListener(event, fn, opt || opt === false ? opt : true);
  }
  function preventEvent(event, prevent) {
    event.stopPropagation();
    event.cancelable && event.preventDefault();
  }
  function getByClass(root, name) {
    return root.getElementsByClassName(name)[0];
  }
  function addClass(node, classname) {
    node.classList.add(classname);
  }
  function hasClass(node, classname) {
    return node.classList.contains(classname);
  }
  function removeClass(node, classname) {
    node.classList.remove(classname);
  }
  function setStyle(node, style, value) {
    value = "" + value;
    if (node["_s_" + style] !== value) {
      node.style.setProperty(style, value);
      node["_s_" + style] = value;
    }
  }
  function setText(node, value) {
    node.firstChild.nodeValue = value;
  }
}, "src/js/helper.js", []);

//src/js/winbox.js
$jscomp.registerAndLoadModule(function($$require, $$exports, $$module) {
  "use strict";
  Object.defineProperties($$exports, {"default":{enumerable:true, get:function() {
    return $$default;
  }}});
  var module$src$js$template = $$require("src/js/template.js");
  var module$src$js$helper = $$require("src/js/helper.js");
  const use_raf = false;
  const stack_min = [];
  let body;
  let id_counter = 0;
  let dblclick_timer = 0;
  let index;
  let is_fullscreen;
  let last_focus;
  let prefix_request;
  let prefix_exit;
  let root_w, root_h;
  function WinBox(params, _title) {
    if (!(this instanceof WinBox)) {
      return new WinBox(params);
    }
    index || setup();
    this.dom = (0,module$src$js$template["default"])();
    this.body = (0,module$src$js$helper.getByClass)(this.dom, "wb-body");
    let id, root, title, mount, html, url, width, height, minwidth, minheight, x, y, max, top, left, bottom, right, modal, onclose, onfocus, onblur, onmove, onresize, background, border, classname, splitscreen;
    if (params) {
      if (_title) {
        title = params;
        params = _title;
      }
      if (typeof params === "string") {
        title = params;
      } else {
        if (modal = params["modal"]) {
          x = y = "center";
        }
        id = params["id"];
        root = params["root"];
        title = title || params["title"];
        mount = params["mount"];
        html = params["html"];
        url = params["url"];
        width = params["width"];
        height = params["height"];
        minwidth = params["minwidth"];
        minheight = params["minheight"];
        x = params["x"] || x;
        y = params["y"] || y;
        max = params["max"];
        top = params["top"];
        left = params["left"];
        bottom = params["bottom"];
        right = params["right"];
        index = params["index"] || index;
        onclose = params["onclose"];
        onfocus = params["onfocus"];
        onblur = params["onblur"];
        onmove = params["onmove"];
        onresize = params["onresize"];
        background = params["background"];
        border = params["border"];
        classname = params["class"];
        splitscreen = params["splitscreen"];
        if (background) {
          this.setBackground(background);
        }
        if (border) {
          (0,module$src$js$helper.setStyle)(this.body, "margin", border + (isNaN(border) ? "" : "px"));
        }
      }
    }
    this.setTitle(title || "");
    let max_width = root_w;
    let max_height = root_h;
    top = top ? parse(top, max_height) : 0;
    bottom = bottom ? parse(bottom, max_height) : 0;
    left = left ? parse(left, max_width) : 0;
    right = right ? parse(right, max_width) : 0;
    max_width -= left + right;
    max_height -= top + bottom;
    width = width ? parse(width, max_width) : max_width / 2 | 0;
    height = height ? parse(height, max_height) : max_height / 2 | 0;
    minwidth = minwidth ? parse(minwidth, max_width) : 0;
    minheight = minheight ? parse(minheight, max_height) : 0;
    x = x ? parse(x, max_width, width) : left;
    y = y ? parse(y, max_height, height) : top;
    index = index || 10;
    this.dom.id = this.id = id || "winbox-" + ++id_counter;
    this.dom.className = "winbox" + (classname ? " " + (typeof classname === "string" ? classname : classname.join(" ")) : "") + (modal ? " modal" : "");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.minwidth = minwidth;
    this.minheight = minheight;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.border = border;
    this.min = false;
    this.max = false;
    this.onclose = onclose;
    this.onfocus = onfocus;
    this.onblur = onblur;
    this.onmove = onmove;
    this.onresize = onresize;
    this.splitscreen = splitscreen;
    if (max) {
      this.maximize();
    } else {
      this.move().resize();
    }
    this.focus();
    if (mount) {
      this.mount(mount);
    } else {
      if (html) {
        this.body.innerHTML = html;
      } else {
        if (url) {
          this.setUrl(url);
        }
      }
    }
    register(this);
    (root || body).appendChild(this.dom);
  }
  WinBox["new"] = function(params) {
    return new WinBox(params);
  };
  const $$default = WinBox;
  function parse(num, base, center) {
    if (typeof num === "string") {
      if (num === "center") {
        num = (base - center) / 2 | 0;
      } else {
        if (num === "right" || num === "bottom") {
          num = base - center;
        } else {
          const value = parseFloat(num);
          const unit = "" + value !== num && num.substring(("" + value).length);
          if (unit === "%") {
            num = base / 100 * value | 0;
          } else {
            num = value;
          }
        }
      }
    }
    return num;
  }
  function setup() {
    body = document.body;
    body[prefix_request = "requestFullscreen"] || body[prefix_request = "msRequestFullscreen"] || body[prefix_request = "webkitRequestFullscreen"] || body[prefix_request = "mozRequestFullscreen"] || (prefix_request = "");
    prefix_exit = prefix_request && prefix_request.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit");
    (0,module$src$js$helper.addListener)(window, "resize", function() {
      init();
      update_min_stack();
    });
    init();
  }
  function register(self) {
    addWindowListener(self, "title");
    addWindowListener(self, "n");
    addWindowListener(self, "s");
    addWindowListener(self, "w");
    addWindowListener(self, "e");
    addWindowListener(self, "nw");
    addWindowListener(self, "ne");
    addWindowListener(self, "se");
    addWindowListener(self, "sw");
    (0,module$src$js$helper.addListener)((0,module$src$js$helper.getByClass)(self.dom, "wb-min"), "click", function(event) {
      (0,module$src$js$helper.preventEvent)(event);
      self.minimize();
    });
    (0,module$src$js$helper.addListener)((0,module$src$js$helper.getByClass)(self.dom, "wb-max"), "click", function(event) {
      (0,module$src$js$helper.preventEvent)(event);
      self.focus().maximize();
    });
    if (prefix_request) {
      (0,module$src$js$helper.addListener)((0,module$src$js$helper.getByClass)(self.dom, "wb-full"), "click", function(event) {
        (0,module$src$js$helper.preventEvent)(event);
        self.focus().fullscreen();
      });
    } else {
      self.addClass("no-full");
    }
    (0,module$src$js$helper.addListener)((0,module$src$js$helper.getByClass)(self.dom, "wb-close"), "click", function(event) {
      (0,module$src$js$helper.preventEvent)(event);
      self.close() || (self = null);
    });
    (0,module$src$js$helper.addListener)(self.dom, "click", function(event) {
      self.focus();
    }, false);
  }
  function remove_min_stack(self) {
    stack_min.splice(stack_min.indexOf(self), 1);
    update_min_stack();
    self.removeClass("min");
    self.min = false;
    self.dom.title = "";
  }
  function update_min_stack() {
    const len = stack_min.length;
    const tile_index = {};
    const tile_len = {};
    for (let i = 0, self, key; i < len; i++) {
      self = stack_min[i];
      key = self.left + ":" + self.top;
      if (tile_len[key]) {
        tile_len[key]++;
      } else {
        tile_len[key] = 1;
      }
    }
    for (let i = 0, self, key, width; i < len; i++) {
      self = stack_min[i];
      key = self.left + ":" + self.top;
      width = Math.min((root_w - self.left - self.right) / tile_len[key], 250);
      tile_index[key] || (tile_index[key] = 0);
      self.resize(width + 1 | 0, 35, true).move(self.left + tile_index[key] * width | 0, root_h - self.bottom - 35, true);
      tile_index[key]++;
    }
  }
  function addWindowListener(self, dir) {
    const node = (0,module$src$js$helper.getByClass)(self.dom, "wb-" + dir);
    let touch, x, y;
    (0,module$src$js$helper.addListener)(node, "mousedown", mousedown);
    (0,module$src$js$helper.addListener)(node, "touchstart", mousedown, {"passive":false});
    let raf, raf_move, raf_resize;
    function loop() {
      raf = requestAnimationFrame(loop);
      if (raf_resize) {
        self.resize();
        raf_resize = false;
      }
      if (raf_move) {
        self.move();
        raf_move = false;
      }
    }
    function mousedown(event) {
      (0,module$src$js$helper.preventEvent)(event, true);
      if (self.min) {
        self.minimize();
      } else {
        if (dir === "title" && !this.hasClass(self.dom, "no-max")) {
          const now = Date.now();
          const diff = now - dblclick_timer;
          dblclick_timer = now;
          if (diff < 250) {
            self.maximize();
            return;
          }
        }
        if (!self.max) {
          (0,module$src$js$helper.addClass)(body, "wb-drag");
          use_raf && loop();
          if ((touch = event.touches) && (touch = touch[0])) {
            event = touch;
            (0,module$src$js$helper.addListener)(window, "touchmove", handler_mousemove);
            (0,module$src$js$helper.addListener)(window, "touchend", handler_mouseup);
          } else {
            (0,module$src$js$helper.addListener)(window, "mousemove", handler_mousemove);
            (0,module$src$js$helper.addListener)(window, "mouseup", handler_mouseup);
          }
          x = event.pageX;
          y = event.pageY;
          self.focus();
        }
      }
    }
    function handler_mousemove(event) {
      (0,module$src$js$helper.preventEvent)(event);
      if (touch) {
        event = event.touches[0];
      }
      const pageX = event.pageX;
      const pageY = event.pageY;
      const offsetX = pageX - x;
      const offsetY = pageY - y;
      let resize_w, resize_h, move_x, move_y;
      if (dir === "title") {
        self.x += offsetX;
        self.y += offsetY;
        move_x = move_y = 1;
      } else {
        if (dir === "e" || dir === "se" || dir === "ne") {
          self.width += offsetX;
          resize_w = 1;
        } else {
          if (dir === "w" || dir === "sw" || dir === "nw") {
            self.x += offsetX;
            self.width -= offsetX;
            resize_w = 1;
            move_x = 1;
          }
        }
        if (dir === "s" || dir === "se" || dir === "sw") {
          self.height += offsetY;
          resize_h = 1;
        } else {
          if (dir === "n" || dir === "ne" || dir === "nw") {
            self.y += offsetY;
            self.height -= offsetY;
            resize_h = 1;
            move_y = 1;
          }
        }
      }
      if (resize_w || resize_h) {
        if (resize_w) {
          self.width = Math.max(Math.min(self.width, root_w - self.x - self.right), 150);
        }
        if (resize_h) {
          self.height = Math.max(Math.min(self.height, root_h - self.y - self.bottom), 35);
        }
        use_raf ? raf_resize = true : self.resize();
      }
      if (move_x || move_y) {
        if (move_x) {
          self.x = Math.max(Math.min(self.x, root_w - self.width - self.right), self.left);
        }
        if (move_y) {
          self.y = Math.max(Math.min(self.y, root_h - self.height - self.bottom), self.top);
        }
        use_raf ? raf_move = true : self.move();
      }
      x = pageX;
      y = pageY;
    }
    function handler_mouseup(event) {
      (0,module$src$js$helper.preventEvent)(event);
      (0,module$src$js$helper.removeClass)(body, "wb-drag");
      use_raf && cancelAnimationFrame(raf);
      if (touch) {
        (0,module$src$js$helper.removeListener)(window, "touchmove", handler_mousemove);
        (0,module$src$js$helper.removeListener)(window, "touchend", handler_mouseup);
      } else {
        (0,module$src$js$helper.removeListener)(window, "mousemove", handler_mousemove);
        (0,module$src$js$helper.removeListener)(window, "mouseup", handler_mouseup);
      }
    }
  }
  function init() {
    root_w = body.clientWidth;
    root_h = body.clientHeight;
  }
  WinBox.prototype.mount = function(src) {
    this.unmount();
    src._backstore || (src._backstore = src.parentNode);
    this.body.textContent = "";
    this.body.appendChild(src);
    return this;
  };
  WinBox.prototype.unmount = function(dest) {
    const node = this.body.firstChild;
    if (node) {
      const root = dest || node._backstore;
      root && root.appendChild(node);
      node._backstore = dest;
    }
    return this;
  };
  WinBox.prototype.setTitle = function(title) {
    (0,module$src$js$helper.setText)((0,module$src$js$helper.getByClass)(this.dom, "wb-title"), this.title = title);
    return this;
  };
  WinBox.prototype.setBackground = function(background) {
    (0,module$src$js$helper.setStyle)(this.dom, "background", background);
    return this;
  };
  WinBox.prototype.setUrl = function(url) {
    this.body.innerHTML = '\x3ciframe src\x3d"' + url + '"\x3e\x3c/iframe\x3e';
    return this;
  };
  WinBox.prototype.focus = function() {
    if (last_focus !== this) {
      (0,module$src$js$helper.setStyle)(this.dom, "z-index", index++);
      this.addClass("focus");
      if (last_focus) {
        last_focus.removeClass("focus");
        last_focus.onblur && last_focus.onblur();
      }
      last_focus = this;
      this.onfocus && this.onfocus();
    }
    return this;
  };
  WinBox.prototype.hide = function() {
    return this.addClass("hide");
  };
  WinBox.prototype.show = function() {
    return this.removeClass("hide");
  };
  WinBox.prototype.minimize = function(state) {
    if (is_fullscreen) {
      cancel_fullscreen(this);
    }
    if (!state && this.min) {
      remove_min_stack(this);
      this.resize().move().focus();
    } else {
      if (state !== false && !this.min) {
        stack_min.push(this);
        update_min_stack();
        this.dom.title = this.title;
        this.addClass("min");
        this.min = true;
      }
    }
    if (this.max) {
      this.removeClass("max");
      this.max = false;
    }
    return this;
  };
  WinBox.prototype.maximize = function(state) {
    if (typeof state === "undefined" || state !== this.max) {
      if (this.min) {
        remove_min_stack(this);
      }
      if (this.max = !this.max) {
        this.addClass("max").resize(root_w - this.left - this.right, root_h - this.top - this.bottom, true).move(this.left, this.top, true);
      } else {
        this.resize().move().removeClass("max");
      }
    }
    return this;
  };
  WinBox.prototype.fullscreen = function(state) {
    if (typeof state === "undefined" || state !== is_fullscreen) {
      if (this.min) {
        this.resize().move();
        remove_min_stack(this);
      }
      if (!is_fullscreen || !cancel_fullscreen(this)) {
        this.body[prefix_request]();
        is_fullscreen = true;
      }
    }
    return this;
  };
  function has_fullscreen() {
    return document["fullscreen"] || document["fullscreenElement"] || document["webkitFullscreenElement"] || document["mozFullScreenElement"];
  }
  function cancel_fullscreen(self) {
    is_fullscreen = false;
    if (has_fullscreen()) {
      document[prefix_exit]();
      return true;
    }
  }
  WinBox.prototype.close = function(force) {
    if (this.onclose && this.onclose(force)) {
      return true;
    }
    if (this.min) {
      remove_min_stack(this);
    }
    this.unmount();
    this.dom.parentNode.removeChild(this.dom);
    if (last_focus === this) {
      last_focus = null;
    }
  };
  WinBox.prototype.move = function(x, y, _skip_update) {
    if (!x && x !== 0) {
      x = this.x;
      y = this.y;
      if (this.splitscreen) {
        if (x === 0) {
          this.resize(root_w / 2, root_h);
        } else {
          if (x === root_w - this.width) {
            this.resize(root_w / 2, root_h);
          }
        }
      }
    } else {
      if (!_skip_update) {
        this.x = x ? x = parse(x, root_w - this.left - this.right, this.width) : 0;
        this.y = y ? y = parse(y, root_h - this.top - this.bottom, this.height) : 0;
      }
    }
    (0,module$src$js$helper.setStyle)(this.dom, "transform", "translate(" + x + "px," + y + "px)");
    this.onmove && this.onmove(x, y);
    return this;
  };
  WinBox.prototype.resize = function(w, h, _skip_update) {
    if (!w && w !== 0) {
      w = this.width;
      h = this.height;
    } else {
      if (!_skip_update) {
        this.width = w ? w = parse(w, root_w - this.left - this.right) : 0;
        this.height = h ? h = parse(h, root_h - this.top - this.bottom) : 0;
      }
    }
    w = Math.max(w, this.minwidth);
    h = Math.max(h, this.minheight);
    (0,module$src$js$helper.setStyle)(this.dom, "width", w + "px");
    (0,module$src$js$helper.setStyle)(this.dom, "height", h + "px");
    this.onresize && this.onresize(w, h);
    return this;
  };
  WinBox.prototype.addClass = function(classname) {
    (0,module$src$js$helper.addClass)(this.dom, classname);
    return this;
  };
  WinBox.prototype.removeClass = function(classname) {
    (0,module$src$js$helper.removeClass)(this.dom, classname);
    return this;
  };
  WinBox.prototype.hasClass = function(classname) {
    (0,module$src$js$helper.hasClass)(this.dom, classname);
    return this;
  };
}, "src/js/winbox.js", ["src/js/template.js", "src/js/helper.js"]);

//src/js/webpack.js
$jscomp.registerAndLoadModule(function($$require, $$exports, $$module) {
  "use strict";
  var module$src$js$winbox = $$require("src/js/winbox.js");
  module$src$js$winbox["default"]["new"];
  module$src$js$winbox["default"].prototype.mount;
  module$src$js$winbox["default"].prototype.unmount;
  module$src$js$winbox["default"].prototype.move;
  module$src$js$winbox["default"].prototype.resize;
  module$src$js$winbox["default"].prototype.close;
  module$src$js$winbox["default"].prototype.focus;
  module$src$js$winbox["default"].prototype.hide;
  module$src$js$winbox["default"].prototype.show;
  module$src$js$winbox["default"].prototype.minimize;
  module$src$js$winbox["default"].prototype.maximize;
  module$src$js$winbox["default"].prototype.fullscreen;
  module$src$js$winbox["default"].prototype.setBackground;
  module$src$js$winbox["default"].prototype.setTitle;
  module$src$js$winbox["default"].prototype.setUrl;
  module$src$js$winbox["default"].prototype.addClass;
  module$src$js$winbox["default"].prototype.removeClass;
  module$src$js$winbox["default"].id;
  module$src$js$winbox["default"].body;
  module$src$js$winbox["default"].min;
  module$src$js$winbox["default"].max;
  module$src$js$winbox["default"].x;
  module$src$js$winbox["default"].y;
  module$src$js$winbox["default"].width;
  module$src$js$winbox["default"].height;
  module$src$js$winbox["default"].top;
  module$src$js$winbox["default"].right;
  module$src$js$winbox["default"].bottom;
  module$src$js$winbox["default"].left;
  window["WinBox"] = module$src$js$winbox["default"];
}, "src/js/webpack.js", ["src/js/winbox.js"]);

