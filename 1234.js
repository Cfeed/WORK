/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
 function(a, b, c) {
  function d(c) {
   var d = b.console;
   f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
  }

  function e(b, c, e, f) {
   if (Object.defineProperty) try {
    return void Object.defineProperty(b, c, {
     configurable: !0,
     enumerable: !0,
     get: function() {
      return d(f), e
     },
     set: function(a) {
      d(f), e = a
     }
    })
   } catch (g) {}
   a._definePropertyBroken = !0, b[c] = e
  }
  a.migrateVersion = "1.4.1";
  var f = {};
  a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
   f = {}, a.migrateWarnings.length = 0
  }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
  var g = a("<input/>", {
    size: 1
   }).attr("size") && a.attrFn,
   h = a.attr,
   i = a.attrHooks.value && a.attrHooks.value.get || function() {
    return null
   },
   j = a.attrHooks.value && a.attrHooks.value.set || function() {
    return c
   },
   k = /^(?:input|button)$/i,
   l = /^[238]$/,
   m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
   n = /^(?:checked|selected)$/i;
  e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
   var j = e.toLowerCase(),
    o = b && b.nodeType;
   return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
    get: function(b, d) {
     var e, f = a.prop(b, d);
     return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
    },
    set: function(b, c, d) {
     var e;
     return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
    }
   }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
  }, a.attrHooks.value = {
   get: function(a, b) {
    var c = (a.nodeName || "").toLowerCase();
    return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
   },
   set: function(a, b) {
    var c = (a.nodeName || "").toLowerCase();
    return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
   }
  };
  var o, p, q = a.fn.init,
   r = a.find,
   s = a.parseJSON,
   t = /^\s*</,
   u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
   v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
   w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
  a.fn.init = function(b, e, f) {
   var g, h;
   return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
  }, a.fn.init.prototype = a.fn, a.find = function(a) {
   var b = Array.prototype.slice.call(arguments);
   if ("string" == typeof a && u.test(a)) try {
    document.querySelector(a)
   } catch (c) {
    a = a.replace(v, function(a, b, c, d) {
     return "[" + b + c + '"' + d + '"]'
    });
    try {
     document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
    } catch (e) {
     d("Attribute selector with '#' was not fixed: " + b[0])
    }
   }
   return r.apply(this, b)
  };
  var x;
  for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
  a.parseJSON = function(a) {
   return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
  }, a.uaMatch = function(a) {
   a = a.toLowerCase();
   var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
   return {
    browser: b[1] || "",
    version: b[2] || "0"
   }
  }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
   function b(a, c) {
    return new b.fn.init(a, c)
   }
   a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
    var f = a.fn.init.call(this, d, e, c);
    return f instanceof b ? f : b(f)
   }, b.fn.init.prototype = b.fn;
   var c = b(document);
   return d("jQuery.sub() is deprecated"), b
  }, a.fn.size = function() {
   return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
  };
  var y = !1;
  a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
   var d = a.cssHooks[c] && a.cssHooks[c].get;
   d && (a.cssHooks[c].get = function() {
    var a;
    return y = !0, a = d.apply(this, arguments), y = !1, a
   })
  }), a.swap = function(a, b, c, e) {
   var f, g, h = {};
   y || d("jQuery.swap() is undocumented and deprecated");
   for (g in b) h[g] = a.style[g], a.style[g] = b[g];
   f = c.apply(a, e || []);
   for (g in b) a.style[g] = h[g];
   return f
  }, a.ajaxSetup({
   converters: {
    "text json": a.parseJSON
   }
  });
  var z = a.fn.data;
  a.fn.data = function(b) {
   var e, f, g = this[0];
   return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
  };
  var A = /\/(java|ecma)script/i;
  a.clean || (a.clean = function(b, c, e, f) {
   c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
   var g, h, i, j, k = [];
   if (a.merge(k, a.buildFragment(b, c).childNodes), e)
    for (i = function(a) {
      return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
     }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
   return k
  });
  var B = a.event.add,
   C = a.event.remove,
   D = a.event.trigger,
   E = a.fn.toggle,
   F = a.fn.live,
   G = a.fn.die,
   H = a.fn.load,
   I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
   J = new RegExp("\\b(?:" + I + ")\\b"),
   K = /(?:^|\s)hover(\.\S+|)\b/,
   L = function(b) {
    return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
   };
  a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
   a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
  }, a.event.remove = function(a, b, c, d, e) {
   C.call(this, a, L(b) || "", c, d, e)
  }, a.each(["load", "unload", "error"], function(b, c) {
   a.fn[c] = function() {
    var a = Array.prototype.slice.call(arguments, 0);
    return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
   }
  }), a.fn.toggle = function(b, c) {
   if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
   d("jQuery.fn.toggle(handler, handler...) is deprecated");
   var e = arguments,
    f = b.guid || a.guid++,
    g = 0,
    h = function(c) {
     var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
     return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
    };
   for (h.guid = f; g < e.length;) e[g++].guid = f;
   return this.click(h)
  }, a.fn.live = function(b, c, e) {
   return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
  }, a.fn.die = function(b, c) {
   return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
  }, a.event.trigger = function(a, b, c, e) {
   return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
  }, a.each(I.split("|"), function(b, c) {
   a.event.special[c] = {
    setup: function() {
     var b = this;
     return b !== document && (a.event.add(document, c + "." + a.guid, function() {
      a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
     }), a._data(this, c, a.guid++)), !1
    },
    teardown: function() {
     return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
    }
   }
  }), a.event.special.ready = {
   setup: function() {
    this === document && d("'ready' event is deprecated")
   }
  };
  var M = a.fn.andSelf || a.fn.addBack,
   N = a.fn.find;
  if (a.fn.andSelf = function() {
    return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
   }, a.fn.find = function(a) {
    var b = N.apply(this, arguments);
    return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
   }, a.Callbacks) {
   var O = a.Deferred,
    P = [
     ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
     ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
     ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
    ];
   a.Deferred = function(b) {
    var c = O(),
     e = c.promise();
    return c.pipe = e.pipe = function() {
     var b = arguments;
     return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
      a.each(P, function(f, g) {
       var h = a.isFunction(b[f]) && b[f];
       c[g[1]](function() {
        var b = h && h.apply(this, arguments);
        b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
       })
      }), b = null
     }).promise()
    }, c.isResolved = function() {
     return d("deferred.isResolved is deprecated"), "resolved" === c.state()
    }, c.isRejected = function() {
     return d("deferred.isRejected is deprecated"), "rejected" === c.state()
    }, b && b.call(c, c), c
   }
  }
 }(jQuery, window);
window.Modernizr = function(e, t, n) {
  function r(e) {
   v.cssText = e
  }

  function o(e, t) {
   return typeof e === t
  }

  function i(e, t) {
   return !!~("" + e).indexOf(t)
  }

  function a(e, t) {
   for (var r in e) {
    var o = e[r];
    if (!i(o, "-") && v[o] !== n) return "pfx" == t ? o : !0
   }
   return !1
  }

  function c(e, t, r) {
   for (var i in e) {
    var a = t[e[i]];
    if (a !== n) return r === !1 ? e[i] : o(a, "function") ? a.bind(r || t) : a
   }
   return !1
  }

  function s(e, t, n) {
   var r = e.charAt(0).toUpperCase() + e.slice(1),
    i = (e + " " + E.join(r + " ") + r).split(" ");
   return o(t, "string") || o(t, "undefined") ? a(i, t) : (i = (e + " " + j.join(r + " ") + r).split(" "), c(i, t, n))
  }
  var l, u, f, p = "2.6.2",
   d = {},
   m = !0,
   h = t.documentElement,
   y = "modernizr",
   g = t.createElement(y),
   v = g.style,
   b = ({}.toString, "Webkit Moz O ms"),
   E = b.split(" "),
   j = b.toLowerCase().split(" "),
   S = {},
   C = [],
   w = C.slice,
   x = {}.hasOwnProperty;
  f = o(x, "undefined") || o(x.call, "undefined") ? function(e, t) {
   return t in e && o(e.constructor.prototype[t], "undefined")
  } : function(e, t) {
   return x.call(e, t)
  }, Function.prototype.bind || (Function.prototype.bind = function(e) {
   var t = this;
   if ("function" != typeof t) throw new TypeError;
   var n = w.call(arguments, 1),
    r = function() {
     if (this instanceof r) {
      var o = function() {};
      o.prototype = t.prototype;
      var i = new o,
       a = t.apply(i, n.concat(w.call(arguments)));
      return Object(a) === a ? a : i
     }
     return t.apply(e, n.concat(w.call(arguments)))
    };
   return r
  }), S.cssanimations = function() {
   return s("animationName")
  }, S.csstransitions = function() {
   return s("transition")
  };
  for (var N in S) f(S, N) && (u = N.toLowerCase(), d[u] = S[N](), C.push((d[u] ? "" : "no-") + u));
  return d.addTest = function(e, t) {
    if ("object" == typeof e)
     for (var r in e) f(e, r) && d.addTest(r, e[r]);
    else {
     if (e = e.toLowerCase(), d[e] !== n) return d;
     t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (h.className += " " + (t ? "" : "no-") + e), d[e] = t
    }
    return d
   }, r(""), g = l = null,
   function(e, t) {
    function n(e, t) {
     var n = e.createElement("p"),
      r = e.getElementsByTagName("head")[0] || e.documentElement;
     return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
    }

    function r() {
     var e = g.elements;
     return "string" == typeof e ? e.split(" ") : e
    }

    function o(e) {
     var t = y[e[m]];
     return t || (t = {}, h++, e[m] = h, y[h] = t), t
    }

    function i(e, n, r) {
     if (n || (n = t), u) return n.createElement(e);
     r || (r = o(n));
     var i;
     return i = r.cache[e] ? r.cache[e].cloneNode() : d.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), i.canHaveChildren && !p.test(e) ? r.frag.appendChild(i) : i
    }

    function a(e, n) {
     if (e || (e = t), u) return e.createDocumentFragment();
     n = n || o(e);
     for (var i = n.frag.cloneNode(), a = 0, c = r(), s = c.length; s > a; a++) i.createElement(c[a]);
     return i
    }

    function c(e, t) {
     t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
      return g.shivMethods ? i(n, e, t) : t.createElem(n)
     }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
      return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
     }) + ");return n}")(g, t.frag)
    }

    function s(e) {
     e || (e = t);
     var r = o(e);
     return !g.shivCSS || l || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || c(e, r), e
    }
    var l, u, f = e.html5 || {},
     p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
     d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
     m = "_html5shiv",
     h = 0,
     y = {};
    ! function() {
     try {
      var e = t.createElement("a");
      e.innerHTML = "<xyz></xyz>", l = "hidden" in e, u = 1 == e.childNodes.length || function() {
       t.createElement("a");
       var e = t.createDocumentFragment();
       return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
      }()
     } catch (n) {
      l = !0, u = !0
     }
    }();
    var g = {
     elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
     shivCSS: f.shivCSS !== !1,
     supportsUnknownElements: u,
     shivMethods: f.shivMethods !== !1,
     type: "default",
     shivDocument: s,
     createElement: i,
     createDocumentFragment: a
    };
    e.html5 = g, s(t)
   }(this, t), d._version = p, d._domPrefixes = j, d._cssomPrefixes = E, d.testProp = function(e) {
    return a([e])
   }, d.testAllProps = s, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + C.join(" ") : ""), d
 }(this, this.document),
 function(e, t, n) {
  function r(e) {
   return "[object Function]" == y.call(e)
  }

  function o(e) {
   return "string" == typeof e
  }

  function i() {}

  function a(e) {
   return !e || "loaded" == e || "complete" == e || "uninitialized" == e
  }

  function c() {
   var e = g.shift();
   v = 1, e ? e.t ? m(function() {
    ("c" == e.t ? p.injectCss : p.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
   }, 0) : (e(), c()) : v = 0
  }

  function s(e, n, r, o, i, s, l) {
   function u(t) {
    if (!d && a(f.readyState) && (b.r = d = 1, !v && c(), f.onload = f.onreadystatechange = null, t)) {
     "img" != e && m(function() {
      j.removeChild(f)
     }, 50);
     for (var r in N[n]) N[n].hasOwnProperty(r) && N[n][r].onload()
    }
   }
   var l = l || p.errorTimeout,
    f = t.createElement(e),
    d = 0,
    y = 0,
    b = {
     t: r,
     s: n,
     e: i,
     a: s,
     x: l
    };
   1 === N[n] && (y = 1, N[n] = []), "object" == e ? f.data = n : (f.src = n, f.type = e), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function() {
    u.call(this, y)
   }, g.splice(o, 0, b), "img" != e && (y || 2 === N[n] ? (j.insertBefore(f, E ? null : h), m(u, l)) : N[n].push(f))
  }

  function l(e, t, n, r, i) {
   return v = 0, t = t || "j", o(e) ? s("c" == t ? C : S, e, t, this.i++, n, r, i) : (g.splice(this.i++, 0, e), 1 == g.length && c()), this
  }

  function u() {
   var e = p;
   return e.loader = {
    load: l,
    i: 0
   }, e
  }
  var f, p, d = t.documentElement,
   m = e.setTimeout,
   h = t.getElementsByTagName("script")[0],
   y = {}.toString,
   g = [],
   v = 0,
   b = "MozAppearance" in d.style,
   E = b && !!t.createRange().compareNode,
   j = E ? d : h.parentNode,
   d = e.opera && "[object Opera]" == y.call(e.opera),
   d = !!t.attachEvent && !d,
   S = b ? "object" : d ? "script" : "img",
   C = d ? "script" : S,
   w = Array.isArray || function(e) {
    return "[object Array]" == y.call(e)
   },
   x = [],
   N = {},
   F = {
    timeout: function(e, t) {
     return t.length && (e.timeout = t[0]), e
    }
   };
  p = function(e) {
   function t(e) {
    var t, n, r, e = e.split("!"),
     o = x.length,
     i = e.pop(),
     a = e.length,
     i = {
      url: i,
      origUrl: i,
      prefixes: e
     };
    for (n = 0; a > n; n++) r = e[n].split("="), (t = F[r.shift()]) && (i = t(i, r));
    for (n = 0; o > n; n++) i = x[n](i);
    return i
   }

   function a(e, o, i, a, c) {
    var s = t(e),
     l = s.autoCallback;
    s.url.split(".").pop().split("?").shift(), s.bypass || (o && (o = r(o) ? o : o[e] || o[a] || o[e.split("/").pop().split("?")[0]]), s.instead ? s.instead(e, o, i, a, c) : (N[s.url] ? s.noexec = !0 : N[s.url] = 1, i.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : n, s.noexec, s.attrs, s.timeout), (r(o) || r(l)) && i.load(function() {
     u(), o && o(s.origUrl, c, a), l && l(s.origUrl, c, a), N[s.url] = 2
    })))
   }

   function c(e, t) {
    function n(e, n) {
     if (e) {
      if (o(e)) n || (f = function() {
       var e = [].slice.call(arguments);
       p.apply(this, e), d()
      }), a(e, f, t, 0, l);
      else if (Object(e) === e)
       for (s in c = function() {
         var t, n = 0;
         for (t in e) e.hasOwnProperty(t) && n++;
         return n
        }(), e) e.hasOwnProperty(s) && (!n && !--c && (r(f) ? f = function() {
        var e = [].slice.call(arguments);
        p.apply(this, e), d()
       } : f[s] = function(e) {
        return function() {
         var t = [].slice.call(arguments);
         e && e.apply(this, t), d()
        }
       }(p[s])), a(e[s], f, t, s, l))
     } else !n && d()
    }
    var c, s, l = !!e.test,
     u = e.load || e.both,
     f = e.callback || i,
     p = f,
     d = e.complete || i;
    n(l ? e.yep : e.nope, !!u), u && n(u)
   }
   var s, l, f = this.yepnope.loader;
   if (o(e)) a(e, 0, f, 0);
   else if (w(e))
    for (s = 0; s < e.length; s++) l = e[s], o(l) ? a(l, 0, f, 0) : w(l) ? p(l) : Object(l) === l && c(l, f);
   else Object(e) === e && c(e, f)
  }, p.addPrefix = function(e, t) {
   F[e] = t
  }, p.addFilter = function(e) {
   x.push(e)
  }, p.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f = function() {
   t.removeEventListener("DOMContentLoaded", f, 0), t.readyState = "complete"
  }, 0)), e.yepnope = u(), e.yepnope.executeStack = c, e.yepnope.injectJs = function(e, n, r, o, s, l) {
   var u, f, d = t.createElement("script"),
    o = o || p.errorTimeout;
   d.src = e;
   for (f in r) d.setAttribute(f, r[f]);
   n = l ? c : n || i, d.onreadystatechange = d.onload = function() {
    !u && a(d.readyState) && (u = 1, n(), d.onload = d.onreadystatechange = null)
   }, m(function() {
    u || (u = 1, n(1))
   }, o), s ? d.onload() : h.parentNode.insertBefore(d, h)
  }, e.yepnope.injectCss = function(e, n, r, o, a, s) {
   var l, o = t.createElement("link"),
    n = s ? c : n || i;
   o.href = e, o.rel = "stylesheet", o.type = "text/css";
   for (l in r) o.setAttribute(l, r[l]);
   a || (h.parentNode.insertBefore(o, h), m(n, 0))
  }
 }(this, document), Modernizr.load = function() {
  yepnope.apply(window, [].slice.call(arguments, 0))
 };
! function(e) {
 e.anythingSlider = function(t, a) {
  var i, n, s = this;
  s.el = t, s.$el = e(t).addClass("anythingBase").wrap('<div class="anythingSlider"><div class="anythingWindow" /></div>'), s.$el.data("AnythingSlider", s), s.init = function() {
   s.options = i = e.extend({}, e.anythingSlider.defaults, a), s.initialized = !1, e.isFunction(i.onBeforeInitialize) && s.$el.bind("before_initialize", i.onBeforeInitialize), s.$el.trigger("before_initialize", s), e('<!--[if lte IE 8]><script>jQuery("body").addClass("as-oldie");</script><![endif]-->').appendTo("body").remove(), s.$wrapper = s.$el.parent().closest("div.anythingSlider").addClass("anythingSlider-" + i.theme), s.$window = s.$el.closest("div.anythingWindow"), s.win = window, s.$win = e(s.win), s.$controls = e('<div class="anythingControls"></div>'), s.$nav = e('<ul class="thumbNav"><li><a><span></span></a></li></ul>'), s.$startStop = e('<a href="#" class="start-stop"></a>'), (i.buildStartStop || i.buildNavigation) && s.$controls.appendTo(i.appendControlsTo && e(i.appendControlsTo).length ? e(i.appendControlsTo) : s.$wrapper), i.buildNavigation && s.$nav.appendTo(i.appendNavigationTo && e(i.appendNavigationTo).length ? e(i.appendNavigationTo) : s.$controls), i.buildStartStop && s.$startStop.appendTo(i.appendStartStopTo && e(i.appendStartStopTo).length ? e(i.appendStartStopTo) : s.$controls), s.runTimes = e(".anythingBase").length, s.regex = new RegExp("panel" + s.runTimes + "-(\\d+)", "i"), 1 === s.runTimes && s.makeActive(), s.flag = !1, s.playing = i.autoPlay, s.slideshow = !1, s.hovered = !1, s.panelSize = [], s.currentPage = s.targetPage = i.startPanel = parseInt(i.startPanel, 10) || 1, i.changeBy = parseInt(i.changeBy, 10) || 1, n = (i.mode || "h").toLowerCase().match(/(h|v|f)/), n = i.vertical ? "v" : (n || ["h"])[0], i.mode = "v" === n ? "vertical" : "f" === n ? "fade" : "horizontal", "f" === n && (i.showMultiple = 1, i.infiniteSlides = !1), s.adj = i.infiniteSlides ? 0 : 1, s.adjustMultiple = 0, s.width = s.$el.width(), s.height = s.$el.height(), s.outerPad = [s.$wrapper.innerWidth() - s.$wrapper.width(), s.$wrapper.innerHeight() - s.$wrapper.height()], i.playRtl && s.$wrapper.addClass("rtl"), i.expand && (s.$outer = s.$wrapper.parent(), s.$window.css({
    width: "100%",
    height: "100%"
   }), s.checkResize()), i.buildStartStop && s.buildAutoPlay(), i.buildArrows && s.buildNextBackButtons(), i.autoPlay || (i.autoPlayLocked = !1), s.$lastPage = s.$targetPage = s.$currentPage, s.updateSlider(), e.isFunction(e.easing[i.easing]) || (i.easing = "swing"), i.pauseOnHover && s.$wrapper.hover(function() {
    s.playing && (s.$el.trigger("slideshow_paused", s), s.clearTimer(!0))
   }, function() {
    s.playing && (s.$el.trigger("slideshow_unpaused", s), s.startStop(s.playing, !0))
   }), s.slideControls(!1), s.$wrapper.bind("mouseenter mouseleave", function(t) {
    e(this)["mouseenter" === t.type ? "addClass" : "removeClass"]("anythingSlider-hovered"), s.hovered = "mouseenter" === t.type ? !0 : !1, s.slideControls(s.hovered)
   }), e(document).keyup(function(e) {
    if (i.enableKeyboard && s.$wrapper.hasClass("activeSlider") && !e.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
     if ("vertical" !== i.mode && (38 === e.which || 40 === e.which)) return;
     switch (e.which) {
      case 39:
      case 40:
       s.goForward();
       break;
      case 37:
      case 38:
       s.goBack()
     }
    }
   }), s.currentPage = s.gotoHash() || i.startPanel || 1, s.gotoPage(s.currentPage, !1, null, -1);
   var t = "slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed".split(" ");
   e.each("onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete".split(" "), function(a, n) {
    e.isFunction(i[n]) && s.$el.bind(t[a], i[n])
   }), e.isFunction(i.onSlideComplete) && s.$el.bind("slide_complete", function() {
    return setTimeout(function() {
     i.onSlideComplete(s)
    }, 0), !1
   }), s.initialized = !0, s.$el.trigger("initialized", s), s.startStop(i.autoPlay)
  }, s.updateSlider = function() {
   if (s.$el.children(".cloned").remove(), s.navTextVisible = "hidden" !== s.$nav.find("span:first").css("visibility"), s.$nav.empty(), s.currentPage = s.currentPage || 1, s.$items = s.$el.children(), s.pages = s.$items.length, s.dir = "vertical" === i.mode ? "top" : "left", i.showMultiple = "vertical" === i.mode ? 1 : parseInt(i.showMultiple, 10) || 1, i.navigationSize = i.navigationSize === !1 ? 0 : parseInt(i.navigationSize, 10) || 0, s.$items.find("a").unbind("focus.AnythingSlider").bind("focus.AnythingSlider", function(t) {
     var a = e(this).closest(".panel"),
      n = s.$items.index(a) + s.adj;
     s.$items.find(".focusedLink").removeClass("focusedLink"), e(this).addClass("focusedLink"), s.$window.scrollLeft(0).scrollTop(0), -1 !== n && (n >= s.currentPage + i.showMultiple || n < s.currentPage) && (s.gotoPage(n), t.preventDefault())
    }), i.showMultiple > 1 && (i.showMultiple > s.pages && (i.showMultiple = s.pages), s.adjustMultiple = i.infiniteSlides && s.pages > 1 ? 0 : i.showMultiple - 1), s.$controls.add(s.$nav).add(s.$startStop).add(s.$forward).add(s.$back)[s.pages <= 1 ? "hide" : "show"](), s.pages > 1 && s.buildNavigation(), "fade" !== i.mode && i.infiniteSlides && s.pages > 1 && (s.$el.prepend(s.$items.filter(":last").clone().addClass("cloned")), i.showMultiple > 1 ? s.$el.append(s.$items.filter(":lt(" + i.showMultiple + ")").clone().addClass("cloned multiple")) : s.$el.append(s.$items.filter(":first").clone().addClass("cloned")), s.$el.find(".cloned").each(function() {
     e(this).find("a,input,textarea,select,button,area,form").attr({
      disabled: "disabled",
      name: ""
     }), e(this).find("[id]").andSelf().removeAttr("id")
    })), s.$items = s.$el.addClass(i.mode).children().addClass("panel"), s.setDimensions(), i.resizeContents ? (s.$items.css("width", s.width), s.$wrapper.css("width", s.getDim(s.currentPage)[0]).add(s.$items).css("height", s.height)) : s.$win.load(function() {
     s.setDimensions(), t = s.getDim(s.currentPage), s.$wrapper.css({
      width: t[0],
      height: t[1]
     }), s.setCurrentPage(s.currentPage, !1)
    }), s.currentPage > s.pages && (s.currentPage = s.pages), s.setCurrentPage(s.currentPage, !1), s.$nav.find("a").eq(s.currentPage - 1).addClass("cur"), "fade" === i.mode) {
    var t = s.$items.eq(s.currentPage - 1);
    i.resumeOnVisible ? t.css({
     opacity: 1
    }).siblings().css({
     opacity: 0
    }) : (s.$items.css("opacity", 1), t.fadeIn(0).siblings().fadeOut(0))
   }
  }, s.buildNavigation = function() {
   if (i.buildNavigation && s.pages > 1) {
    var t, a, n, o, r;
    s.$items.filter(":not(.cloned)").each(function(l) {
     r = e("<li/>"), n = l + 1, a = (1 === n ? " first" : "") + (n === s.pages ? " last" : ""), t = '<a class="panel' + n + (s.navTextVisible ? '"' : " " + i.tooltipClass + '" title="@"') + ' href="#"><span>@</span></a>', e.isFunction(i.navigationFormatter) ? (o = i.navigationFormatter(n, e(this)), "string" == typeof o ? r.html(t.replace(/@/g, o)) : r = e("<li/>", o)) : r.html(t.replace(/@/g, n)), r.appendTo(s.$nav).addClass(a).data("index", n)
    }), s.$nav.children("li").bind(i.clickControls, function(t) {
     !s.flag && i.enableNavigation && (s.flag = !0, setTimeout(function() {
      s.flag = !1
     }, 100), s.gotoPage(e(this).data("index"))), t.preventDefault()
    }), i.navigationSize && i.navigationSize < s.pages && (s.$controls.find(".anythingNavWindow").length || s.$nav.before('<ul><li class="prev"><a href="#"><span>' + i.backText + "</span></a></li></ul>").after('<ul><li class="next"><a href="#"><span>' + i.forwardText + "</span></a></li></ul>").wrap('<div class="anythingNavWindow"></div>'), s.navWidths = s.$nav.find("li").map(function() {
     return e(this).outerWidth(!0) + Math.ceil(parseInt(e(this).find("span").css("left"), 10) / 2 || 0)
    }).get(), s.navLeft = s.currentPage, s.$nav.width(s.navWidth(1, s.pages + 1) + 25), s.$controls.find(".anythingNavWindow").width(s.navWidth(1, i.navigationSize + 1)).end().find(".prev,.next").bind(i.clickControls, function(t) {
     s.flag || (s.flag = !0, setTimeout(function() {
      s.flag = !1
     }, 200), s.navWindow(s.navLeft + i.navigationSize * (e(this).is(".prev") ? -1 : 1))), t.preventDefault()
    }))
   }
  }, s.navWidth = function(e, t) {
   var a, i = Math.min(e, t),
    n = Math.max(e, t),
    o = 0;
   for (a = i; n > a; a++) o += s.navWidths[a - 1] || 0;
   return o
  }, s.navWindow = function(e) {
   if (i.navigationSize && i.navigationSize < s.pages && s.navWidths) {
    var t = s.pages - i.navigationSize + 1;
    e = 1 >= e ? 1 : e > 1 && t > e ? e : t, e !== s.navLeft && (s.$controls.find(".anythingNavWindow").animate({
     scrollLeft: s.navWidth(1, e),
     width: s.navWidth(e, e + i.navigationSize)
    }, {
     queue: !1,
     duration: i.animationTime
    }), s.navLeft = e)
   }
  }, s.buildNextBackButtons = function() {
   s.$forward = e('<span class="arrow forward"><a href="#"><span></span></a></span>'), s.$back = e('<span class="arrow back"><a href="#"><span></span></a></span>'), s.$back.bind(i.clickBackArrow, function(e) {
    i.enableArrows && !s.flag && (s.flag = !0, setTimeout(function() {
     s.flag = !1
    }, 100), s.goBack()), e.preventDefault()
   }), s.$forward.bind(i.clickForwardArrow, function(e) {
    i.enableArrows && !s.flag && (s.flag = !0, setTimeout(function() {
     s.flag = !1
    }, 100), s.goForward()), e.preventDefault()
   }), s.$back.add(s.$forward).find("a").bind("focusin focusout", function() {
    e(this).toggleClass("hover")
   }), s.$back.appendTo(i.appendBackTo && e(i.appendBackTo).length ? e(i.appendBackTo) : s.$wrapper), s.$forward.appendTo(i.appendForwardTo && e(i.appendForwardTo).length ? e(i.appendForwardTo) : s.$wrapper), s.arrowWidth = s.$forward.width(), s.arrowRight = parseInt(s.$forward.css("right"), 10), s.arrowLeft = parseInt(s.$back.css("left"), 10)
  }, s.buildAutoPlay = function() {
   s.$startStop.html("<span>" + (s.playing ? i.stopText : i.startText) + "</span>").bind(i.clickSlideshow, function(e) {
    i.enableStartStop && (s.startStop(!s.playing), s.makeActive(), s.playing && !i.autoPlayDelayed && s.goForward(!0)), e.preventDefault()
   }).bind("focusin focusout", function() {
    e(this).toggleClass("hover")
   })
  }, s.checkResize = function(e) {
   clearTimeout(s.resizeTimer), s.resizeTimer = setTimeout(function() {
    var t = s.$outer.width() - s.outerPad[0],
     a = ("BODY" === s.$outer[0].tagName ? s.$win.height() : s.$outer.height()) - s.outerPad[1];
    (s.width * i.showMultiple !== t || s.height !== a) && (s.setDimensions(), s.gotoPage(s.currentPage, s.playing, null, -1)), "undefined" == typeof e && s.checkResize()
   }, 500)
  }, s.setDimensions = function() {
   var t, a, n, o, r = 0,
    l = {
     width: "100%",
     height: "100%"
    },
    d = i.showMultiple > 1 ? s.width || s.$window.width() / i.showMultiple : s.$window.width(),
    p = s.$win.width();
   i.expand && (t = s.$outer.width() - s.outerPad[0], s.height = a = s.$outer.height() - s.outerPad[1], s.$wrapper.add(s.$window).add(s.$items).css({
    width: t,
    height: a
   }), s.width = d = i.showMultiple > 1 ? t / i.showMultiple : t), s.$items.each(function(g) {
    o = e(this), n = o.children(), i.resizeContents ? (t = s.width, a = s.height, o.css({
     width: t,
     height: a
    }), n.length && ("EMBED" === n[0].tagName && n.attr(l), "OBJECT" === n[0].tagName && n.find("embed").attr(l), 1 === n.length && n.css(l))) : (t = o.width() || s.width, 1 === n.length && t >= p && (t = n.width() >= p ? d : n.width(), n.css("max-width", t)), o.css("width", t), a = 1 === n.length ? n.outerHeight(!0) : o.height(), a <= s.outerPad[1] && (a = s.height), o.css("height", a)), s.panelSize[g] = [t, a, r], r += "vertical" === i.mode ? a : t
   }), s.$el.css("vertical" === i.mode ? "height" : "width", "fade" === i.mode ? s.width : r)
  }, s.getDim = function(e) {
   var t, a = s.width,
    n = s.height;
   if (s.pages < 1 || isNaN(e)) return [a, n];
   if (e = i.infiniteSlides && s.pages > 1 ? e : e - 1, t = s.panelSize[e], t && (a = t[0] || a, n = t[1] || n), i.showMultiple > 1)
    for (t = 1; t < i.showMultiple; t++) a += s.panelSize[e + t][0], n = Math.max(n, s.panelSize[e + t][1]);
   return [a, n]
  }, s.goForward = function(e) {
   s.gotoPage(s[i.allowRapidChange ? "targetPage" : "currentPage"] + i.changeBy * (i.playRtl ? -1 : 1), e)
  }, s.goBack = function(e) {
   s.gotoPage(s[i.allowRapidChange ? "targetPage" : "currentPage"] + i.changeBy * (i.playRtl ? 1 : -1), e)
  }, s.gotoPage = function(t, a, n, o) {
   if (a !== !0 && (a = !1, s.startStop(!1), s.makeActive()), /^[#|.]/.test(t) && e(t).length && (t = e(t).closest(".panel").index() + s.adj), 1 !== i.changeBy) {
    var r = s.pages - s.adjustMultiple;
    1 > t && (t = i.stopAtEnd ? 1 : i.infiniteSlides ? s.pages + t : i.showMultiple > 1 - t ? 1 : r), t > s.pages ? t = i.stopAtEnd ? s.pages : i.showMultiple > 1 - t ? 1 : t -= r : t >= r && (t = r)
   }
   s.pages <= 1 || (s.$lastPage = s.$currentPage, "number" != typeof t && (t = parseInt(t, 10) || i.startPanel, s.setCurrentPage(t)), a && i.isVideoPlaying(s) || (s.exactPage = t, t > s.pages + 1 - s.adj && (t = i.infiniteSlides || i.stopAtEnd ? s.pages : 1), t < s.adj && (t = i.infiniteSlides || i.stopAtEnd ? 1 : s.pages), i.infiniteSlides || (s.exactPage = t), s.currentPage = t > s.pages ? s.pages : 1 > t ? 1 : s.currentPage, s.$currentPage = s.$items.eq(s.currentPage - s.adj), s.targetPage = 0 === t ? s.pages : t > s.pages ? 1 : t, s.$targetPage = s.$items.eq(s.targetPage - s.adj), o = "undefined" != typeof o ? o : i.animationTime, o >= 0 && s.$el.trigger("slide_init", s), o > 0 && s.slideControls(!0), i.buildNavigation && s.setNavigation(s.targetPage), a !== !0 && (a = !1), (!a || i.stopAtEnd && t === s.pages) && s.startStop(!1), o >= 0 && s.$el.trigger("slide_begin", s), setTimeout(function(e) {
    var a, r = !0;
    i.allowRapidChange && s.$wrapper.add(s.$el).add(s.$items).stop(!0, !0), i.resizeContents || (a = s.getDim(t), e = {}, s.$wrapper.width() !== a[0] && (e.width = a[0] || s.width, r = !1), s.$wrapper.height() !== a[1] && (e.height = a[1] || s.height, r = !1), r || s.$wrapper.filter(":not(:animated)").animate(e, {
     queue: !1,
     duration: 0 > o ? 0 : o,
     easing: i.easing
    })), "fade" === i.mode ? s.$lastPage[0] !== s.$targetPage[0] ? (s.fadeIt(s.$lastPage, 0, o), s.fadeIt(s.$targetPage, 1, o, function() {
     s.endAnimation(t, n, o)
    })) : s.endAnimation(t, n, o) : (e = {}, e[s.dir] = -s.panelSize[i.infiniteSlides && s.pages > 1 ? t : t - 1][2], s.$el.filter(":not(:animated)").animate(e, {
     queue: !1,
     duration: 0 > o ? 0 : o,
     easing: i.easing,
     complete: function() {
      s.endAnimation(t, n, o)
     }
    }))
   }, parseInt(i.delayBeforeAnimate, 10) || 0)))
  }, s.endAnimation = function(e, t, a) {
   0 === e ? (s.$el.css(s.dir, "fade" === i.mode ? 0 : -s.panelSize[s.pages][2]), e = s.pages) : e > s.pages && (s.$el.css(s.dir, "fade" === i.mode ? 0 : -s.panelSize[1][2]), e = 1), s.exactPage = e, s.setCurrentPage(e, !1), "fade" === i.mode && s.fadeIt(s.$items.not(":eq(" + (e - s.adj) + ")"), 0, 0), s.hovered || s.slideControls(!1), i.hashTags && s.setHash(e), a >= 0 && s.$el.trigger("slide_complete", s), "function" == typeof t && t(s), i.autoPlayLocked && !s.playing && setTimeout(function() {
    s.startStop(!0)
   }, i.resumeDelay - (i.autoPlayDelayed ? i.delay : 0))
  }, s.fadeIt = function(e, t, a, n) {
   var s = 0 > a ? 0 : a;
   i.resumeOnVisible ? e.filter(":not(:animated)").fadeTo(s, t, n) : e.filter(":not(:animated)")[0 === t ? "fadeOut" : "fadeIn"](s, n)
  }, s.setCurrentPage = function(e, t) {
   if (e = parseInt(e, 10), !(s.pages < 1 || 0 === e || isNaN(e))) {
    if (e > s.pages + 1 - s.adj && (e = s.pages - s.adj), e < s.adj && (e = 1), i.buildArrows && !i.infiniteSlides && i.stopAtEnd && (s.$forward[e === s.pages - s.adjustMultiple ? "addClass" : "removeClass"]("disabled"), s.$back[1 === e ? "addClass" : "removeClass"]("disabled"), e === s.pages && s.playing && s.startStop()), !t) {
     var a = s.getDim(e);
     s.$wrapper.css({
      width: a[0],
      height: a[1]
     }).add(s.$window).scrollLeft(0).scrollTop(0), s.$el.css(s.dir, "fade" === i.mode ? 0 : -s.panelSize[i.infiniteSlides && s.pages > 1 ? e : e - 1][2])
    }
    s.currentPage = e, s.$currentPage = s.$items.removeClass("activePage").eq(e - s.adj).addClass("activePage"), i.buildNavigation && s.setNavigation(e)
   }
  }, s.setNavigation = function(e) {
   s.$nav.find(".cur").removeClass("cur").end().find("a").eq(e - 1).addClass("cur")
  }, s.makeActive = function() {
   s.$wrapper.hasClass("activeSlider") || (e(".activeSlider").removeClass("activeSlider"), s.$wrapper.addClass("activeSlider"))
  }, s.gotoHash = function() {
   var t = s.win.location.hash,
    a = t.indexOf("&"),
    n = t.match(s.regex);
   return null !== n || /^#&/.test(t) || /#!?\//.test(t) ? null !== n && (n = i.hashTags ? parseInt(n[1], 10) : null) : (t = t.substring(0, a >= 0 ? a : t.length), n = e(t).length && e(t).closest(".anythingBase")[0] === s.el ? s.$items.index(e(t).closest(".panel")) + s.adj : null), n
  }, s.setHash = function(e) {
   var t = "panel" + s.runTimes + "-",
    a = s.win.location.hash;
   "undefined" != typeof a && (s.win.location.hash = a.indexOf(t) > 0 ? a.replace(s.regex, t + e) : a + "&" + t + e)
  }, s.slideControls = function(e) {
   var t = e ? "slideDown" : "slideUp",
    a = e ? 0 : i.animationTime,
    n = e ? i.animationTime : 0,
    o = e ? 1 : 0,
    r = e ? 0 : 1;
   i.toggleControls && s.$controls.stop(!0, !0).delay(a)[t](i.animationTime / 2).delay(n), i.buildArrows && i.toggleArrows && (!s.hovered && s.playing && (r = 1, o = 0), s.$forward.stop(!0, !0).delay(a).animate({
    right: s.arrowRight + r * s.arrowWidth,
    opacity: o
   }, i.animationTime / 2), s.$back.stop(!0, !0).delay(a).animate({
    left: s.arrowLeft + r * s.arrowWidth,
    opacity: o
   }, i.animationTime / 2))
  }, s.clearTimer = function(e) {
   s.timer && (s.win.clearInterval(s.timer), !e && s.slideshow && (s.$el.trigger("slideshow_stop", s), s.slideshow = !1))
  }, s.startStop = function(e, t) {
   e !== !0 && (e = !1), s.playing = e, e && !t && (s.$el.trigger("slideshow_start", s), s.slideshow = !0), i.buildStartStop && (s.$startStop.toggleClass("playing", e).find("span").html(e ? i.stopText : i.startText), "hidden" === s.$startStop.find("span").css("visibility") && s.$startStop.addClass(i.tooltipClass).attr("title", e ? i.stopText : i.startText)), e ? (s.clearTimer(!0), s.timer = s.win.setInterval(function() {
    i.isVideoPlaying(s) ? i.resumeOnVideoEnd || s.startStop() : s.goForward(!0)
   }, i.delay)) : s.clearTimer()
  }, s.init()
 }, e.anythingSlider.defaults = {
  theme: "default",
  mode: "horiz",
  expand: !0,
  resizeContents: !0,
  showMultiple: !1,
  easing: "swing",
  buildArrows: !0,
  buildNavigation: !0,
  buildStartStop: !0,
  toggleArrows: !1,
  toggleControls: !1,
  startText: "Start",
  stopText: "Stop",
  forwardText: "&rarr;",
  backText: "&larr;",
  tooltipClass: "tooltip",
  enableArrows: !0,
  enableNavigation: !0,
  enableStartStop: !0,
  enableKeyboard: !0,
  startPanel: 1,
  changeBy: 1,
  hashTags: !1,
  infiniteSlides: !0,
  navigationFormatter: null,
  navigationSize: !1,
  autoPlay: !1,
  autoPlayLocked: !1,
  autoPlayDelayed: !1,
  pauseOnHover: !0,
  stopAtEnd: !1,
  playRtl: !1,
  delay: 3e3,
  resumeDelay: 15e3,
  animationTime: 600,
  delayBeforeAnimate: 0,
  clickForwardArrow: "click",
  clickBackArrow: "click",
  clickControls: "click focusin",
  clickSlideshow: "click",
  allowRapidChange: !1,
  resumeOnVideoEnd: !0,
  resumeOnVisible: !0,
  addWmodeToObject: "opaque",
  isVideoPlaying: function(e) {
   return !1
  }
 }, e.fn.anythingSlider = function(t, a) {
  return this.each(function() {
   var i, n = e(this).data("AnythingSlider");
   (typeof t).match("object|undefined") ? n ? n.updateSlider() : new e.anythingSlider(this, t) : /\d/.test(t) && !isNaN(t) && n ? (i = "number" == typeof t ? t : parseInt(e.trim(t), 10), i >= 1 && i <= n.pages && n.gotoPage(i, !1, a)) : /^[#|.]/.test(t) && e(t).length && n.gotoPage(t, !1, a)
  })
 }
}(jQuery);
! function(t) {
 function i(i, e) {
  this.$element = t(i), this.options = e, this.enabled = !0, this.fixTitle()
 }
 i.prototype = {
  show: function() {
   var i = this.getTitle();
   if (i && this.enabled) {
    var e = this.tip();
    e.find(".tipsy-inner")[this.options.html ? "html" : "text"](i), e[0].className = "tipsy", e.remove().css({
     top: 0,
     left: 0,
     visibility: "hidden",
     display: "block"
    }).appendTo(document.body);
    var s, n = t.extend({}, this.$element.offset(), {
      width: this.$element[0].offsetWidth,
      height: this.$element[0].offsetHeight
     }),
     o = e[0].offsetWidth,
     a = e[0].offsetHeight,
     l = "function" == typeof this.options.gravity ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
    switch (l.charAt(0)) {
     case "n":
      s = {
       top: n.top + n.height + this.options.offset,
       left: n.left + n.width / 2 - o / 2
      };
      break;
     case "s":
      s = {
       top: n.top - a - this.options.offset,
       left: n.left + n.width / 2 - o / 2
      };
      break;
     case "e":
      s = {
       top: n.top + n.height / 2 - a / 2,
       left: n.left - o - this.options.offset
      };
      break;
     case "w":
      s = {
       top: n.top + n.height / 2 - a / 2,
       left: n.left + n.width + this.options.offset
      }
    }
    2 == l.length && ("w" == l.charAt(1) ? s.left = n.left + n.width / 2 - 15 : s.left = n.left + n.width / 2 - o + 15), e.css(s).addClass("tipsy-" + l), this.options.fade ? e.stop().css({
     opacity: 0,
     display: "block",
     visibility: "visible"
    }).animate({
     opacity: this.options.opacity
    }) : e.css({
     visibility: "visible",
     opacity: this.options.opacity
    })
   }
  },
  hide: function() {
   this.options.fade ? this.tip().stop().fadeOut(function() {
    t(this).remove()
   }) : this.tip().remove()
  },
  fixTitle: function() {
   var t = this.$element;
   (t.attr("title") || "string" != typeof t.attr("name")) && t.attr("name", t.attr("title") || "").removeAttr("title")
  },
  getTitle: function() {
   var t, i = this.$element,
    e = this.options;
   this.fixTitle();
   var t, e = this.options;
   return "string" == typeof e.title ? t = i.attr("title" == e.title ? "name" : e.title) : "function" == typeof e.title && (t = e.title.call(i[0])), t = ("" + t).replace(/(^\s*|\s*$)/, ""), t || e.fallback
  },
  tip: function() {
   return this.$tip || (this.$tip = t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')), this.$tip
  },
  validate: function() {
   this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
  },
  enable: function() {
   this.enabled = !0
  },
  disable: function() {
   this.enabled = !1
  },
  toggleEnabled: function() {
   this.enabled = !this.enabled
  }
 }, t.fn.tipsy = function(e) {
  function s(s) {
   var n = t.data(s, "tipsy");
   return n || (n = new i(s, t.fn.tipsy.elementOptions(s, e)), t.data(s, "tipsy", n)), n
  }

  function n() {
   var t = s(this);
   t.hoverState = "in", 0 == e.delayIn ? t.show() : (t.fixTitle(), setTimeout(function() {
    "in" == t.hoverState && t.show()
   }, e.delayIn))
  }

  function o() {
   var t = s(this);
   t.hoverState = "out", 0 == e.delayOut ? t.hide() : setTimeout(function() {
    "out" == t.hoverState && t.hide()
   }, e.delayOut)
  }
  if (e === !0) return this.data("tipsy");
  if ("string" == typeof e) {
   var a = this.data("tipsy");
   return a && a[e](), this
  }
  if (e = t.extend({}, t.fn.tipsy.defaults, e), e.live || this.each(function() {
    s(this)
   }), "manual" != e.trigger) {
   var l = e.live ? "live" : "bind",
    h = "hover" == e.trigger ? "mouseenter" : "focus",
    f = "hover" == e.trigger ? "mouseleave" : "blur";
   this[l](h, n)[l](f, o)
  }
  return this
 }, t.fn.tipsy.defaults = {
  delayIn: 0,
  delayOut: 0,
  fade: !1,
  fallback: "",
  gravity: "n",
  html: !1,
  live: !1,
  offset: 0,
  opacity: .8,
  title: "title",
  trigger: "hover"
 }, t.fn.tipsy.elementOptions = function(i, e) {
  return t.metadata ? t.extend({}, e, t(i).metadata()) : e
 }, t.fn.tipsy.autoNS = function() {
  return t(this).offset().top > t(document).scrollTop() + t(window).height() / 2 ? "s" : "n"
 }, t.fn.tipsy.autoWE = function() {
  return t(this).offset().left > t(document).scrollLeft() + t(window).width() / 2 ? "e" : "w"
 }
}(jQuery);
jQuery(document).ready(function() {
 "" != jQuery("#search-text").val() && jQuery("#search_label span").hide(), "" != jQuery("#comment-author").val() && jQuery("#comment-name_label span").hide(), "" != jQuery("#comment-email").val() && jQuery("#comment-email_label span").hide(), "" != jQuery("#comment-url").val() && jQuery("#comment-url_label span").hide(), "" != jQuery("#comment-text").val() && jQuery("#comment-text_label span").hide(), jQuery("#search_label input").focus(function() {
  jQuery("#search_label span").fadeTo(100, .5), "" !== jQuery("#search-text").val() && jQuery("#search_label span").hide()
 }), jQuery("#comment-name_label input").focus(function() {
  jQuery("#comment-name_label span").fadeTo(100, .5), "" !== jQuery("#comment-author").val() && jQuery("#comment-name_label span").hide()
 }), jQuery("#comment-email_label input").focus(function() {
  jQuery("#comment-email_label span").fadeTo(100, .5), "" !== jQuery("#comment-email").val() && jQuery("#comment-email_label span").hide()
 }), jQuery("#comment-url_label input").focus(function() {
  jQuery("#comment-url_label span").fadeTo(100, .5), "" !== jQuery("#comment-url").val() && jQuery("#comment-url_label span").hide()
 }), jQuery("#comment-text_label textarea").focus(function() {
  jQuery("#comment-text_label span").fadeTo(100, .5), "" !== jQuery("#comment-text").val() && jQuery("#comment-text_label span").hide()
 }), jQuery("#search_label input").keydown(function() {
  "" !== jQuery("#search-text").val() && jQuery("#search_label span").hide()
 }), jQuery("#comment-name_label input").keydown(function() {
  "" !== jQuery("#comment-author").val() && jQuery("#comment-name_label span").hide()
 }), jQuery("#comment-email_label input").keydown(function() {
  "" !== jQuery("#comment-email").val() && jQuery("#comment-email_label span").hide()
 }), jQuery("#comment-url_label input").keydown(function() {
  "" !== jQuery("#comment-url").val() && jQuery("#comment-url_label span").hide()
 }), jQuery("#comment-text_label textarea").keydown(function() {
  "" !== jQuery("#comment-text").val() && jQuery("#comment-text_label span").hide()
 }), jQuery("#search_label").click(function() {
  jQuery("#search-text").trigger("focus"), "" !== jQuery("#search-text").val() && jQuery("#search_label span").hide()
 }), jQuery("comment-name_label").click(function() {
  jQuery("#comment-author").trigger("focus"), "" !== jQuery("#comment-author").val() && jQuery("#comment-name_label span").hide()
 }), jQuery("comment-email_label").click(function() {
  jQuery("#comment-email").trigger("focus"), "" !== jQuery("#comment-email").val() && jQuery("#comment-email_label span").hide()
 }), jQuery("comment-url_label").click(function() {
  jQuery("#comment-url").trigger("focus"), "" !== jQuery("#comment-url").val() && jQuery("#comment-url_label span").hide()
 }), jQuery("comment-text_label").click(function() {
  jQuery("#comment-text").trigger("focus"), "" !== jQuery("#comment-text").val() && jQuery("#comment-text_label span").hide()
 }), jQuery("#search-text").blur(function() {
  "" == jQuery("#search-text").val() && (jQuery("#search_label span").show(), jQuery("#search_label span").fadeTo(100, 1)), "" !== jQuery("#search-text").val() && jQuery("#search_label span").hide()
 }), jQuery("#comment-author").blur(function() {
  "" == jQuery("#comment-author").val() && (jQuery("#comment-name_label span").show(), jQuery("#comment-name_label span").fadeTo(100, 1)), "" !== jQuery("#comment-author").val() && jQuery("#comment-name_label span").hide()
 }), jQuery("#comment-email").blur(function() {
  "" == jQuery("#comment-email").val() && (jQuery("#comment-email_label span").show(), jQuery("#comment-email_label span").fadeTo(100, 1)), "" !== jQuery("#comment-email").val() && jQuery("#comment-email_label span").hide()
 }), jQuery("#comment-url").blur(function() {
  "" == jQuery("#comment-url").val() && (jQuery("#comment-url_label span").show(), jQuery("#comment-url_label span").fadeTo(100, 1)), "" !== jQuery("#comment-url").val() && jQuery("#comment-url_label span").hide()
 }), jQuery("#comment-text").blur(function() {
  "" == jQuery("#comment-text").val() && (jQuery("#comment-text_label span").show(), jQuery("#comment-text_label span").fadeTo(100, 1)), "" !== jQuery("#comment-text").val() && jQuery("#comment-text_label span").hide()
 })
});
var IASCallbacks = function() {
 return this.list = [], this.fireStack = [], this.isFiring = !1, this.isDisabled = !1, this.fire = function(t) {
  var e = t[0],
   i = t[1],
   n = t[2];
  this.isFiring = !0;
  for (var r = 0, s = this.list.length; s > r; r++)
   if (void 0 != this.list[r] && !1 === this.list[r].fn.apply(e, n)) {
    i.reject();
    break
   } this.isFiring = !1, i.resolve(), this.fireStack.length && this.fire(this.fireStack.shift())
 }, this.inList = function(t, e) {
  e = e || 0;
  for (var i = e, n = this.list.length; n > i; i++)
   if (this.list[i].fn === t || t.guid && this.list[i].fn.guid && t.guid === this.list[i].fn.guid) return i;
  return -1
 }, this
};
IASCallbacks.prototype = {
  add: function(t, e) {
   var i = {
    fn: t,
    priority: e
   };
   e = e || 0;
   for (var n = 0, r = this.list.length; r > n; n++)
    if (e > this.list[n].priority) return this.list.splice(n, 0, i), this;
   return this.list.push(i), this
  },
  remove: function(t) {
   for (var e = 0;
    (e = this.inList(t, e)) > -1;) this.list.splice(e, 1);
   return this
  },
  has: function(t) {
   return this.inList(t) > -1
  },
  fireWith: function(t, e) {
   var i = jQuery.Deferred();
   return this.isDisabled ? i.reject() : (e = e || [], e = [t, i, e.slice ? e.slice() : e], this.isFiring ? this.fireStack.push(e) : this.fire(e), i)
  },
  disable: function() {
   this.isDisabled = !0
  },
  enable: function() {
   this.isDisabled = !1
  }
 },
 function(t) {
  "use strict";
  var e = -1,
   i = function(i, n) {
    return this.itemsContainerSelector = n.container, this.itemSelector = n.item, this.nextSelector = n.next, this.paginationSelector = n.pagination, this.$scrollContainer = i, this.$container = window === i.get(0) ? t(document) : i, this.defaultDelay = n.delay, this.negativeMargin = n.negativeMargin, this.nextUrl = null, this.isBound = !1, this.isPaused = !1, this.isInitialized = !1, this.listeners = {
     next: new IASCallbacks,
     load: new IASCallbacks,
     loaded: new IASCallbacks,
     render: new IASCallbacks,
     rendered: new IASCallbacks,
     scroll: new IASCallbacks,
     noneLeft: new IASCallbacks,
     ready: new IASCallbacks
    }, this.extensions = [], this.scrollHandler = function() {
     if (this.isBound && !this.isPaused) {
      var t = this.getCurrentScrollOffset(this.$scrollContainer),
       i = this.getScrollThreshold();
      e != i && (this.fire("scroll", [t, i]), t >= i && this.next())
     }
    }, this.getItemsContainer = function() {
     return t(this.itemsContainerSelector)
    }, this.getLastItem = function() {
     return t(this.itemSelector, this.getItemsContainer().get(0)).last()
    }, this.getFirstItem = function() {
     return t(this.itemSelector, this.getItemsContainer().get(0)).first()
    }, this.getScrollThreshold = function(t) {
     var i;
     return t = t || this.negativeMargin, t = t >= 0 ? -1 * t : t, i = this.getLastItem(), 0 === i.length ? e : i.offset().top + i.height() + t
    }, this.getCurrentScrollOffset = function(t) {
     var e = 0,
      i = t.height();
     return e = window === t.get(0) ? t.scrollTop() : t.offset().top, (-1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod")) && (i += 80), e + i
    }, this.getNextUrl = function(e) {
     return e = e || this.$container, t(this.nextSelector, e).last().attr("href")
    }, this.load = function(e, i, n) {
     var r, s, o = this,
      h = [],
      a = +new Date;
     n = n || this.defaultDelay;
     var A = {
      url: e
     };
     return o.fire("load", [A]), t.get(A.url, null, t.proxy(function(e) {
      r = t(this.itemsContainerSelector, e).eq(0), 0 === r.length && (r = t(e).filter(this.itemsContainerSelector).eq(0)), r && r.find(this.itemSelector).each(function() {
       h.push(this)
      }), o.fire("loaded", [e, h]), i && (s = +new Date - a, n > s ? setTimeout(function() {
       i.call(o, e, h)
      }, n - s) : i.call(o, e, h))
     }, o), "html")
    }, this.render = function(e, i) {
     var n = this,
      r = this.getLastItem(),
      s = 0,
      o = this.fire("render", [e]);
     o.done(function() {
      t(e).hide(), r.after(e), t(e).fadeIn(400, function() {
       ++s < e.length || (n.fire("rendered", [e]), i && i())
      })
     })
    }, this.hidePagination = function() {
     this.paginationSelector && t(this.paginationSelector, this.$container).hide()
    }, this.restorePagination = function() {
     this.paginationSelector && t(this.paginationSelector, this.$container).show()
    }, this.throttle = function(e, i) {
     var n, r, s = 0;
     return n = function() {
      function t() {
       s = +new Date, e.apply(n, o)
      }
      var n = this,
       o = arguments,
       h = +new Date - s;
      r ? clearTimeout(r) : t(), h > i ? t() : r = setTimeout(t, i)
     }, t.guid && (n.guid = e.guid = e.guid || t.guid++), n
    }, this.fire = function(t, e) {
     return this.listeners[t].fireWith(this, e)
    }, this.pause = function() {
     this.isPaused = !0
    }, this.resume = function() {
     this.isPaused = !1
    }, this
   };
  i.prototype.initialize = function() {
   if (this.isInitialized) return !1;
   var t = !!("onscroll" in this.$scrollContainer.get(0)),
    e = this.getCurrentScrollOffset(this.$scrollContainer),
    i = this.getScrollThreshold();
   return t ? (this.hidePagination(), this.bind(), this.fire("ready"), this.nextUrl = this.getNextUrl(), e >= i ? (this.next(), this.one("rendered", function() {
    this.isInitialized = !0
   })) : this.isInitialized = !0, this) : !1
  }, i.prototype.reinitialize = function() {
   this.isInitialized = !1, this.unbind(), this.initialize()
  }, i.prototype.bind = function() {
   if (!this.isBound) {
    this.$scrollContainer.on("scroll", t.proxy(this.throttle(this.scrollHandler, 150), this));
    for (var e = 0, i = this.extensions.length; i > e; e++) this.extensions[e].bind(this);
    this.isBound = !0, this.resume()
   }
  }, i.prototype.unbind = function() {
   if (this.isBound) {
    this.$scrollContainer.off("scroll", this.scrollHandler);
    for (var t = 0, e = this.extensions.length; e > t; t++) "undefined" != typeof this.extensions[t].unbind && this.extensions[t].unbind(this);
    this.isBound = !1
   }
  }, i.prototype.destroy = function() {
   this.unbind(), this.$scrollContainer.data("ias", null)
  }, i.prototype.on = function(e, i, n) {
   if ("undefined" == typeof this.listeners[e]) throw new Error('There is no event called "' + e + '"');
   return n = n || 0, this.listeners[e].add(t.proxy(i, this), n), this
  }, i.prototype.one = function(t, e) {
   var i = this,
    n = function() {
     i.off(t, e), i.off(t, n)
    };
   return this.on(t, e), this.on(t, n), this
  }, i.prototype.off = function(t, e) {
   if ("undefined" == typeof this.listeners[t]) throw new Error('There is no event called "' + t + '"');
   return this.listeners[t].remove(e), this
  }, i.prototype.next = function() {
   var t = this.nextUrl,
    e = this;
   if (this.pause(), !t) return this.fire("noneLeft", [this.getLastItem()]), this.listeners.noneLeft.disable(), e.resume(), !1;
   var i = this.fire("next", [t]);
   return i.done(function() {
    e.load(t, function(t, i) {
     e.render(i, function() {
      e.nextUrl = e.getNextUrl(t), e.resume()
     })
    })
   }), i.fail(function() {
    e.resume()
   }), !0
  }, i.prototype.extension = function(t) {
   if ("undefined" == typeof t.bind) throw new Error('Extension doesn\'t have required method "bind"');
   return "undefined" != typeof t.initialize && t.initialize(this), this.extensions.push(t), this.isInitialized && this.reinitialize(), this
  }, t.ias = function(e) {
   var i = t(window);
   return i.ias.apply(i, arguments)
  }, t.fn.ias = function(e) {
   var n = Array.prototype.slice.call(arguments),
    r = this;
   return this.each(function() {
    var s = t(this),
     o = s.data("ias"),
     h = t.extend({}, t.fn.ias.defaults, s.data(), "object" == typeof e && e);
    if (o || (s.data("ias", o = new i(s, h)), t(document).ready(t.proxy(o.initialize, o))), "string" == typeof e) {
     if ("function" != typeof o[e]) throw new Error('There is no method called "' + e + '"');
     n.shift(), o[e].apply(o, n)
    }
    r = o
   }), r
  }, t.fn.ias.defaults = {
   item: ".item",
   container: ".listing",
   next: ".next",
   pagination: !1,
   delay: 600,
   negativeMargin: 10
  }
 }(jQuery);
var IASHistoryExtension = function(t) {
 return t = jQuery.extend({}, this.defaults, t), this.ias = null, this.prevSelector = t.prev, this.prevUrl = null, this.listeners = {
  prev: new IASCallbacks
 }, this.onPageChange = function(t, e, i) {
  if (window.history && window.history.replaceState) {
   var n = history.state;
   history.replaceState(n, document.title, i)
  }
 }, this.onScroll = function(t, e) {
  var i = this.getScrollThresholdFirstItem();
  this.prevUrl && (t -= this.ias.$scrollContainer.height(), i >= t && this.prev())
 }, this.onReady = function() {
  var t = this.ias.getCurrentScrollOffset(this.ias.$scrollContainer),
   e = this.getScrollThresholdFirstItem();
  t -= this.ias.$scrollContainer.height(), e >= t && this.prev()
 }, this.getPrevUrl = function(t) {
  return t || (t = this.ias.$container), jQuery(this.prevSelector, t).last().attr("href")
 }, this.getScrollThresholdFirstItem = function() {
  var t;
  return t = this.ias.getFirstItem(), 0 === t.length ? -1 : t.offset().top
 }, this.renderBefore = function(t, e) {
  var i = this.ias,
   n = i.getFirstItem(),
   r = 0;
  i.fire("render", [t]), jQuery(t).hide(), n.before(t), jQuery(t).fadeIn(400, function() {
   ++r < t.length || (i.fire("rendered", [t]), e && e())
  })
 }, this
};
IASHistoryExtension.prototype.initialize = function(t) {
 var e = this;
 this.ias = t, jQuery.extend(t.listeners, this.listeners), t.prev = function() {
  return e.prev()
 }, this.prevUrl = this.getPrevUrl()
}, IASHistoryExtension.prototype.bind = function(t) {
 t.on("pageChange", jQuery.proxy(this.onPageChange, this)), t.on("scroll", jQuery.proxy(this.onScroll, this)), t.on("ready", jQuery.proxy(this.onReady, this))
}, IASHistoryExtension.prototype.unbind = function(t) {
 t.off("pageChange", this.onPageChange), t.off("scroll", this.onScroll), t.off("ready", this.onReady)
}, IASHistoryExtension.prototype.prev = function() {
 var t = this.prevUrl,
  e = this,
  i = this.ias;
 if (!t) return !1;
 i.pause();
 var n = i.fire("prev", [t]);
 return n.done(function() {
  i.load(t, function(t, n) {
   e.renderBefore(n, function() {
    e.prevUrl = e.getPrevUrl(t), i.resume(), e.prevUrl && e.prev()
   })
  })
 }), n.fail(function() {
  i.resume()
 }), !0
}, IASHistoryExtension.prototype.defaults = {
 prev: ".prev"
};
var IASNoneLeftExtension = function(t) {
 return t = jQuery.extend({}, this.defaults, t), this.ias = null, this.uid = (new Date).getTime(), this.html = t.html.replace("{text}", t.text), this.showNoneLeft = function() {
  var t = jQuery(this.html).attr("id", "ias_noneleft_" + this.uid),
   e = this.ias.getLastItem();
  e.after(t), t.fadeIn()
 }, this
};
IASNoneLeftExtension.prototype.bind = function(t) {
 this.ias = t, t.on("noneLeft", jQuery.proxy(this.showNoneLeft, this))
}, IASNoneLeftExtension.prototype.unbind = function(t) {
 t.off("noneLeft", this.showNoneLeft)
}, IASNoneLeftExtension.prototype.defaults = {
 text: "You reached the end.",
 html: '<div class="ias-noneleft" style="text-align: center;">{text}</div>'
};
var IASPagingExtension = function() {
 return this.ias = null, this.pagebreaks = [
  [0, document.location.toString()]
 ], this.lastPageNum = 1, this.enabled = !0, this.listeners = {
  pageChange: new IASCallbacks
 }, this.onScroll = function(t, e) {
  if (this.enabled) {
   var i, n = this.ias,
    r = this.getCurrentPageNum(t),
    s = this.getCurrentPagebreak(t);
   this.lastPageNum !== r && (i = s[1], n.fire("pageChange", [r, t, i])), this.lastPageNum = r
  }
 }, this.onNext = function(t) {
  var e = this.ias.getCurrentScrollOffset(this.ias.$scrollContainer);
  this.pagebreaks.push([e, t]);
  var i = this.getCurrentPageNum(e) + 1;
  this.ias.fire("pageChange", [i, e, t]), this.lastPageNum = i
 }, this.onPrev = function(t) {
  var e = this,
   i = e.ias,
   n = i.getCurrentScrollOffset(i.$scrollContainer),
   r = n - i.$scrollContainer.height(),
   s = i.getFirstItem();
  this.enabled = !1, this.pagebreaks.unshift([0, t]), i.one("rendered", function() {
   for (var n = 1, o = e.pagebreaks.length; o > n; n++) e.pagebreaks[n][0] = e.pagebreaks[n][0] + s.offset().top;
   var h = e.getCurrentPageNum(r) + 1;
   i.fire("pageChange", [h, r, t]), e.lastPageNum = h, e.enabled = !0
  })
 }, this
};
IASPagingExtension.prototype.initialize = function(t) {
 this.ias = t, jQuery.extend(t.listeners, this.listeners)
}, IASPagingExtension.prototype.bind = function(t) {
 try {
  t.on("prev", jQuery.proxy(this.onPrev, this), this.priority)
 } catch (e) {}
 t.on("next", jQuery.proxy(this.onNext, this), this.priority), t.on("scroll", jQuery.proxy(this.onScroll, this), this.priority)
}, IASPagingExtension.prototype.unbind = function(t) {
 try {
  t.off("prev", this.onPrev)
 } catch (e) {}
 t.off("next", this.onNext), t.off("scroll", this.onScroll)
}, IASPagingExtension.prototype.getCurrentPageNum = function(t) {
 for (var e = this.pagebreaks.length - 1; e > 0; e--)
  if (t > this.pagebreaks[e][0]) return e + 1;
 return 1
}, IASPagingExtension.prototype.getCurrentPagebreak = function(t) {
 for (var e = this.pagebreaks.length - 1; e >= 0; e--)
  if (t > this.pagebreaks[e][0]) return this.pagebreaks[e];
 return null
}, IASPagingExtension.prototype.priority = 500;
var IASSpinnerExtension = function(t) {
 return t = jQuery.extend({}, this.defaults, t), this.ias = null, this.uid = (new Date).getTime(), this.src = t.src, this.html = t.html.replace("{src}", this.src), this.showSpinner = function() {
  var t = this.getSpinner() || this.createSpinner(),
   e = this.ias.getLastItem();
  e.after(t), t.fadeIn()
 }, this.showSpinnerBefore = function() {
  var t = this.getSpinner() || this.createSpinner(),
   e = this.ias.getFirstItem();
  e.before(t), t.fadeIn()
 }, this.removeSpinner = function() {
  this.hasSpinner() && this.getSpinner().remove()
 }, this.getSpinner = function() {
  var t = jQuery("#ias_spinner_" + this.uid);
  return t.length > 0 ? t : !1
 }, this.hasSpinner = function() {
  var t = jQuery("#ias_spinner_" + this.uid);
  return t.length > 0
 }, this.createSpinner = function() {
  var t = jQuery(this.html).attr("id", "ias_spinner_" + this.uid);
  return t.hide(), t
 }, this
};
IASSpinnerExtension.prototype.bind = function(t) {
 this.ias = t, t.on("next", jQuery.proxy(this.showSpinner, this)), t.on("render", jQuery.proxy(this.removeSpinner, this));
 try {
  t.on("prev", jQuery.proxy(this.showSpinnerBefore, this))
 } catch (e) {}
}, IASSpinnerExtension.prototype.unbind = function(t) {
 t.off("next", this.showSpinner), t.off("render", this.removeSpinner);
 try {
  t.off("prev", this.showSpinnerBefore)
 } catch (e) {}
}, IASSpinnerExtension.prototype.defaults = {
 src: "data:image/gif;base64,R0lGODlhEAAQAPQAAP///wAAAPDw8IqKiuDg4EZGRnp6egAAAFhYWCQkJKysrL6+vhQUFJycnAQEBDY2NmhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFdyAgAgIJIeWoAkRCCMdBkKtIHIngyMKsErPBYbADpkSCwhDmQCBethRB6Vj4kFCkQPG4IlWDgrNRIwnO4UKBXDufzQvDMaoSDBgFb886MiQadgNABAokfCwzBA8LCg0Egl8jAggGAA1kBIA1BAYzlyILczULC2UhACH5BAkKAAAALAAAAAAQABAAAAV2ICACAmlAZTmOREEIyUEQjLKKxPHADhEvqxlgcGgkGI1DYSVAIAWMx+lwSKkICJ0QsHi9RgKBwnVTiRQQgwF4I4UFDQQEwi6/3YSGWRRmjhEETAJfIgMFCnAKM0KDV4EEEAQLiF18TAYNXDaSe3x6mjidN1s3IQAh+QQJCgAAACwAAAAAEAAQAAAFeCAgAgLZDGU5jgRECEUiCI+yioSDwDJyLKsXoHFQxBSHAoAAFBhqtMJg8DgQBgfrEsJAEAg4YhZIEiwgKtHiMBgtpg3wbUZXGO7kOb1MUKRFMysCChAoggJCIg0GC2aNe4gqQldfL4l/Ag1AXySJgn5LcoE3QXI3IQAh+QQJCgAAACwAAAAAEAAQAAAFdiAgAgLZNGU5joQhCEjxIssqEo8bC9BRjy9Ag7GILQ4QEoE0gBAEBcOpcBA0DoxSK/e8LRIHn+i1cK0IyKdg0VAoljYIg+GgnRrwVS/8IAkICyosBIQpBAMoKy9dImxPhS+GKkFrkX+TigtLlIyKXUF+NjagNiEAIfkECQoAAAAsAAAAABAAEAAABWwgIAICaRhlOY4EIgjH8R7LKhKHGwsMvb4AAy3WODBIBBKCsYA9TjuhDNDKEVSERezQEL0WrhXucRUQGuik7bFlngzqVW9LMl9XWvLdjFaJtDFqZ1cEZUB0dUgvL3dgP4WJZn4jkomWNpSTIyEAIfkECQoAAAAsAAAAABAAEAAABX4gIAICuSxlOY6CIgiD8RrEKgqGOwxwUrMlAoSwIzAGpJpgoSDAGifDY5kopBYDlEpAQBwevxfBtRIUGi8xwWkDNBCIwmC9Vq0aiQQDQuK+VgQPDXV9hCJjBwcFYU5pLwwHXQcMKSmNLQcIAExlbH8JBwttaX0ABAcNbWVbKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICSRBlOY7CIghN8zbEKsKoIjdFzZaEgUBHKChMJtRwcWpAWoWnifm6ESAMhO8lQK0EEAV3rFopIBCEcGwDKAqPh4HUrY4ICHH1dSoTFgcHUiZjBhAJB2AHDykpKAwHAwdzf19KkASIPl9cDgcnDkdtNwiMJCshACH5BAkKAAAALAAAAAAQABAAAAV3ICACAkkQZTmOAiosiyAoxCq+KPxCNVsSMRgBsiClWrLTSWFoIQZHl6pleBh6suxKMIhlvzbAwkBWfFWrBQTxNLq2RG2yhSUkDs2b63AYDAoJXAcFRwADeAkJDX0AQCsEfAQMDAIPBz0rCgcxky0JRWE1AmwpKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICKZzkqJ4nQZxLqZKv4NqNLKK2/Q4Ek4lFXChsg5ypJjs1II3gEDUSRInEGYAw6B6zM4JhrDAtEosVkLUtHA7RHaHAGJQEjsODcEg0FBAFVgkQJQ1pAwcDDw8KcFtSInwJAowCCA6RIwqZAgkPNgVpWndjdyohACH5BAkKAAAALAAAAAAQABAAAAV5ICACAimc5KieLEuUKvm2xAKLqDCfC2GaO9eL0LABWTiBYmA06W6kHgvCqEJiAIJiu3gcvgUsscHUERm+kaCxyxa+zRPk0SgJEgfIvbAdIAQLCAYlCj4DBw0IBQsMCjIqBAcPAooCBg9pKgsJLwUFOhCZKyQDA3YqIQAh+QQJCgAAACwAAAAAEAAQAAAFdSAgAgIpnOSonmxbqiThCrJKEHFbo8JxDDOZYFFb+A41E4H4OhkOipXwBElYITDAckFEOBgMQ3arkMkUBdxIUGZpEb7kaQBRlASPg0FQQHAbEEMGDSVEAA1QBhAED1E0NgwFAooCDWljaQIQCE5qMHcNhCkjIQAh+QQJCgAAACwAAAAAEAAQAAAFeSAgAgIpnOSoLgxxvqgKLEcCC65KEAByKK8cSpA4DAiHQ/DkKhGKh4ZCtCyZGo6F6iYYPAqFgYy02xkSaLEMV34tELyRYNEsCQyHlvWkGCzsPgMCEAY7Cg04Uk48LAsDhRA8MVQPEF0GAgqYYwSRlycNcWskCkApIyEAOwAAAAAAAAAAAA==",
 html: '<div class="ias-spinner"><i class="t4p-icon-repeat infinite-rotation-icon"></i></div>'
};
var IASTriggerExtension = function(t) {
 return t = jQuery.extend({}, this.defaults, t), this.ias = null, this.html = t.html.replace("{text}", t.text), this.htmlPrev = t.htmlPrev.replace("{text}", t.textPrev), this.enabled = !0, this.count = 0, this.offset = t.offset, this.$triggerNext = null, this.$triggerPrev = null, this.showTriggerNext = function() {
  if (!this.enabled) return !0;
  if (!1 === this.offset || ++this.count < this.offset) return !0;
  var t = this.$triggerNext || (this.$triggerNext = this.createTrigger(this.next, this.html)),
   e = this.ias.getLastItem();
  return e.after(t), t.fadeIn(), !1
 }, this.showTriggerPrev = function() {
  if (!this.enabled) return !0;
  var t = this.$triggerPrev || (this.$triggerPrev = this.createTrigger(this.prev, this.htmlPrev)),
   e = this.ias.getFirstItem();
  return e.before(t), t.fadeIn(), !1
 }, this.onRendered = function() {
  this.enabled = !0
 }, this.createTrigger = function(t, e) {
  var i, n = (new Date).getTime();
  return e = e || this.html, i = jQuery(e).attr("id", "ias_trigger_" + n), i.hide(), i.on("click", jQuery.proxy(t, this)), i
 }, this
};
IASTriggerExtension.prototype.bind = function(t) {
 this.ias = t, t.on("next", jQuery.proxy(this.showTriggerNext, this), this.priority), t.on("rendered", jQuery.proxy(this.onRendered, this), this.priority);
 try {
  t.on("prev", jQuery.proxy(this.showTriggerPrev, this), this.priority)
 } catch (e) {}
}, IASTriggerExtension.prototype.unbind = function(t) {
 t.off("next", this.showTriggerNext), t.off("rendered", this.onRendered);
 try {
  t.off("prev", this.showTriggerPrev)
 } catch (e) {}
}, IASTriggerExtension.prototype.next = function() {
 this.enabled = !1, this.ias.pause(), this.$triggerNext && (this.$triggerNext.remove(), this.$triggerNext = null), this.ias.next()
}, IASTriggerExtension.prototype.prev = function() {
 this.enabled = !1, this.ias.pause(), this.$triggerPrev && (this.$triggerPrev.remove(), this.$triggerPrev = null), this.ias.prev()
}, IASTriggerExtension.prototype.defaults = {
 text: "Load more items",
 html: '<div class="ias-trigger ias-trigger-next" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
 textPrev: "Load previous items",
 htmlPrev: '<div class="ias-trigger ias-trigger-prev" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
 offset: 0
}, IASTriggerExtension.prototype.priority = 1e3;
! function(t) {
 t.fn.supersubs = function(i) {
  var e = t.extend({}, t.fn.supersubs.defaults, i);
  return this.each(function() {
   var i = t(this),
    s = t.meta ? t.extend({}, e, i.data()) : e,
    n = t('<li id="menu-fontsize">&#8212;</li>').css({
     padding: 0,
     position: "absolute",
     top: "-999em",
     width: "auto"
    }).appendTo(i).width();
   t("#menu-fontsize").remove(), $ULs = i.find("ul"), $ULs.each(function(i) {
    var e = $ULs.eq(i),
     d = e.children(),
     a = d.children("a"),
     h = d.css("white-space", "nowrap").css("float"),
     o = e.add(d).add(a).css({
      "float": "none",
      width: "auto"
     }).end().end()[0].clientWidth / n;
    o += s.extraWidth, o > s.maxWidth ? o = s.maxWidth : o < s.minWidth && (o = s.minWidth), o += "em", e.css("width", o), d.css({
     "float": h,
     width: "100%",
     "white-space": "normal"
    }).each(function() {
     var i = t(">ul", this),
      e = void 0 !== i.css("left") ? "left" : "right";
     i.css(e, o)
    })
   })
  })
 }, t.fn.supersubs.defaults = {
  minWidth: 9,
  maxWidth: 25,
  extraWidth: 0
 }
}(jQuery);
! function(e) {
 "use strict";
 var s = function() {
  var s = {
    bcClass: "sf-breadcrumb",
    menuClass: "sf-js-enabled",
    anchorClass: "sf-with-ul",
    menuArrowClass: "sf-arrows"
   },
   o = function() {
    var s = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    return s && e(window).load(function() {
     e("body").children().on("click", e.noop)
    }), s
   }(),
   t = function() {
    var e = document.documentElement.style;
    return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
   }(),
   n = function(e, o) {
    var t = s.menuClass;
    o.cssArrows && (t += " " + s.menuArrowClass), e.toggleClass(t)
   },
   i = function(o, t) {
    return o.find("li." + t.pathClass).slice(0, t.pathLevels).addClass(t.hoverClass + " " + s.bcClass).filter(function() {
     return e(this).children(t.popUpSelector).hide().show().length
    }).removeClass(t.pathClass)
   },
   r = function(e) {
    e.children("a").toggleClass(s.anchorClass)
   },
   a = function(e) {
    var s = e.css("ms-touch-action");
    s = "pan-y" === s ? "auto" : "pan-y", e.css("ms-touch-action", s)
   },
   h = function(s, n) {
    var i = "li:has(" + n.popUpSelector + ")";
    e.fn.hoverIntent && !n.disableHI ? s.hoverIntent(u, p, i) : s.on("mouseenter.superfish", i, u).on("mouseleave.superfish", i, p);
    var r = "MSPointerDown.superfish";
    o || (r += " touchend.superfish"), t && (r += " mousedown.superfish"), s.on("focusin.superfish", "li", u).on("focusout.superfish", "li", p).on(r, "a", n, l)
   },
   l = function(s) {
    var o = e(this),
     t = o.siblings(s.data.popUpSelector);
    t.length > 0 && t.is(":hidden") && (o.one("click.superfish", !1), "MSPointerDown" === s.type ? o.trigger("focus") : e.proxy(u, o.parent("li"))())
   },
   u = function() {
    var s = e(this),
     o = d(s);
    clearTimeout(o.sfTimer), s.siblings().superfish("hide").end().superfish("show")
   },
   p = function() {
    var s = e(this),
     t = d(s);
    o ? e.proxy(f, s, t)() : (clearTimeout(t.sfTimer), t.sfTimer = setTimeout(e.proxy(f, s, t), t.delay))
   },
   f = function(s) {
    s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(c(this)), s.$path.length && e.proxy(u, s.$path)())
   },
   c = function(e) {
    return e.closest("." + s.menuClass)
   },
   d = function(e) {
    return c(e).data("sf-options")
   };
  return {
   hide: function(s) {
    if (this.length) {
     var o = this,
      t = d(o);
     if (!t) return this;
     var n = t.retainPath === !0 ? t.$path : "",
      i = o.find("li." + t.hoverClass).add(this).not(n).removeClass(t.hoverClass).children(t.popUpSelector),
      r = t.speedOut;
     s && (i.show(), r = 0), t.retainPath = !1, t.onBeforeHide.call(i), i.stop(!0, !0).animate(t.animationOut, r, function() {
      var s = e(this);
      t.onHide.call(s)
     })
    }
    return this
   },
   show: function() {
    var e = d(this);
    if (!e) return this;
    var s = this.addClass(e.hoverClass),
     o = s.children(e.popUpSelector);
    return e.onBeforeShow.call(o), o.stop(!0, !0).animate(e.animation, e.speed, function() {
     e.onShow.call(o)
    }), this
   },
   destroy: function() {
    return this.each(function() {
     var o, t = e(this),
      i = t.data("sf-options");
     return i ? (o = t.find(i.popUpSelector).parent("li"), clearTimeout(i.sfTimer), n(t, i), r(o), a(t), t.off(".superfish").off(".hoverIntent"), o.children(i.popUpSelector).attr("style", function(e, s) {
      return s.replace(/display[^;]+;?/g, "")
     }), i.$path.removeClass(i.hoverClass + " " + s.bcClass).addClass(i.pathClass), t.find("." + i.hoverClass).removeClass(i.hoverClass), i.onDestroy.call(t), void t.removeData("sf-options")) : !1
    })
   },
   init: function(o) {
    return this.each(function() {
     var t = e(this);
     if (t.data("sf-options")) return !1;
     var l = e.extend({}, e.fn.superfish.defaults, o),
      u = t.find(l.popUpSelector).parent("li");
     l.$path = i(t, l), t.data("sf-options", l), n(t, l), r(u), a(t), h(t, l), u.not("." + s.bcClass).superfish("hide", !0), l.onInit.call(this)
    })
   }
  }
 }();
 e.fn.superfish = function(o, t) {
  return s[o] ? s[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? e.error("Method " + o + " does not exist on jQuery.fn.superfish") : s.init.apply(this, arguments)
 }, e.fn.superfish.defaults = {
  popUpSelector: "ul,.sf-mega",
  hoverClass: "sfHover",
  pathClass: "overrideThisToUse",
  pathLevels: 1,
  delay: 0,
  animation: {
   height: "show"
  },
  animationOut: {
   opacity: "hide"
  },
  speed: "fast",
  speedOut: "fast",
  cssArrows: !0,
  disableHI: !1,
  onInit: e.noop,
  onBeforeShow: e.noop,
  onShow: e.noop,
  onBeforeHide: e.noop,
  onHide: e.noop,
  onIdle: e.noop,
  onDestroy: e.noop
 }, e.fn.extend({
  hideSuperfishUl: s.hide,
  showSuperfishUl: s.show
 })
}(jQuery), jQuery(document).ready(function(e) {
 e("ul.nav-menu, ul.woocommerce-menu").supersubs({
  maxWidth: 25,
  extraWidth: 0
 }).superfish({
  hoverClass: "nav-hover",
  pathLevels: 1,
  delay: 100,
  animation: {
   height: "show"
  },
  speed: "normal",
  speedOut: 1,
  autoArrows: !0,
  disableHI: !1
 })
});
var $jm = jQuery.noConflict();
$jm(function() {
 var e = $jm("div.sc_menu"),
  f = $jm("ul.sc_menu"),
  o = 10,
  t = e.width();
 e.css({
  overflow: "hidden"
 });
 var i = f.find("li:last-child");
 e.mousemove(function(f) {
  var n = i[0].offsetLeft + i.outerWidth() + o,
   l = (f.pageX - e.offset().left) * (n - t) / t;
  e.scrollLeft(l)
 })
});
! function(e) {
 function d(e, d, t) {
  var o = e.data("ddslick"),
   s = e.find(".dd-selected"),
   l = s.siblings(".dd-selected-value"),
   a = (e.find(".dd-options"), s.siblings(".dd-pointer"), e.find(".dd-option").eq(d)),
   c = a.closest("li"),
   r = o.settings,
   p = o.settings.data[d];
  e.find(".dd-option").removeClass("dd-option-selected"), a.addClass("dd-option-selected"), o.selectedIndex = d, o.selectedItem = c, o.selectedData = p, r.showSelectedHTML ? s.html((p.imageSrc ? '<img class="dd-selected-image' + ("right" == r.imagePosition ? " dd-image-right" : "") + '" src="' + p.imageSrc + '" />' : "") + (p.text ? '<label class="dd-selected-text">' + p.text + "</label>" : '<label class="dd-selected-text"><span class="t4p-icon-menu"></span></label>') + (p.description ? '<small class="dd-selected-description dd-desc' + (r.truncateDescription ? " dd-selected-description-truncated" : "") + '" >' + p.description + "</small>" : "")) : s.html(p.text), l.val(p.value), o.original.val(p.value), e.data("ddslick", o), i(e), n(e), "function" == typeof r.onSelected && 1 != t && r.onSelected.call(this, o)
 }

 function t(d) {
  var t = d.find(".dd-select"),
   i = t.siblings(".dd-options"),
   n = t.find(".dd-pointer"),
   s = i.is(":visible");
  e(".dd-click-off-close").not(i).slideUp(50), e(".dd-pointer").removeClass("dd-pointer-up"), s ? (i.slideUp("fast"), n.removeClass("dd-pointer-up")) : (i.slideDown("fast"), n.addClass("dd-pointer-up")), o(d)
 }

 function i(e) {
  e.find(".dd-options").slideUp(50), e.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")
 }

 function n(e) {
  var d = e.find(".dd-select").css("height"),
   t = e.find(".dd-selected-description"),
   i = e.find(".dd-selected-image");
  t.length <= 0 && i.length > 0 && e.find(".dd-selected-text").css("lineHeight", d)
 }

 function o(d) {
  d.find(".dd-option").each(function() {
   var t = e(this),
    i = t.css("height"),
    n = t.find(".dd-option-description"),
    o = d.find(".dd-option-image");
   n.length <= 0 && o.length > 0 && t.find(".dd-option-text").css("lineHeight", i)
  })
 }
 e.fn.ddslick = function(d) {
  return s[d] ? s[d].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof d && d ? void e.error("Method " + d + " does not exists.") : s.init.apply(this, arguments)
 };
 var s = {},
  l = {
   data: [],
   keepJSONItemsOnTop: !1,
   width: 260,
   height: null,
   background: "",
   selectText: "",
   defaultSelectedIndex: null,
   truncateDescription: !0,
   imagePosition: "left",
   showSelectedHTML: !0,
   clickOffToClose: !0,
   onSelected: function() {}
  },
  a = '<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a></div>',
  c = '<ul class="dd-options"></ul>',
  r = '<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}â€‹ .dd-selected-text { font-weight:bold}â€‹</style>';
 e("#css-ddslick").length <= 0 && e(r).appendTo("head"), s.init = function(i) {
  var i = e.extend({}, l, i);
  return this.each(function() {
   var n = e(this),
    o = n.data("ddslick"),
    s = n.attr("name");
   if (!o) {
    var l = [];
    i.data;
    n.find("option").each(function() {
     var d = e(this),
      t = d.data();
     l.push({
      text: e.trim(d.text()),
      value: d.val(),
      selected: d.is(":selected"),
      description: t.description,
      imageSrc: t.imagesrc
     })
    }), i.keepJSONItemsOnTop ? e.merge(i.data, l) : i.data = e.merge(l, i.data);
    var r = n,
     p = e('<div id="' + n.attr("id") + '"></div>');
    n.replaceWith(p), n = p, n.addClass("dd-container").append(a).append(c), e("input", n).attr("name", s);
    var l = n.find(".dd-select"),
     f = n.find(".dd-options");
    f.css({
     width: i.width
    }), l.css({
     width: i.width,
     background: i.background
    }), n.css({
     width: i.width
    }), null != i.height && f.css({
     height: i.height,
     overflow: "auto"
    }), e.each(i.data, function(e, d) {
     d.selected && (i.defaultSelectedIndex = e), f.append('<li><a class="dd-option">' + (d.value ? ' <input class="dd-option-value" type="hidden" value="' + d.value + '" />' : "") + (d.imageSrc ? ' <img class="dd-option-image' + ("right" == i.imagePosition ? " dd-image-right" : "") + '" src="' + d.imageSrc + '" />' : "") + (d.text ? ' <label class="dd-option-text">' + d.text + "</label>" : "") + (d.description ? ' <small class="dd-option-description dd-desc">' + d.description + "</small>" : "") + "</a></li>")
    });
    var u = {
     settings: i,
     original: r,
     selectedIndex: -1,
     selectedItem: null,
     selectedData: null
    };
    if (n.data("ddslick", u), i.selectText.length > 0 && null == i.defaultSelectedIndex) n.find(".dd-selected").html(i.selectText);
    else {
     var h = null != i.defaultSelectedIndex && i.defaultSelectedIndex >= 0 && i.defaultSelectedIndex < i.data.length ? i.defaultSelectedIndex : 0;
     d(n, h, !0)
    }
    n.find(".dd-select").on("click.ddslick", function() {
     t(n)
    }), n.find(".dd-option").on("click.ddslick", function() {
     d(n, e(this).closest("li").index())
    }), i.clickOffToClose && (f.addClass("dd-click-off-close"), n.on("click.ddslick", function(e) {
     e.stopPropagation()
    }), e("body").on("click", function() {
     e(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")
    }))
   }
  })
 }, s.select = function(t) {
  return this.each(function() {
   t.index && d(e(this), t.index)
  })
 }, s.open = function() {
  return this.each(function() {
   var d = e(this),
    i = d.data("ddslick");
   i && t(d)
  })
 }, s.close = function() {
  return this.each(function() {
   var d = e(this),
    t = d.data("ddslick");
   t && i(d)
  })
 }, s.destroy = function() {
  return this.each(function() {
   var d = e(this),
    t = d.data("ddslick");
   if (t) {
    var i = t.original;
    d.removeData("ddslick").unbind(".ddslick").replaceWith(i)
   }
  })
 }
}(jQuery);
! function(e) {
 "use strict";
 e.fn.meanmenu = function(n) {
  var a = {
   meanMenuTarget: jQuery(this),
   meanMenuContainer: ".primary-menu .nav-holder",
   meanMenuClose: "<label class='dd-selected-text'><span class='t4p-icon-menu'></span></label>",
   meanMenuCloseSize: "",
   meanMenuOpen: "<label class='dd-selected-text'><span class='t4p-icon-menu'></span></label>",
   meanRevealPosition: "right",
   meanRevealPositionDistance: "0",
   meanRevealColour: "",
   meanScreenWidth: "768",
   meanNavPush: "",
   meanShowChildren: !0,
   meanExpandableChildren: !0,
   meanExpand: "+",
   meanContract: "-",
   meanRemoveAttrs: !1,
   onePage: !1,
   meanDisplay: "block",
   removeElements: ""
  };
  n = e.extend(a, n);
  var t = window.innerWidth || document.documentElement.clientWidth;
  return this.each(function() {
   var e = n.meanMenuTarget,
    a = n.meanMenuContainer,
    r = n.meanMenuClose,
    i = n.meanMenuCloseSize,
    s = n.meanMenuOpen,
    l = n.meanRevealPosition,
    u = n.meanRevealPositionDistance,
    m = n.meanRevealColour,
    o = n.meanScreenWidth,
    c = n.meanNavPush,
    d = ".meanmenu-reveal",
    h = n.meanShowChildren,
    v = n.meanExpandableChildren,
    y = n.meanExpand,
    j = n.meanContract,
    Q = n.meanRemoveAttrs,
    f = n.onePage,
    g = n.meanDisplay,
    p = n.removeElements,
    C = !1;
   (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
   var w = "",
    x = function() {
     if ("center" === l) {
      var e = window.innerWidth || document.documentElement.clientWidth,
       n = e / 2 - 22 + "px";
      w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({
       left: n
      }) : jQuery(".meanmenu-reveal").css("left", n)
     }
    },
    A = !1,
    b = !1;
   "right" === l && (w = "right:" + u + ";left:auto;"), "left" === l && (w = "left:" + u + ";right:auto;"), x();
   var E = "",
    M = function() {
     jQuery(E).is(".meanmenu-reveal.meanclose") ? E.html(r) : E.html(s)
    },
    P = function() {
     jQuery(".mean-bar,.mean-push").remove(), jQuery(a).removeClass("mean-container"), jQuery(e).css("display", g), A = !1, b = !1, jQuery(p).removeClass("mean-remove")
    },
    W = function() {
     var n = "background:" + m + ";color:" + m + ";" + w;
     if (o >= t) {
      jQuery(p).addClass("mean-remove"), b = !0, jQuery(a).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="dd-container mean-bar"><a href="#nav" class="dd-selected meanmenu-reveal" style="' + n + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
      var r = jQuery(e).html();
      jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
       jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
      }), jQuery(e).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(e).hide(), jQuery(".meanmenu-reveal").show(), jQuery(d).html(s), E = jQuery(d), jQuery(".mean-nav ul").hide(), h ? v ? (jQuery(".mean-nav ul ul").each(function() {
       jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
      }), jQuery(".mean-expand").on("click", function(e) {
       e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked")
      })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), E.removeClass("meanclose"), jQuery(E).click(function(e) {
       e.preventDefault(), A === !1 ? (E.css("text-align", "center"), E.css("text-indent", "0"), E.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), E.toggleClass("meanclose"), M(), jQuery(p).addClass("mean-remove")
      }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
       jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(E).toggleClass("meanclose").html(s)
      })
     } else P()
    };
   C || jQuery(window).resize(function() {
    t = window.innerWidth || document.documentElement.clientWidth, t > o, P(), o >= t ? (W(), x()) : P()
   }), jQuery(window).resize(function() {
    t = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= t ? b === !1 && W() : P()) : (P(), o >= t && (W(), x()))
   }), W()
  })
 }
}(jQuery);
! function(e) {
 e.flexslider = function(t, a, n) {
  var i = e(t);
  i.vars = e.extend({}, e.flexslider.defaults, a);
  var s, r = i.vars.namespace,
   o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
   l = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
   c = "click touchend MSPointerUp",
   d = "",
   v = "vertical" === i.vars.direction,
   u = i.vars.reverse,
   p = i.vars.itemWidth > 0,
   m = "fade" === i.vars.animation,
   f = "" !== i.vars.asNavFor,
   g = {},
   h = !0,
   n = "undefined" != typeof n ? n++ : 0;
  e.data(t, "flexslider", i), g = {
   init: function() {
    i.id = n, i.animating = !1, i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0), isNaN(i.currentSlide) && (i.currentSlide = 0), i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")), i.slides = e(i.vars.selector, i), i.container = e(i.containerSelector, i), i.count = i.slides.length, i.syncExists = e(i.vars.sync).length > 0, "slide" === i.vars.animation && (i.vars.animation = "swing"), i.prop = v ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.stopped = !1, i.started = !1, i.startTimeout = null, i.transitions = !i.vars.video && !m && i.vars.useCSS && function() {
     var e = document.createElement("div"),
      t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
     for (var a in t)
      if (void 0 !== e.style[t[a]]) return i.pfx = t[a].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
     return !1
    }(), "" !== i.vars.controlsContainer && (i.controlsContainer = e(i.vars.controlsContainer).length > 0 && e(i.vars.controlsContainer)), "" !== i.vars.manualControls && (i.manualControls = e(i.vars.manualControls).length > 0 && e(i.vars.manualControls)), i.vars.randomize && (i.slides.sort(function() {
     return Math.round(Math.random()) - .5
    }), i.container.empty().append(i.slides)), i.doMath(), i.setup("init"), i.vars.controlNav && g.controlNav.setup(), i.vars.directionNav && g.directionNav.setup(), i.vars.keyboard && (1 === e(i.containerSelector).length || i.vars.multipleKeyboard) && e(document).bind("keyup" + i.vars.eventNamespace + "-" + i.id, function(e) {
     var t = e.keyCode;
     if (!i.animating && (39 === t || 37 === t)) {
      var a = 39 === t ? i.getTarget("next") : 37 === t ? i.getTarget("prev") : !1;
      i.flexAnimate(a, i.vars.pauseOnAction)
     }
    }), i.vars.mousewheel && i.bind("mousewheel" + i.vars.eventNamespace, function(e, t, a, n) {
     e.preventDefault();
     var s = 0 > t ? i.getTarget("next") : i.getTarget("prev");
     i.flexAnimate(s, i.vars.pauseOnAction)
    }), i.vars.pausePlay && g.pausePlay.setup(), i.vars.slideshow && i.vars.pauseInvisible && g.pauseInvisible.init(), i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function() {
     i.manualPlay || i.manualPause || i.pause()
    }, function() {
     i.manualPause || i.manualPlay || i.stopped || i.play()
    }), i.vars.pauseInvisible && g.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())), f && g.asNav.setup(), l && i.vars.touch && g.touch(), (!m || m && i.vars.smoothHeight) && e(window).bind("resize" + i.vars.eventNamespace + "-" + i.id + " orientationchange" + i.vars.eventNamespace + "-" + i.id + " focus" + i.vars.eventNamespace + "-" + i.id, g.resize), i.find("img").attr("draggable", "false"), setTimeout(function() {
     i.vars.start(i)
    }, 200)
   },
   asNav: {
    setup: function() {
     i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.removeClass(r + "active-slide").eq(i.currentItem).addClass(r + "active-slide"), o ? (t._slider = i, i.slides.each(function() {
      var t = this;
      t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
       e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
      }, !1), t.addEventListener("MSGestureTap", function(t) {
       t.preventDefault();
       var a = e(this),
        n = a.index();
       e(i.vars.asNavFor).data("flexslider").animating || a.hasClass("active") || (i.direction = i.currentItem < n ? "next" : "prev", i.flexAnimate(n, i.vars.pauseOnAction, !1, !0, !0))
      })
     })) : i.slides.on("click" + i.vars.eventNamespace, function(t) {
      t.preventDefault();
      var a = e(this),
       n = a.index(),
       s = a.offset().left - e(i).scrollLeft();
      0 >= s && a.hasClass(r + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : e(i.vars.asNavFor).data("flexslider").animating || a.hasClass(r + "active-slide") || (i.direction = i.currentItem < n ? "next" : "prev", i.flexAnimate(n, i.vars.pauseOnAction, !1, !0, !0))
     })
    }
   },
   controlNav: {
    setup: function() {
     i.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
    },
    setupPaging: function() {
     var t, a, n = "thumbnails" === i.vars.controlNav ? "control-thumbs" : "control-paging",
      s = 1;
     if (i.controlNavScaffold = e('<ol class="' + r + "control-nav " + r + n + '"></ol>'), i.pagingCount > 1)
      for (var o = 0; o < i.pagingCount; o++) {
       if (a = i.slides.eq(o), t = "thumbnails" === i.vars.controlNav ? '<img src="' + a.attr("data-thumb") + '"/>' : "<a>" + s + "</a>", "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
        var l = a.attr("data-thumbcaption");
        "" != l && void 0 != l && (t += '<span class="' + r + 'caption">' + l + "</span>")
       }
       i.controlNavScaffold.append("<li>" + t + "</li>"), s++
      }
     i.controlsContainer ? e(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), i.controlNavScaffold.delegate("a, img", c, function(t) {
      if (t.preventDefault(), "" === d || d === t.type) {
       var a = e(this),
        n = i.controlNav.index(a);
       a.hasClass(r + "active") || (i.direction = n > i.currentSlide ? "next" : "prev", i.flexAnimate(n, i.vars.pauseOnAction))
      }
      "" === d && (d = t.type), g.setToClearWatchedEvent()
     })
    },
    setupManual: function() {
     i.controlNav = i.manualControls, g.controlNav.active(), i.controlNav.bind(c, function(t) {
      if (t.preventDefault(), "" === d || d === t.type) {
       var a = e(this),
        n = i.controlNav.index(a);
       a.hasClass(r + "active") || (n > i.currentSlide ? i.direction = "next" : i.direction = "prev", i.flexAnimate(n, i.vars.pauseOnAction))
      }
      "" === d && (d = t.type), g.setToClearWatchedEvent()
     })
    },
    set: function() {
     var t = "thumbnails" === i.vars.controlNav ? "img" : "a";
     i.controlNav = e("." + r + "control-nav li " + t, i.controlsContainer ? i.controlsContainer : i)
    },
    active: function() {
     i.controlNav.removeClass(r + "active").eq(i.animatingTo).addClass(r + "active")
    },
    update: function(t, a) {
     i.pagingCount > 1 && "add" === t ? i.controlNavScaffold.append(e("<li><a>" + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(a).closest("li").remove(), g.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(a, t) : g.controlNav.active()
    }
   },
   directionNav: {
    setup: function() {
     var t = e('<ul class="' + r + 'direction-nav"><li><a class="' + r + 'prev" href="#">' + i.vars.prevText + '</a></li><li><a class="' + r + 'next" href="#">' + i.vars.nextText + "</a></li></ul>");
     i.controlsContainer ? (e(i.controlsContainer).append(t), i.directionNav = e("." + r + "direction-nav li a", i.controlsContainer)) : (i.append(t), i.directionNav = e("." + r + "direction-nav li a", i)), g.directionNav.update(), i.directionNav.bind(c, function(t) {
      t.preventDefault();
      var a;
      ("" === d || d === t.type) && (a = e(this).hasClass(r + "next") ? i.getTarget("next") : i.getTarget("prev"), i.flexAnimate(a, i.vars.pauseOnAction)), "" === d && (d = t.type), g.setToClearWatchedEvent()
     })
    },
    update: function() {
     var e = r + "disabled";
     1 === i.pagingCount ? i.directionNav.addClass(e).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(e).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(e).filter("." + r + "prev").addClass(e).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(e).filter("." + r + "next").addClass(e).attr("tabindex", "-1") : i.directionNav.removeClass(e).removeAttr("tabindex")
    }
   },
   pausePlay: {
    setup: function() {
     var t = e('<div class="' + r + 'pauseplay"><a></a></div>');
     i.controlsContainer ? (i.controlsContainer.append(t), i.pausePlay = e("." + r + "pauseplay a", i.controlsContainer)) : (i.append(t), i.pausePlay = e("." + r + "pauseplay a", i)), g.pausePlay.update(i.vars.slideshow ? r + "pause" : r + "play"), i.pausePlay.bind(c, function(t) {
      t.preventDefault(), ("" === d || d === t.type) && (e(this).hasClass(r + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())), "" === d && (d = t.type), g.setToClearWatchedEvent()
     })
    },
    update: function(e) {
     "play" === e ? i.pausePlay.removeClass(r + "pause").addClass(r + "play").html(i.vars.playText) : i.pausePlay.removeClass(r + "play").addClass(r + "pause").html(i.vars.pauseText)
    }
   },
   touch: function() {
    function e(e) {
     i.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (i.pause(), g = v ? i.h : i.w, S = Number(new Date), b = e.touches[0].pageX, x = e.touches[0].pageY, f = p && u && i.animatingTo === i.last ? 0 : p && u ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : u ? (i.last - i.currentSlide + i.cloneOffset) * g : (i.currentSlide + i.cloneOffset) * g, c = v ? x : b, d = v ? b : x, t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", n, !1))
    }

    function a(e) {
     b = e.touches[0].pageX, x = e.touches[0].pageY, h = v ? c - x : c - b, y = v ? Math.abs(h) < Math.abs(b - d) : Math.abs(h) < Math.abs(x - d);
     var n = 500;
     !y || Number(new Date) - S > n ? (e.preventDefault(), !m && i.transitions && (i.vars.animationLoop || (h /= 0 === i.currentSlide && 0 > h || i.currentSlide === i.last && h > 0 ? Math.abs(h) / g + 2 : 1), i.setProps(f + h, "setTouch"))) : t.removeEventListener("touchmove", a, !1)
    }

    function n(e) {
     if (t.removeEventListener("touchmove", a, !1), i.animatingTo === i.currentSlide && !y && null !== h) {
      var s = u ? -h : h,
       r = s > 0 ? i.getTarget("next") : i.getTarget("prev");
      i.canAdvance(r) && (Number(new Date) - S < 550 && Math.abs(s) > 50 || Math.abs(s) > g / 2) ? i.flexAnimate(r, i.vars.pauseOnAction) : m || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
     }
     t.removeEventListener("touchend", n, !1), c = null, d = null, h = null, f = null
    }

    function s(e) {
     e.stopPropagation(), i.animating ? e.preventDefault() : (i.pause(), t._gesture.addPointer(e.pointerId), N = 0, g = v ? i.h : i.w, S = Number(new Date), f = p && u && i.animatingTo === i.last ? 0 : p && u ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : u ? (i.last - i.currentSlide + i.cloneOffset) * g : (i.currentSlide + i.cloneOffset) * g)
    }

    function r(e) {
     e.stopPropagation();
     var a = e.target._slider;
     if (a) {
      var n = -e.translationX,
       i = -e.translationY;
      return N += v ? i : n, h = N, y = v ? Math.abs(N) < Math.abs(-n) : Math.abs(N) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
       t._gesture.stop()
      }) : void((!y || Number(new Date) - S > 500) && (e.preventDefault(), !m && a.transitions && (a.vars.animationLoop || (h = N / (0 === a.currentSlide && 0 > N || a.currentSlide === a.last && N > 0 ? Math.abs(N) / g + 2 : 1)), a.setProps(f + h, "setTouch"))))
     }
    }

    function l(e) {
     e.stopPropagation();
     var t = e.target._slider;
     if (t) {
      if (t.animatingTo === t.currentSlide && !y && null !== h) {
       var a = u ? -h : h,
        n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
       t.canAdvance(n) && (Number(new Date) - S < 550 && Math.abs(a) > 50 || Math.abs(a) > g / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : m || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
      }
      c = null, d = null, h = null, f = null, N = 0
     }
    }
    var c, d, f, g, h, S, y = !1,
     b = 0,
     x = 0,
     N = 0;
    o ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", s, !1), t._slider = i, t.addEventListener("MSGestureChange", r, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
   },
   resize: function() {
    !i.animating && i.is(":visible") && (p || i.doMath(), m ? g.smoothHeight() : p ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : v ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && g.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
   },
   smoothHeight: function(e) {
    if (!v || m) {
     var t = m ? i : i.viewport;
     e ? t.animate({
      height: i.slides.eq(i.animatingTo).height()
     }, e) : t.height(i.slides.eq(i.animatingTo).height())
    }
   },
   sync: function(t) {
    var a = e(i.vars.sync).data("flexslider"),
     n = i.animatingTo;
    switch (t) {
     case "animate":
      a.flexAnimate(n, i.vars.pauseOnAction, !1, !0);
      break;
     case "play":
      a.playing || a.asNav || a.play();
      break;
     case "pause":
      a.pause()
    }
   },
   pauseInvisible: {
    visProp: null,
    init: function() {
     var e = ["webkit", "moz", "ms", "o"];
     if ("hidden" in document) return "hidden";
     for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (g.pauseInvisible.visProp = e[t] + "Hidden");
     if (g.pauseInvisible.visProp) {
      var a = g.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
      document.addEventListener(a, function() {
       g.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
      })
     }
    },
    isHidden: function() {
     return document[g.pauseInvisible.visProp] || !1
    }
   },
   setToClearWatchedEvent: function() {
    clearTimeout(s), s = setTimeout(function() {
     d = ""
    }, 3e3)
   }
  }, i.flexAnimate = function(t, a, n, s, o) {
   if (i.vars.animationLoop || t === i.currentSlide || (i.direction = t > i.currentSlide ? "next" : "prev"), f && 1 === i.pagingCount && (i.direction = i.currentItem < t ? "next" : "prev"), !i.animating && (i.canAdvance(t, o) || n) && i.is(":visible")) {
    if (f && s) {
     var c = e(i.vars.asNavFor).data("flexslider");
     if (i.atEnd = 0 === t || t === i.count - 1, c.flexAnimate(t, !0, !1, !0, o), i.direction = i.currentItem < t ? "next" : "prev", c.direction = i.direction, Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide || 0 === t) return i.currentItem = t, i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), !1;
     i.currentItem = t, i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), t = Math.floor(t / i.visible)
    }
    if (i.animating = !0, i.animatingTo = t, a && i.pause(), i.vars.before(i), i.syncExists && !o && g.sync("animate"), i.vars.controlNav && g.controlNav.active(), p || i.slides.removeClass(r + "active-slide").eq(t).addClass(r + "active-slide"), i.atEnd = 0 === t || t === i.last, i.vars.directionNav && g.directionNav.update(), t === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()), m) l ? (i.slides.eq(i.currentSlide).css({
     opacity: 0,
     zIndex: 1
    }), i.slides.eq(t).css({
     opacity: 1,
     zIndex: 2
    }), i.wrapup(y)) : (i.slides.eq(i.currentSlide).css({
     zIndex: 1
    }).animate({
     opacity: 0
    }, i.vars.animationSpeed, i.vars.easing), i.slides.eq(t).css({
     zIndex: 2
    }).animate({
     opacity: 1
    }, i.vars.animationSpeed, i.vars.easing, i.wrapup));
    else {
     var d, h, S, y = v ? i.slides.filter(":first").height() : i.computedW;
     p ? (d = i.vars.itemMargin, S = (i.itemW + d) * i.move * i.animatingTo, h = S > i.limit && 1 !== i.visible ? i.limit : S) : h = 0 === i.currentSlide && t === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? u ? (i.count + i.cloneOffset) * y : 0 : i.currentSlide === i.last && 0 === t && i.vars.animationLoop && "prev" !== i.direction ? u ? 0 : (i.count + 1) * y : u ? (i.count - 1 - t + i.cloneOffset) * y : (t + i.cloneOffset) * y, i.setProps(h, "", i.vars.animationSpeed), i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd" + i.vars.eventNamespace + " transitionend" + i.vars.eventNamespace), +i.container.bind("webkitTransitionEnd" + i.vars.eventNamespace + " transitionend" + i.vars.eventNamespace, function() {
      i.wrapup(y)
     })) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing, function() {
      i.wrapup(y)
     })
    }
    i.vars.smoothHeight && g.smoothHeight(i.vars.animationSpeed)
   }
  }, i.wrapup = function(e) {
   m || p || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(e, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(e, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, i.vars.after(i)
  }, i.animateSlides = function() {
   !i.animating && h && i.flexAnimate(i.getTarget("next"))
  }, i.pause = function() {
   clearInterval(i.animatedSlides), i.animatedSlides = null, i.playing = !1, i.vars.pausePlay && g.pausePlay.update("play"), i.syncExists && g.sync("pause")
  }, i.play = function() {
   i.playing && clearInterval(i.animatedSlides), i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed), i.started = i.playing = !0, i.vars.pausePlay && g.pausePlay.update("pause"), i.syncExists && g.sync("play")
  }, i.stop = function() {
   i.pause(), i.stopped = !0
  }, i.canAdvance = function(e, t) {
   var a = f ? i.pagingCount - 1 : i.last;
   return t ? !0 : f && i.currentItem === i.count - 1 && 0 === e && "prev" === i.direction ? !0 : f && 0 === i.currentItem && e === i.pagingCount - 1 && "next" !== i.direction ? !1 : e !== i.currentSlide || f ? i.vars.animationLoop ? !0 : i.atEnd && 0 === i.currentSlide && e === a && "next" !== i.direction ? !1 : i.atEnd && i.currentSlide === a && 0 === e && "next" === i.direction ? !1 : !0 : !1
  }, i.getTarget = function(e) {
   return i.direction = e, "next" === e ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
  }, i.setProps = function(e, t, a) {
   var n = function() {
    var a = e ? e : (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo,
     n = function() {
      if (p) return "setTouch" === t ? e : u && i.animatingTo === i.last ? 0 : u ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : a;
      switch (t) {
       case "setTotal":
        return u ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e : (i.currentSlide + i.cloneOffset) * e;
       case "setTouch":
        return u ? e : e;
       case "jumpEnd":
        return u ? e : i.count * e;
       case "jumpStart":
        return u ? i.count * e : e;
       default:
        return e
      }
     }();
    return -1 * n + "px"
   }();
   i.transitions && (n = v ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", a)), i.args[i.prop] = n, (i.transitions || void 0 === a) && i.container.css(i.args)
  }, i.setup = function(t) {
   if (m) i.slides.css({
    width: "100%",
    "float": "left",
    marginRight: "-100%",
    position: "relative"
   }), "init" === t && (l ? i.slides.css({
    opacity: 0,
    display: "block",
    webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
    zIndex: 1
   }).eq(i.currentSlide).css({
    opacity: 1,
    zIndex: 2
   }) : i.slides.css({
    opacity: 0,
    display: "block",
    zIndex: 1
   }).eq(i.currentSlide).css({
    zIndex: 2
   }).animate({
    opacity: 1
   }, i.vars.animationSpeed, i.vars.easing)), i.vars.smoothHeight && g.smoothHeight();
   else {
    var a, n;
    "init" === t && (i.viewport = e('<div class="' + r + 'viewport"></div>').css({
     overflow: "hidden",
     position: "relative"
    }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, u && (n = e.makeArray(i.slides).reverse(), i.slides = e(n), i.container.empty().append(i.slides))), i.vars.animationLoop && !p && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== t && i.container.find(".clone").remove(), i.container.append(i.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(i.slides.last().clone().addClass("clone").attr("aria-hidden", "true"))), i.newSlides = e(i.vars.selector, i), a = u ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, v && !p ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
     i.newSlides.css({
      display: "block"
     }), i.doMath(), i.viewport.height(i.h), i.setProps(a * i.h, "init")
    }, "init" === t ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(a * i.computedW, "init"), setTimeout(function() {
     i.doMath(), i.newSlides.css({
      width: i.computedW,
      "float": "left",
      display: "block"
     }), i.vars.smoothHeight && g.smoothHeight()
    }, "init" === t ? 100 : 0))
   }
   p || i.slides.removeClass(r + "active-slide").eq(i.currentSlide).addClass(r + "active-slide")
  }, i.doMath = function() {
   var e = i.slides.first(),
    t = i.vars.itemMargin,
    a = i.vars.minItems,
    n = i.vars.maxItems;
   i.w = void 0 === i.viewport ? i.width() : i.viewport.width(), i.h = e.height(), i.boxPadding = e.outerWidth() - e.width(), p ? (i.itemT = i.vars.itemWidth + t, i.minW = a ? a * i.itemT : i.w, i.maxW = n ? n * i.itemT - t : i.w, i.itemW = i.minW > i.w ? (i.w - t * (a - 1)) / a : i.maxW < i.w ? (i.w - t * (n - 1)) / n : i.vars.itemWidth > i.w ? i.w : i.vars.itemWidth, i.visible = Math.floor(i.w / i.itemW), i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + t * (i.count - 1) : (i.itemW + t) * i.count - i.w - t) : (i.itemW = i.w, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding
  }, i.update = function(e, t) {
   i.doMath(), p || (e < i.currentSlide ? i.currentSlide += 1 : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), i.vars.controlNav && !i.manualControls && ("add" === t && !p || i.pagingCount > i.controlNav.length ? g.controlNav.update("add") : ("remove" === t && !p || i.pagingCount < i.controlNav.length) && (p && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), g.controlNav.update("remove", i.last))), i.vars.directionNav && g.directionNav.update()
  }, i.addSlide = function(t, a) {
   var n = e(t);
   i.count += 1, i.last = i.count - 1, v && u ? void 0 !== a ? i.slides.eq(i.count - a).after(n) : i.container.prepend(n) : void 0 !== a ? i.slides.eq(a).before(n) : i.container.append(n), i.update(a, "add"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.added(i)
  }, i.removeSlide = function(t) {
   var a = isNaN(t) ? i.slides.index(e(t)) : t;
   i.count -= 1, i.last = i.count - 1, isNaN(t) ? e(t, i.slides).remove() : v && u ? i.slides.eq(i.last).remove() : i.slides.eq(t).remove(), i.doMath(), i.update(a, "remove"), i.slides = e(i.vars.selector + ":not(.clone)", i), i.setup(), i.vars.removed(i)
  }, i.destroy = function() {
   var t = "." + i.vars.namespace;
   i.vars.controlNav && i.controlNav.closest(t + "control-nav").remove(), i.vars.directionNav && i.directionNav.closest(t + "direction-nav").remove(), i.vars.pausePlay && i.pausePlay.closest(t + "pauseplay").remove(), i.find(".clone").remove(), i.unbind(i.vars.eventNamespace), "fade" != i.vars.animation && i.container.unwrap(), i.container.removeAttr("style"), i.container.unbind(i.vars.eventNamespace), i.slides.removeAttr("style"), i.slides.filter(t + "active-slide").removeClass(i.vars.namespace + "active-slide"), i.slides.unbind(i.vars.eventNamespace), e(document).unbind(i.vars.eventNamespace + "-" + i.id), e(window).unbind(i.vars.eventNamespace + "-" + i.id), i.stop(), i.removeData("flexslider")
  }, g.init()
 }, e(window).blur(function(e) {
  focused = !1
 }).focus(function(e) {
  focused = !0
 }), e.flexslider.defaults = {
  namespace: "flex-",
  eventNamespace: ".flexslider",
  selector: ".slides > li",
  animation: "fade",
  easing: "swing",
  direction: "horizontal",
  reverse: !1,
  animationLoop: !0,
  smoothHeight: !1,
  startAt: 0,
  slideshow: !0,
  slideshowSpeed: 7e3,
  animationSpeed: 600,
  initDelay: 0,
  randomize: !1,
  thumbCaptions: !1,
  pauseOnAction: !0,
  pauseOnHover: !1,
  pauseInvisible: !0,
  useCSS: !0,
  touch: !0,
  video: !1,
  controlNav: !0,
  directionNav: !0,
  prevText: "",
  nextText: "",
  keyboard: !0,
  multipleKeyboard: !1,
  mousewheel: !1,
  pausePlay: !1,
  pauseText: "Pause",
  playText: "Play",
  controlsContainer: "",
  manualControls: "",
  sync: "",
  asNavFor: "",
  itemWidth: 0,
  itemMargin: 0,
  minItems: 1,
  maxItems: 0,
  move: 0,
  allowOneSlide: !0,
  start: function() {},
  before: function() {},
  after: function() {},
  end: function() {},
  added: function() {},
  removed: function() {}
 };
 var t = 0;
 e.fn.flexslider = function(a) {
  if (void 0 === a && (a = {}), "object" == typeof a) return this.each(function() {
   var n = e(this),
    i = a.selector ? a.selector : ".slides > li",
    s = n.find(i);
   1 === s.length && a.allowOneSlide === !0 || 0 === s.length ? (s.fadeIn(400), a.start && a.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, a, t++)
  });
  var n = e(this).data("flexslider");
  switch (a) {
   case "play":
    n.play();
    break;
   case "pause":
    n.pause();
    break;
   case "stop":
    n.stop();
    break;
   case "next":
    n.flexAnimate(n.getTarget("next"), !0);
    break;
   case "prev":
   case "previous":
    n.flexAnimate(n.getTarget("prev"), !0);
    break;
   case "destroy":
    n.destroy();
    break;
   default:
    "number" == typeof a && n.flexAnimate(a, !0)
  }
 }
}(jQuery);
/*!
 * Font Awesome Free 5.9.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var l, a;
l = this, a = function() {
 "use strict";
 var l = {},
  a = {};
 try {
  "undefined" != typeof window && (l = window), "undefined" != typeof document && (a = document)
 } catch (l) {}
 var e = (l.navigator || {}).userAgent,
  r = void 0 === e ? "" : e,
  n = l,
  o = a,
  u = (n.document, !!o.documentElement && !!o.head && "function" == typeof o.addEventListener && o.createElement, ~r.indexOf("MSIE") || r.indexOf("Trident/"), "___FONT_AWESOME___"),
  f = function() {
   try {
    return "production" === process.env.NODE_ENV
   } catch (l) {
    return !1
   }
  }();
 var t = n || {};
 t[u] || (t[u] = {}), t[u].styles || (t[u].styles = {}), t[u].hooks || (t[u].hooks = {}), t[u].shims || (t[u].shims = []);
 var i = t[u],
  s = [
   ["glass", null, "glass-martini"],
   ["meetup", "fab", null],
   ["star-o", "far", "star"],
   ["remove", null, "times"],
   ["close", null, "times"],
   ["gear", null, "cog"],
   ["trash-o", "far", "trash-alt"],
   ["file-o", "far", "file"],
   ["clock-o", "far", "clock"],
   ["arrow-circle-o-down", "far", "arrow-alt-circle-down"],
   ["arrow-circle-o-up", "far", "arrow-alt-circle-up"],
   ["play-circle-o", "far", "play-circle"],
   ["repeat", null, "redo"],
   ["rotate-right", null, "redo"],
   ["refresh", null, "sync"],
   ["list-alt", "far", null],
   ["dedent", null, "outdent"],
   ["video-camera", null, "video"],
   ["picture-o", "far", "image"],
   ["photo", "far", "image"],
   ["image", "far", "image"],
   ["pencil", null, "pencil-alt"],
   ["map-marker", null, "map-marker-alt"],
   ["pencil-square-o", "far", "edit"],
   ["share-square-o", "far", "share-square"],
   ["check-square-o", "far", "check-square"],
   ["arrows", null, "arrows-alt"],
   ["times-circle-o", "far", "times-circle"],
   ["check-circle-o", "far", "check-circle"],
   ["mail-forward", null, "share"],
   ["eye", "far", null],
   ["eye-slash", "far", null],
   ["warning", null, "exclamation-triangle"],
   ["calendar", null, "calendar-alt"],
   ["arrows-v", null, "arrows-alt-v"],
   ["arrows-h", null, "arrows-alt-h"],
   ["bar-chart", "far", "chart-bar"],
   ["bar-chart-o", "far", "chart-bar"],
   ["twitter-square", "fab", null],
   ["facebook-square", "fab", null],
   ["gears", null, "cogs"],
   ["thumbs-o-up", "far", "thumbs-up"],
   ["thumbs-o-down", "far", "thumbs-down"],
   ["heart-o", "far", "heart"],
   ["sign-out", null, "sign-out-alt"],
   ["linkedin-square", "fab", "linkedin"],
   ["thumb-tack", null, "thumbtack"],
   ["external-link", null, "external-link-alt"],
   ["sign-in", null, "sign-in-alt"],
   ["github-square", "fab", null],
   ["lemon-o", "far", "lemon"],
   ["square-o", "far", "square"],
   ["bookmark-o", "far", "bookmark"],
   ["twitter", "fab", null],
   ["facebook", "fab", "facebook-f"],
   ["facebook-f", "fab", "facebook-f"],
   ["github", "fab", null],
   ["credit-card", "far", null],
   ["feed", null, "rss"],
   ["hdd-o", "far", "hdd"],
   ["hand-o-right", "far", "hand-point-right"],
   ["hand-o-left", "far", "hand-point-left"],
   ["hand-o-up", "far", "hand-point-up"],
   ["hand-o-down", "far", "hand-point-down"],
   ["arrows-alt", null, "expand-arrows-alt"],
   ["group", null, "users"],
   ["chain", null, "link"],
   ["scissors", null, "cut"],
   ["files-o", "far", "copy"],
   ["floppy-o", "far", "save"],
   ["navicon", null, "bars"],
   ["reorder", null, "bars"],
   ["pinterest", "fab", null],
   ["pinterest-square", "fab", null],
   ["google-plus-square", "fab", null],
   ["google-plus", "fab", "google-plus-g"],
   ["money", "far", "money-bill-alt"],
   ["unsorted", null, "sort"],
   ["sort-desc", null, "sort-down"],
   ["sort-asc", null, "sort-up"],
   ["linkedin", "fab", "linkedin-in"],
   ["rotate-left", null, "undo"],
   ["legal", null, "gavel"],
   ["tachometer", null, "tachometer-alt"],
   ["dashboard", null, "tachometer-alt"],
   ["comment-o", "far", "comment"],
   ["comments-o", "far", "comments"],
   ["flash", null, "bolt"],
   ["clipboard", "far", null],
   ["paste", "far", "clipboard"],
   ["lightbulb-o", "far", "lightbulb"],
   ["exchange", null, "exchange-alt"],
   ["cloud-download", null, "cloud-download-alt"],
   ["cloud-upload", null, "cloud-upload-alt"],
   ["bell-o", "far", "bell"],
   ["cutlery", null, "utensils"],
   ["file-text-o", "far", "file-alt"],
   ["building-o", "far", "building"],
   ["hospital-o", "far", "hospital"],
   ["tablet", null, "tablet-alt"],
   ["mobile", null, "mobile-alt"],
   ["mobile-phone", null, "mobile-alt"],
   ["circle-o", "far", "circle"],
   ["mail-reply", null, "reply"],
   ["github-alt", "fab", null],
   ["folder-o", "far", "folder"],
   ["folder-open-o", "far", "folder-open"],
   ["smile-o", "far", "smile"],
   ["frown-o", "far", "frown"],
   ["meh-o", "far", "meh"],
   ["keyboard-o", "far", "keyboard"],
   ["flag-o", "far", "flag"],
   ["mail-reply-all", null, "reply-all"],
   ["star-half-o", "far", "star-half"],
   ["star-half-empty", "far", "star-half"],
   ["star-half-full", "far", "star-half"],
   ["code-fork", null, "code-branch"],
   ["chain-broken", null, "unlink"],
   ["shield", null, "shield-alt"],
   ["calendar-o", "far", "calendar"],
   ["maxcdn", "fab", null],
   ["html5", "fab", null],
   ["css3", "fab", null],
   ["ticket", null, "ticket-alt"],
   ["minus-square-o", "far", "minus-square"],
   ["level-up", null, "level-up-alt"],
   ["level-down", null, "level-down-alt"],
   ["pencil-square", null, "pen-square"],
   ["external-link-square", null, "external-link-square-alt"],
   ["compass", "far", null],
   ["caret-square-o-down", "far", "caret-square-down"],
   ["toggle-down", "far", "caret-square-down"],
   ["caret-square-o-up", "far", "caret-square-up"],
   ["toggle-up", "far", "caret-square-up"],
   ["caret-square-o-right", "far", "caret-square-right"],
   ["toggle-right", "far", "caret-square-right"],
   ["eur", null, "euro-sign"],
   ["euro", null, "euro-sign"],
   ["gbp", null, "pound-sign"],
   ["usd", null, "dollar-sign"],
   ["dollar", null, "dollar-sign"],
   ["inr", null, "rupee-sign"],
   ["rupee", null, "rupee-sign"],
   ["jpy", null, "yen-sign"],
   ["cny", null, "yen-sign"],
   ["rmb", null, "yen-sign"],
   ["yen", null, "yen-sign"],
   ["rub", null, "ruble-sign"],
   ["ruble", null, "ruble-sign"],
   ["rouble", null, "ruble-sign"],
   ["krw", null, "won-sign"],
   ["won", null, "won-sign"],
   ["btc", "fab", null],
   ["bitcoin", "fab", "btc"],
   ["file-text", null, "file-alt"],
   ["sort-alpha-asc", null, "sort-alpha-down"],
   ["sort-alpha-desc", null, "sort-alpha-up"],
   ["sort-amount-asc", null, "sort-amount-down"],
   ["sort-amount-desc", null, "sort-amount-up"],
   ["sort-numeric-asc", null, "sort-numeric-down"],
   ["sort-numeric-desc", null, "sort-numeric-up"],
   ["youtube-square", "fab", null],
   ["youtube", "fab", null],
   ["xing", "fab", null],
   ["xing-square", "fab", null],
   ["youtube-play", "fab", "youtube"],
   ["dropbox", "fab", null],
   ["stack-overflow", "fab", null],
   ["instagram", "fab", null],
   ["flickr", "fab", null],
   ["adn", "fab", null],
   ["bitbucket", "fab", null],
   ["bitbucket-square", "fab", "bitbucket"],
   ["tumblr", "fab", null],
   ["tumblr-square", "fab", null],
   ["long-arrow-down", null, "long-arrow-alt-down"],
   ["long-arrow-up", null, "long-arrow-alt-up"],
   ["long-arrow-left", null, "long-arrow-alt-left"],
   ["long-arrow-right", null, "long-arrow-alt-right"],
   ["apple", "fab", null],
   ["windows", "fab", null],
   ["android", "fab", null],
   ["linux", "fab", null],
   ["dribbble", "fab", null],
   ["skype", "fab", null],
   ["foursquare", "fab", null],
   ["trello", "fab", null],
   ["gratipay", "fab", null],
   ["gittip", "fab", "gratipay"],
   ["sun-o", "far", "sun"],
   ["moon-o", "far", "moon"],
   ["vk", "fab", null],
   ["weibo", "fab", null],
   ["renren", "fab", null],
   ["pagelines", "fab", null],
   ["stack-exchange", "fab", null],
   ["arrow-circle-o-right", "far", "arrow-alt-circle-right"],
   ["arrow-circle-o-left", "far", "arrow-alt-circle-left"],
   ["caret-square-o-left", "far", "caret-square-left"],
   ["toggle-left", "far", "caret-square-left"],
   ["dot-circle-o", "far", "dot-circle"],
   ["vimeo-square", "fab", null],
   ["try", null, "lira-sign"],
   ["turkish-lira", null, "lira-sign"],
   ["plus-square-o", "far", "plus-square"],
   ["slack", "fab", null],
   ["wordpress", "fab", null],
   ["openid", "fab", null],
   ["institution", null, "university"],
   ["bank", null, "university"],
   ["mortar-board", null, "graduation-cap"],
   ["yahoo", "fab", null],
   ["google", "fab", null],
   ["reddit", "fab", null],
   ["reddit-square", "fab", null],
   ["stumbleupon-circle", "fab", null],
   ["stumbleupon", "fab", null],
   ["delicious", "fab", null],
   ["digg", "fab", null],
   ["pied-piper-pp", "fab", null],
   ["pied-piper-alt", "fab", null],
   ["drupal", "fab", null],
   ["joomla", "fab", null],
   ["spoon", null, "utensil-spoon"],
   ["behance", "fab", null],
   ["behance-square", "fab", null],
   ["steam", "fab", null],
   ["steam-square", "fab", null],
   ["automobile", null, "car"],
   ["cab", null, "taxi"],
   ["envelope-o", "far", "envelope"],
   ["deviantart", "fab", null],
   ["soundcloud", "fab", null],
   ["file-pdf-o", "far", "file-pdf"],
   ["file-word-o", "far", "file-word"],
   ["file-excel-o", "far", "file-excel"],
   ["file-powerpoint-o", "far", "file-powerpoint"],
   ["file-image-o", "far", "file-image"],
   ["file-photo-o", "far", "file-image"],
   ["file-picture-o", "far", "file-image"],
   ["file-archive-o", "far", "file-archive"],
   ["file-zip-o", "far", "file-archive"],
   ["file-audio-o", "far", "file-audio"],
   ["file-sound-o", "far", "file-audio"],
   ["file-video-o", "far", "file-video"],
   ["file-movie-o", "far", "file-video"],
   ["file-code-o", "far", "file-code"],
   ["vine", "fab", null],
   ["codepen", "fab", null],
   ["jsfiddle", "fab", null],
   ["life-ring", "far", null],
   ["life-bouy", "far", "life-ring"],
   ["life-buoy", "far", "life-ring"],
   ["life-saver", "far", "life-ring"],
   ["support", "far", "life-ring"],
   ["circle-o-notch", null, "circle-notch"],
   ["rebel", "fab", null],
   ["ra", "fab", "rebel"],
   ["resistance", "fab", "rebel"],
   ["empire", "fab", null],
   ["ge", "fab", "empire"],
   ["git-square", "fab", null],
   ["git", "fab", null],
   ["hacker-news", "fab", null],
   ["y-combinator-square", "fab", "hacker-news"],
   ["yc-square", "fab", "hacker-news"],
   ["tencent-weibo", "fab", null],
   ["qq", "fab", null],
   ["weixin", "fab", null],
   ["wechat", "fab", "weixin"],
   ["send", null, "paper-plane"],
   ["paper-plane-o", "far", "paper-plane"],
   ["send-o", "far", "paper-plane"],
   ["circle-thin", "far", "circle"],
   ["header", null, "heading"],
   ["sliders", null, "sliders-h"],
   ["futbol-o", "far", "futbol"],
   ["soccer-ball-o", "far", "futbol"],
   ["slideshare", "fab", null],
   ["twitch", "fab", null],
   ["yelp", "fab", null],
   ["newspaper-o", "far", "newspaper"],
   ["paypal", "fab", null],
   ["google-wallet", "fab", null],
   ["cc-visa", "fab", null],
   ["cc-mastercard", "fab", null],
   ["cc-discover", "fab", null],
   ["cc-amex", "fab", null],
   ["cc-paypal", "fab", null],
   ["cc-stripe", "fab", null],
   ["bell-slash-o", "far", "bell-slash"],
   ["trash", null, "trash-alt"],
   ["copyright", "far", null],
   ["eyedropper", null, "eye-dropper"],
   ["area-chart", null, "chart-area"],
   ["pie-chart", null, "chart-pie"],
   ["line-chart", null, "chart-line"],
   ["lastfm", "fab", null],
   ["lastfm-square", "fab", null],
   ["ioxhost", "fab", null],
   ["angellist", "fab", null],
   ["cc", "far", "closed-captioning"],
   ["ils", null, "shekel-sign"],
   ["shekel", null, "shekel-sign"],
   ["sheqel", null, "shekel-sign"],
   ["meanpath", "fab", "font-awesome"],
   ["buysellads", "fab", null],
   ["connectdevelop", "fab", null],
   ["dashcube", "fab", null],
   ["forumbee", "fab", null],
   ["leanpub", "fab", null],
   ["sellsy", "fab", null],
   ["shirtsinbulk", "fab", null],
   ["simplybuilt", "fab", null],
   ["skyatlas", "fab", null],
   ["diamond", "far", "gem"],
   ["intersex", null, "transgender"],
   ["facebook-official", "fab", "facebook"],
   ["pinterest-p", "fab", null],
   ["whatsapp", "fab", null],
   ["hotel", null, "bed"],
   ["viacoin", "fab", null],
   ["medium", "fab", null],
   ["y-combinator", "fab", null],
   ["yc", "fab", "y-combinator"],
   ["optin-monster", "fab", null],
   ["opencart", "fab", null],
   ["expeditedssl", "fab", null],
   ["battery-4", null, "battery-full"],
   ["battery", null, "battery-full"],
   ["battery-3", null, "battery-three-quarters"],
   ["battery-2", null, "battery-half"],
   ["battery-1", null, "battery-quarter"],
   ["battery-0", null, "battery-empty"],
   ["object-group", "far", null],
   ["object-ungroup", "far", null],
   ["sticky-note-o", "far", "sticky-note"],
   ["cc-jcb", "fab", null],
   ["cc-diners-club", "fab", null],
   ["clone", "far", null],
   ["hourglass-o", "far", "hourglass"],
   ["hourglass-1", null, "hourglass-start"],
   ["hourglass-2", null, "hourglass-half"],
   ["hourglass-3", null, "hourglass-end"],
   ["hand-rock-o", "far", "hand-rock"],
   ["hand-grab-o", "far", "hand-rock"],
   ["hand-paper-o", "far", "hand-paper"],
   ["hand-stop-o", "far", "hand-paper"],
   ["hand-scissors-o", "far", "hand-scissors"],
   ["hand-lizard-o", "far", "hand-lizard"],
   ["hand-spock-o", "far", "hand-spock"],
   ["hand-pointer-o", "far", "hand-pointer"],
   ["hand-peace-o", "far", "hand-peace"],
   ["registered", "far", null],
   ["creative-commons", "fab", null],
   ["gg", "fab", null],
   ["gg-circle", "fab", null],
   ["tripadvisor", "fab", null],
   ["odnoklassniki", "fab", null],
   ["odnoklassniki-square", "fab", null],
   ["get-pocket", "fab", null],
   ["wikipedia-w", "fab", null],
   ["safari", "fab", null],
   ["chrome", "fab", null],
   ["firefox", "fab", null],
   ["opera", "fab", null],
   ["internet-explorer", "fab", null],
   ["television", null, "tv"],
   ["contao", "fab", null],
   ["500px", "fab", null],
   ["amazon", "fab", null],
   ["calendar-plus-o", "far", "calendar-plus"],
   ["calendar-minus-o", "far", "calendar-minus"],
   ["calendar-times-o", "far", "calendar-times"],
   ["calendar-check-o", "far", "calendar-check"],
   ["map-o", "far", "map"],
   ["commenting", null, "comment-dots"],
   ["commenting-o", "far", "comment-dots"],
   ["houzz", "fab", null],
   ["vimeo", "fab", "vimeo-v"],
   ["black-tie", "fab", null],
   ["fonticons", "fab", null],
   ["reddit-alien", "fab", null],
   ["edge", "fab", null],
   ["credit-card-alt", null, "credit-card"],
   ["codiepie", "fab", null],
   ["modx", "fab", null],
   ["fort-awesome", "fab", null],
   ["usb", "fab", null],
   ["product-hunt", "fab", null],
   ["mixcloud", "fab", null],
   ["scribd", "fab", null],
   ["pause-circle-o", "far", "pause-circle"],
   ["stop-circle-o", "far", "stop-circle"],
   ["bluetooth", "fab", null],
   ["bluetooth-b", "fab", null],
   ["gitlab", "fab", null],
   ["wpbeginner", "fab", null],
   ["wpforms", "fab", null],
   ["envira", "fab", null],
   ["wheelchair-alt", "fab", "accessible-icon"],
   ["question-circle-o", "far", "question-circle"],
   ["volume-control-phone", null, "phone-volume"],
   ["asl-interpreting", null, "american-sign-language-interpreting"],
   ["deafness", null, "deaf"],
   ["hard-of-hearing", null, "deaf"],
   ["glide", "fab", null],
   ["glide-g", "fab", null],
   ["signing", null, "sign-language"],
   ["viadeo", "fab", null],
   ["viadeo-square", "fab", null],
   ["snapchat", "fab", null],
   ["snapchat-ghost", "fab", null],
   ["snapchat-square", "fab", null],
   ["pied-piper", "fab", null],
   ["first-order", "fab", null],
   ["yoast", "fab", null],
   ["themeisle", "fab", null],
   ["google-plus-official", "fab", "google-plus"],
   ["google-plus-circle", "fab", "google-plus"],
   ["font-awesome", "fab", null],
   ["fa", "fab", "font-awesome"],
   ["handshake-o", "far", "handshake"],
   ["envelope-open-o", "far", "envelope-open"],
   ["linode", "fab", null],
   ["address-book-o", "far", "address-book"],
   ["vcard", null, "address-card"],
   ["address-card-o", "far", "address-card"],
   ["vcard-o", "far", "address-card"],
   ["user-circle-o", "far", "user-circle"],
   ["user-o", "far", "user"],
   ["id-badge", "far", null],
   ["drivers-license", null, "id-card"],
   ["id-card-o", "far", "id-card"],
   ["drivers-license-o", "far", "id-card"],
   ["quora", "fab", null],
   ["free-code-camp", "fab", null],
   ["telegram", "fab", null],
   ["thermometer-4", null, "thermometer-full"],
   ["thermometer", null, "thermometer-full"],
   ["thermometer-3", null, "thermometer-three-quarters"],
   ["thermometer-2", null, "thermometer-half"],
   ["thermometer-1", null, "thermometer-quarter"],
   ["thermometer-0", null, "thermometer-empty"],
   ["bathtub", null, "bath"],
   ["s15", null, "bath"],
   ["window-maximize", "far", null],
   ["window-restore", "far", null],
   ["times-rectangle", null, "window-close"],
   ["window-close-o", "far", "window-close"],
   ["times-rectangle-o", "far", "window-close"],
   ["bandcamp", "fab", null],
   ["grav", "fab", null],
   ["etsy", "fab", null],
   ["imdb", "fab", null],
   ["ravelry", "fab", null],
   ["eercast", "fab", "sellcast"],
   ["snowflake-o", "far", "snowflake"],
   ["superpowers", "fab", null],
   ["wpexplorer", "fab", null],
   ["spotify", "fab", null]
  ];
 return function(l) {
  try {
   l()
  } catch (l) {
   if (!f) throw l
  }
 }(function() {
  var l;
  "function" == typeof i.hooks.addShims ? i.hooks.addShims(s) : (l = i.shims).push.apply(l, s)
 }), s
}, "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : l["fontawesome-free-shims"] = a();
jQuery(".tabs-wrapper").each(function() {
 jQuery(this).find(".tab_content").hide(), document.location.hash && jQuery(this).find("ul.tabs li a[href='" + document.location.hash + "']").length >= 1 ? (jQuery(this).find("ul.tabs li a[href='" + document.location.hash + "']").parent().addClass("active").show(), jQuery(this).find(document.location.hash + ".tab_content").show()) : (jQuery(this).find("ul.tabs li:first").addClass("active").show(), jQuery(this).find(".tab_content:first").show())
}), jQuery("ul.tabs li").click(function(t) {
 jQuery(this).parents(".tabs-wrapper").find("ul.tabs li").removeClass("active"), jQuery(this).addClass("active"), jQuery(this).parents(".tabs-wrapper").find(".tab_content").hide();
 var i = jQuery(this).find("a").attr("href");
 jQuery(this).parents(".tabs-wrapper").find(i).fadeIn()
}), jQuery("ul.tabs li a").click(function(t) {
 t.preventDefault()
}), jQuery("#sidebar .tabset").each(function() {
 var t = jQuery(this).width(),
  i = jQuery(this).find("li").size(),
  s = t / i - 1,
  e = jQuery(this).find("li:not(:last)"),
  a = jQuery(this).find("li:not(:last)").size();
 jQuery(this).css({
  width: t + "px"
 }), jQuery(this).find("li").css({
  width: s + "px"
 });
 (e.width() + 1) * a
}), jQuery(".footer-area .tabset").each(function() {
 var t = jQuery(this).width(),
  i = jQuery(this).find("li").size(),
  s = t / i - 1,
  e = jQuery(this).find("li:not(:last)"),
  a = jQuery(this).find("li:not(:last)").size();
 jQuery(this).css({
  width: t + "px"
 }), jQuery(this).find("li").css({
  width: s + "px"
 });
 (e.width() + 1) * a
});
"dropdown" == js_responsive_menu.responsive_menu_layout ? jQuery(document).ready(function() {
 jQuery(".primary-menu .nav-holder .evolve_mobile_menu").length ? "" == js_responsive_menu.responsive_menu ? jQuery(".primary-menu .nav-holder .evolve_mobile_menu").meanmenu() : jQuery(".primary-menu .nav-holder .evolve_mobile_menu").meanmenu({
  meanMenuClose: "<label class='dd-selected-text'>" + js_responsive_menu.responsive_menu + "</label>",
  meanMenuOpen: "<label class='dd-selected-text'>" + js_responsive_menu.responsive_menu + "</label>"
 }) : jQuery(".primary-menu .nav-holder div.nav-menu").meanmenu()
}) : (jQuery("<select />").appendTo(".primary-menu .nav-holder"), jQuery("<option />", {
 selected: "selected",
 value: "",
 text: js_responsive_menu.responsive_menu
}).appendTo(".primary-menu .nav-holder select"), jQuery(".primary-menu .nav-holder a").each(function() {
 var e = jQuery(this);
 jQuery(e).parents(".sub-menu .sub-menu").length >= 1 ? jQuery("<option />", {
  value: e.attr("href"),
  text: "-- " + e.text()
 }).appendTo(".primary-menu .nav-holder select") : jQuery(e).parents(".sub-menu").length >= 1 ? jQuery("<option />", {
  value: e.attr("href"),
  text: "- " + e.text()
 }).appendTo(".primary-menu .nav-holder select") : jQuery("<option />", {
  value: e.attr("href"),
  text: e.text()
 }).appendTo(".primary-menu .nav-holder select")
}), jQuery(".primary-menu .nav-holder select").ddslick({
 width: "100%",
 onSelected: function(e) {
  "" != e.selectedData.value && (window.location = e.selectedData.value)
 }
})), jQuery("<select />").appendTo(".woocommerce-menu-holder .woocommerce-menu"), jQuery("<option />", {
 selected: "selected",
 value: "",
 text: '<span class="t4p-icon-shopping-cart"></span>'
}).appendTo(".woocommerce-menu-holder .woocommerce-menu select"), jQuery(".woocommerce-menu-holder .woocommerce-menu a").each(function() {
 var e = jQuery(this);
 jQuery(e).parents(".sub-menu .sub-menu").length >= 1 ? jQuery("<option />", {
  value: e.attr("href"),
  text: "-- " + e.text()
 }).appendTo(".woocommerce-menu-holder .woocommerce-menu select") : jQuery(e).parents(".sub-menu").length >= 1 ? jQuery("<option />", {
  value: e.attr("href"),
  text: "- " + e.text()
 }).appendTo(".woocommerce-menu-holder .woocommerce-menu select") : jQuery("<option />", {
  value: e.attr("href"),
  text: e.text()
 }).appendTo(".woocommerce-menu-holder .woocommerce-menu select")
}), jQuery(".woocommerce-menu-holder .woocommerce-menu select").ddslick({
 width: "100%",
 onSelected: function(e) {
  "" != e.selectedData.value && (window.location = e.selectedData.value)
 }
});
var $addmenueffect = jQuery.noConflict();
$addmenueffect("#primary img").addClass("img-responsive");
var $jx = jQuery.noConflict();
$jx(document).ready(function() {
 $jx("div#slide_holder").hover(function() {
  $jx(this).find(".arrow span").stop(!0, !0).fadeIn(200).show(10)
 }, function() {
  $jx(this).find(".arrow span").stop(!0, !0).fadeOut(200).hide(10)
 })
});
var $j = jQuery.noConflict();
$j(document).ready(function() {
  $j(".tipsytext").tipsy({
   gravity: "n",
   fade: !0,
   offset: 0,
   opacity: 1
  })
 }),
 function(e) {
  e.fn.addBack = e.fn.addBack || e.fn.andSelf, e.fn.extend({
   actual: function(t, o) {
    if (!this[t]) throw '$.actual => The jQuery method "' + t + '" you called does not exist';
    var r, a, n = {
      absolute: !1,
      clone: !1,
      includeMargin: !1
     },
     c = e.extend(n, o),
     s = this.eq(0);
    if (c.clone === !0) r = function() {
     var e = "position: absolute !important; top: -1000 !important; ";
     s = s.clone().attr("style", e).appendTo("body")
    }, a = function() {
     s.remove()
    };
    else {
     var i, u = [],
      d = "";
     r = function() {
      i = s.parents().addBack().filter(":hidden"), d += "visibility: hidden !important; display: block !important; ", c.absolute === !0 && (d += "position: absolute !important; "), i.each(function() {
       var t = e(this);
       u.push(t.attr("style")), t.attr("style", d)
      })
     }, a = function() {
      i.each(function(t) {
       var o = e(this),
        r = u[t];
       void 0 === r ? o.removeAttr("style") : o.attr("style", r)
      })
     }
    }
    r();
    var l = /(outer)/.test(t) ? s[t](c.includeMargin) : s[t]();
    return a(), l
   }
  })
 }
var is_OSX = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? !0 : !1,
 is_iOS = navigator.platform.match(/(iPhone|iPod|iPad)/i) ? !0 : !1,
 is_Mac = navigator.platform.toUpperCase().indexOf("MAC") >= 0,
 is_iPhone = "iPhone" == navigator.platform,
 is_iPod = "iPod" == navigator.platform,
 is_iPad = "iPad" == navigator.platform;
is_OSX && jQuery(".home-content-boxes .col-md-3.content-box, .home-content-boxes .col-md-4.content-box, .home-content-boxes .col-md-6.content-box").addClass("osmac"), jQuery(window).load(function() {
 function e() {
  for (var e = jQuery(".content-box p").map(function() {
    return jQuery(this).outerHeight()
   }).get(), t = jQuery(".content-box h2").map(function() {
    return jQuery(this).outerHeight()
   }).get(), o = [], r = 0; r < e.length; r++) o.push(e[r] + t[r]);
  maxHeight = Math.max.apply(null, o);
  var a = jQuery.map(o, function(e) {
   return maxHeight - e
  });
  jQuery(".sbtn1").css("padding-top", a[0]), jQuery(".sbtn2").css("padding-top", a[1]), jQuery(".sbtn3").css("padding-top", a[2]), jQuery(".sbtn4").css("padding-top", a[3])
 } - 1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && (e(), jQuery(window).resize(function() {
  var t = jQuery(window).width();
  t > "768" ? e() : (jQuery(".sbtn1").css("padding-top", "0px"), jQuery(".sbtn2").css("padding-top", "0px"), jQuery(".sbtn3").css("padding-top", "0px"), jQuery(".sbtn4").css("padding-top", "0px"))
 }))
}), jQuery(document).ready(function() {
 jQuery(".primary-menu .menu-item-language a,.sticky-header .menu-item-language a").each(function() {
  var e = jQuery(this);
  plan_text = e.text(), jQuery(this).find("img").length ? (img_src = jQuery(this).find("img").attr("src"), jQuery(this).find("img").remove(), e.html('<img src="' + img_src + '"> <span data-hover=" ' + plan_text + '"> ' + plan_text + "</span>")) : e.html('<span data-hover="' + plan_text + '">' + plan_text + "</span>")
 })
}), jQuery(document).ready(function(e) {
 jQuery(".woocommerce .images #carousel a").click(function(e) {
  e.preventDefault()
 }), jQuery(".woocommerce-menu .cart").width() > 190 && (jQuery(".woocommerce-menu .cart-contents").css("width", jQuery(".woocommerce-menu .cart").width()), jQuery(".woocommerce-menu .cart-content a").css("width", jQuery(".woocommerce-menu .cart").width() - 26), jQuery(".woocommerce-menu .cart-content a .cart-desc").css("width", jQuery(".woocommerce-menu .cart").width() - 82)), jQuery(".catalog-ordering .orderby .current-li a").html(jQuery(".catalog-ordering .orderby ul li.current a").html()), jQuery(".catalog-ordering .sort-count .current-li a").html(jQuery(".catalog-ordering .sort-count ul li.current a").html()), jQuery(".woocommerce #calc_shipping_state").parent().addClass("one_half"), jQuery(".woocommerce #calc_shipping_postcode").parent().addClass("one_half last"), jQuery(".woocommerce .shop_table .variation dd").after("<br />"), jQuery(".woocommerce .evolve-myaccount-data th.order-actions").text(js_local_vars.order_actions), jQuery(".rtl .woocommerce .wc-forward").each(function() {
  jQuery(this).val(jQuery(".rtl .woocommerce .wc-forward").val().replace("â†’", "â†"))
 }), jQuery(".woocommerce input").each(function() {
  jQuery(this).has("#coupon_code") || (name = jQuery(this).attr("id"), jQuery(this).attr("placeholder", jQuery(this).parent().find("label[for=" + name + "]").text()))
 }), jQuery(".woocommerce #reviews #comments .comment_container .comment-text").length && jQuery(".woocommerce #reviews #comments .comment_container").append('<div class="clear"></div>'), jQuery(".woocommerce.single-product .related.products > h2").length && (jQuery(".woocommerce.single-product .related.products > h2").wrap('<div class="title"></div>'), jQuery(".woocommerce.single-product .related.products > .title").append('<div class="title-sep-container"><div class="title-sep"></div></div>')), jQuery(".woocommerce.single-product .upsells.products > h2").length && (jQuery(".woocommerce.single-product .upsells.products > h2").wrap('<div class="title"></div>'), jQuery(".woocommerce.single-product .upsells.products > .title").append('<div class="title-sep-container"><div class="title-sep"></div></div>')), "block" == jQuery("body #sidebar").css("display") && (jQuery("body").addClass("has-sidebar"), calcTabsLayout(".woocommerce-tabs .tabs-horizontal")), "block" == jQuery("body.archive.woocommerce #sidebar").css("display") && (jQuery("#main ul.products").removeClass("products-1"), jQuery("#main ul.products").removeClass("products-2"), jQuery("#main ul.products").removeClass("products-4").addClass("products-3")), "block" == jQuery("body.single.woocommerce #sidebar").css("display") && (jQuery(".upsells.products ul.products,.related.products ul.products").removeClass("products-1"), jQuery(".upsells.products ul.products,.related.products ul.products").removeClass("products-2"), jQuery(".upsells.products ul.products,.related.products ul.products").removeClass("products-4").addClass("products-3"), jQuery(".upsells.products ul.products").html(jQuery(".upsells.products ul.products li").slice(0, 3)), jQuery(".related.products ul.products").html(jQuery(".related.products ul.products li").slice(0, 3))), jQuery("#sidebar .products,.footer-area .products").each(function() {
  jQuery(this).removeClass("products-4"), jQuery(this).removeClass("products-3"), jQuery(this).removeClass("products-2"), jQuery(this).addClass("products-1")
 }), jQuery(".products-4 li, .products-3 li, .products-3 li").removeClass("last"), e(".woocommerce-tabs ul.tabs li a").unbind("click"), e(".woocommerce-tabs > ul.tabs li a").click(function() {
  var t = e(this),
   o = t.closest(".woocommerce-tabs");
  return e("ul.tabs li", o).removeClass("active"), e("div.panel", o).hide(), e("div" + t.attr("href"), o).show(), t.parent().addClass("active"), !1
 }), jQuery(".woocommerce-checkout-nav a,.continue-checkout").click(function(t) {
  t.preventDefault();
  var o = e(this).attr("data-name"),
   r = o;
  "#order_review" != o && (r = "." + o), jQuery("form.checkout .col-1, form.checkout .col-2, form.checkout #order_review_heading, form.checkout #order_review").hide(), jQuery("form.checkout").find(r).fadeIn(), "#order_review" == r && jQuery("form.checkout").find("#order_review_heading").fadeIn(), jQuery(".woocommerce-checkout-nav li").removeClass("active"), jQuery(".woocommerce-checkout-nav").find("[data-name=" + o + "]").parent().addClass("active")
 }), jQuery(".evolve-myaccount-nav a").click(function(e) {
  e.preventDefault(), jQuery(".evolve-myaccount-data .view_dashboard, .evolve-myaccount-data .digital-downloads, .evolve-myaccount-data .my_account_orders, .evolve-myaccount-data .edit_address_heading, .evolve-myaccount-data .myaccount_address, .evolve-myaccount-data .edit-account-heading, .evolve-myaccount-data .edit-account-form").hide(), jQuery(this).hasClass("downloads") ? jQuery(".evolve-myaccount-data .digital-downloads").fadeIn() : jQuery(this).hasClass("orders") ? jQuery(".evolve-myaccount-data .my_account_orders").fadeIn() : jQuery(this).hasClass("address") ? jQuery(".evolve-myaccount-data .edit_address_heading, .evolve-myaccount-data .myaccount_address").fadeIn() : jQuery(this).hasClass("account") ? jQuery(".evolve-myaccount-data .edit-account-heading, .evolve-myaccount-data .edit-account-form").fadeIn() : jQuery(this).hasClass("dashboard") && jQuery(".evolve-myaccount-data .view_dashboard").fadeIn(), jQuery(".evolve-myaccount-nav li").removeClass("active"), jQuery(this).parent().addClass("active")
 }), jQuery("a.add_to_cart_button").click(function(e) {
  var t = this;
  jQuery(t).closest(".product").find(".cart-loading").find("i").removeClass("t4p-icon-ok").addClass("t4p-icon-ok"), jQuery(this).closest(".product").find(".cart-loading").fadeIn(), setTimeout(function() {
   jQuery(t).closest(".product").find(".product-images img").animate({
    opacity: .75
   }), jQuery(t).closest(".product").find(".cart-loading").find("i").hide().removeClass("t4p-icon-repeat").addClass("t4p-icon-ok").fadeIn(), setTimeout(function() {
    jQuery(t).closest(".product").find(".cart-loading").fadeOut().closest(".product").find(".product-images img").animate({
     opacity: 1
    })
   }, 2e3)
  }, 2e3)
 }), jQuery("li.product").mouseenter(function() {
  jQuery(this).find(".cart-loading").find("i").hasClass("t4p-icon-ok") && jQuery(this).find(".cart-loading").fadeIn()
 }).mouseleave(function() {
  jQuery(this).find(".cart-loading").find("i").hasClass("t4p-icon-ok") && jQuery(this).find(".cart-loading").stop().fadeOut("400")
 }), jQuery(".sep-boxed-pricing,.full-boxed-pricing").each(function() {
  jQuery(this).addClass("columns-" + jQuery(this).find(".column").length)
 }), jQuery(".woocommerce #calc_shipping_country, .woocommerce .country_select, #bbp_stick_topic_select, #bbp_topic_status_select, #bbp_forum_id, #bbp_destination_topic,.woocommerce select#calc_shipping_state, .woocommerce select.state_select").wrap('<div class="evolve-select-parent"></div>').after('<div class="select-arrow t4p-icon-angle-down"></div>')
}), jQuery(function(e) {
 if ("undefined" != typeof js_local_vars.woocommerce_23) {
  var t = e("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").find("qty");
  t && "date" != t.prop("type") && (e("input.qty:not(.product-quantity input.qty)").each(function() {
   var t = parseFloat(e(this).attr("min"));
   t && t > 0 && parseFloat(e(this).val()) < t && e(this).val(t)
  }), e(document).on("click", ".plus, .minus", function() {
   var t = e(this).closest(".quantity").find(".qty"),
    o = parseFloat(t.val()),
    r = parseFloat(t.attr("max")),
    a = parseFloat(t.attr("min")),
    n = t.attr("step");
   o && "" !== o && "NaN" !== o || (o = 0), ("" === r || "NaN" === r) && (r = ""), ("" === a || "NaN" === a) && (a = 0), ("any" === n || "" === n || void 0 === n || "NaN" === parseFloat(n)) && (n = 1), e(this).is(".plus") ? r && (r == o || o > r) ? t.val(r) : t.val(o + parseFloat(n)) : a && (a == o || a > o) ? t.val(a) : o > 0 && t.val(o - parseFloat(n)), t.trigger("change")
  }))
 }
}), jQuery(document).ready(function(e) {
 jQuery(".woo_editaddress").click(function(t) {
  t.preventDefault();
  var o = e(this).attr("id");
  "editaddress_billing" == o ? (jQuery(".editaddress_billing").fadeIn(), jQuery(".editaddress_shipping").hide()) : "editaddress_shipping" == o && (jQuery(".editaddress_shipping").fadeIn(), jQuery(".editaddress_billing").hide())
 }), jQuery("#saveaddress").click(function() {
  var t = e("#formvalue").val();
  "billing" == t ? (jQuery(".editaddress_billing").fadeIn(), jQuery(".editaddress_shipping").hide()) : "shipping" == t && (jQuery(".editaddress_shipping").fadeIn(), jQuery(".editaddress_billing").hide())
 })
}), jQuery(document).ready(function(e) {
 jQuery(".attachment-shop_single").on("load", function() {
  var e = jQuery(".woocommerce-product-gallery__image .attachment-shop_single").attr("src");
  jQuery(".woocommerce-product-gallery__image").attr("href", e)
 })
});
(function() {
 var e = [].indexOf || function(e) {
   for (var t = 0, i = this.length; i > t; t++)
    if (t in this && this[t] === e) return t;
   return -1
  },
  t = [].slice;
 ! function(e, t) {
  return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
   return t(i, e)
  }) : t(e.jQuery, e)
 }(this, function(i, n) {
  var r, o, a, s, l, c, u, d, h, f, p, y, m, b, v, g;
  return r = i(n), d = e.call(n, "ontouchstart") >= 0, s = {
   horizontal: {},
   vertical: {}
  }, l = 1, u = {}, c = "waypoints-context-id", p = "resize.waypoints", y = "scroll.waypoints", m = 1, b = "waypoints-waypoint-ids", v = "waypoint", g = "waypoints", o = function() {
   function e(e) {
    var t = this;
    this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
     x: e.scrollLeft(),
     y: e.scrollTop()
    }, this.waypoints = {
     horizontal: {},
     vertical: {}
    }, e.data(c, this.id), u[this.id] = this, e.bind(y, function() {
     var e;
     return t.didScroll || d ? void 0 : (t.didScroll = !0, e = function() {
      return t.doScroll(), t.didScroll = !1
     }, n.setTimeout(e, i[g].settings.scrollThrottle))
    }), e.bind(p, function() {
     var e;
     return t.didResize ? void 0 : (t.didResize = !0, e = function() {
      return i[g]("refresh"), t.didResize = !1
     }, n.setTimeout(e, i[g].settings.resizeThrottle))
    })
   }
   return e.prototype.doScroll = function() {
    var e, t = this;
    return e = {
     horizontal: {
      newScroll: this.$element.scrollLeft(),
      oldScroll: this.oldScroll.x,
      forward: "right",
      backward: "left"
     },
     vertical: {
      newScroll: this.$element.scrollTop(),
      oldScroll: this.oldScroll.y,
      forward: "down",
      backward: "up"
     }
    }, !d || e.vertical.oldScroll && e.vertical.newScroll || i[g]("refresh"), i.each(e, function(e, n) {
     var r, o, a;
     return a = [], o = n.newScroll > n.oldScroll, r = o ? n.forward : n.backward, i.each(t.waypoints[e], function(e, t) {
      var i, r;
      return n.oldScroll < (i = t.offset) && i <= n.newScroll ? a.push(t) : n.newScroll < (r = t.offset) && r <= n.oldScroll ? a.push(t) : void 0
     }), a.sort(function(e, t) {
      return e.offset - t.offset
     }), o || a.reverse(), i.each(a, function(e, t) {
      return t.options.continuous || e === a.length - 1 ? t.trigger([r]) : void 0
     })
    }), this.oldScroll = {
     x: e.horizontal.newScroll,
     y: e.vertical.newScroll
    }
   }, e.prototype.refresh = function() {
    var e, t, n, r = this;
    return n = i.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
     horizontal: {
      contextOffset: n ? 0 : t.left,
      contextScroll: n ? 0 : this.oldScroll.x,
      contextDimension: this.$element.width(),
      oldScroll: this.oldScroll.x,
      forward: "right",
      backward: "left",
      offsetProp: "left"
     },
     vertical: {
      contextOffset: n ? 0 : t.top,
      contextScroll: n ? 0 : this.oldScroll.y,
      contextDimension: n ? i[g]("viewportHeight") : this.$element.height(),
      oldScroll: this.oldScroll.y,
      forward: "down",
      backward: "up",
      offsetProp: "top"
     }
    }, i.each(e, function(e, t) {
     return i.each(r.waypoints[e], function(e, n) {
      var r, o, a, s, l;
      return r = n.options.offset, a = n.offset, o = i.isWindow(n.element) ? 0 : n.$element.offset()[t.offsetProp], i.isFunction(r) ? r = r.apply(n.element) : "string" == typeof r && (r = parseFloat(r), n.options.offset.indexOf("%") > -1 && (r = Math.ceil(t.contextDimension * r / 100))), n.offset = o - t.contextOffset + t.contextScroll - r, n.options.onlyOnScroll && null != a || !n.enabled ? void 0 : null !== a && a < (s = t.oldScroll) && s <= n.offset ? n.trigger([t.backward]) : null !== a && a > (l = t.oldScroll) && l >= n.offset ? n.trigger([t.forward]) : null === a && t.oldScroll >= n.offset ? n.trigger([t.forward]) : void 0
     })
    })
   }, e.prototype.checkEmpty = function() {
    return i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([p, y].join(" ")), delete u[this.id]) : void 0
   }, e
  }(), a = function() {
   function e(e, t, n) {
    var r, o;
    n = i.extend({}, i.fn[v].defaults, n), "bottom-in-view" === n.offset && (n.offset = function() {
     var e;
     return e = i[g]("viewportHeight"), i.isWindow(t.element) || (e = t.$element.height()), e - i(this).outerHeight()
    }), this.$element = e, this.element = e[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = t, this.enabled = n.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = n, t.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, r = null != (o = e.data(b)) ? o : [], r.push(this.id), e.data(b, r)
   }
   return e.prototype.trigger = function(e) {
    return this.enabled ? (null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0) : void 0
   }, e.prototype.disable = function() {
    return this.enabled = !1
   }, e.prototype.enable = function() {
    return this.context.refresh(), this.enabled = !0
   }, e.prototype.destroy = function() {
    return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
   }, e.getWaypointsByElement = function(e) {
    var t, n;
    return (n = i(e).data(b)) ? (t = i.extend({}, s.horizontal, s.vertical), i.map(n, function(e) {
     return t[e]
    })) : []
   }, e
  }(), f = {
   init: function(e, t) {
    var n;
    return null == t && (t = {}), null == (n = t.handler) && (t.handler = e), this.each(function() {
     var e, n, r, s;
     return e = i(this), r = null != (s = t.context) ? s : i.fn[v].defaults.context, i.isWindow(r) || (r = e.closest(r)), r = i(r), n = u[r.data(c)], n || (n = new o(r)), new a(e, n, t)
    }), i[g]("refresh"), this
   },
   disable: function() {
    return f._invoke(this, "disable")
   },
   enable: function() {
    return f._invoke(this, "enable")
   },
   destroy: function() {
    return f._invoke(this, "destroy")
   },
   prev: function(e, t) {
    return f._traverse.call(this, e, t, function(e, t, i) {
     return t > 0 ? e.push(i[t - 1]) : void 0
    })
   },
   next: function(e, t) {
    return f._traverse.call(this, e, t, function(e, t, i) {
     return t < i.length - 1 ? e.push(i[t + 1]) : void 0
    })
   },
   _traverse: function(e, t, r) {
    var o, a;
    return null == e && (e = "vertical"), null == t && (t = n), a = h.aggregate(t), o = [], this.each(function() {
     var t;
     return t = i.inArray(this, a[e]), r(o, t, a[e])
    }), this.pushStack(o)
   },
   _invoke: function(e, t) {
    return e.each(function() {
     var e;
     return e = a.getWaypointsByElement(this), i.each(e, function(e, i) {
      return i[t](), !0
     })
    }), this
   }
  }, i.fn[v] = function() {
   var e, n;
   return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], f[n] ? f[n].apply(this, e) : i.isFunction(n) ? f.init.apply(this, arguments) : i.isPlainObject(n) ? f.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
  }, i.fn[v].defaults = {
   context: n,
   continuous: !0,
   enabled: !0,
   horizontal: !1,
   offset: 0,
   triggerOnce: !1
  }, h = {
   refresh: function() {
    return i.each(u, function(e, t) {
     return t.refresh()
    })
   },
   viewportHeight: function() {
    var e;
    return null != (e = n.innerHeight) ? e : r.height()
   },
   aggregate: function(e) {
    var t, n, r;
    return t = s, e && (t = null != (r = u[i(e).data(c)]) ? r.waypoints : void 0), t ? (n = {
     horizontal: [],
     vertical: []
    }, i.each(n, function(e, r) {
     return i.each(t[e], function(e, t) {
      return r.push(t)
     }), r.sort(function(e, t) {
      return e.offset - t.offset
     }), n[e] = i.map(r, function(e) {
      return e.element
     }), n[e] = i.unique(n[e])
    }), n) : []
   },
   above: function(e) {
    return null == e && (e = n), h._filter(e, "vertical", function(e, t) {
     return t.offset <= e.oldScroll.y
    })
   },
   below: function(e) {
    return null == e && (e = n), h._filter(e, "vertical", function(e, t) {
     return t.offset > e.oldScroll.y
    })
   },
   left: function(e) {
    return null == e && (e = n), h._filter(e, "horizontal", function(e, t) {
     return t.offset <= e.oldScroll.x
    })
   },
   right: function(e) {
    return null == e && (e = n), h._filter(e, "horizontal", function(e, t) {
     return t.offset > e.oldScroll.x
    })
   },
   enable: function() {
    return h._invoke("enable")
   },
   disable: function() {
    return h._invoke("disable")
   },
   destroy: function() {
    return h._invoke("destroy")
   },
   extendFn: function(e, t) {
    return f[e] = t
   },
   _invoke: function(e) {
    var t;
    return t = i.extend({}, s.vertical, s.horizontal), i.each(t, function(t, i) {
     return i[e](), !0
    })
   },
   _filter: function(e, t, n) {
    var r, o;
    return (r = u[i(e).data(c)]) ? (o = [], i.each(r.waypoints[t], function(e, t) {
     return n(r, t) ? o.push(t) : void 0
    }), o.sort(function(e, t) {
     return e.offset - t.offset
    }), i.map(o, function(e) {
     return e.element
    })) : []
   }
  }, i[g] = function() {
   var e, i;
   return i = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], h[i] ? h[i].apply(null, e) : h.aggregate.call(null, i)
  }, i[g].settings = {
   resizeThrottle: 100,
   scrollThrottle: 30
  }, r.load(function() {
   return i[g]("refresh")
  })
 })
}).call(this), jQuery(window).load(function() {
 if (jQuery().waypoint && jQuery(".t4p-progress-bar").waypoint(function() {
   jQuery(this).css("visibility", "visible"), jQuery(".t4p-progress-bar").each(function() {
    var e = jQuery(this).find(".t4p-progress-bar-content").data("percentage");
    jQuery(this).find(".t4p-progress-bar-content").css("width", "0%"), jQuery(this).find(".t4p-progress-bar-content").animate({
     width: e + "%"
    }, "slow")
   })
  }, {
   triggerOnce: !0,
   offset: "bottom-in-view"
  }), jQuery().waypoint && jQuery(".counters-box").waypoint(function() {
   jQuery(this).find(".display-percentage").each(function() {
    var e = jQuery(this).data("percentage");
    jQuery(this).countTo({
     from: 0,
     to: e,
     refreshInterval: 10,
     speed: 1e3
    })
   })
  }, {
   triggerOnce: !0,
   offset: "bottom-in-view"
  }), jQuery(".simple-products-slider .product-buttons a").text("Add to cart"), generateCarousel(), jQuery().waypoint && jQuery(".animated").waypoint(function() {
   jQuery(this).css("visibility", "visible");
   var e = jQuery(this).attr("animation_type"),
    t = jQuery(this).attr("animation_duration");
   jQuery(this).addClass("animated	" + e), t && (jQuery(this).css("-moz-animation-duration", t + "s"), jQuery(this).css("-webkit-animation-duration", t + "s"), jQuery(this).css("-ms-animation-duration", t + "s"), jQuery(this).css("-o-animation-duration", t + "s"), jQuery(this).css("animation-duration", t + "s"))
  }, {
   triggerOnce: !0,
   offset: "bottom-in-view"
  }), "block" == jQuery("body .aside").css("display") && jQuery("body").addClass("has-sidebar"), jQuery().flexslider && jQuery(".woocommerce .images #carousel").length >= 1) {
  jQuery("body.woocommerce #sidebar").is(":visible") ? wooThumbWidth = 100 : wooThumbWidth = 118, "undefined" != typeof jQuery(".woocommerce .images #carousel").data("flexslider") && (jQuery(".woocommerce .images #carousel").flexslider("destroy"), jQuery(".woocommerce .images #slider").flexslider("destroy")), jQuery(".woocommerce .images #carousel").flexslider({
   animation: "slide",
   controlNav: !1,
   directionNav: !1,
   animationLoop: !1,
   slideshow: !1,
   itemWidth: wooThumbWidth,
   itemMargin: 9,
   touch: !1,
   useCSS: !1,
   asNavFor: ".woocommerce .images #slider",
   smoothHeight: !1
  }), jQuery(".woocommerce .images #slider").flexslider({
   animation: "slide",
   controlNav: !1,
   animationLoop: !1,
   slideshow: !1,
   smoothHeight: !0,
   touch: !0,
   useCSS: !1,
   sync: ".woocommerce .images #carousel"
  })
 }
});
var generateCarousel = function() {
  jQuery().carouFredSel && (jQuery(".es-carousel-wrapper").not(".t4p-woo-featured-products-slider").each(function() {
   jQuery(this).find("ul").carouFredSel({
    auto: !1,
    prev: jQuery(this).find(".es-nav-prev"),
    next: jQuery(this).find(".es-nav-next"),
    width: "100%",
    height: "variable",
    align: "center",
    onCreate: function(e) {
     jQuery(this).find(".image").css("visibility", "visible")
    }
   })
  }), jQuery(".t4p-woo-featured-products-slider").each(function() {
   var e = jQuery(this).find("ul");
   e.carouFredSel({
    auto: !1,
    prev: jQuery(this).find(".es-nav-prev"),
    next: jQuery(this).find(".es-nav-next"),
    align: "left",
    left: 0,
    width: "100%",
    height: "variable",
    responsive: !0,
    items: {
     width: 280,
     height: "variable",
     visible: {
      min: 1,
      max: 30
     }
    },
    onCreate: function(e) {
     jQuery(this).find(".image").css("visibility", "visible"), jQuery(this).parent().css("overflow", "")
    }
   })
  }), jQuery(".simple-products-slider-variable").each(function() {
   var e = jQuery(this).find("ul");
   e.carouFredSel({
    auto: !1,
    prev: jQuery(this).find(".es-nav-prev"),
    next: jQuery(this).find(".es-nav-next"),
    width: "100%",
    height: "variable",
    align: "center"
   })
  }))
 },
 calcTabsLayout = function(e) {
  jQuery(e).each(function() {
   var e = jQuery(this).parent().width(),
    t = jQuery(this).find("li").length,
    i = e % t,
    n = (e - i) / t,
    r = e - n * (t - 1);
   jQuery(this).css({
    width: e + "px"
   }), jQuery(this).find("li").css({
    width: n + "px"
   }), jQuery(this).find("li:last").css({
    width: r + "px"
   }).addClass("no-border-right")
  })
 },
 generateCarousel = function() {
  jQuery().carouFredSel && (jQuery(".clients-carousel").each(function() {
   jQuery(this).find("ul").carouFredSel({
    auto: !1,
    prev: jQuery(this).find(".es-nav-prev"),
    next: jQuery(this).find(".es-nav-next"),
    width: "100%",
    height: "variable",
    align: "center"
   })
  }), jQuery(".es-carousel-wrapper").each(function() {
   jQuery(this).find("ul").carouFredSel({
    auto: !1,
    prev: jQuery(this).find(".es-nav-prev"),
    next: jQuery(this).find(".es-nav-next"),
    width: "100%",
    height: "variable",
    align: "center"
   })
  }))
 };
! function(e, t) {
 "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
}(this, function(e) {
 var t = function(e, t) {
   var i, n = document.createElement("canvas");
   e.appendChild(n), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
   var r = n.getContext("2d");
   n.width = n.height = t.size;
   var o = 1;
   window.devicePixelRatio > 1 && (o = window.devicePixelRatio, n.style.width = n.style.height = [t.size, "px"].join(""), n.width = n.height = t.size * o, r.scale(o, o)), r.translate(t.size / 2, t.size / 2), r.rotate((-0.5 + t.rotate / 180) * Math.PI);
   var a = (t.size - t.lineWidth) / 2;
   t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2), Date.now = Date.now || function() {
    return +new Date
   };
   var s = function(e, t, i) {
     i = Math.min(Math.max(-1, i || 0), 1);
     var n = 0 >= i ? !0 : !1;
     r.beginPath(), r.arc(0, 0, a, 0, 2 * Math.PI * i, n), r.strokeStyle = e, r.lineWidth = t, r.stroke()
    },
    l = function() {
     var e, i;
     r.lineWidth = 1, r.fillStyle = t.scaleColor, r.save();
     for (var n = 24; n > 0; --n) n % 6 === 0 ? (i = t.scaleLength, e = 0) : (i = .6 * t.scaleLength, e = t.scaleLength - i), r.fillRect(-t.size / 2 + e, 0, i, 1), r.rotate(Math.PI / 12);
     r.restore()
    },
    c = function() {
     return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
      window.setTimeout(e, 1e3 / 60)
     }
    }(),
    u = function() {
     t.scaleColor && l(), t.trackColor && s(t.trackColor, t.lineWidth, 1)
    };
   this.getCanvas = function() {
    return n
   }, this.getCtx = function() {
    return r
   }, this.clear = function() {
    r.clearRect(t.size / -2, t.size / -2, t.size, t.size)
   }, this.draw = function(e) {
    t.scaleColor || t.trackColor ? r.getImageData && r.putImageData ? i ? r.putImageData(i, 0, 0) : (u(), i = r.getImageData(0, 0, t.size * o, t.size * o)) : (this.clear(), u()) : this.clear(), r.lineCap = t.lineCap;
    var n;
    n = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, s(n, t.lineWidth, e / 100)
   }.bind(this), this.animate = function(e, i) {
    var n = Date.now();
    t.onStart(e, i);
    var r = function() {
     var o = Math.min(Date.now() - n, t.animate.duration),
      a = t.easing(this, o, e, i - e, t.animate.duration);
     this.draw(a), t.onStep(e, i, a), o >= t.animate.duration ? t.onStop(e, i) : c(r)
    }.bind(this);
    c(r)
   }.bind(this)
  },
  i = function(e, i) {
   var n = {
    barColor: "#ef1e25",
    trackColor: "#f9f9f9",
    scaleColor: "#dfe0e0",
    scaleLength: 5,
    lineCap: "round",
    lineWidth: 3,
    size: 110,
    rotate: 0,
    animate: {
     duration: 1e3,
     enabled: !0
    },
    easing: function(e, t, i, n, r) {
     return t /= r / 2, 1 > t ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    onStart: function(e, t) {},
    onStep: function(e, t, i) {},
    onStop: function(e, t) {}
   };
   if ("undefined" != typeof t) n.renderer = t;
   else {
    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
    n.renderer = SVGRenderer
   }
   var r = {},
    o = 0,
    a = function() {
     this.el = e, this.options = r;
     for (var t in n) n.hasOwnProperty(t) && (r[t] = i && "undefined" != typeof i[t] ? i[t] : n[t], "function" == typeof r[t] && (r[t] = r[t].bind(this)));
     "string" == typeof r.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[r.easing]) ? r.easing = jQuery.easing[r.easing] : r.easing = n.easing, "number" == typeof r.animate && (r.animate = {
      duration: r.animate,
      enabled: !0
     }), "boolean" != typeof r.animate || r.animate || (r.animate = {
      duration: 1e3,
      enabled: r.animate
     }), this.renderer = new r.renderer(e, r), this.renderer.draw(o), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
    }.bind(this);
   this.update = function(e) {
    return e = parseFloat(e), r.animate.enabled ? this.renderer.animate(o, e) : this.renderer.draw(e), o = e, this
   }.bind(this), this.disableAnimation = function() {
    return r.animate.enabled = !1, this
   }, this.enableAnimation = function() {
    return r.animate.enabled = !0, this
   }, a()
  };
 e.fn.easyPieChart = function(t) {
  return this.each(function() {
   var n;
   e.data(this, "easyPieChart") || (n = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new i(this, n)))
  })
 }
});
var cssua = function(e, t, i) {
 var n = /\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,
  r = /([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,
  o = /\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,
  a = /\bsilk-accelerated=true\b/,
  s = /\bfluidapp\b/,
  l = /(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,
  c = /(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,
  u = /(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,
  d = {
   parse: function(e, t) {
    var i = {};
    if (t && (i.standalone = t), e = ("" + e).toLowerCase(), !e) return i;
    for (var d, h, f = e.split(/[()]/), p = 0, y = f.length; y > p; p++)
     if (p % 2) {
      var m = f[p].split(";");
      for (d = 0, h = m.length; h > d; d++)
       if (n.exec(m[d])) {
        var b = RegExp.$1.split(" ").join("_"),
         v = RegExp.$2;
        (!i[b] || parseFloat(i[b]) < parseFloat(v)) && (i[b] = v)
       }
     } else if (m = f[p].match(r))
     for (d = 0, h = m.length; h > d; d++) b = m[d].split(/[\/\s]+/), b.length && "mozilla" !== b[0] && (i[b[0].split(" ").join("_")] = b.slice(1).join("-"));
    return c.exec(e) ? (i.mobile = RegExp.$1, o.exec(e) && (delete i[i.mobile], i.blackberry = i.version || RegExp.$3 || RegExp.$2 || RegExp.$1, RegExp.$1 ? i.mobile = "blackberry" : "0.0.1" === i.version && (i.blackberry = "7.1.0.0"))) : l.exec(e) ? i.desktop = RegExp.$1 : u.exec(e) && (i.game = RegExp.$1, d = i.game.split(" ").join("_"), i.version && !i[d] && (i[d] = i.version)), i.intel_mac_os_x ? (i.mac_os_x = i.intel_mac_os_x.split("_").join("."), delete i.intel_mac_os_x) : i.cpu_iphone_os ? (i.ios = i.cpu_iphone_os.split("_").join("."), delete i.cpu_iphone_os) : i.cpu_os ? (i.ios = i.cpu_os.split("_").join("."), delete i.cpu_os) : "iphone" !== i.mobile || i.ios || (i.ios = "1"), i.opera && i.version ? (i.opera = i.version, delete i.blackberry) : a.exec(e) ? i.silk_accelerated = !0 : s.exec(e) && (i.fluidapp = i.version), i.applewebkit ? (i.webkit = i.applewebkit, delete i.applewebkit, i.opr && (i.opera = i.opr, delete i.opr, delete i.chrome), i.safari && (i.chrome || i.crios || i.opera || i.silk || i.fluidapp || i.phantomjs || i.mobile && !i.ios ? delete i.safari : i.safari = i.version && !i.rim_tablet_os ? i.version : {
     419: "2.0.4",
     417: "2.0.3",
     416: "2.0.2",
     412: "2.0",
     312: "1.3",
     125: "1.2",
     85: "1.0"
    } [parseInt(i.safari, 10)] || i.safari)) : i.msie || i.trident ? (i.opera || (i.ie = i.msie || i.rv), delete i.msie, i.windows_phone_os ? (i.windows_phone = i.windows_phone_os, delete i.windows_phone_os) : ("wpdesktop" === i.mobile || "xblwp7" === i.mobile || "zunewp7" === i.mobile) && (i.mobile = "windows desktop", i.windows_phone = 9 > +i.ie ? "7.0" : 10 > +i.ie ? "7.5" : "8.0", delete i.windows_nt)) : (i.gecko || i.firefox) && (i.gecko = i.rv), i.rv && delete i.rv, i.version && delete i.version, i
   },
   format: function(e) {
    var t, i = "";
    for (t in e)
     if (t && e.hasOwnProperty(t)) {
      var n = t,
       r = e[t],
       n = n.split(".").join("-"),
       o = " ua-" + n;
      if ("string" == typeof r) {
       for (var r = r.split(" ").join("_").split(".").join("-"), a = r.indexOf("-"); a > 0;) o += " ua-" + n + "-" + r.substring(0, a), a = r.indexOf("-", a + 1);
       o += " ua-" + n + "-" + r
      }
      i += o
     } return i
   },
   encode: function(e) {
    var t, i = "";
    for (t in e) t && e.hasOwnProperty(t) && (i && (i += "&"), i += encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
    return i
   }
  };
 return d.userAgent = d.ua = d.parse(t, i), t = d.format(d.ua) + " js", e.className = e.className ? e.className.replace(/\bno-js\b/g, "") + t : t.substr(1), d
}(document.documentElement, navigator.userAgent, navigator.standalone);
! function(e) {
 e.fn.countTo = function(t) {
  return t = t || {}, e(this).each(function() {
   function i(e) {
    e = n.formatter.call(a, e, n), s.html(e)
   }
   var n = e.extend({}, e.fn.countTo.defaults, {
     from: e(this).data("from"),
     to: e(this).data("to"),
     speed: e(this).data("speed"),
     refreshInterval: e(this).data("refresh-interval"),
     decimals: e(this).data("decimals")
    }, t),
    r = Math.ceil(n.speed / n.refreshInterval),
    o = (n.to - n.from) / r,
    a = this,
    s = e(this),
    l = 0,
    c = n.from,
    u = s.data("countTo") || {};
   s.data("countTo", u), u.interval && clearInterval(u.interval), u.interval = setInterval(function() {
    c += o, l++, i(c), "function" == typeof n.onUpdate && n.onUpdate.call(a, c), l >= r && (s.removeData("countTo"), clearInterval(u.interval), c = n.to, "function" == typeof n.onComplete && n.onComplete.call(a, c))
   }, n.refreshInterval), i(c)
  })
 }, e.fn.countTo.defaults = {
  from: 0,
  to: 0,
  speed: 1e3,
  refreshInterval: 100,
  decimals: 0,
  formatter: function(e, t) {
   return e.toFixed(t.decimals)
  },
  onUpdate: null,
  onComplete: null
 }
}(jQuery),
function(e) {
 "use strict";
 e.fn.t4p_box_counting = function() {
  var t = e(this).data("value"),
   i = e(this).data("direction");
  "down" == i ? e(this).countTo({
   from: t,
   to: 0,
   refreshInterval: 10,
   speed: 1e3
  }) : e(this).countTo({
   from: 0,
   to: t,
   refreshInterval: 10,
   speed: 1e3
  })
 }, e.fn.t4p_draw_circles = function() {
  var t = e(this),
   i = t.children(".counter-circle").attr("data-countdown"),
   n = t.children(".counter-circle").attr("data-filledcolor"),
   r = t.children(".counter-circle").attr("data-unfilledcolor"),
   o = t.children(".counter-circle").attr("data-scale"),
   a = t.children(".counter-circle").attr("data-size"),
   s = t.children(".counter-circle").attr("data-speed"),
   l = t.children(".counter-circle").attr("data-strokesize"),
   c = t.children(".counter-circle").attr("data-percent");
  o && (o = e("body").css("color")), i ? (t.children(".counter-circle").attr("data-percent", 100), t.children(".counter-circle").easyPieChart({
   barColor: n,
   trackColor: r,
   scaleColor: o,
   scaleLength: 5,
   lineCap: "round",
   lineWidth: l,
   size: a,
   rotate: 0,
   animate: {
    duration: s,
    enabled: !0
   }
  }), t.children(".counter-circle").data("easyPieChart").enableAnimation(), t.children(".counter-circle").data("easyPieChart").update(c)) : t.children(".counter-circle").easyPieChart({
   barColor: n,
   trackColor: r,
   scaleColor: o,
   scaleLength: 5,
   lineCap: "round",
   lineWidth: l,
   size: a,
   rotate: 0,
   animate: {
    duration: s,
    enabled: !0
   }
  })
 }, e.fn.t4p_setup_flip_boxes = function() {
  var t, i, n = e(this),
   r = 0;
  n.find(".flip-box-front").outerHeight() > n.find(".flip-box-back").outerHeight() ? (t = n.find(".flip-box-front").outerHeight(), i = n.find(".flip-box-front").height(), r = (i - n.find(".flip-box-back-inner").outerHeight()) / 2, n.find(".flip-box-back").css("min-height", t), n.css("min-height", t), n.find(".flip-box-back-inner").css("margin-top", r)) : (t = n.find(".flip-box-back").outerHeight(), i = n.find(".flip-box-back").height(), r = (i - n.find(".flip-box-front-inner").outerHeight()) / 2, n.find(".flip-box-front").css("min-height", t), n.css("min-height", t), n.find(".flip-box-front-inner").css("margin-top", r))
 }, e.fn.t4p_draw_progress = function() {
  var t = e(this);
  e("html").hasClass("lt-ie9") ? (t.css("visibility", "visible"), t.each(function() {
   var e = t.find(".t4p-progress").attr("aria-valuenow");
   t.find(".t4p-progress").css("width", "0%"), t.find(".t4p-progress").animate({
    width: e + "%"
   }, "slow")
  })) : t.find(".t4p-progress").css("width", function() {
   return e(this).attr("aria-valuenow") + "%"
  })
 }
}(jQuery),
function(e) {
 "use strict";

 function t(i, n, o, a) {
  function s(e) {
   e.timeout && (l.cycleTimeout = setTimeout(function() {
    t(i, e, 0, !e.rev)
   }, e.timeout))
  }
  if (!n.busy) {
   var l = i[0].parentNode,
    c = i[n.currSlide],
    u = i[n.nextSlide];
   if (0 !== l.cycleTimeout || o)
    if (o || !l.cyclePause) {
     n.before.length && e.each(n.before, function(e, t) {
      t.apply(u, [c, u, n, a])
     });
     var d = function() {
      r && this.style.removeAttribute("filter"), e.each(n.after, function(e, t) {
       t.apply(u, [c, u, n, a])
      }), s(n)
     };
     n.nextSlide != n.currSlide && (n.busy = 1, e.fn.cycle.custom(c, u, n, d));
     var h = n.nextSlide + 1 == i.length;
     n.nextSlide = h ? 0 : n.nextSlide + 1, n.currSlide = h ? i.length - 1 : n.nextSlide - 1
    } else s(n)
  }
 }

 function i(e, i, n) {
  var r = e[0].parentNode,
   o = r.cycleTimeout;
  return o && (clearTimeout(o), r.cycleTimeout = 0), i.nextSlide = i.currSlide + n, i.nextSlide < 0 ? i.nextSlide = e.length - 1 : i.nextSlide >= e.length && (i.nextSlide = 0), t(e, i, 1, n >= 0), !1
 }
 var n = "Lite-1.7",
  r = /MSIE/.test(navigator.userAgent);
 e.fn.cycle = function(n) {
  return this.each(function() {
   n = n || {}, this.cycleTimeout && clearTimeout(this.cycleTimeout), this.cycleTimeout = 0, this.cyclePause = 0;
   var o = e(this),
    a = n.slideExpr ? e(n.slideExpr, this) : o.children(),
    s = a.get();
   if (s.length < 2) return void(window.console && console.log("terminating; too few slides: " + s.length));
   var l = e.extend({}, e.fn.cycle.defaults, n || {}, e.metadata ? o.metadata() : e.meta ? o.data() : {}),
    c = e.isFunction(o.data) ? o.data(l.metaAttr) : null;
   c && (l = e.extend(l, c)), l.before = l.before ? [l.before] : [], l.after = l.after ? [l.after] : [], l.after.unshift(function() {
    l.busy = 0
   });
   var u = this.className;
   l.width = parseInt((u.match(/w:(\d+)/) || [])[1], 10) || l.width, l.height = parseInt((u.match(/h:(\d+)/) || [])[1], 10) || l.height, l.timeout = parseInt((u.match(/t:(\d+)/) || [])[1], 10) || l.timeout, "static" == o.css("position") && o.css("position", "relative"), l.width && o.width(l.width), l.height && "auto" != l.height && o.height(l.height);
   var d = 0;
   a.css({
    position: "absolute",
    top: 0
   }).each(function(t) {
    e(this).css("z-index", s.length - t)
   }), e(s[d]).css("opacity", 1).show(), r && s[d].style.removeAttribute("filter"), l.fit && l.width && a.width(l.width), l.fit && l.height && "auto" != l.height && a.height(l.height), l.pause && o.hover(function() {
    this.cyclePause = 1
   }, function() {
    this.cyclePause = 0
   });
   var h = e.fn.cycle.transitions[l.fx];
   if (h && h(o, a, l), a.each(function() {
     var t = e(this);
     this.cycleH = l.fit && l.height ? l.height : t.height(), this.cycleW = l.fit && l.width ? l.width : t.width()
    }), l.cssFirst && e(a[d]).css(l.cssFirst), l.timeout)
    for (l.speed.constructor == String && (l.speed = {
      slow: 600,
      fast: 200
     } [l.speed] || 400), l.sync || (l.speed = l.speed / 2); l.timeout - l.speed < 250;) l.timeout += l.speed;
   l.speedIn = l.speed, l.speedOut = l.speed, l.slideCount = s.length, l.currSlide = d, l.nextSlide = 1;
   var f = a[d];
   l.before.length && l.before[0].apply(f, [f, f, l, !0]), l.after.length > 1 && l.after[1].apply(f, [f, f, l, !0]), l.click && !l.next && (l.next = l.click), l.next && e(l.next).unbind("click.cycle").bind("click.cycle", function() {
    return i(s, l, l.rev ? -1 : 1)
   }), l.prev && e(l.prev).unbind("click.cycle").bind("click.cycle", function() {
    return i(s, l, l.rev ? 1 : -1)
   }), l.timeout && (this.cycleTimeout = setTimeout(function() {
    t(s, l, 0, !l.rev)
   }, l.timeout + (l.delay || 0)))
  })
 }, e.fn.cycle.custom = function(t, i, n, r) {
  var o = e(t),
   a = e(i);
  a.css(n.cssBefore);
  var s = function() {
   a.animate(n.animIn, n.speedIn, n.easeIn, r)
  };
  o.animate(n.animOut, n.speedOut, n.easeOut, function() {
   o.css(n.cssAfter), n.sync || s()
  }), n.sync && s()
 }, e.fn.cycle.transitions = {
  fade: function(e, t, i) {
   t.not(":eq(0)").hide(), i.cssBefore = {
    opacity: 0,
    display: "block"
   }, i.cssAfter = {
    display: "none"
   }, i.animOut = {
    opacity: 0
   }, i.animIn = {
    opacity: 1
   }
  },
  fadeout: function(t, i, n) {
   n.before.push(function(t, i, n, r) {
    e(t).css("zIndex", n.slideCount + (r === !0 ? 1 : 0)), e(i).css("zIndex", n.slideCount + (r === !0 ? 0 : 1))
   }), i.not(":eq(0)").hide(), n.cssBefore = {
    opacity: 1,
    display: "block",
    zIndex: 1
   }, n.cssAfter = {
    display: "none",
    zIndex: 0
   }, n.animOut = {
    opacity: 0
   }, n.animIn = {
    opacity: 1
   }
  }
 }, e.fn.cycle.ver = function() {
  return n
 }, e.fn.cycle.defaults = {
  animIn: {},
  animOut: {},
  fx: "fade",
  after: null,
  before: null,
  cssBefore: {},
  cssAfter: {},
  delay: 0,
  fit: 0,
  height: "auto",
  metaAttr: "cycle",
  next: null,
  pause: !1,
  prev: null,
  speed: 1e3,
  slideExpr: null,
  sync: !0,
  timeout: 4e3
 }
}(jQuery), jQuery(window).load(function() {
 function e(e, t, i, n) {
  var r = jQuery(this).height();
  jQuery(this).parent().css("height", r)
 }
 if (jQuery(".t4p-counter-box").not(".t4p-modal .t4p-counter-box").waypoint(function() {
   jQuery(this).find(".display-counter").each(function() {
    jQuery(this).t4p_box_counting()
   })
  }, {
   triggerOnce: !0,
   offset: "bottom-in-view"
  }), jQuery(".t4p-modal .t4p-counter-box").each(function() {
   jQuery(this).appear(function() {
    jQuery(this).find(".display-counter").each(function() {
     jQuery(this).t4p_box_counting()
    })
   })
  }), jQuery(".counter-circle-wrapper").not(".t4p-modal .counter-circle-wrapper").waypoint(function() {
   jQuery(this).t4p_draw_circles()
  }, {
   triggerOnce: !0,
   offset: "bottom-in-view"
  }), jQuery(".t4p-modal .counter-circle-wrapper").each(function() {
   jQuery(this).appear(function() {
    jQuery(this).t4p_draw_circles()
   })
  }), jQuery(".flip-box-inner-wrapper").each(function() {
   jQuery(this).t4p_setup_flip_boxes()
  }), jQuery(".t4p-progressbar").not(".t4p-modal .t4p-progressbar").waypoint(function() {
   jQuery(this).t4p_draw_progress()
  }, {
   triggerOnce: !0,
   offset: "bottom-in-view"
  }), jQuery(".t4p-modal .t4p-progressbar").each(function() {
   jQuery(this).appear(function() {
    jQuery(this).t4p_draw_progress()
   })
  }), jQuery().cycle) {
  var t = {
   fx: "fade",
   after: e,
   delay: 0
  };
  "undefined" != typeof js_local_vars && js_local_vars.testimonials_speed ? t.timeout = parseInt(js_local_vars.testimonials_speed) : t.timeout = parseInt(4e3), jQuery(".reviews").cycle(t)
 }
 jQuery(".t4p-accordian .panel-title a").on("click", function(e) {
  return jQuery(this).hasClass("active") ? (jQuery(this).parents(".t4p-accordian ").find(".panel-title a").removeClass("active"), jQuery(this).parents(".t4p-accordian ").find(".panel-collapse").removeClass("in"), jQuery(this).parents(".t4p-accordian ").find(".panel-collapse").attr("aria-expanded", "false"), !1) : (jQuery(this).parents(".t4p-accordian ").find(".panel-title a").removeClass("active"), jQuery(this).parents(".t4p-accordian ").find(".panel-collapse").removeClass("in"), jQuery(this).addClass("active"), jQuery(this).parents(".panel").find(".panel-body .shortcode-map").each(function() {
   jQuery("#" + this.id).goMap(), marker = jQuery.goMap.markers[0], marker && (info = jQuery.goMap.getInfo(marker), jQuery.goMap.setInfo(marker, info));
   var e = jQuery.goMap.getMap().getCenter();
   google.maps.event.trigger(jQuery.goMap.getMap(), "resize"), jQuery.goMap.getMap().setCenter(e)
  }), generateCarousel(), void(jQuery(".portfolio").length && jQuery(".portfolio-wrapper").isotope("reLayout")))
 }), jQuery(".t4p-modal").each(function() {
  jQuery("#wrapper").append(jQuery(this))
 }), jQuery(".t4p-modal").bind("hidden.bs.modal", function() {
  jQuery("html").css("overflow", "")
 }), jQuery(".t4p-modal").bind("show.bs.modal", function() {
  jQuery("html").css("overflow", "visible")
 }), 1 == jQuery(".t4p-slider").data("parallax") && jQuery(".t4p-modal").css("top", jQuery(".header-wrapper").height()), jQuery(".t4p-hook-modal a").click(function(e) {
  e.preventDefault()
 }), (cssua.ua.mobile || cssua.ua.tablet_pc) && jQuery(".t4p-popover, .t4p-tooltip").each(function() {
  jQuery(this).attr("data-trigger", "click"), jQuery(this).data("trigger", "click")
 }), jQuery('[data-toggle~="popover"]').popover({
  container: "body"
 }), jQuery(".vertical-tabs").length >= 1 && jQuery(".vertical-tabs .tab-content .tab-pane").css("min-height", jQuery(".vertical-tabs .nav-tabs").outerHeight()), jQuery(window).on("resize", function() {
  jQuery(".vertical-tabs").length >= 1 && jQuery(".vertical-tabs .tab-content .tab-pane").css("min-height", jQuery(".vertical-tabs .nav-tabs").outerHeight())
 }), jQuery('[data-toggle~="tooltip"]').tooltip({
  container: "body"
 }), generateCarousel(), jQuery().waypoint && jQuery(".t4p-animated").waypoint(function() {
  jQuery(this).css("visibility", "visible");
  var e = jQuery(this).data("animationtype"),
   t = jQuery(this).data("animationduration");
  jQuery(this).addClass("animated-	" + e), t && (jQuery(this).css("-moz-animation-duration", t + "s"), jQuery(this).css("-webkit-animation-duration", t + "s"), jQuery(this).css("-ms-animation-duration", t + "s"), jQuery(this).css("-o-animation-duration", t + "s"), jQuery(this).css("animation-duration", t + "s"))
 }, {
  triggerOnce: !0,
  offset: "bottom-in-view"
 })
}), jQuery(document).ready(function(e) {
 setTimeout(function() {
  jQuery(".flip-box-inner-wrapper .fa").addClass("finished-animating")
 }, 5e3), jQuery(".t4p-flip-box").mouseover(function() {
  jQuery(this).addClass("hover")
 }), jQuery(".t4p-flip-box").mouseout(function() {
  jQuery(this).removeClass("hover")
 });
 var t = (jQuery("#wpadminbar").outerHeight(), 0);
 jQuery(".sticky-header").length && (t = 65), jQuery(".t4p-accordian .panel-title.toggle a").click(function(e) {
  e.preventDefault()
 }), jQuery("[data-toggle=modal]").live("click", function(e) {
  e.preventDefault()
 }), jQuery(".woocommerce .images #carousel a").click(function(e) {
  e.preventDefault()
 }), jQuery(".portfolio-tabs a").click(function(e) {
  e.preventDefault();
  var t = jQuery(this).attr("data-filter");
  jQuery(this).parents(".portfolio").find(".portfolio-wrapper").isotope({
   filter: t
  }), jQuery(this).parents("ul").find("li").removeClass("active"), jQuery(this).parent().addClass("active")
 }), jQuery(".faq-tabs a").click(function(e) {
  e.preventDefault();
  var t = jQuery(this).attr("data-filter");
  jQuery(".faqs .portfolio-wrapper .faq-item").fadeOut(), jQuery(".faqs .portfolio-wrapper .faq-item" + t).fadeIn(), jQuery(this).parents("ul").find("li").removeClass("active"), jQuery(this).parent().addClass("active")
 }), jQuery(".t4p-alert .close").click(function(e) {
  e.preventDefault(), jQuery(this).parent().slideUp()
 }), jQuery(".content-boxes-icon-boxed").each(function() {
  jQuery(this).find(".content-box-column .content-wrapper-boxed").equalHeights(), jQuery(this).find(".content-box-column .content-wrapper-boxed").css("overflow", "visible")
 })
}), jQuery(document).ready(function(e) {
 jQuery("div.t4p-blog-shortcode").length && jQuery("div.full-width").length && jQuery("#secondary").css({
  display: "none"
 }), jQuery("div.t4p-woo-product-slider").length && jQuery("div.full-width").length && jQuery("#secondary").css({
  display: "none"
 }), jQuery("div.t4p-slider-sc").length && jQuery("div.full-width").length && jQuery("#secondary").css({
  display: "none"
 })
}), jQuery(document).ready(function(e) {
 jQuery(".tabs-wrapper").each(function() {
  jQuery(this).find(".tab_content").hide(), document.location.hash && jQuery(this).find("ul.tabs li a[href='" + document.location.hash + "']").length >= 1 ? (jQuery(this).find("ul.tabs li a[href='" + document.location.hash + "']").parent().addClass("active").show(),
   jQuery(this).find(document.location.hash + ".tab_content").show()) : (jQuery(this).find("ul.tabs li:first").addClass("active").show(), jQuery(this).find(".tab_content:first").show())
 }), jQuery("[data-toggle=modal]").live("click", function(e) {
  e.preventDefault()
 }), jQuery("ul.tabs li").click(function(e) {
  jQuery(this).parents(".tabs-wrapper").find("ul.tabs li").removeClass("active"), jQuery(this).addClass("active"), jQuery(this).parents(".tabs-wrapper").find(".tab_content").hide();
  var t = jQuery(this).find("a").attr("href");
  jQuery(this).parents(".tabs-wrapper").find(t).fadeIn(), jQuery(this).parents(".tabs-wrapper").find(t).find(".content-boxes").each(function() {
   var e = jQuery(this).find(".col").length;
   jQuery(this).addClass("columns-" + e)
  }), jQuery(this).parents(".tabs-wrapper").find(t).find(".columns-3 .col:nth-child(3n), .columns-4 .col:nth-child(4n)").css("margin-right", "0px"), jQuery(this).parents(".tabs-wrapper").find(t).find(".portfolio-wrapper").isotope("reLayout"), jQuery(this).parents(".tabs-wrapper").find(t).find(".content-boxes-icon-boxed").each(function() {
   jQuery(this).find(".col").equalHeights()
  }), jQuery(this).parents(".tabs-wrapper").find(t).find(".shortcode-map").each(function() {
   jQuery("#" + this.id).goMap(), marker = jQuery.goMap.markers[0], marker && (info = jQuery.goMap.getInfo(marker), jQuery.goMap.setInfo(marker, info));
   var e = jQuery.goMap.getMap().getCenter();
   google.maps.event.trigger(jQuery.goMap.getMap(), "resize"), jQuery.goMap.getMap().setCenter(e)
  }), generateCarousel(), jQuery(".portfolio").length >= 1 && jQuery(".portfolio-wrapper").isotope("reLayout"), e.preventDefault()
 }), jQuery("ul.tabs li a").click(function(e) {
  e.preventDefault()
 })
});
var $addmenueffect = jQuery.noConflict();
$addmenueffect("#primary img").addClass("img-responsive");
var $jx = jQuery.noConflict();
$jx(document).ready(function() {
  $jx("div#slide_holder").hover(function() {
   $jx(this).find(".arrow span").stop(!0, !0).fadeIn(200).show(10)
  }, function() {
   $jx(this).find(".arrow span").stop(!0, !0).fadeOut(200).hide(10)
  })
 }),
 function(e) {
  e.fn.equalHeights = function(t, i) {
   return tallest = t ? t : 0, this.each(function() {
    e(this).css("height", "auto"), e(this).height() > tallest && (tallest = e(this).height())
   }), i && tallest > i && (tallest = i), this.each(function() {
    e(this).height(tallest).css("overflow", "auto")
   })
  }
 }(jQuery);
(function($) {
 $.fn.footerReveal = function(options) {
  var $this = $(this),
   $prev = $this.prev(),
   $win = $(window),
   defaults = $.extend({
    shadow: true,
    shadowOpacity: 0.8,
    zIndex: -100
   }, options),
   settings = $.extend(true, {}, defaults, options);
  if ($this.outerHeight() <= $win.outerHeight() && $this.offset().top >= $win.outerHeight()) {
   $this.css({
    'z-index': defaults.zIndex,
    position: 'fixed',
    bottom: 0
   });
   if (defaults.shadow) {
    $prev.css({
     '-moz-box-shadow': '0 20px 30px -20px rgba(0,0,0,' + defaults.shadowOpacity + ')',
     '-webkit-box-shadow': '0 20px 30px -20px rgba(0,0,0,' + defaults.shadowOpacity + ')',
     'box-shadow': '0 20px 30px -20px rgba(0,0,0,' + defaults.shadowOpacity + ')'
    });
   }
   $win.on('load resize footerRevealResize', function() {
    $this.css({
     'width': $prev.outerWidth()
    });
    $prev.css({
     'margin-bottom': $this.innerHeight()
    });
   });
  }
  return this;
 };
})(jQuery);
jQuery.noConflict(), jQuery(document).ready(function() {
 jQuery(function() {
  var r = jQuery("#wrapper").width();
  jQuery(".footer").footerReveal({
   width: r
  })
 });
 var r = jQuery(window).width();
 if ("1263" == r) {
  var e = jQuery("#wrapper").width();
  jQuery(".footer").css("width", e)
 } else if ("985" == r) {
  var t = jQuery("#wrapper").width(),
   o = t - 1;
  jQuery(".footer").css("width", o)
 } else {
  var i = jQuery("#wrapper").width();
  jQuery(".footer").css("width", i)
 }
});
(function($) {
 var paeAccordion = function($scope, $) {
  $scope.find('.pae-accordion-item.active .pae-accordion-body').slideDown();
  $scope.find('.pae-accordion-header').click(function() {
   $(this).parents('.pae-accordion-single').find('.pae-accordion-item').not($(this).parent()).removeClass('active').find('.pae-accordion-body').slideUp();
   $(this).parent().toggleClass('active');
   $(this).next('.pae-accordion-body').slideToggle();
  });
 }
 var paeAnimatedText = function($scope, $) {
  $scope.find('.pae-animetext .pae-animeletters').each(function() {
   var letters = $scope.find('.pae-animetext').data('letters');
   if (letters === true || letters === 'true') {
    var arr = $(this).text().split('');
    arr.forEach(function(v, i) {
     arr[i] = "<span class='pae-animeletter'>" + v.replace(' ', '&nbsp;') + "</span>";
    });
    $(this).html(arr.join(''));
   } else {
    $(this).html('<span class="pae-animeletter">' + $(this).text() + '</span>');
   }
  });
  $scope.find('.pae-animetext').each(function() {
   var animLoop = $(this).data('loop');
   var AnimDurn = $(this).data('durn');
   var dataAnim = parseInt($(this).data('anim'));
   if (animLoop == '') {
    elementorFrontend.waypoint($(this), function(direction) {
     if (direction === 'down') {
      animateText(animLoop, AnimDurn, dataAnim, $(this));
     }
    }, {
     offset: '95%',
     triggerOnce: true
    });
   } else {
    animateText(animLoop, AnimDurn, dataAnim, $(this));
   }
  });

  function animateText(animLoop, AnimDurn, dataAnim, $that) {
   var opts = [],
    optso = [],
    optsp = [],
    optspo = [],
    line1 = [],
    line2 = [],
    stable = [],
    eachDuration = 30,
    offsetValue = 0;
   var opacityValue = [
    [0, 1],
    [1, 0]
   ];
   var translateZValue = [
    [-20, 0],
    [0, -20]
   ];
   var rotateXValue = [
    [90, 0],
    [0, -90]
   ];
   var instances = [];
   $that.find('.pae-animeletters').each(function(k) {
    var paeWrapper = $(this).closest('.pae-animetext-wrapper');
    if (k == 0) {
     $(this).addClass('active');
    }
    var x = $(this).find('.pae-animeletter').length;
    var y = $that.find('.pae-animeletters').length;
    var targetLetter = [];
    for (var i = 0; i < x; i++) {
     targetLetter.push($(this).find('.pae-animeletter')[i]);
    }
    eachDuration = (AnimDurn - (x * 20)) / x;
    offsetValue = '-=' + (AnimDurn);
    switch (dataAnim) {
     case 1:
      opts[k] = {
       targets: targetLetter,
       scale: [0.3, 1],
       opacity: [0, 1],
       translateZ: 0,
       easing: 'linear',
       duration: AnimDurn,
       delay: function(el, i) {
        return 170 * (i + 1);
       },
       begin: function(anim) {
        jQuery(anim.animatables[0].target).parent('span').siblings().removeClass('active');
        jQuery(anim.animatables[0].target).parent('span').addClass('active');
       }
      };
      optsp[k] = {
       targets: this,
       opacity: opacityValue[0],
       easing: 'linear',
       duration: AnimDurn,
       offset: 0,
      };
      break;
     case 2:
      opts[k] = {
       targets: targetLetter,
       rotateY: [-90, 0],
       easing: 'linear',
       duration: AnimDurn,
       delay: function(el, i) {
        return eachDuration * i;
       },
       begin: function(anim) {
        jQuery(anim.animatables[0].target).parent('span').siblings().removeClass('active');
        jQuery(anim.animatables[0].target).parent('span').addClass('active');
       }
      };
      optsp[k] = {
       targets: this,
       opacity: opacityValue[0],
       easing: 'linear',
       duration: AnimDurn,
       offset: 0,
      };
      break;
     case 3:
      opts[k] = {
       targets: targetLetter,
       scale: [2, 1],
       opacity: [0, 1],
       translateZ: 0,
       easing: 'linear',
       duration: AnimDurn,
       delay: function(el, i) {
        return eachDuration * i;
       },
       begin: function(anim) {
        jQuery(anim.animatables[0].target).parent('span').siblings().removeClass('active');
        jQuery(anim.animatables[0].target).parent('span').addClass('active');
       }
      };
      optsp[k] = {
       targets: this,
       opacity: [0, 1],
       easing: 'linear',
       duration: AnimDurn,
       offset: 0,
      };
      break;
     case 4:
      opts[k] = {
       targets: targetLetter,
       translateY: ["1.5em", 0],
       translateZ: 0,
       easing: 'linear',
       duration: AnimDurn,
       delay: function(el, i) {
        return eachDuration * i;
       },
       begin: function(anim) {
        jQuery(anim.animatables[0].target).parent('span').siblings().removeClass('active');
        jQuery(anim.animatables[0].target).parent('span').addClass('active');
       }
      };
      optsp[k] = {
       targets: this,
       opacity: opacityValue[0],
       easing: 'linear',
       duration: AnimDurn,
       offset: 0,
      };
      break;
     case 5:
      var translationEnd = $(this).outerWidth(true) + parseInt(paeWrapper.css('padding-left')) + parseInt(paeWrapper.css('padding-right'));
      line1[k] = {
       targets: paeWrapper.find('.pae-animeline')[0],
       scaleY: [0, 1],
       opacity: [0.5, 1],
       easing: "linear",
       duration: AnimDurn / 10
      };
      line2[k] = {
       targets: paeWrapper.find('.pae-animeline')[0],
       translateX: [0, translationEnd],
       easing: "easeOutQuad",
       duration: AnimDurn,
       delay: AnimDurn / 10
      };
      opts[k] = {
       targets: targetLetter,
       opacity: [0, 1],
       easing: 'linear',
       duration: AnimDurn - (AnimDurn / 10),
       offset: offsetValue,
       delay: function(el, i) {
        return eachDuration * i;
       },
       begin: function(anim) {
        jQuery(anim.animatables[0].target).parent('span').siblings().removeClass('active');
        jQuery(anim.animatables[0].target).parent('span').addClass('active');
       }
      };
      optsp[k] = {
       targets: this,
       opacity: opacityValue[0],
       easing: 'linear',
       duration: AnimDurn,
       offset: 0,
      };
      if (k == $scope.find('.pae-animeletters').length - 1) {
       paeWrapper.addClass('pae5');
      }
      break;
     case 6:
      opts[k] = {
       targets: targetLetter,
       translateY: ["1.1em", 0],
       translateX: ["0.55em", 0],
       translateZ: 0,
       rotateZ: [180, 0],
       easing: 'linear',
       duration: AnimDurn,
       delay: function(el, i) {
        return eachDuration * i;
       },
       begin: function(anim) {
        jQuery(anim.animatables[0].target).parent('span').siblings().removeClass('active');
        jQuery(anim.animatables[0].target).parent('span').addClass('active');
       }
      };
      optsp[k] = {
       targets: this,
       opacity: opacityValue[0],
       easing: 'linear',
       duration: AnimDurn,
       offset: 0,
      };
      break;
     case 7:
      opts[k] = {
       targets: targetLetter,
       translateY: [-100, 0],
       opacity: [0, 1],
       easing: "linear",
       duration: AnimDurn,
       delay: function(el, i) {
        return eachDuration * i;
       },
       begin: function(anim) {
        jQuery(anim.animatables[0].target).parent('span').siblings().removeClass('active');
        jQuery(anim.animatables[0].target).parent('span').addClass('active');
       }
      };
      optsp[k] = {
       targets: this,
       opacity: opacityValue[0],
       easing: 'linear',
       duration: AnimDurn,
       offset: 0,
      };
      break;
     case 8:
      opts[k] = {
       targets: targetLetter,
       translateZ: translateZValue[0],
       rotateX: rotateXValue[0],
       duration: AnimDurn,
       offset: offsetValue,
       easing: 'linear',
       delay: function(el, j) {
        return eachDuration * (j + 1)
       },
       begin: function(anim) {
        jQuery(anim.animatables[0].target).parent('span').siblings().removeClass('active');
        jQuery(anim.animatables[0].target).parent('span').addClass('active');
       }
      };
      optso[k] = {
       targets: targetLetter,
       translateZ: translateZValue[1],
       rotateX: rotateXValue[1],
       easing: 'linear',
       duration: AnimDurn,
       delay: function(el, j) {
        return eachDuration * (j + 1)
       }
      };
      optsp[k] = {
       targets: this,
       opacity: opacityValue[0],
       easing: 'linear',
       duration: AnimDurn,
       offset: offsetValue,
      };
      optspo[k] = {
       targets: this,
       easing: 'easeOutQuart',
       opacity: opacityValue[1],
       duration: AnimDurn,
      };
      break;
    }
    if (dataAnim != 8) {
     stable[k] = {
      targets: this,
      opacity: ((animLoop == '') && (k + 1 == y)) ? 1 : 0,
      easing: 'linear',
      duration: 500,
     };
    }
   });
   for (var i = 0; i < opts.length; i++) {
    if (dataAnim == 5) {
     instances.push(line1[i]);
     instances.push(line2[i]);
    }
    instances.push(opts[i]);
    instances.push(optsp[i]);
    if (dataAnim == 8) {
     instances.push(optso[i]);
     instances.push(optspo[i]);
    } else {
     instances.push(stable[i]);
    }
   }
   var animejs = anime.timeline({
    loop: false
   }).add(instances);
   if (animLoop === true) {
    animejs.complete = function() {
     animejs.restart();
    }
   }
  }
 }
 var paeAudio = function($scope, $) {
  var container = $scope.find('.pae-audio-container');
  var audio = $scope.find('.pae-audio');
  var player = audio.audioPlayer({
   volume: container.data('volume'),
   fullWidth: container.data('fullwidth'),
   timeReverse: container.data('timereverse')
  });
 }
 var paeCircleProgress = function($scope, $) {
  var progress = $scope.find('.pae-progress');
  var params = $scope.find('.pae-progress-atts').data('params');
  var opts = {
   color: params.color,
   easing: params.animation,
   strokeWidth: params.tracksize,
   trailColor: params.trailcolor,
   trailWidth: params.trailsize,
   duration: parseFloat(params.duration) * 1000,
   text: {
    autoStyleContainer: true,
    style: {
     color: params.percentcolor,
     position: 'absolute',
     left: '50%',
     top: '50%',
     padding: 0,
     margin: 0,
     transform: {
      prefix: true,
      value: 'translate(-50%, -50%)'
     }
    }
   },
   fill: params.fillcolor,
   from: {
    color: params.animfromcolor,
    width: params.animfromwidth
   },
   to: {
    color: params.animtocolor,
    width: params.animtowidth
   },
   step: function(state, circle) {
    if (params.transition === 'yes') {
     circle.path.setAttribute('stroke', state.color);
     circle.path.setAttribute('stroke-width', state.width);
    }
    var value = Math.round(circle.value() * 100);
    var text = (value === 0) ? '' : params.text.replace('{percent}', value);
    text = '<div class="progressbar-percent">' + text + '</div>';
    if (params.headingpos == 'in' && params.heading !== '') {
     text += '<div class="pae-circle-progress-text pae-circle-progress-text-' + params.headingalign + '">' + params.heading + '</div>';
    }
    circle.setText(text);
   },
  };
  var circle = (params.type === 'circle') ? new ProgressBar.Circle(progress[0], opts) : new ProgressBar.SemiCircle(progress[0], opts);
  circle.path.style.strokeLinecap = params.round;
  elementorFrontend.waypoint(progress, function(direction) {
   if (direction === 'down') {
    circle.animate(params.percentage / 100);
   }
  }, {
   offset: '95%',
   triggerOnce: true
  });
 }
 var paeMaps = function($scope, $) {
  var id = $scope[0].dataset.id;
  var container = $scope.find('.pae-maps-container');
  var params = container.data('params');
  var markers = container.data('markers');
  var custom_style = container.data('custom-style');
  var map = $scope.find('.pae-map');
  if (typeof google !== 'undefined') {
   map.attr('id', 'pae-google-map-' + id);
   var google_map = new GMaps({
    div: '#pae-google-map-' + id,
    lat: params.lat,
    lng: params.lng,
    zoom: params.zoom,
    mapType: params.maptype,
    gestureHandling: params.gestures,
    mapTypeControl: (params.controls.maptype == 'true') ? true : false,
    zoomControl: (params.controls.zoom == 'true') ? true : false,
    streetViewControl: (params.controls.streetview == 'true') ? true : false,
    fullscreenControl: (params.controls.fullscreen == 'true') ? true : false,
   });
   markers.forEach(function(marker) {
    if (marker.lat && marker.lng) {
     google_map.addMarker({
      lat: marker.lat,
      lng: marker.lng,
      icon: (marker.icon == "") ? "" : pae.url + 'assets/img/marker_' + marker.icon + '.png',
      title: marker.title,
      infoWindow: {
       content: '<div class="pae-map-info"><h6 style="margin: 0;">' + marker.title + '</h6><p style="margin-bottom: 0;">' + marker.content + '</p></div>'
      }
     });
    }
   });
   if (custom_style != "") {
    google_map.addStyle({
     styledMapName: "Styled Map",
     styles: custom_style,
     mapTypeId: "map_style"
    });
    google_map.setStyle("map_style");
   }
  } else {
   map.css({
    'background-image': 'url(' + pae.url + 'assets/img/google-map-placeholder.jpg)',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'cover'
   });
  }
 }
 var paeImageCompare = function($scope, $) {
  var widgetId = $scope[0].dataset.id;
  var compareDiv = $scope.find('.pae-imagecompare');
  var params = compareDiv.data('params');
  compareDiv.addClass('pae-widget-' + widgetId);
  var compare = new Comparimg('.pae-widget-' + widgetId, [params.before, params.after], {
   position: params.position.toString(),
   mode: params.mode
  });
  $($scope).find('.cimg-slider-left').html('<i class="' + ((params.mode == 'horizontal') ? params.arrowleft : params.arrowtop) + '"></i>');
  $($scope).find('.cimg-slider-right').html('<i class="' + ((params.mode == 'horizontal') ? params.arrowright : params.arrowbottom) + '"></i>');
 }
 var paePopups = function($scope, $) {
  var id = $scope[0].dataset.id;
  var wrapper = $scope.find('.pae-popup-wrapper');
  var popup = $scope.find('.pae-popup');
  var modal = popup.data('modal');
  wrapper.addClass('pae-popup-' + id);
  $('.elementor-widget-prime_popups').css('visibility', 'visible');
  $scope.find('.pae-popup').iziModal('destroy');
  popup.iziModal({
   title: modal.title,
   subtitle: modal.subtitle,
   width: modal.width,
   borderBottom: false,
   openFullscreen: (modal.fullscreen === 'true') ? true : false,
   closeOnEscape: (modal.closeonesc === 'true') ? true : false,
   headerColor: modal.headercolor,
   background: modal.contentbg,
   overlayColor: modal.overlaycolor,
   radius: modal.borderradius,
   appendTo: '.pae-popup-' + id,
   appendToOverlay: '.pae-popup-' + id,
   transitionIn: modal.animation
  });
  if (modal.appear == 'onclick' && modal.targetclass !== '') {
   $('.' + modal.targetclass).on('click', function() {
    popup.iziModal('open');
   });
  }
  if (modal.appear == 'onclick' && modal.targetid !== '') {
   $('#' + modal.targetid).on('click', function() {
    popup.iziModal('open');
   });
  }
  if (modal.appear == 'onload' || modal.appear == 'delay') {
   var delay = (modal.appear === 'onload') ? 0 : modal.delay;
   setTimeout(function() {
    popup.iziModal('open');
   }, delay * 1000);
  }
 };
 var paeProgress = function($scope, $) {
  var progress = $scope.find('.pae-progress__complete');
  var value = progress.data('value'),
   total = progress.data('total'),
   animate = progress.data('animate');
  var text = ($scope.find('.pae-progress__percent')[0]) ? $scope.find('.pae-progress__percent').data('text') : "";
  var duration = (animate === 'yes') ? 2000 : 0;
  var percent = Math.ceil((value / total) * 100);
  var stepn = 0;
  jQuery.extend(jQuery.easing, {
   easeInOutCirc: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
   }
  });
  elementorFrontend.waypoint(progress, function(direction) {
   var opts = {
    duration: duration,
    easing: 'easeInOutCirc',
    step: function(num) {
     stepn = Math.ceil(total * (num / 100));
     stepn = Math.min(stepn, value);
     var ftext = text.replace('{value}', stepn.toLocaleString());
     ftext = ftext.replace('{total}', total.toLocaleString());
     $scope.find('.pae-progress__percent').html(ftext);
    }
   };
   $scope.find('.pae-progress-bar-horizontal .pae-progress__complete').animate({
    width: percent + '%'
   }, opts);
   $scope.find('.pae-progress-bar-vertical .pae-progress__complete').animate({
    height: percent + '%'
   }, opts);
  }, {
   offset: '95%',
   triggerOnce: true
  });
 }
 var paeScrollNav = function($scope, $) {
  var params = $scope.find('.pae-scrollnav-wrapper').data('params');
  var dots = $scope.find('.pae-scrollnav-dot');
  var sections = [];
  var isScrolling = false;
  jQuery.extend(jQuery.easing, {
   easeInOutCirc: function(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
   }
  });
  dots.each(function() {
   var sectionId = $(this).data('scroll'),
    $section = $('#' + sectionId);
   if ($section[0]) {
    sections[sectionId] = {
     selector: $section,
     offset: Math.round($section.offset().top),
     height: $section.outerHeight(),
    };
   }
  });
  dots.click(function() {
   var sectionId = $(this).data('scroll');
   if (!sections.hasOwnProperty(sectionId)) {
    return false;
   }
   var offset = sections[sectionId].offset - params.offset;
   if (!isScrolling) {
    isScrolling = true;
    dots.removeClass('active');
    $(this).addClass('active');
    $('html, body').animate({
     'scrollTop': offset
    }, params.speed, 'easeInOutCirc', function() {
     isScrolling = false;
    });
   }
  })
  for (var section in sections) {
   var $section = sections[section].selector;
   elementorFrontend.waypoint($section, function(direction) {
    var $this = $(this),
     sectionId = $this.attr('id');
    if ('down' === direction && !isScrolling) {
     window.history.pushState(null, null, '#' + sectionId);
     currentSection = sectionId;
     dots.removeClass('active');
     $('[data-scroll=' + sectionId + ']').addClass('active');
    }
   }, {
    offset: '95%',
    triggerOnce: false
   });
   elementorFrontend.waypoint($section, function(direction) {
    var $this = $(this),
     sectionId = $this.attr('id');
    if ('up' === direction && !isScrolling) {
     window.history.pushState(null, null, '#' + sectionId);
     currentSection = sectionId;
     dots.removeClass('active');
     $('[data-scroll=' + sectionId + ']').addClass('active');
    }
   }, {
    offset: '0%',
    triggerOnce: false
   });
  }
 }
 var paeSwitcher = function($scope, $) {
  var self = $scope;
  var wrapper = self.find('.pae-switcher-wrapper');
  var handler = self.find('.pae-switcher-handler');
  var activeItem = self.find('.pae-switcher-text').first();
  var items = self.find('.pae-switcher-text');
  var tabs = self.find('.pae-switcher-tab');
  activeItem.addClass('active');
  movePos(activeItem);
  handler.css('opacity', 1);

  function movePos(item) {
   var width = item.outerWidth() - 6;
   var offset = item.position().left + 3;
   handler.css('width', width + 'px');
   handler.css('transform', 'translateX(' + offset + 'px');
   tabs.removeClass('active');
   var curid = item.data('id');
   self.find('.pae-st-' + curid).addClass('active');
  }
  if (wrapper.hasClass('pae-switcher-switch')) {
   items.click(function() {
    movePos($(this));
    items.removeClass('active');
    $(this).addClass('active');
   });
  }
  if (wrapper.hasClass('pae-switcher-toggle')) {
   self.find('.pae-switcher').click(function() {
    movePos(items.not('.active'));
    items.toggleClass('active');
   });
  }
 }
 var paeTabs = function($scope, $) {
  var tabs = $scope.find('ul.pae-tabs li');
  var items = $scope.find('.pae-tab-item');
  tabs.eq(0).addClass('active');
  items.eq(0).addClass('active');
  tabs.click(function() {
   var index = $(this).index();
   tabs.removeClass('active');
   $(this).addClass('active');
   items.not(':eq(' + index + ')').removeClass('active');
   items.eq(index).addClass('active');
  });
 }
 var paeTestimonial = function($scope, $) {
  var testimonials = $scope.find('.pae-testimonials');
  var settings = testimonials.data('slider');
  testimonials.owlCarousel({
   items: settings.slides,
   loop: (settings.loop === 'true') ? true : false,
   autoplay: (settings.autoplay === 'true') ? true : false,
   margin: settings.margin,
   center: (settings.center === 'true') ? true : false,
   dots: (settings.dots === 'true') ? true : false
  });
 }
 var paeToolTip = function($scope, $) {
  var id = $scope[0].dataset.id;
  var widget = $scope.find('.pae-tooltip');
  var params = widget.data('params');
  var element = document.querySelector('.elementor-element-' + id);
  var targets = [];
  widget.addClass('pae-tooltip-' + id);
  if (params.targetid) {
   targets.push('#' + params.targetid);
   $('#' + params.targetid).addClass('elementor-element-' + id);
   if (element._tippy) {
    element._tippy.destroy();
   }
  }
  if (params.targetclass) {
   targets.push('.' + params.targetclass);
   $('.' + params.targetclass).addClass('elementor-element-' + id);
   if (element._tippy) {
    element._tippy.destroy();
   }
  }
  if (!params.targetid && !params.targetclass) {
   targets.push('.elementor-element-' + id);
  }
  targets.forEach(function(target) {
   var tip = document.querySelector(target);
   if (tip && tip._tippy) {
    tip._tippy.destroy();
   }
   tippy.one(target, {
    placement: params.position,
    dynamicTitle: true,
    arrow: true,
    size: params.size,
    animation: params.animation,
    distance: params.distance,
    trigger: params.trigger.replace('-', ' '),
    appendTo: $(target)[0]
   });
   $(target).attr('title', params.text);
  });
 };
 $(window).on('elementor/frontend/init', function() {
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_accordion.default', paeAccordion);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_animatedtext.default', paeAnimatedText);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_audio.default', paeAudio);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_circleprogress.default', paeCircleProgress);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_maps.default', paeMaps);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_imagecompare.default', paeImageCompare);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_popups.default', paePopups);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_progress.default', paeProgress);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_scrollnav.default', paeScrollNav);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_switcher.default', paeSwitcher);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_tabs.default', paeTabs);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_testimonial.default', paeTestimonial);
  elementorFrontend.hooks.addAction('frontend/element_ready/prime_tooltip.default', paeToolTip);
 });
})(jQuery);
(function($) {
 'use strict';
 if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
  return;
 }
 wpcf7 = $.extend({
  cached: 0,
  inputs: []
 }, wpcf7);
 $(function() {
  wpcf7.supportHtml5 = (function() {
   var features = {};
   var input = document.createElement('input');
   features.placeholder = 'placeholder' in input;
   var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
   $.each(inputTypes, function(index, value) {
    input.setAttribute('type', value);
    features[value] = input.type !== 'text';
   });
   return features;
  })();
  $('div.wpcf7 > form').each(function() {
   var $form = $(this);
   wpcf7.initForm($form);
   if (wpcf7.cached) {
    wpcf7.refill($form);
   }
  });
 });
 wpcf7.getId = function(form) {
  return parseInt($('input[name="_wpcf7"]', form).val(), 10);
 };
 wpcf7.initForm = function(form) {
  var $form = $(form);
  $form.submit(function(event) {
   if (!wpcf7.supportHtml5.placeholder) {
    $('[placeholder].placeheld', $form).each(function(i, n) {
     $(n).val('').removeClass('placeheld');
    });
   }
   if (typeof window.FormData === 'function') {
    wpcf7.submit($form);
    event.preventDefault();
   }
  });
  $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
  wpcf7.toggleSubmit($form);
  $form.on('click', '.wpcf7-acceptance', function() {
   wpcf7.toggleSubmit($form);
  });
  $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
   var name = $(this).attr('name');
   $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
  });
  $('.wpcf7-list-item.has-free-text', $form).each(function() {
   var $freetext = $(':input.wpcf7-free-text', this);
   var $wrap = $(this).closest('.wpcf7-form-control');
   if ($(':checkbox, :radio', this).is(':checked')) {
    $freetext.prop('disabled', false);
   } else {
    $freetext.prop('disabled', true);
   }
   $wrap.on('change', ':checkbox, :radio', function() {
    var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
    if ($cb.is(':checked')) {
     $freetext.prop('disabled', false).focus();
    } else {
     $freetext.prop('disabled', true);
    }
   });
  });
  if (!wpcf7.supportHtml5.placeholder) {
   $('[placeholder]', $form).each(function() {
    $(this).val($(this).attr('placeholder'));
    $(this).addClass('placeheld');
    $(this).focus(function() {
     if ($(this).hasClass('placeheld')) {
      $(this).val('').removeClass('placeheld');
     }
    });
    $(this).blur(function() {
     if ('' === $(this).val()) {
      $(this).val($(this).attr('placeholder'));
      $(this).addClass('placeheld');
     }
    });
   });
  }
  if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
   $form.find('input.wpcf7-date[type="date"]').each(function() {
    $(this).datepicker({
     dateFormat: 'yy-mm-dd',
     minDate: new Date($(this).attr('min')),
     maxDate: new Date($(this).attr('max'))
    });
   });
  }
  if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
   $form.find('input.wpcf7-number[type="number"]').each(function() {
    $(this).spinner({
     min: $(this).attr('min'),
     max: $(this).attr('max'),
     step: $(this).attr('step')
    });
   });
  }
  $('.wpcf7-character-count', $form).each(function() {
   var $count = $(this);
   var name = $count.attr('data-target-name');
   var down = $count.hasClass('down');
   var starting = parseInt($count.attr('data-starting-value'), 10);
   var maximum = parseInt($count.attr('data-maximum-value'), 10);
   var minimum = parseInt($count.attr('data-minimum-value'), 10);
   var updateCount = function(target) {
    var $target = $(target);
    var length = $target.val().length;
    var count = down ? starting - length : length;
    $count.attr('data-current-value', count);
    $count.text(count);
    if (maximum && maximum < length) {
     $count.addClass('too-long');
    } else {
     $count.removeClass('too-long');
    }
    if (minimum && length < minimum) {
     $count.addClass('too-short');
    } else {
     $count.removeClass('too-short');
    }
   };
   $(':input[name="' + name + '"]', $form).each(function() {
    updateCount(this);
    $(this).keyup(function() {
     updateCount(this);
    });
   });
  });
  $form.on('change', '.wpcf7-validates-as-url', function() {
   var val = $.trim($(this).val());
   if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
    val = val.replace(/^\/+/, '');
    val = 'http://' + val;
   }
   $(this).val(val);
  });
 };
 wpcf7.submit = function(form) {
  if (typeof window.FormData !== 'function') {
   return;
  }
  var $form = $(form);
  $('.ajax-loader', $form).addClass('is-active');
  wpcf7.clearResponse($form);
  var formData = new FormData($form.get(0));
  var detail = {
   id: $form.closest('div.wpcf7').attr('id'),
   status: 'init',
   inputs: [],
   formData: formData
  };
  $.each($form.serializeArray(), function(i, field) {
   if ('_wpcf7' == field.name) {
    detail.contactFormId = field.value;
   } else if ('_wpcf7_version' == field.name) {
    detail.pluginVersion = field.value;
   } else if ('_wpcf7_locale' == field.name) {
    detail.contactFormLocale = field.value;
   } else if ('_wpcf7_unit_tag' == field.name) {
    detail.unitTag = field.value;
   } else if ('_wpcf7_container_post' == field.name) {
    detail.containerPostId = field.value;
   } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
    var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
    detail.inputs.push({
     name: owner + '-free-text',
     value: field.value
    });
   } else if (field.name.match(/^_/)) {} else {
    detail.inputs.push(field);
   }
  });
  wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
  var ajaxSuccess = function(data, status, xhr, $form) {
   detail.id = $(data.into).attr('id');
   detail.status = data.status;
   detail.apiResponse = data;
   var $message = $('.wpcf7-response-output', $form);
   switch (data.status) {
    case 'validation_failed':
     $.each(data.invalidFields, function(i, n) {
      $(n.into, $form).each(function() {
       wpcf7.notValidTip(this, n.message);
       $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
       $('[aria-invalid]', this).attr('aria-invalid', 'true');
      });
     });
     $message.addClass('wpcf7-validation-errors');
     $form.addClass('invalid');
     wpcf7.triggerEvent(data.into, 'invalid', detail);
     break;
    case 'acceptance_missing':
     $message.addClass('wpcf7-acceptance-missing');
     $form.addClass('unaccepted');
     wpcf7.triggerEvent(data.into, 'unaccepted', detail);
     break;
    case 'spam':
     $message.addClass('wpcf7-spam-blocked');
     $form.addClass('spam');
     wpcf7.triggerEvent(data.into, 'spam', detail);
     break;
    case 'aborted':
     $message.addClass('wpcf7-aborted');
     $form.addClass('aborted');
     wpcf7.triggerEvent(data.into, 'aborted', detail);
     break;
    case 'mail_sent':
     $message.addClass('wpcf7-mail-sent-ok');
     $form.addClass('sent');
     wpcf7.triggerEvent(data.into, 'mailsent', detail);
     break;
    case 'mail_failed':
     $message.addClass('wpcf7-mail-sent-ng');
     $form.addClass('failed');
     wpcf7.triggerEvent(data.into, 'mailfailed', detail);
     break;
    default:
     var customStatusClass = 'custom-' +
      data.status.replace(/[^0-9a-z]+/i, '-');
     $message.addClass('wpcf7-' + customStatusClass);
     $form.addClass(customStatusClass);
   }
   wpcf7.refill($form, data);
   wpcf7.triggerEvent(data.into, 'submit', detail);
   if ('mail_sent' == data.status) {
    $form.each(function() {
     this.reset();
    });
    wpcf7.toggleSubmit($form);
   }
   if (!wpcf7.supportHtml5.placeholder) {
    $form.find('[placeholder].placeheld').each(function(i, n) {
     $(n).val($(n).attr('placeholder'));
    });
   }
   $message.html('').append(data.message).slideDown('fast');
   $message.attr('role', 'alert');
   $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
    var $response = $(this);
    $response.html('').attr('role', '').append(data.message);
    if (data.invalidFields) {
     var $invalids = $('<ul></ul>');
     $.each(data.invalidFields, function(i, n) {
      if (n.idref) {
       var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
      } else {
       var $li = $('<li></li>').append(n.message);
      }
      $invalids.append($li);
     });
     $response.append($invalids);
    }
    $response.attr('role', 'alert').focus();
   });
  };
  $.ajax({
   type: 'POST',
   url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
  }).done(function(data, status, xhr) {
   ajaxSuccess(data, status, xhr, $form);
   $('.ajax-loader', $form).removeClass('is-active');
  }).fail(function(xhr, status, error) {
   var $e = $('<div class="ajax-error"></div>').text(error.message);
   $form.after($e);
  });
 };
 wpcf7.triggerEvent = function(target, name, detail) {
  var $target = $(target);
  var event = new CustomEvent('wpcf7' + name, {
   bubbles: true,
   detail: detail
  });
  $target.get(0).dispatchEvent(event);
  $target.trigger('wpcf7:' + name, detail);
  $target.trigger(name + '.wpcf7', detail);
 };
 wpcf7.toggleSubmit = function(form, state) {
  var $form = $(form);
  var $submit = $('input:submit', $form);
  if (typeof state !== 'undefined') {
   $submit.prop('disabled', !state);
   return;
  }
  if ($form.hasClass('wpcf7-acceptance-as-validation')) {
   return;
  }
  $submit.prop('disabled', false);
  $('.wpcf7-acceptance', $form).each(function() {
   var $span = $(this);
   var $input = $('input:checkbox', $span);
   if (!$span.hasClass('optional')) {
    if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
     $submit.prop('disabled', true);
     return false;
    }
   }
  });
 };
 wpcf7.notValidTip = function(target, message) {
  var $target = $(target);
  $('.wpcf7-not-valid-tip', $target).remove();
  $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
  if ($target.is('.use-floating-validation-tip *')) {
   var fadeOut = function(target) {
    $(target).not(':hidden').animate({
     opacity: 0
    }, 'fast', function() {
     $(this).css({
      'z-index': -100
     });
    });
   };
   $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
    fadeOut(this);
   });
   $target.on('focus', ':input', function() {
    fadeOut($('.wpcf7-not-valid-tip', $target));
   });
  }
 };
 wpcf7.refill = function(form, data) {
  var $form = $(form);
  var refillCaptcha = function($form, items) {
   $.each(items, function(i, n) {
    $form.find(':input[name="' + i + '"]').val('');
    $form.find('img.wpcf7-captcha-' + i).attr('src', n);
    var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
    $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
   });
  };
  var refillQuiz = function($form, items) {
   $.each(items, function(i, n) {
    $form.find(':input[name="' + i + '"]').val('');
    $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
    $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
   });
  };
  if (typeof data === 'undefined') {
   $.ajax({
    type: 'GET',
    url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
    beforeSend: function(xhr) {
     var nonce = $form.find(':input[name="_wpnonce"]').val();
     if (nonce) {
      xhr.setRequestHeader('X-WP-Nonce', nonce);
     }
    },
    dataType: 'json'
   }).done(function(data, status, xhr) {
    if (data.captcha) {
     refillCaptcha($form, data.captcha);
    }
    if (data.quiz) {
     refillQuiz($form, data.quiz);
    }
   });
  } else {
   if (data.captcha) {
    refillCaptcha($form, data.captcha);
   }
   if (data.quiz) {
    refillQuiz($form, data.quiz);
   }
  }
 };
 wpcf7.clearResponse = function(form) {
  var $form = $(form);
  $form.removeClass('invalid spam sent failed');
  $form.siblings('.screen-reader-response').html('').attr('role', '');
  $('.wpcf7-not-valid-tip', $form).remove();
  $('[aria-invalid]', $form).attr('aria-invalid', 'false');
  $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
  $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
 };
 wpcf7.apiSettings.getRoute = function(path) {
  var url = wpcf7.apiSettings.root;
  url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
  return url;
 };
})(jQuery);
(function() {
 if (typeof window.CustomEvent === "function") return false;

 function CustomEvent(event, params) {
  params = params || {
   bubbles: false,
   cancelable: false,
   detail: undefined
  };
  var evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
  return evt;
 }
 CustomEvent.prototype = window.Event.prototype;
 window.CustomEvent = CustomEvent;
})();
var edd_scripts;

function edd_load_gateway(payment_mode) {
 jQuery(".edd-cart-ajax").show(), jQuery("#edd_purchase_form_wrap").html('<span class="edd-loading-ajax edd-loading"></span>');
 var nonce = jQuery("#edd-gateway-" + payment_mode).data(payment_mode + "-nonce"),
  url = edd_scripts.ajaxurl;
 0 < url.indexOf("?") ? url += "&" : url += "?", url = url + "payment-mode=" + payment_mode, jQuery.post(url, {
  action: "edd_load_gateway",
  edd_payment_mode: payment_mode,
  nonce: nonce
 }, function(response) {
  jQuery("#edd_purchase_form_wrap").html(response), jQuery(".edd-no-js").hide(), jQuery("body").trigger("edd_gateway_loaded", [payment_mode])
 })
}
jQuery(document).ready(function($) {
 if ($(".edd-no-js").hide(), $("a.edd-add-to-cart").addClass("edd-has-js"), $(document.body).on("click.eddRemoveFromCart", ".edd-remove-from-cart", function(event) {
   var $this = $(this),
    item = $this.data("cart-item"),
    action = $this.data("action"),
    id = $this.data("download-id"),
    nonce = $this.data("nonce"),
    data = {
     action: action,
     cart_item: item,
     nonce: nonce
    };
   return $.ajax({
    type: "POST",
    data: data,
    dataType: "json",
    url: edd_scripts.ajaxurl,
    xhrFields: {
     withCredentials: !0
    },
    success: function(response) {
     if (response.removed) {
      if (parseInt(edd_scripts.position_in_cart, 10) === parseInt(item, 10) || edd_scripts.has_purchase_links) return window.location = window.location, !1;
      $(".edd-cart").each(function() {
       $(this).find("[data-cart-item='" + item + "']").parent().remove()
      }), $(".edd-cart").each(function() {
       var cart_item_counter = 0;
       $(this).find("[data-cart-item]").each(function() {
        $(this).attr("data-cart-item", cart_item_counter), cart_item_counter += 1
       })
      }), $("[id^=edd_purchase_" + id + "]").length && ($("[id^=edd_purchase_" + id + "] .edd_go_to_checkout").hide(), $("[id^=edd_purchase_" + id + "] a.edd-add-to-cart").show().removeAttr("data-edd-loading"), "1" == edd_scripts.quantities_enabled && $("[id^=edd_purchase_" + id + "] .edd_download_quantity_wrapper").show()), $("span.edd-cart-quantity").text(response.cart_quantity), $(document.body).trigger("edd_quantity_updated", [response.cart_quantity]), edd_scripts.taxes_enabled && ($(".cart_item.edd_subtotal span").html(response.subtotal), $(".cart_item.edd_cart_tax span").html(response.tax)), $(".cart_item.edd_total span").html(response.total), 0 == response.cart_quantity && ($(".cart_item.edd_subtotal,.edd-cart-number-of-items,.cart_item.edd_checkout,.cart_item.edd_cart_tax,.cart_item.edd_total").hide(), $(".edd-cart").each(function() {
       var cart_wrapper = $(this).parent();
       cart_wrapper && (cart_wrapper.addClass("cart-empty"), cart_wrapper.removeClass("cart-not-empty")), $(this).append('<li class="cart_item empty">' + edd_scripts.empty_cart_message + "</li>")
      })), $(document.body).trigger("edd_cart_item_removed", [response])
     }
    }
   }).fail(function(response) {
    window.console && window.console.log && console.log(response)
   }).done(function(response) {}), !1
  }), $(document.body).on("click.eddAddToCart", ".edd-add-to-cart", function(e) {
   e.preventDefault();
   var $this = $(this),
    form = $this.closest("form");
   $this.prop("disabled", !0);
   $this.find(".edd-loading");
   var container = $this.closest("div");
   $this.attr("data-edd-loading", "");
   form = $this.parents("form").last();
   var download = $this.data("download-id"),
    variable_price = $this.data("variable-price"),
    price_mode = $this.data("price-mode"),
    nonce = $this.data("nonce"),
    item_price_ids = [],
    free_items = !0;
   if ("yes" == variable_price)
    if (0 < form.find(".edd_price_option_" + download + '[type="hidden"]').length) item_price_ids[0] = $(".edd_price_option_" + download, form).val(), form.find(".edd-submit").data("price") && 0 < form.find(".edd-submit").data("price") && (free_items = !1);
    else {
     if (!form.find(".edd_price_option_" + download + ":checked", form).length) return $this.removeAttr("data-edd-loading"), alert(edd_scripts.select_option), e.stopPropagation(), $this.prop("disabled", !1), !1;
     form.find(".edd_price_option_" + download + ":checked", form).each(function(index) {
      if (item_price_ids[index] = $(this).val(), !0 === free_items) {
       var item_price = $(this).data("price");
       item_price && 0 < item_price && (free_items = !1)
      }
     })
    }
   else item_price_ids[0] = download, $this.data("price") && 0 < $this.data("price") && (free_items = !1);
   if (free_items && form.find(".edd_action_input").val("add_to_cart"), "straight_to_gateway" == form.find(".edd_action_input").val()) return form.submit(), !0;
   var data = {
    action: $this.data("action"),
    download_id: download,
    price_ids: item_price_ids,
    post_data: $(form).serialize(),
    nonce: nonce
   };
   return $.ajax({
    type: "POST",
    data: data,
    dataType: "json",
    url: edd_scripts.ajaxurl,
    xhrFields: {
     withCredentials: !0
    },
    success: function(response) {
     var store_redirect = "1" == edd_scripts.redirect_to_checkout,
      item_redirect = "1" == form.find("#edd_redirect_to_checkout").val();
     if (store_redirect && item_redirect || !store_redirect && item_redirect) window.location = edd_scripts.checkout_page;
     else {
      "1" === edd_scripts.taxes_enabled && ($(".cart_item.edd_subtotal").show(), $(".cart_item.edd_cart_tax").show()), $(".cart_item.edd_total").show(), $(".cart_item.edd_checkout").show(), $(".cart_item.empty").length && $(".cart_item.empty").hide(), $(".widget_edd_cart_widget .edd-cart").each(function(cart) {
       var target = $(this).find(".edd-cart-meta:first");
       $(response.cart_item).insertBefore(target);
       var cart_wrapper = $(this).parent();
       cart_wrapper && (cart_wrapper.addClass("cart-not-empty"), cart_wrapper.removeClass("cart-empty"))
      }), "1" === edd_scripts.taxes_enabled && ($(".edd-cart-meta.edd_subtotal span").html(response.subtotal), $(".edd-cart-meta.edd_cart_tax span").html(response.tax)), $(".edd-cart-meta.edd_total span").html(response.total);
      $(".edd-cart-item-title", response.cart_item).length;
      if ($("span.edd-cart-quantity").each(function() {
        $(this).text(response.cart_quantity), $(document.body).trigger("edd_quantity_updated", [response.cart_quantity])
       }), "none" == $(".edd-cart-number-of-items").css("display") && $(".edd-cart-number-of-items").show("slow"), "no" != variable_price && "multi" == price_mode || ($("a.edd-add-to-cart", container).toggle(), $(".edd_go_to_checkout", container).css("display", "inline-block")), "multi" == price_mode && $this.removeAttr("data-edd-loading"), $(".edd_download_purchase_form").length && ("no" == variable_price || !form.find(".edd_price_option_" + download).is("input:hidden"))) {
       var parent_form = $('.edd_download_purchase_form *[data-download-id="' + download + '"]').parents("form");
       $("a.edd-add-to-cart", parent_form).hide(), "multi" != price_mode && parent_form.find(".edd_download_quantity_wrapper").slideUp(), $(".edd_go_to_checkout", parent_form).show().removeAttr("data-edd-loading")
      }
      "incart" != response && ($(".edd-cart-added-alert", container).fadeIn(), setTimeout(function() {
       $(".edd-cart-added-alert", container).fadeOut()
      }, 3e3)), $this.prop("disabled", !1), $(document.body).trigger("edd_cart_item_added", [response])
     }
    }
   }).fail(function(response) {
    window.console && window.console.log && console.log(response)
   }).done(function(response) {}), !1
  }), $("#edd_checkout_form_wrap").on("click", ".edd_checkout_register_login", function() {
   var $this = $(this),
    data = {
     action: $this.data("action"),
     nonce: $this.data("nonce")
    };
   return $(".edd-cart-ajax").show(), $.post(edd_scripts.ajaxurl, data, function(checkout_response) {
    $("#edd_checkout_login_register").html(edd_scripts.loading), $("#edd_checkout_login_register").html(checkout_response), $(".edd-cart-ajax").hide()
   }), !1
  }), $(document).on("click", "#edd_purchase_form #edd_login_fields input[type=submit]", function(e) {
   e.preventDefault();
   var complete_purchase_val = $(this).val();
   $(this).val(edd_global_vars.purchase_loading), $(this).after('<span class="edd-loading-ajax edd-loading"></span>');
   var data = {
    action: "edd_process_checkout_login",
    edd_ajax: 1,
    edd_user_login: $("#edd_login_fields #edd_user_login").val(),
    edd_user_pass: $("#edd_login_fields #edd_user_pass").val(),
    edd_login_nonce: $("#edd_login_nonce").val()
   };
   $.post(edd_global_vars.ajaxurl, data, function(data) {
    "success" == $.trim(data) ? ($(".edd_errors").remove(), window.location = edd_scripts.checkout_page) : ($("#edd_login_fields input[type=submit]").val(complete_purchase_val), $(".edd-loading-ajax").remove(), $(".edd_errors").remove(), $("#edd-user-login-submit").before(data))
   })
  }), $("select#edd-gateway, input.edd-gateway").change(function(e) {
   var payment_mode = $("#edd-gateway option:selected, input.edd-gateway:checked").val();
   return "0" == payment_mode || edd_load_gateway(payment_mode), !1
  }), "1" == edd_scripts.is_checkout) {
  var chosen_gateway = !1,
   ajax_needed = !1;
  $("select#edd-gateway, input.edd-gateway").length && (chosen_gateway = $("meta[name='edd-chosen-gateway']").attr("content"), ajax_needed = !0), chosen_gateway || (chosen_gateway = edd_scripts.default_gateway), ajax_needed ? setTimeout(function() {
   edd_load_gateway(chosen_gateway)
  }, 200) : $("body").trigger("edd_gateway_loaded", [chosen_gateway])
 }
 $(document).on("click", "#edd_purchase_form #edd_purchase_submit [type=submit]", function(e) {
  var eddPurchaseform = document.getElementById("edd_purchase_form");
  if ("function" != typeof eddPurchaseform.checkValidity || !1 !== eddPurchaseform.checkValidity()) {
   e.preventDefault();
   var complete_purchase_val = $(this).val();
   $(this).val(edd_global_vars.purchase_loading), $(this).prop("disabled", !0), $(this).after('<span class="edd-loading-ajax edd-loading"></span>'), $.post(edd_global_vars.ajaxurl, $("#edd_purchase_form").serialize() + "&action=edd_process_checkout&edd_ajax=true", function(data) {
    "success" == $.trim(data) ? ($(".edd_errors").remove(), $(".edd-error").hide(), $(eddPurchaseform).submit()) : ($("#edd-purchase-button").val(complete_purchase_val), $(".edd-loading-ajax").remove(), $(".edd_errors").remove(), $(".edd-error").hide(), $(edd_global_vars.checkout_error_anchor).before(data), $("#edd-purchase-button").prop("disabled", !1), $(document.body).trigger("edd_checkout_error", [data]))
   })
  }
 }), $(document.body).on("change", "#edd_cc_address input.card_state, #edd_cc_address select, #edd_address_country", function() {
  var $form, $this = $(this),
   is_checkout = "undefined" != typeof edd_global_vars,
   field_name = "card_state";
  "edd_address_country" == $(this).attr("id") && (field_name = "edd_address_state");
  var state_inputs = document.getElementById(field_name);
  if ("card_state" != $this.attr("id") && null != state_inputs) {
   var nonce = $(this).data("nonce"),
    postData = {
     action: "edd_get_shop_states",
     country: $this.val(),
     field_name: field_name,
     nonce: nonce
    };
   $.ajax({
    type: "POST",
    data: postData,
    url: edd_scripts.ajaxurl,
    xhrFields: {
     withCredentials: !0
    },
    success: function(response) {
     $form = is_checkout ? $("#edd_purchase_form") : $this.closest("form");
     var state_inputs = 'input[name="card_state"], select[name="card_state"], input[name="edd_address_state"], select[name="edd_address_state"]';
     if ("nostates" == $.trim(response)) {
      var text_field = '<input type="text" id=' + field_name + ' name="card_state" class="card-state edd-input required" value=""/>';
      $form.find(state_inputs).replaceWith(text_field)
     } else $form.find(state_inputs).replaceWith(response);
     is_checkout && $(document.body).trigger("edd_cart_billing_address_updated", [response])
    }
   }).fail(function(data) {
    window.console && window.console.log && console.log(data)
   }).done(function(data) {
    is_checkout && recalculate_taxes()
   })
  } else is_checkout && recalculate_taxes();
  return !1
 }), $(document.body).on("change", "#edd_cc_address input[name=card_zip]", function() {
  "undefined" != typeof edd_global_vars && recalculate_taxes()
 })
});
! function(a) {
 a.fn.hoverIntent = function(e, t, n) {
  var o, r, v, i, u = {
   interval: 100,
   sensitivity: 6,
   timeout: 0
  };
  u = "object" == typeof e ? a.extend(u, e) : a.isFunction(t) ? a.extend(u, {
   over: e,
   out: t,
   selector: n
  }) : a.extend(u, {
   over: e,
   out: e,
   selector: t
  });

  function s(e) {
   o = e.pageX, r = e.pageY
  }

  function h(e) {
   var t = a.extend({}, e),
    n = this;
   n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)), "mouseenter" === e.type ? (v = t.pageX, i = t.pageY, a(n).on("mousemove.hoverIntent", s), n.hoverIntent_s || (n.hoverIntent_t = setTimeout(function() {
    I(t, n)
   }, u.interval))) : (a(n).off("mousemove.hoverIntent", s), n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
    ! function(e, t) {
     t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = !1, u.out.apply(t, [e])
    }(t, n)
   }, u.timeout)))
  }
  var I = function(e, t) {
   if (t.hoverIntent_t = clearTimeout(t.hoverIntent_t), Math.sqrt((v - o) * (v - o) + (i - r) * (i - r)) < u.sensitivity) return a(t).off("mousemove.hoverIntent", s), t.hoverIntent_s = !0, u.over.apply(t, [e]);
   v = o, i = r, t.hoverIntent_t = setTimeout(function() {
    I(e, t)
   }, u.interval)
  };
  return this.on({
   "mouseenter.hoverIntent": h,
   "mouseleave.hoverIntent": h
  }, u.selector)
 }
}(jQuery);
/*! Max Mega Menu jQuery Plugin */
(function($) {
 "use strict";
 $.maxmegamenu = function(menu, options) {
  var plugin = this;
  var $menu = $(menu);
  var $toggle_bar = $menu.siblings(".mega-menu-toggle");
  var html_body_class_timeout;
  var defaults = {
   event: $menu.attr("data-event"),
   effect: $menu.attr("data-effect"),
   effect_speed: parseInt($menu.attr("data-effect-speed")),
   effect_mobile: $menu.attr("data-effect-mobile"),
   effect_speed_mobile: parseInt($menu.attr("data-effect-speed-mobile")),
   panel_width: $menu.attr("data-panel-width"),
   panel_inner_width: $menu.attr("data-panel-inner-width"),
   mobile_force_width: $menu.attr("data-mobile-force-width"),
   mobile_overlay: $menu.attr("data-mobile-overlay"),
   second_click: $menu.attr("data-second-click"),
   vertical_behaviour: $menu.attr("data-vertical-behaviour"),
   document_click: $menu.attr("data-document-click"),
   breakpoint: $menu.attr("data-breakpoint"),
   unbind_events: $menu.attr("data-unbind")
  };
  plugin.settings = {};
  var items_with_submenus = $("li.mega-menu-megamenu.mega-menu-item-has-children," + "li.mega-menu-flyout.mega-menu-item-has-children," + "li.mega-menu-tabbed > ul.mega-sub-menu > li.mega-menu-item-has-children," + "li.mega-menu-flyout li.mega-menu-item-has-children", menu);
  plugin.addAnimatingClass = function(element) {
   if (plugin.settings.effect === "disabled") {
    return;
   }
   $(".mega-animating").removeClass("mega-animating");
   var timeout = plugin.settings.effect_speed + parseInt(megamenu.timeout, 10);
   element.addClass("mega-animating");
   setTimeout(function() {
    element.removeClass("mega-animating");
   }, timeout);
  };
  plugin.hideAllPanels = function() {
   $(".mega-toggle-on > a.mega-menu-link", $menu).each(function() {
    plugin.hidePanel($(this), false);
   });
  };
  plugin.hideSiblingPanels = function(anchor, immediate) {
   anchor.parent().parent().find(".mega-toggle-on").children("a.mega-menu-link").each(function() {
    plugin.hidePanel($(this), immediate);
   });
  };
  plugin.isDesktopView = function() {
   return Math.max(window.outerWidth, $(window).width()) > plugin.settings.breakpoint;
  };
  plugin.isMobileView = function() {
   return !plugin.isDesktopView();
  };
  plugin.showPanel = function(anchor) {
   anchor.parent().triggerHandler("before_open_panel");
   anchor.attr("aria-expanded", "true");
   $(".mega-animating").removeClass("mega-animating");
   if (plugin.isMobileView() && anchor.parent().hasClass("mega-hide-sub-menu-on-mobile")) {
    return;
   }
   if (plugin.isDesktopView() && ($menu.hasClass("mega-menu-horizontal") || $menu.hasClass("mega-menu-vertical")) && !anchor.parent().hasClass("mega-collapse-children")) {
    plugin.hideSiblingPanels(anchor, true);
   }
   if ((plugin.isMobileView() && $menu.hasClass("mega-keyboard-navigation")) || plugin.settings.vertical_behaviour === "accordion") {
    plugin.hideSiblingPanels(anchor, false);
   }
   plugin.calculateDynamicSubmenuWidths(anchor);
   if (anchor.parent().hasClass("mega-collapse-children") || plugin.settings.effect === "slide" || (plugin.isMobileView() && (plugin.settings.effect_mobile === "slide" || plugin.settings.effect_mobile === "slide_left" || plugin.settings.effect_mobile === "slide_right"))) {
    var speed = plugin.isMobileView() ? plugin.settings.effect_speed_mobile : plugin.settings.effect_speed;
    anchor.siblings(".mega-sub-menu").css("display", "none").animate({
     "height": "show",
     "paddingTop": "show",
     "paddingBottom": "show",
     "minHeight": "show"
    }, speed, function() {
     $(this).css("display", "");
    });
   }
   anchor.parent().addClass("mega-toggle-on").triggerHandler("open_panel");
  };
  plugin.hidePanel = function(anchor, immediate) {
   anchor.parent().triggerHandler("before_close_panel");
   anchor.attr("aria-expanded", "false");
   if (anchor.parent().hasClass("mega-collapse-children") || (!immediate && plugin.settings.effect === "slide") || (plugin.isMobileView() && (plugin.settings.effect_mobile === "slide" || plugin.settings.effect_mobile === "slide_left" || plugin.settings.effect_mobile === "slide_right"))) {
    var speed = plugin.isMobileView() ? plugin.settings.effect_speed_mobile : plugin.settings.effect_speed;
    anchor.siblings(".mega-sub-menu").animate({
     "height": "hide",
     "paddingTop": "hide",
     "paddingBottom": "hide",
     "minHeight": "hide"
    }, speed, function() {
     anchor.siblings(".mega-sub-menu").css("display", "");
     anchor.parent().removeClass("mega-toggle-on").triggerHandler("close_panel");
    });
    return;
   }
   if (immediate) {
    anchor.siblings(".mega-sub-menu").css("display", "none").delay(plugin.settings.effect_speed).queue(function() {
     $(this).css("display", "").dequeue();
    });
   }
   anchor.siblings(".mega-sub-menu").find(".widget_media_video video").each(function() {
    this.player.pause();
   });
   anchor.parent().removeClass("mega-toggle-on").triggerHandler("close_panel");
   plugin.addAnimatingClass(anchor.parent());
  };
  plugin.calculateDynamicSubmenuWidths = function(anchor) {
   if (anchor.parent().hasClass("mega-menu-megamenu") && anchor.parent().parent().hasClass("max-mega-menu") && plugin.settings.panel_width && $(plugin.settings.panel_width).length > 0) {
    if (plugin.isDesktopView()) {
     var submenu_offset = $menu.offset();
     var target_offset = $(plugin.settings.panel_width).offset();
     anchor.siblings(".mega-sub-menu").css({
      width: $(plugin.settings.panel_width).outerWidth(),
      left: (target_offset.left - submenu_offset.left) + "px"
     });
    } else {
     anchor.siblings(".mega-sub-menu").css({
      width: "",
      left: ""
     });
    }
   }
   if (anchor.parent().hasClass("mega-menu-megamenu") && anchor.parent().parent().hasClass("max-mega-menu") && plugin.settings.panel_inner_width && $(plugin.settings.panel_inner_width).length > 0) {
    var target_width = 0;
    if ($(plugin.settings.panel_inner_width).length) {
     target_width = parseInt($(plugin.settings.panel_inner_width).width(), 10);
    } else {
     target_width = parseInt(plugin.settings.panel_inner_width, 10);
    }
    var submenu_width = parseInt(anchor.siblings(".mega-sub-menu").innerWidth(), 10);
    if (plugin.isDesktopView() && target_width > 0 && target_width < submenu_width) {
     anchor.siblings(".mega-sub-menu").css({
      "paddingLeft": (submenu_width - target_width) / 2 + "px",
      "paddingRight": (submenu_width - target_width) / 2 + "px"
     });
    } else {
     anchor.siblings(".mega-sub-menu").css({
      "paddingLeft": "",
      "paddingRight": ""
     });
    }
   }
  };
  var bindClickEvents = function() {
   var dragging = false;
   $(document).on({
    "touchmove": function(e) {
     dragging = true;
    },
    "touchstart": function(e) {
     dragging = false;
    }
   });
   $(document).on("click touchend", function(e) {
    if (!dragging && plugin.settings.document_click === "collapse" && !$(e.target).closest(".max-mega-menu li").length && !$(e.target).closest(".mega-menu-toggle").length) {
     plugin.hideAllPanels();
     plugin.hideMobileMenu();
    }
    dragging = false;
   });
   var collapse_children_parents = $("li.mega-menu-megamenu li.mega-menu-item-has-children.mega-collapse-children > a.mega-menu-link");
   var clickable_parents = $("> a.mega-menu-link", items_with_submenus).add(collapse_children_parents);
   clickable_parents.on("touchend.megamenu", function(e) {
    plugin.unbindHoverEvents();
    plugin.unbindHoverIntentEvents();
   });
   clickable_parents.on("click.megamenu", function(e) {
    if (plugin.isDesktopView() && $(this).parent().hasClass("mega-toggle-on") && $(this).parent().parent().parent().hasClass("mega-menu-tabbed")) {
     if (plugin.settings.second_click === "go") {
      return;
     } else {
      e.preventDefault();
      return;
     }
    }
    if (dragging) {
     return;
    }
    if (plugin.isMobileView() && $(this).parent().hasClass("mega-hide-sub-menu-on-mobile")) {
     return;
    }
    if ((plugin.settings.second_click === "go" || $(this).parent().hasClass("mega-click-click-go")) && $(this).attr("href") !== undefined) {
     if (!$(this).parent().hasClass("mega-toggle-on")) {
      e.preventDefault();
      plugin.showPanel($(this));
     }
    } else {
     e.preventDefault();
     if ($(this).parent().hasClass("mega-toggle-on")) {
      plugin.hidePanel($(this), false);
     } else {
      plugin.showPanel($(this));
     }
    }
   });
  };
  var bindHoverEvents = function() {
   items_with_submenus.on({
    "mouseenter.megamenu": function() {
     plugin.unbindClickEvents();
     if (!$(this).hasClass("mega-toggle-on")) {
      plugin.showPanel($(this).children("a.mega-menu-link"));
     }
    },
    "mouseleave.megamenu": function() {
     if ($(this).hasClass("mega-toggle-on") && !$(this).hasClass("mega-disable-collapse") && !$(this).parent().parent().hasClass("mega-menu-tabbed")) {
      plugin.hidePanel($(this).children("a.mega-menu-link"), false);
     }
    }
   });
  };
  var bindHoverIntentEvents = function() {
   items_with_submenus.hoverIntent({
    over: function() {
     plugin.unbindClickEvents();
     if (!$(this).hasClass("mega-toggle-on")) {
      plugin.showPanel($(this).children("a.mega-menu-link"));
     }
    },
    out: function() {
     if ($(this).hasClass("mega-toggle-on") && !$(this).hasClass("mega-disable-collapse") && !$(this).parent().parent().hasClass("mega-menu-tabbed")) {
      plugin.hidePanel($(this).children("a.mega-menu-link"), false);
     }
    },
    timeout: megamenu.timeout,
    interval: megamenu.interval
   });
  };
  var bindKeyboardEvents = function() {
   var tab_key = 9;
   var escape_key = 27;
   var enter_key = 13;
   var left_arrow_key = 37;
   var right_arrow_key = 39;
   var space_key = 32;
   $menu.parent().on("keyup.megamenu", function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === tab_key) {
     $menu.parent().addClass("mega-keyboard-navigation");
    }
   });
   $menu.parent().on("keydown.megamenu", function(e) {
    var keyCode = e.keyCode || e.which;
    var active_link = $(e.target);
    if (keyCode === space_key && active_link.is(".mega-menu-link") && $menu.parent().hasClass("mega-keyboard-navigation")) {
     e.preventDefault();
     if (active_link.parent().is(items_with_submenus)) {
      if (active_link.parent().hasClass("mega-toggle-on") && !active_link.parent().parent().parent().hasClass("mega-menu-tabbed")) {
       plugin.hidePanel(active_link);
      } else {
       plugin.showPanel(active_link);
      }
     }
    }
   });
   $menu.parent().on("keyup.megamenu", function(e) {
    var keyCode = e.keyCode || e.which;
    var active_link = $(e.target);
    if (keyCode === tab_key && $menu.parent().hasClass("mega-keyboard-navigation")) {
     if (active_link.parent().is(items_with_submenus) && active_link.is("[href]") !== false) {
      plugin.showPanel(active_link);
     } else {
      if (!active_link.parent().parent().parent().hasClass("mega-menu-tabbed")) {
       plugin.hideSiblingPanels(active_link);
      }
     }
    }
    if (keyCode === escape_key && $menu.parent().hasClass("mega-keyboard-navigation")) {
     var submenu_open = $("> .mega-toggle-on", $menu).length !== 0;
     $("> .mega-toggle-on > a.mega-menu-link", $menu).focus();
     plugin.hideAllPanels();
     if (plugin.isMobileView() && !submenu_open) {
      plugin.hideMobileMenu();
      $(".mega-menu-toggle-block, button.mega-toggle-animated", $toggle_bar).first().focus();
     }
    }
    if (keyCode === enter_key && $menu.parent().hasClass("mega-keyboard-navigation")) {
     if (active_link.hasClass("mega-menu-toggle-block")) {
      if ($toggle_bar.hasClass("mega-menu-open")) {
       plugin.hideMobileMenu();
      } else {
       plugin.showMobileMenu();
      }
     }
     if (active_link.parent().is(items_with_submenus) && active_link.is("[href]") === false) {
      if (active_link.parent().hasClass("mega-toggle-on") && !active_link.parent().parent().parent().hasClass("mega-menu-tabbed")) {
       plugin.hidePanel(active_link);
      } else {
       plugin.showPanel(active_link);
      }
     }
    }
    if (keyCode === right_arrow_key && plugin.isDesktopView() && $menu.parent().hasClass("mega-keyboard-navigation") && $menu.hasClass("mega-menu-horizontal")) {
     var next_top_level_item = $("> .mega-toggle-on", $menu).nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").first();
     if (next_top_level_item.length === 0) {
      next_top_level_item = $(":focus", $menu).parent().nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").first();
     }
     next_top_level_item.focus();
     if (next_top_level_item.parent().is(items_with_submenus) && next_top_level_item.is("[href]") !== false) {
      plugin.showPanel(next_top_level_item);
     } else {
      plugin.hideSiblingPanels(next_top_level_item);
     }
    }
    if (keyCode === left_arrow_key && plugin.isDesktopView() && $menu.parent().hasClass("mega-keyboard-navigation") && $menu.hasClass("mega-menu-horizontal")) {
     var prev_top_level_item = $("> .mega-toggle-on", $menu).prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").last();
     if (prev_top_level_item.length === 0) {
      prev_top_level_item = $(":focus", $menu).parent().prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").last();
     }
     prev_top_level_item.focus();
     if (prev_top_level_item.parent().is(items_with_submenus) && prev_top_level_item.is("[href]") !== false) {
      plugin.showPanel(prev_top_level_item);
     } else {
      plugin.hideSiblingPanels(prev_top_level_item);
     }
    }
   });
   $menu.parent().on("focusout.megamenu", function(e) {
    if ($menu.parent().hasClass("mega-keyboard-navigation")) {
     setTimeout(function() {
      var menu_has_focus = $menu.parent().find(":focus").length > 0;
      if (!menu_has_focus) {
       $menu.parent().removeClass("mega-keyboard-navigation");
       plugin.hideAllPanels();
       plugin.hideMobileMenu();
      }
     }, 10);
    }
   });
  };
  plugin.unbindAllEvents = function() {
   $("ul.mega-sub-menu, li.mega-menu-item, li.mega-menu-row, li.mega-menu-column, a.mega-menu-link, span.mega-indicator", menu).off().unbind();
  };
  plugin.unbindClickEvents = function() {
   $("> a.mega-menu-link", items_with_submenus).off("click.megamenu touchend.megamenu");
  };
  plugin.unbindHoverEvents = function() {
   items_with_submenus.unbind("mouseenter.megamenu mouseleave.megamenu");
  };
  plugin.unbindHoverIntentEvents = function() {
   items_with_submenus.unbind("mouseenter mouseleave").removeProp("hoverIntent_t").removeProp("hoverIntent_s");
  };
  plugin.unbindKeyboardEvents = function() {
   $menu.parent().off("keyup.megamenu keydown.megamenu focusout.megamenu");
  };
  plugin.unbindMegaMenuEvents = function() {
   if (plugin.settings.event === "hover_intent") {
    plugin.unbindHoverIntentEvents();
   }
   if (plugin.settings.event === "hover") {
    plugin.unbindHoverEvents();
   }
   plugin.unbindClickEvents();
   plugin.unbindKeyboardEvents();
  };
  plugin.bindMegaMenuEvents = function() {
   if (plugin.isDesktopView() && plugin.settings.event === "hover_intent") {
    bindHoverIntentEvents();
   }
   if (plugin.isDesktopView() && plugin.settings.event === "hover") {
    bindHoverEvents();
   }
   bindClickEvents();
   bindKeyboardEvents();
  };
  plugin.monitorView = function() {
   if (plugin.isDesktopView()) {
    $menu.data("view", "desktop");
   } else {
    $menu.data("view", "mobile");
    plugin.switchToMobile();
   }
   plugin.checkWidth();
   $(window).resize(function() {
    plugin.checkWidth();
   });
  };
  plugin.checkWidth = function() {
   if (plugin.isMobileView() && $menu.data("view") === "desktop") {
    $menu.data("view", "mobile");
    plugin.switchToMobile();
   }
   if (plugin.isDesktopView() && $menu.data("view") === "mobile") {
    $menu.data("view", "desktop");
    plugin.switchToDesktop();
   }
   plugin.calculateDynamicSubmenuWidths($("> li.mega-menu-megamenu > a.mega-menu-link", $menu));
  };
  plugin.reverseRightAlignedItems = function() {
   if (!$("body").hasClass("rtl")) {
    $menu.append($menu.children("li.mega-item-align-right").get().reverse());
   }
  };
  plugin.addClearClassesToMobileItems = function() {
   $(".mega-menu-row", $menu).each(function() {
    $("> .mega-sub-menu > .mega-menu-column:not(.mega-hide-on-mobile)", $(this)).filter(":even").addClass("mega-menu-clear");
   });
  };
  plugin.switchToMobile = function() {
   plugin.unbindMegaMenuEvents();
   plugin.bindMegaMenuEvents();
   plugin.reverseRightAlignedItems();
   plugin.addClearClassesToMobileItems();
   plugin.hideAllPanels();
  };
  plugin.switchToDesktop = function() {
   plugin.unbindMegaMenuEvents();
   plugin.bindMegaMenuEvents();
   plugin.reverseRightAlignedItems();
   plugin.hideAllPanels();
   $menu.css({
    width: "",
    left: "",
    display: ""
   });
   $toggle_bar.removeClass("mega-menu-open");
  };
  plugin.initToggleBar = function() {
   $toggle_bar.on("click", function(e) {
    if ($(e.target).is(".mega-menu-toggle, .mega-menu-toggle-block, .mega-menu-toggle-animated-block, .mega-menu-toggle-animated-block *, .mega-toggle-blocks-left, .mega-toggle-blocks-center, .mega-toggle-blocks-right, .mega-toggle-label, .mega-toggle-label span")) {
     if ($(this).hasClass("mega-menu-open")) {
      plugin.hideMobileMenu();
     } else {
      plugin.showMobileMenu();
     }
    }
   });
  };
  plugin.hideMobileMenu = function() {
   if (!$toggle_bar.is(":visible")) {
    return;
   }
   html_body_class_timeout = setTimeout(function() {
    $("body").removeClass($menu.attr("id") + "-mobile-open");
    $("html").removeClass($menu.attr("id") + "-off-canvas-open");
   }, plugin.settings.effect_speed_mobile);
   $(".mega-toggle-label, .mega-toggle-animated", $toggle_bar).attr("aria-expanded", "false");
   if (plugin.settings.effect_mobile === "slide") {
    $menu.animate({
     "height": "hide"
    }, plugin.settings.effect_speed_mobile, function() {
     $menu.css({
      width: "",
      left: "",
      display: ""
     });
    });
   }
   $toggle_bar.removeClass("mega-menu-open");
  };
  plugin.showMobileMenu = function() {
   if (!$toggle_bar.is(":visible")) {
    return;
   }
   clearTimeout(html_body_class_timeout);
   $("body").addClass($menu.attr("id") + "-mobile-open");
   if (plugin.settings.effect_mobile === "slide_left" || plugin.settings.effect_mobile === "slide_right") {
    $("html").addClass($menu.attr("id") + "-off-canvas-open");
   }
   $(".mega-toggle-label, .mega-toggle-animated", $toggle_bar).attr("aria-expanded", "true");
   plugin.toggleBarForceWidth();
   if (plugin.settings.effect_mobile === "slide") {
    $menu.animate({
     "height": "show"
    }, plugin.settings.effect_speed_mobile);
   }
   $toggle_bar.addClass("mega-menu-open");
  };
  plugin.toggleBarForceWidth = function() {
   if ($(plugin.settings.mobile_force_width).length && (plugin.settings.effect_mobile == 'slide' || plugin.settings.effect_mobile == 'disabled')) {
    var submenu_offset = $toggle_bar.offset();
    var target_offset = $(plugin.settings.mobile_force_width).offset();
    $menu.css({
     width: $(plugin.settings.mobile_force_width).outerWidth(),
     left: (target_offset.left - submenu_offset.left) + "px"
    });
   }
  };
  plugin.init = function() {
   $menu.triggerHandler("before_mega_menu_init");
   plugin.settings = $.extend({}, defaults, options);
   $menu.removeClass("mega-no-js");
   plugin.initToggleBar();
   if (plugin.settings.unbind_events === "true") {
    plugin.unbindAllEvents();
   }
   $("span.mega-indicator", $menu).on("click.megamenu", function(e) {
    e.preventDefault();
    e.stopPropagation();
    if ($(this).parent().parent().hasClass("mega-toggle-on")) {
     if (!$(this).parent().parent().parent().parent().hasClass("mega-menu-tabbed") || plugin.isMobileView()) {
      plugin.hidePanel($(this).parent(), false);
     }
    } else {
     plugin.showPanel($(this).parent(), false);
    }
   });
   $(window).on("load", function() {
    plugin.calculateDynamicSubmenuWidths($("> li.mega-menu-megamenu > a.mega-menu-link", $menu));
   });
   plugin.bindMegaMenuEvents();
   plugin.monitorView();
   $menu.triggerHandler("after_mega_menu_init");
  };
  plugin.init();
 };
 $.fn.maxmegamenu = function(options) {
  return this.each(function() {
   if (undefined === $(this).data("maxmegamenu")) {
    var plugin = new $.maxmegamenu(this, options);
    $(this).data("maxmegamenu", plugin);
   }
  });
 };
 $(function() {
  $(".max-mega-menu").maxmegamenu();
 });
}(jQuery));
/*!
 * Socket.IO v2.1.0
 * (c) 2014-2018 Guillermo Rauch
 * Released under the MIT License.
 */
! function(t, e) {
 "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e()
}(this, function() {
 return function(t) {
  function e(r) {
   if (n[r]) return n[r].exports;
   var o = n[r] = {
    exports: {},
    id: r,
    loaded: !1
   };
   return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
  }
  var n = {};
  return e.m = t, e.c = n, e.p = "", e(0)
 }([function(t, e, n) {
  "use strict";

  function r(t, e) {
   "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t, t = void 0), e = e || {};
   var n, r = i(t),
    s = r.source,
    p = r.id,
    h = r.path,
    f = u[p] && h in u[p].nsps,
    l = e.forceNew || e["force new connection"] || !1 === e.multiplex || f;
   return l ? (c("ignoring socket cache for %s", s), n = a(s, e)) : (u[p] || (c("new io instance for %s", s), u[p] = a(s, e)), n = u[p]), r.query && !e.query && (e.query = r.query), n.socket(r.path, e)
  }
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
   } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
   },
   i = n(1),
   s = n(7),
   a = n(12),
   c = n(3)("socket.io-client");
  t.exports = e = r;
  var u = e.managers = {};
  e.protocol = s.protocol, e.connect = r, e.Manager = n(12), e.Socket = n(37)
 }, function(t, e, n) {
  (function(e) {
   "use strict";

   function r(t, n) {
    var r = t;
    n = n || e.location, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (i("protocol-less url %s", t), t = "undefined" != typeof n ? n.protocol + "//" + t : "https://" + t), i("parse %s", t), r = o(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
    var s = r.host.indexOf(":") !== -1,
     a = s ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (n && n.port === r.port ? "" : ":" + r.port), r
   }
   var o = n(2),
    i = n(3)("socket.io-client:url");
   t.exports = r
  }).call(e, function() {
   return this
  }())
 }, function(t, e) {
  var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
   r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  t.exports = function(t) {
   var e = t,
    o = t.indexOf("["),
    i = t.indexOf("]");
   o != -1 && i != -1 && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
   for (var s = n.exec(t || ""), a = {}, c = 14; c--;) a[r[c]] = s[c] || "";
   return o != -1 && i != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
  }
 }, function(t, e, n) {
  (function(r) {
   function o() {
    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
   }

   function i(t) {
    var n = this.useColors;
    if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), n) {
     var r = "color: " + this.color;
     t.splice(1, 0, r, "color: inherit");
     var o = 0,
      i = 0;
     t[0].replace(/%[a-zA-Z%]/g, function(t) {
      "%%" !== t && (o++, "%c" === t && (i = o))
     }), t.splice(i, 0, r)
    }
   }

   function s() {
    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
   }

   function a(t) {
    try {
     null == t ? e.storage.removeItem("debug") : e.storage.debug = t
    } catch (n) {}
   }

   function c() {
    var t;
    try {
     t = e.storage.debug
    } catch (n) {}
    return !t && "undefined" != typeof r && "env" in r && (t = r.env.DEBUG), t
   }

   function u() {
    try {
     return window.localStorage
    } catch (t) {}
   }
   e = t.exports = n(5), e.log = s, e.formatArgs = i, e.save = a, e.load = c, e.useColors = o, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.formatters.j = function(t) {
    try {
     return JSON.stringify(t)
    } catch (e) {
     return "[UnexpectedJSONParseError]: " + e.message
    }
   }, e.enable(c())
  }).call(e, n(4))
 }, function(t, e) {
  function n() {
   throw new Error("setTimeout has not been defined")
  }

  function r() {
   throw new Error("clearTimeout has not been defined")
  }

  function o(t) {
   if (p === setTimeout) return setTimeout(t, 0);
   if ((p === n || !p) && setTimeout) return p = setTimeout, setTimeout(t, 0);
   try {
    return p(t, 0)
   } catch (e) {
    try {
     return p.call(null, t, 0)
    } catch (e) {
     return p.call(this, t, 0)
    }
   }
  }

  function i(t) {
   if (h === clearTimeout) return clearTimeout(t);
   if ((h === r || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
   try {
    return h(t)
   } catch (e) {
    try {
     return h.call(null, t)
    } catch (e) {
     return h.call(this, t)
    }
   }
  }

  function s() {
   y && l && (y = !1, l.length ? d = l.concat(d) : m = -1, d.length && a())
  }

  function a() {
   if (!y) {
    var t = o(s);
    y = !0;
    for (var e = d.length; e;) {
     for (l = d, d = []; ++m < e;) l && l[m].run();
     m = -1, e = d.length
    }
    l = null, y = !1, i(t)
   }
  }

  function c(t, e) {
   this.fun = t, this.array = e
  }

  function u() {}
  var p, h, f = t.exports = {};
  ! function() {
   try {
    p = "function" == typeof setTimeout ? setTimeout : n
   } catch (t) {
    p = n
   }
   try {
    h = "function" == typeof clearTimeout ? clearTimeout : r
   } catch (t) {
    h = r
   }
  }();
  var l, d = [],
   y = !1,
   m = -1;
  f.nextTick = function(t) {
   var e = new Array(arguments.length - 1);
   if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
   d.push(new c(t, e)), 1 !== d.length || y || o(a)
  }, c.prototype.run = function() {
   this.fun.apply(null, this.array)
  }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(t) {
   return []
  }, f.binding = function(t) {
   throw new Error("process.binding is not supported")
  }, f.cwd = function() {
   return "/"
  }, f.chdir = function(t) {
   throw new Error("process.chdir is not supported")
  }, f.umask = function() {
   return 0
  }
 }, function(t, e, n) {
  function r(t) {
   var n, r = 0;
   for (n in t) r = (r << 5) - r + t.charCodeAt(n), r |= 0;
   return e.colors[Math.abs(r) % e.colors.length]
  }

  function o(t) {
   function n() {
    if (n.enabled) {
     var t = n,
      r = +new Date,
      i = r - (o || r);
     t.diff = i, t.prev = o, t.curr = r, o = r;
     for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
     s[0] = e.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
     var c = 0;
     s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
      if ("%%" === n) return n;
      c++;
      var o = e.formatters[r];
      if ("function" == typeof o) {
       var i = s[c];
       n = o.call(t, i), s.splice(c, 1), c--
      }
      return n
     }), e.formatArgs.call(t, s);
     var u = n.log || e.log || console.log.bind(console);
     u.apply(t, s)
    }
   }
   var o;
   return n.namespace = t, n.enabled = e.enabled(t), n.useColors = e.useColors(), n.color = r(t), n.destroy = i, "function" == typeof e.init && e.init(n), e.instances.push(n), n
  }

  function i() {
   var t = e.instances.indexOf(this);
   return t !== -1 && (e.instances.splice(t, 1), !0)
  }

  function s(t) {
   e.save(t), e.names = [], e.skips = [];
   var n, r = ("string" == typeof t ? t : "").split(/[\s,]+/),
    o = r.length;
   for (n = 0; n < o; n++) r[n] && (t = r[n].replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
   for (n = 0; n < e.instances.length; n++) {
    var i = e.instances[n];
    i.enabled = e.enabled(i.namespace)
   }
  }

  function a() {
   e.enable("")
  }

  function c(t) {
   if ("*" === t[t.length - 1]) return !0;
   var n, r;
   for (n = 0, r = e.skips.length; n < r; n++)
    if (e.skips[n].test(t)) return !1;
   for (n = 0, r = e.names.length; n < r; n++)
    if (e.names[n].test(t)) return !0;
   return !1
  }

  function u(t) {
   return t instanceof Error ? t.stack || t.message : t
  }
  e = t.exports = o.debug = o["default"] = o, e.coerce = u, e.disable = a, e.enable = s, e.enabled = c, e.humanize = n(6), e.instances = [], e.names = [], e.skips = [], e.formatters = {}
 }, function(t, e) {
  function n(t) {
   if (t = String(t), !(t.length > 100)) {
    var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
    if (e) {
     var n = parseFloat(e[1]),
      r = (e[2] || "ms").toLowerCase();
     switch (r) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
       return n * p;
      case "days":
      case "day":
      case "d":
       return n * u;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
       return n * c;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
       return n * a;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
       return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
       return n;
      default:
       return
     }
    }
   }
  }

  function r(t) {
   return t >= u ? Math.round(t / u) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= s ? Math.round(t / s) + "s" : t + "ms"
  }

  function o(t) {
   return i(t, u, "day") || i(t, c, "hour") || i(t, a, "minute") || i(t, s, "second") || t + " ms"
  }

  function i(t, e, n) {
   if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
  }
  var s = 1e3,
   a = 60 * s,
   c = 60 * a,
   u = 24 * c,
   p = 365.25 * u;
  t.exports = function(t, e) {
   e = e || {};
   var i = typeof t;
   if ("string" === i && t.length > 0) return n(t);
   if ("number" === i && isNaN(t) === !1) return e["long"] ? o(t) : r(t);
   throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
  }
 }, function(t, e, n) {
  function r() {}

  function o(t) {
   var n = "" + t.type;
   if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"), t.nsp && "/" !== t.nsp && (n += t.nsp + ","), null != t.id && (n += t.id), null != t.data) {
    var r = i(t.data);
    if (r === !1) return g;
    n += r
   }
   return f("encoded %j as %s", t, n), n
  }

  function i(t) {
   try {
    return JSON.stringify(t)
   } catch (e) {
    return !1
   }
  }

  function s(t, e) {
   function n(t) {
    var n = d.deconstructPacket(t),
     r = o(n.packet),
     i = n.buffers;
    i.unshift(r), e(i)
   }
   d.removeBlobs(t, n)
  }

  function a() {
   this.reconstructor = null
  }

  function c(t) {
   var n = 0,
    r = {
     type: Number(t.charAt(0))
    };
   if (null == e.types[r.type]) return h("unknown packet type " + r.type);
   if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
    for (var o = "";
     "-" !== t.charAt(++n) && (o += t.charAt(n), n != t.length););
    if (o != Number(o) || "-" !== t.charAt(n)) throw new Error("Illegal attachments");
    r.attachments = Number(o)
   }
   if ("/" === t.charAt(n + 1))
    for (r.nsp = ""; ++n;) {
     var i = t.charAt(n);
     if ("," === i) break;
     if (r.nsp += i, n === t.length) break
    } else r.nsp = "/";
   var s = t.charAt(n + 1);
   if ("" !== s && Number(s) == s) {
    for (r.id = ""; ++n;) {
     var i = t.charAt(n);
     if (null == i || Number(i) != i) {
      --n;
      break
     }
     if (r.id += t.charAt(n), n === t.length) break
    }
    r.id = Number(r.id)
   }
   if (t.charAt(++n)) {
    var a = u(t.substr(n)),
     c = a !== !1 && (r.type === e.ERROR || y(a));
    if (!c) return h("invalid payload");
    r.data = a
   }
   return f("decoded %s as %j", t, r), r
  }

  function u(t) {
   try {
    return JSON.parse(t)
   } catch (e) {
    return !1
   }
  }

  function p(t) {
   this.reconPack = t, this.buffers = []
  }

  function h(t) {
   return {
    type: e.ERROR,
    data: "parser error: " + t
   }
  }
  var f = n(3)("socket.io-parser"),
   l = n(8),
   d = n(9),
   y = n(10),
   m = n(11);
  e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = r, e.Decoder = a;
  var g = e.ERROR + '"encode error"';
  r.prototype.encode = function(t, n) {
   if (f("encoding packet %j", t), e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) s(t, n);
   else {
    var r = o(t);
    n([r])
   }
  }, l(a.prototype), a.prototype.add = function(t) {
   var n;
   if ("string" == typeof t) n = c(t), e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new p(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
   else {
    if (!m(t) && !t.base64) throw new Error("Unknown type: " + t);
    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
    n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit("decoded", n))
   }
  }, a.prototype.destroy = function() {
   this.reconstructor && this.reconstructor.finishedReconstruction()
  }, p.prototype.takeBinaryData = function(t) {
   if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
    var e = d.reconstructPacket(this.reconPack, this.buffers);
    return this.finishedReconstruction(), e
   }
   return null
  }, p.prototype.finishedReconstruction = function() {
   this.reconPack = null, this.buffers = []
  }
 }, function(t, e, n) {
  function r(t) {
   if (t) return o(t)
  }

  function o(t) {
   for (var e in r.prototype) t[e] = r.prototype[e];
   return t
  }
  t.exports = r, r.prototype.on = r.prototype.addEventListener = function(t, e) {
   return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
  }, r.prototype.once = function(t, e) {
   function n() {
    this.off(t, n), e.apply(this, arguments)
   }
   return n.fn = e, this.on(t, n), this
  }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
   if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
   var n = this._callbacks["$" + t];
   if (!n) return this;
   if (1 == arguments.length) return delete this._callbacks["$" + t], this;
   for (var r, o = 0; o < n.length; o++)
    if (r = n[o], r === e || r.fn === e) {
     n.splice(o, 1);
     break
    } return this
  }, r.prototype.emit = function(t) {
   this._callbacks = this._callbacks || {};
   var e = [].slice.call(arguments, 1),
    n = this._callbacks["$" + t];
   if (n) {
    n = n.slice(0);
    for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, e)
   }
   return this
  }, r.prototype.listeners = function(t) {
   return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
  }, r.prototype.hasListeners = function(t) {
   return !!this.listeners(t).length
  }
 }, function(t, e, n) {
  (function(t) {
   function r(t, e) {
    if (!t) return t;
    if (s(t)) {
     var n = {
      _placeholder: !0,
      num: e.length
     };
     return e.push(t), n
    }
    if (i(t)) {
     for (var o = new Array(t.length), a = 0; a < t.length; a++) o[a] = r(t[a], e);
     return o
    }
    if ("object" == typeof t && !(t instanceof Date)) {
     var o = {};
     for (var c in t) o[c] = r(t[c], e);
     return o
    }
    return t
   }

   function o(t, e) {
    if (!t) return t;
    if (t && t._placeholder) return e[t.num];
    if (i(t))
     for (var n = 0; n < t.length; n++) t[n] = o(t[n], e);
    else if ("object" == typeof t)
     for (var r in t) t[r] = o(t[r], e);
    return t
   }
   var i = n(10),
    s = n(11),
    a = Object.prototype.toString,
    c = "function" == typeof t.Blob || "[object BlobConstructor]" === a.call(t.Blob),
    u = "function" == typeof t.File || "[object FileConstructor]" === a.call(t.File);
   e.deconstructPacket = function(t) {
    var e = [],
     n = t.data,
     o = t;
    return o.data = r(n, e), o.attachments = e.length, {
     packet: o,
     buffers: e
    }
   }, e.reconstructPacket = function(t, e) {
    return t.data = o(t.data, e), t.attachments = void 0, t
   }, e.removeBlobs = function(t, e) {
    function n(t, a, p) {
     if (!t) return t;
     if (c && t instanceof Blob || u && t instanceof File) {
      r++;
      var h = new FileReader;
      h.onload = function() {
       p ? p[a] = this.result : o = this.result, --r || e(o)
      }, h.readAsArrayBuffer(t)
     } else if (i(t))
      for (var f = 0; f < t.length; f++) n(t[f], f, t);
     else if ("object" == typeof t && !s(t))
      for (var l in t) n(t[l], l, t)
    }
    var r = 0,
     o = t;
    n(o), r || e(o)
   }
  }).call(e, function() {
   return this
  }())
 }, function(t, e) {
  var n = {}.toString;
  t.exports = Array.isArray || function(t) {
   return "[object Array]" == n.call(t)
  }
 }, function(t, e) {
  (function(e) {
   function n(t) {
    return r && e.Buffer.isBuffer(t) || o && (t instanceof e.ArrayBuffer || i(t))
   }
   t.exports = n;
   var r = "function" == typeof e.Buffer && "function" == typeof e.Buffer.isBuffer,
    o = "function" == typeof e.ArrayBuffer,
    i = function() {
     return o && "function" == typeof e.ArrayBuffer.isView ? e.ArrayBuffer.isView : function(t) {
      return t.buffer instanceof e.ArrayBuffer
     }
    }()
  }).call(e, function() {
   return this
  }())
 }, function(t, e, n) {
  "use strict";

  function r(t, e) {
   if (!(this instanceof r)) return new r(t, e);
   t && "object" === ("undefined" == typeof t ? "undefined" : o(t)) && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 1e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new l({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
   }), this.timeout(null == e.timeout ? 2e4 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
   var n = e.parser || c;
   this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = e.autoConnect !== !1, this.autoConnect && this.open()
  }
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
   } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
   },
   i = n(13),
   s = n(37),
   a = n(8),
   c = n(7),
   u = n(39),
   p = n(40),
   h = n(3)("socket.io-client:manager"),
   f = n(36),
   l = n(41),
   d = Object.prototype.hasOwnProperty;
  t.exports = r, r.prototype.emitAll = function() {
   this.emit.apply(this, arguments);
   for (var t in this.nsps) d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
  }, r.prototype.updateSocketIds = function() {
   for (var t in this.nsps) d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
  }, r.prototype.generateId = function(t) {
   return ("/" === t ? "" : t + "#") + this.engine.id
  }, a(r.prototype), r.prototype.reconnection = function(t) {
   return arguments.length ? (this._reconnection = !!t, this) : this._reconnection
  }, r.prototype.reconnectionAttempts = function(t) {
   return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts
  }, r.prototype.reconnectionDelay = function(t) {
   return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay
  }, r.prototype.randomizationFactor = function(t) {
   return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor
  }, r.prototype.reconnectionDelayMax = function(t) {
   return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax
  }, r.prototype.timeout = function(t) {
   return arguments.length ? (this._timeout = t, this) : this._timeout
  }, r.prototype.maybeReconnectOnOpen = function() {
   !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
  }, r.prototype.open = r.prototype.connect = function(t, e) {
   if (h("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
   h("opening %s", this.uri), this.engine = i(this.uri, this.opts);
   var n = this.engine,
    r = this;
   this.readyState = "opening", this.skipReconnect = !1;
   var o = u(n, "open", function() {
     r.onopen(), t && t()
    }),
    s = u(n, "error", function(e) {
     if (h("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", e), t) {
      var n = new Error("Connection error");
      n.data = e, t(n)
     } else r.maybeReconnectOnOpen()
    });
   if (!1 !== this._timeout) {
    var a = this._timeout;
    h("connect attempt will timeout after %d", a);
    var c = setTimeout(function() {
     h("connect attempt timed out after %d", a), o.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", a)
    }, a);
    this.subs.push({
     destroy: function() {
      clearTimeout(c)
     }
    })
   }
   return this.subs.push(o), this.subs.push(s), this
  }, r.prototype.onopen = function() {
   h("open"), this.cleanup(), this.readyState = "open", this.emit("open");
   var t = this.engine;
   this.subs.push(u(t, "data", p(this, "ondata"))), this.subs.push(u(t, "ping", p(this, "onping"))), this.subs.push(u(t, "pong", p(this, "onpong"))), this.subs.push(u(t, "error", p(this, "onerror"))), this.subs.push(u(t, "close", p(this, "onclose"))), this.subs.push(u(this.decoder, "decoded", p(this, "ondecoded")))
  }, r.prototype.onping = function() {
   this.lastPing = new Date, this.emitAll("ping")
  }, r.prototype.onpong = function() {
   this.emitAll("pong", new Date - this.lastPing)
  }, r.prototype.ondata = function(t) {
   this.decoder.add(t)
  }, r.prototype.ondecoded = function(t) {
   this.emit("packet", t)
  }, r.prototype.onerror = function(t) {
   h("error", t), this.emitAll("error", t)
  }, r.prototype.socket = function(t, e) {
   function n() {
    ~f(o.connecting, r) || o.connecting.push(r)
   }
   var r = this.nsps[t];
   if (!r) {
    r = new s(this, t, e), this.nsps[t] = r;
    var o = this;
    r.on("connecting", n), r.on("connect", function() {
     r.id = o.generateId(t)
    }), this.autoConnect && n()
   }
   return r
  }, r.prototype.destroy = function(t) {
   var e = f(this.connecting, t);
   ~e && this.connecting.splice(e, 1), this.connecting.length || this.close()
  }, r.prototype.packet = function(t) {
   h("writing packet %j", t);
   var e = this;
   t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function(n) {
    for (var r = 0; r < n.length; r++) e.engine.write(n[r], t.options);
    e.encoding = !1, e.processPacketQueue()
   }))
  }, r.prototype.processPacketQueue = function() {
   if (this.packetBuffer.length > 0 && !this.encoding) {
    var t = this.packetBuffer.shift();
    this.packet(t)
   }
  }, r.prototype.cleanup = function() {
   h("cleanup");
   for (var t = this.subs.length, e = 0; e < t; e++) {
    var n = this.subs.shift();
    n.destroy()
   }
   this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
  }, r.prototype.close = r.prototype.disconnect = function() {
   h("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
  }, r.prototype.onclose = function(t) {
   h("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect()
  }, r.prototype.reconnect = function() {
   if (this.reconnecting || this.skipReconnect) return this;
   var t = this;
   if (this.backoff.attempts >= this._reconnectionAttempts) h("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
   else {
    var e = this.backoff.duration();
    h("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
    var n = setTimeout(function() {
     t.skipReconnect || (h("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) {
      e ? (h("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (h("reconnect success"), t.onreconnect())
     }))
    }, e);
    this.subs.push({
     destroy: function() {
      clearTimeout(n)
     }
    })
   }
  }, r.prototype.onreconnect = function() {
   var t = this.backoff.attempts;
   this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t)
  }
 }, function(t, e, n) {
  t.exports = n(14), t.exports.parser = n(21)
 }, function(t, e, n) {
  (function(e) {
   function r(t, n) {
    if (!(this instanceof r)) return new r(t, n);
    n = n || {}, t && "object" == typeof t && (n = t, t = null), t ? (t = p(t), n.hostname = t.host, n.secure = "https" === t.protocol || "wss" === t.protocol, n.port = t.port, t.query && (n.query = t.query)) : n.host && (n.hostname = p(n.host).host), this.secure = null != n.secure ? n.secure : e.location && "https:" === location.protocol, n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, this.hostname = n.hostname || (e.location ? location.hostname : "localhost"), this.port = n.port || (e.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, "string" == typeof this.query && (this.query = h.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", this.timestampRequests = n.timestampRequests, this.transports = n.transports || ["polling", "websocket"], this.transportOptions = n.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized || n.rejectUnauthorized, this.forceNode = !!n.forceNode;
    var o = "object" == typeof e && e;
    o.global === o && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
   }

   function o(t) {
    var e = {};
    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    return e
   }
   var i = n(15),
    s = n(8),
    a = n(3)("engine.io-client:socket"),
    c = n(36),
    u = n(21),
    p = n(2),
    h = n(30);
   t.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = u.protocol, r.Socket = r, r.Transport = n(20), r.transports = n(15), r.parser = n(21), r.prototype.createTransport = function(t) {
    a('creating transport "%s"', t);
    var e = o(this.query);
    e.EIO = u.protocol, e.transport = t;
    var n = this.transportOptions[t] || {};
    this.id && (e.sid = this.id);
    var r = new i[t]({
     query: e,
     socket: this,
     agent: n.agent || this.agent,
     hostname: n.hostname || this.hostname,
     port: n.port || this.port,
     secure: n.secure || this.secure,
     path: n.path || this.path,
     forceJSONP: n.forceJSONP || this.forceJSONP,
     jsonp: n.jsonp || this.jsonp,
     forceBase64: n.forceBase64 || this.forceBase64,
     enablesXDR: n.enablesXDR || this.enablesXDR,
     timestampRequests: n.timestampRequests || this.timestampRequests,
     timestampParam: n.timestampParam || this.timestampParam,
     policyPort: n.policyPort || this.policyPort,
     pfx: n.pfx || this.pfx,
     key: n.key || this.key,
     passphrase: n.passphrase || this.passphrase,
     cert: n.cert || this.cert,
     ca: n.ca || this.ca,
     ciphers: n.ciphers || this.ciphers,
     rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
     perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
     extraHeaders: n.extraHeaders || this.extraHeaders,
     forceNode: n.forceNode || this.forceNode,
     localAddress: n.localAddress || this.localAddress,
     requestTimeout: n.requestTimeout || this.requestTimeout,
     protocols: n.protocols || void 0
    });
    return r
   }, r.prototype.open = function() {
    var t;
    if (this.rememberUpgrade && r.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) t = "websocket";
    else {
     if (0 === this.transports.length) {
      var e = this;
      return void setTimeout(function() {
       e.emit("error", "No transports available")
      }, 0)
     }
     t = this.transports[0]
    }
    this.readyState = "opening";
    try {
     t = this.createTransport(t)
    } catch (n) {
     return this.transports.shift(), void this.open()
    }
    t.open(), this.setTransport(t)
   }, r.prototype.setTransport = function(t) {
    a("setting transport %s", t.name);
    var e = this;
    this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function() {
     e.onDrain()
    }).on("packet", function(t) {
     e.onPacket(t)
    }).on("error", function(t) {
     e.onError(t)
    }).on("close", function() {
     e.onClose("transport close")
    })
   }, r.prototype.probe = function(t) {
    function e() {
     if (f.onlyBinaryUpgrades) {
      var e = !this.supportsBinary && f.transport.supportsBinary;
      h = h || e
     }
     h || (a('probe transport "%s" opened', t), p.send([{
      type: "ping",
      data: "probe"
     }]), p.once("packet", function(e) {
      if (!h)
       if ("pong" === e.type && "probe" === e.data) {
        if (a('probe transport "%s" pong', t), f.upgrading = !0, f.emit("upgrading", p), !p) return;
        r.priorWebsocketSuccess = "websocket" === p.name, a('pausing current transport "%s"', f.transport.name), f.transport.pause(function() {
         h || "closed" !== f.readyState && (a("changing transport and sending upgrade packet"), u(), f.setTransport(p), p.send([{
          type: "upgrade"
         }]), f.emit("upgrade", p), p = null, f.upgrading = !1, f.flush())
        })
       } else {
        a('probe transport "%s" failed', t);
        var n = new Error("probe error");
        n.transport = p.name, f.emit("upgradeError", n)
       }
     }))
    }

    function n() {
     h || (h = !0, u(), p.close(), p = null)
    }

    function o(e) {
     var r = new Error("probe error: " + e);
     r.transport = p.name, n(), a('probe transport "%s" failed because of error: %s', t, e), f.emit("upgradeError", r)
    }

    function i() {
     o("transport closed")
    }

    function s() {
     o("socket closed")
    }

    function c(t) {
     p && t.name !== p.name && (a('"%s" works - aborting "%s"', t.name, p.name), n())
    }

    function u() {
     p.removeListener("open", e), p.removeListener("error", o), p.removeListener("close", i), f.removeListener("close", s), f.removeListener("upgrading", c)
    }
    a('probing transport "%s"', t);
    var p = this.createTransport(t, {
      probe: 1
     }),
     h = !1,
     f = this;
    r.priorWebsocketSuccess = !1, p.once("open", e), p.once("error", o), p.once("close", i), this.once("close", s), this.once("upgrading", c), p.open()
   }, r.prototype.onOpen = function() {
    if (a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
     a("starting upgrade probes");
     for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
    }
   }, r.prototype.onPacket = function(t) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {
     case "open":
      this.onHandshake(JSON.parse(t.data));
      break;
     case "pong":
      this.setPing(), this.emit("pong");
      break;
     case "error":
      var e = new Error("server error");
      e.code = t.data, this.onError(e);
      break;
     case "message":
      this.emit("data", t.data), this.emit("message", t.data)
    } else a('packet received with socket readyState "%s"', this.readyState)
   }, r.prototype.onHandshake = function(t) {
    this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
   }, r.prototype.onHeartbeat = function(t) {
    clearTimeout(this.pingTimeoutTimer);
    var e = this;
    e.pingTimeoutTimer = setTimeout(function() {
     "closed" !== e.readyState && e.onClose("ping timeout")
    }, t || e.pingInterval + e.pingTimeout)
   }, r.prototype.setPing = function() {
    var t = this;
    clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function() {
     a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout)
    }, t.pingInterval)
   }, r.prototype.ping = function() {
    var t = this;
    this.sendPacket("ping", function() {
     t.emit("ping")
    })
   }, r.prototype.onDrain = function() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
   }, r.prototype.flush = function() {
    "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
   }, r.prototype.write = r.prototype.send = function(t, e, n) {
    return this.sendPacket("message", t, e, n), this
   }, r.prototype.sendPacket = function(t, e, n, r) {
    if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
     n = n || {}, n.compress = !1 !== n.compress;
     var o = {
      type: t,
      data: e,
      options: n
     };
     this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
    }
   }, r.prototype.close = function() {
    function t() {
     r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close()
    }

    function e() {
     r.removeListener("upgrade", e), r.removeListener("upgradeError", e), t()
    }

    function n() {
     r.once("upgrade", e), r.once("upgradeError", e)
    }
    if ("opening" === this.readyState || "open" === this.readyState) {
     this.readyState = "closing";
     var r = this;
     this.writeBuffer.length ? this.once("drain", function() {
      this.upgrading ? n() : t()
     }) : this.upgrading ? n() : t()
    }
    return this
   }, r.prototype.onError = function(t) {
    a("socket error %j", t), r.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
   }, r.prototype.onClose = function(t, e) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
     a('socket close with reason: "%s"', t);
     var n = this;
     clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0
    }
   }, r.prototype.filterUpgrades = function(t) {
    for (var e = [], n = 0, r = t.length; n < r; n++) ~c(this.transports, t[n]) && e.push(t[n]);
    return e
   }
  }).call(e, function() {
   return this
  }())
 }, function(t, e, n) {
  (function(t) {
   function r(e) {
    var n, r = !1,
     a = !1,
     c = !1 !== e.jsonp;
    if (t.location) {
     var u = "https:" === location.protocol,
      p = location.port;
     p || (p = u ? 443 : 80), r = e.hostname !== location.hostname || p !== e.port, a = e.secure !== u
    }
    if (e.xdomain = r, e.xscheme = a, n = new o(e), "open" in n && !e.forceJSONP) return new i(e);
    if (!c) throw new Error("JSONP disabled");
    return new s(e)
   }
   var o = n(16),
    i = n(18),
    s = n(33),
    a = n(34);
   e.polling = r, e.websocket = a
  }).call(e, function() {
   return this
  }())
 }, function(t, e, n) {
  (function(e) {
   var r = n(17);
   t.exports = function(t) {
    var n = t.xdomain,
     o = t.xscheme,
     i = t.enablesXDR;
    try {
     if ("undefined" != typeof XMLHttpRequest && (!n || r)) return new XMLHttpRequest
    } catch (s) {}
    try {
     if ("undefined" != typeof XDomainRequest && !o && i) return new XDomainRequest
    } catch (s) {}
    if (!n) try {
     return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
    } catch (s) {}
   }
  }).call(e, function() {
   return this
  }())
 }, function(t, e) {
  try {
   t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
  } catch (n) {
   t.exports = !1
  }
 }, function(t, e, n) {
  (function(e) {
   function r() {}

   function o(t) {
    if (c.call(this, t), this.requestTimeout = t.requestTimeout, this.extraHeaders = t.extraHeaders, e.location) {
     var n = "https:" === location.protocol,
      r = location.port;
     r || (r = n ? 443 : 80), this.xd = t.hostname !== e.location.hostname || r !== t.port, this.xs = t.secure !== n
    }
   }

   function i(t) {
    this.method = t.method || "GET", this.uri = t.uri, this.xd = !!t.xd, this.xs = !!t.xs, this.async = !1 !== t.async, this.data = void 0 !== t.data ? t.data : null, this.agent = t.agent, this.isBinary = t.isBinary, this.supportsBinary = t.supportsBinary, this.enablesXDR = t.enablesXDR, this.requestTimeout = t.requestTimeout, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.extraHeaders = t.extraHeaders, this.create()
   }

   function s() {
    for (var t in i.requests) i.requests.hasOwnProperty(t) && i.requests[t].abort()
   }
   var a = n(16),
    c = n(19),
    u = n(8),
    p = n(31),
    h = n(3)("engine.io-client:polling-xhr");
   t.exports = o, t.exports.Request = i, p(o, c), o.prototype.supportsBinary = !0, o.prototype.request = function(t) {
    return t = t || {}, t.uri = this.uri(), t.xd = this.xd, t.xs = this.xs, t.agent = this.agent || !1, t.supportsBinary = this.supportsBinary, t.enablesXDR = this.enablesXDR, t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, t.requestTimeout = this.requestTimeout, t.extraHeaders = this.extraHeaders, new i(t)
   }, o.prototype.doWrite = function(t, e) {
    var n = "string" != typeof t && void 0 !== t,
     r = this.request({
      method: "POST",
      data: t,
      isBinary: n
     }),
     o = this;
    r.on("success", e), r.on("error", function(t) {
     o.onError("xhr post error", t)
    }), this.sendXhr = r
   }, o.prototype.doPoll = function() {
    h("xhr poll");
    var t = this.request(),
     e = this;
    t.on("data", function(t) {
     e.onData(t)
    }), t.on("error", function(t) {
     e.onError("xhr poll error", t)
    }), this.pollXhr = t
   }, u(i.prototype), i.prototype.create = function() {
    var t = {
     agent: this.agent,
     xdomain: this.xd,
     xscheme: this.xs,
     enablesXDR: this.enablesXDR
    };
    t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized;
    var n = this.xhr = new a(t),
     r = this;
    try {
     h("xhr open %s: %s", this.method, this.uri), n.open(this.method, this.uri, this.async);
     try {
      if (this.extraHeaders) {
       n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
       for (var o in this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.extraHeaders[o])
      }
     } catch (s) {}
     if ("POST" === this.method) try {
      this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
     } catch (s) {}
     try {
      n.setRequestHeader("Accept", "*/*")
     } catch (s) {}
     "withCredentials" in n && (n.withCredentials = !0), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function() {
      r.onLoad()
     }, n.onerror = function() {
      r.onError(n.responseText)
     }) : n.onreadystatechange = function() {
      if (2 === n.readyState) try {
       var t = n.getResponseHeader("Content-Type");
       r.supportsBinary && "application/octet-stream" === t && (n.responseType = "arraybuffer")
      } catch (e) {}
      4 === n.readyState && (200 === n.status || 1223 === n.status ? r.onLoad() : setTimeout(function() {
       r.onError(n.status)
      }, 0))
     }, h("xhr data %s", this.data), n.send(this.data)
    } catch (s) {
     return void setTimeout(function() {
      r.onError(s)
     }, 0)
    }
    e.document && (this.index = i.requestsCount++, i.requests[this.index] = this)
   }, i.prototype.onSuccess = function() {
    this.emit("success"), this.cleanup()
   }, i.prototype.onData = function(t) {
    this.emit("data", t), this.onSuccess()
   }, i.prototype.onError = function(t) {
    this.emit("error", t), this.cleanup(!0)
   }, i.prototype.cleanup = function(t) {
    if ("undefined" != typeof this.xhr && null !== this.xhr) {
     if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, t) try {
      this.xhr.abort()
     } catch (n) {}
     e.document && delete i.requests[this.index], this.xhr = null
    }
   }, i.prototype.onLoad = function() {
    var t;
    try {
     var e;
     try {
      e = this.xhr.getResponseHeader("Content-Type")
     } catch (n) {}
     t = "application/octet-stream" === e ? this.xhr.response || this.xhr.responseText : this.xhr.responseText
    } catch (n) {
     this.onError(n)
    }
    null != t && this.onData(t)
   }, i.prototype.hasXDR = function() {
    return "undefined" != typeof e.XDomainRequest && !this.xs && this.enablesXDR
   }, i.prototype.abort = function() {
    this.cleanup()
   }, i.requestsCount = 0, i.requests = {}, e.document && (e.attachEvent ? e.attachEvent("onunload", s) : e.addEventListener && e.addEventListener("beforeunload", s, !1))
  }).call(e, function() {
   return this
  }())
 }, function(t, e, n) {
  function r(t) {
   var e = t && t.forceBase64;
   p && !e || (this.supportsBinary = !1), o.call(this, t)
  }
  var o = n(20),
   i = n(30),
   s = n(21),
   a = n(31),
   c = n(32),
   u = n(3)("engine.io-client:polling");
  t.exports = r;
  var p = function() {
   var t = n(16),
    e = new t({
     xdomain: !1
    });
   return null != e.responseType
  }();
  a(r, o), r.prototype.name = "polling", r.prototype.doOpen = function() {
   this.poll()
  }, r.prototype.pause = function(t) {
   function e() {
    u("paused"), n.readyState = "paused", t()
   }
   var n = this;
   if (this.readyState = "pausing", this.polling || !this.writable) {
    var r = 0;
    this.polling && (u("we are currently polling - waiting to pause"), r++, this.once("pollComplete", function() {
     u("pre-pause polling complete"), --r || e()
    })), this.writable || (u("we are currently writing - waiting to pause"), r++, this.once("drain", function() {
     u("pre-pause writing complete"), --r || e()
    }))
   } else e()
  }, r.prototype.poll = function() {
   u("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
  }, r.prototype.onData = function(t) {
   var e = this;
   u("polling got data %s", t);
   var n = function(t, n, r) {
    return "opening" === e.readyState && e.onOpen(), "close" === t.type ? (e.onClose(), !1) : void e.onPacket(t)
   };
   s.decodePayload(t, this.socket.binaryType, n), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState))
  }, r.prototype.doClose = function() {
   function t() {
    u("writing close packet"), e.write([{
     type: "close"
    }])
   }
   var e = this;
   "open" === this.readyState ? (u("transport open - closing"), t()) : (u("transport not open - deferring close"), this.once("open", t))
  }, r.prototype.write = function(t) {
   var e = this;
   this.writable = !1;
   var n = function() {
    e.writable = !0, e.emit("drain")
   };
   s.encodePayload(t, this.supportsBinary, function(t) {
    e.doWrite(t, n)
   })
  }, r.prototype.uri = function() {
   var t = this.query || {},
    e = this.secure ? "https" : "http",
    n = "";
   !1 !== this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || t.sid || (t.b64 = 1), t = i.encode(t), this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port), t.length && (t = "?" + t);
   var r = this.hostname.indexOf(":") !== -1;
   return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
  }
 }, function(t, e, n) {
  function r(t) {
   this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress
  }
  var o = n(21),
   i = n(8);
  t.exports = r, i(r.prototype), r.prototype.onError = function(t, e) {
   var n = new Error(t);
   return n.type = "TransportError", n.description = e, this.emit("error", n), this
  }, r.prototype.open = function() {
   return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
  }, r.prototype.close = function() {
   return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
  }, r.prototype.send = function(t) {
   if ("open" !== this.readyState) throw new Error("Transport not open");
   this.write(t)
  }, r.prototype.onOpen = function() {
   this.readyState = "open", this.writable = !0, this.emit("open")
  }, r.prototype.onData = function(t) {
   var e = o.decodePacket(t, this.socket.binaryType);
   this.onPacket(e)
  }, r.prototype.onPacket = function(t) {
   this.emit("packet", t)
  }, r.prototype.onClose = function() {
   this.readyState = "closed", this.emit("close")
  }
 }, function(t, e, n) {
  (function(t) {
   function r(t, n) {
    var r = "b" + e.packets[t.type] + t.data.data;
    return n(r)
   }

   function o(t, n, r) {
    if (!n) return e.encodeBase64Packet(t, r);
    var o = t.data,
     i = new Uint8Array(o),
     s = new Uint8Array(1 + o.byteLength);
    s[0] = v[t.type];
    for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
    return r(s.buffer)
   }

   function i(t, n, r) {
    if (!n) return e.encodeBase64Packet(t, r);
    var o = new FileReader;
    return o.onload = function() {
     t.data = o.result, e.encodePacket(t, n, !0, r)
    }, o.readAsArrayBuffer(t.data)
   }

   function s(t, n, r) {
    if (!n) return e.encodeBase64Packet(t, r);
    if (g) return i(t, n, r);
    var o = new Uint8Array(1);
    o[0] = v[t.type];
    var s = new k([o.buffer, t.data]);
    return r(s)
   }

   function a(t) {
    try {
     t = d.decode(t, {
      strict: !1
     })
    } catch (e) {
     return !1
    }
    return t
   }

   function c(t, e, n) {
    for (var r = new Array(t.length), o = l(t.length, n), i = function(t, n, o) {
      e(n, function(e, n) {
       r[t] = n, o(e, r)
      })
     }, s = 0; s < t.length; s++) i(s, t[s], o)
   }
   var u, p = n(22),
    h = n(23),
    f = n(24),
    l = n(25),
    d = n(26);
   t && t.ArrayBuffer && (u = n(28));
   var y = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
    m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
    g = y || m;
   e.protocol = 3;
   var v = e.packets = {
     open: 0,
     close: 1,
     ping: 2,
     pong: 3,
     message: 4,
     upgrade: 5,
     noop: 6
    },
    b = p(v),
    w = {
     type: "error",
     data: "parser error"
    },
    k = n(29);
   e.encodePacket = function(e, n, i, a) {
    "function" == typeof n && (a = n, n = !1), "function" == typeof i && (a = i, i = null);
    var c = void 0 === e.data ? void 0 : e.data.buffer || e.data;
    if (t.ArrayBuffer && c instanceof ArrayBuffer) return o(e, n, a);
    if (k && c instanceof t.Blob) return s(e, n, a);
    if (c && c.base64) return r(e, a);
    var u = v[e.type];
    return void 0 !== e.data && (u += i ? d.encode(String(e.data), {
     strict: !1
    }) : String(e.data)), a("" + u)
   }, e.encodeBase64Packet = function(n, r) {
    var o = "b" + e.packets[n.type];
    if (k && n.data instanceof t.Blob) {
     var i = new FileReader;
     return i.onload = function() {
      var t = i.result.split(",")[1];
      r(o + t)
     }, i.readAsDataURL(n.data)
    }
    var s;
    try {
     s = String.fromCharCode.apply(null, new Uint8Array(n.data))
    } catch (a) {
     for (var c = new Uint8Array(n.data), u = new Array(c.length), p = 0; p < c.length; p++) u[p] = c[p];
     s = String.fromCharCode.apply(null, u)
    }
    return o += t.btoa(s), r(o)
   }, e.decodePacket = function(t, n, r) {
    if (void 0 === t) return w;
    if ("string" == typeof t) {
     if ("b" === t.charAt(0)) return e.decodeBase64Packet(t.substr(1), n);
     if (r && (t = a(t), t === !1)) return w;
     var o = t.charAt(0);
     return Number(o) == o && b[o] ? t.length > 1 ? {
      type: b[o],
      data: t.substring(1)
     } : {
      type: b[o]
     } : w
    }
    var i = new Uint8Array(t),
     o = i[0],
     s = f(t, 1);
    return k && "blob" === n && (s = new k([s])), {
     type: b[o],
     data: s
    }
   }, e.decodeBase64Packet = function(t, e) {
    var n = b[t.charAt(0)];
    if (!u) return {
     type: n,
     data: {
      base64: !0,
      data: t.substr(1)
     }
    };
    var r = u.decode(t.substr(1));
    return "blob" === e && k && (r = new k([r])), {
     type: n,
     data: r
    }
   }, e.encodePayload = function(t, n, r) {
    function o(t) {
     return t.length + ":" + t
    }

    function i(t, r) {
     e.encodePacket(t, !!s && n, !1, function(t) {
      r(null, o(t))
     })
    }
    "function" == typeof n && (r = n, n = null);
    var s = h(t);
    return n && s ? k && !g ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void c(t, i, function(t, e) {
     return r(e.join(""))
    }) : r("0:")
   }, e.decodePayload = function(t, n, r) {
    if ("string" != typeof t) return e.decodePayloadAsBinary(t, n, r);
    "function" == typeof n && (r = n, n = null);
    var o;
    if ("" === t) return r(w, 0, 1);
    for (var i, s, a = "", c = 0, u = t.length; c < u; c++) {
     var p = t.charAt(c);
     if (":" === p) {
      if ("" === a || a != (i = Number(a))) return r(w, 0, 1);
      if (s = t.substr(c + 1, i), a != s.length) return r(w, 0, 1);
      if (s.length) {
       if (o = e.decodePacket(s, n, !1), w.type === o.type && w.data === o.data) return r(w, 0, 1);
       var h = r(o, c + i, u);
       if (!1 === h) return
      }
      c += i, a = ""
     } else a += p
    }
    return "" !== a ? r(w, 0, 1) : void 0
   }, e.encodePayloadAsArrayBuffer = function(t, n) {
    function r(t, n) {
     e.encodePacket(t, !0, !0, function(t) {
      return n(null, t)
     })
    }
    return t.length ? void c(t, r, function(t, e) {
     var r = e.reduce(function(t, e) {
       var n;
       return n = "string" == typeof e ? e.length : e.byteLength, t + n.toString().length + n + 2
      }, 0),
      o = new Uint8Array(r),
      i = 0;
     return e.forEach(function(t) {
      var e = "string" == typeof t,
       n = t;
      if (e) {
       for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++) r[s] = t.charCodeAt(s);
       n = r.buffer
      }
      e ? o[i++] = 0 : o[i++] = 1;
      for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
      o[i++] = 255;
      for (var r = new Uint8Array(n), s = 0; s < r.length; s++) o[i++] = r[s]
     }), n(o.buffer)
    }) : n(new ArrayBuffer(0))
   }, e.encodePayloadAsBlob = function(t, n) {
    function r(t, n) {
     e.encodePacket(t, !0, !0, function(t) {
      var e = new Uint8Array(1);
      if (e[0] = 1, "string" == typeof t) {
       for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++) r[o] = t.charCodeAt(o);
       t = r.buffer, e[0] = 0
      }
      for (var i = t instanceof ArrayBuffer ? t.byteLength : t.size, s = i.toString(), a = new Uint8Array(s.length + 1), o = 0; o < s.length; o++) a[o] = parseInt(s[o]);
      if (a[s.length] = 255, k) {
       var c = new k([e.buffer, a.buffer, t]);
       n(null, c)
      }
     })
    }
    c(t, r, function(t, e) {
     return n(new k(e))
    })
   }, e.decodePayloadAsBinary = function(t, n, r) {
    "function" == typeof n && (r = n, n = null);
    for (var o = t, i = []; o.byteLength > 0;) {
     for (var s = new Uint8Array(o), a = 0 === s[0], c = "", u = 1; 255 !== s[u]; u++) {
      if (c.length > 310) return r(w, 0, 1);
      c += s[u]
     }
     o = f(o, 2 + c.length), c = parseInt(c);
     var p = f(o, 0, c);
     if (a) try {
      p = String.fromCharCode.apply(null, new Uint8Array(p))
     } catch (h) {
      var l = new Uint8Array(p);
      p = "";
      for (var u = 0; u < l.length; u++) p += String.fromCharCode(l[u])
     }
     i.push(p), o = f(o, c)
    }
    var d = i.length;
    i.forEach(function(t, o) {
     r(e.decodePacket(t, n, !0), o, d)
    })
   }
  }).call(e, function() {
   return this
  }())
 }, function(t, e) {
  t.exports = Object.keys || function(t) {
   var e = [],
    n = Object.prototype.hasOwnProperty;
   for (var r in t) n.call(t, r) && e.push(r);
   return e
  }
 }, function(t, e, n) {
  (function(e) {
   function r(t) {
    if (!t || "object" != typeof t) return !1;
    if (o(t)) {
     for (var n = 0, i = t.length; n < i; n++)
      if (r(t[n])) return !0;
     return !1
    }
    if ("function" == typeof e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || "function" == typeof e.ArrayBuffer && t instanceof ArrayBuffer || s && t instanceof Blob || a && t instanceof File) return !0;
    if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return r(t.toJSON(), !0);
    for (var c in t)
     if (Object.prototype.hasOwnProperty.call(t, c) && r(t[c])) return !0;
    return !1
   }
   var o = n(10),
    i = Object.prototype.toString,
    s = "function" == typeof e.Blob || "[object BlobConstructor]" === i.call(e.Blob),
    a = "function" == typeof e.File || "[object FileConstructor]" === i.call(e.File);
   t.exports = r
  }).call(e, function() {
   return this
  }())
 }, function(t, e) {
  t.exports = function(t, e, n) {
   var r = t.byteLength;
   if (e = e || 0, n = n || r, t.slice) return t.slice(e, n);
   if (e < 0 && (e += r), n < 0 && (n += r), n > r && (n = r), e >= r || e >= n || 0 === r) return new ArrayBuffer(0);
   for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++, a++) i[a] = o[s];
   return i.buffer
  }
 }, function(t, e) {
  function n(t, e, n) {
   function o(t, r) {
    if (o.count <= 0) throw new Error("after called too many times");
    --o.count, t ? (i = !0, e(t), e = n) : 0 !== o.count || i || e(null, r)
   }
   var i = !1;
   return n = n || r, o.count = t, 0 === t ? e() : o
  }

  function r() {}
  t.exports = n
 }, function(t, e, n) {
  var r;
  (function(t, o) {
   ! function(i) {
    function s(t) {
     for (var e, n, r = [], o = 0, i = t.length; o < i;) e = t.charCodeAt(o++), e >= 55296 && e <= 56319 && o < i ? (n = t.charCodeAt(o++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), o--)) : r.push(e);
     return r
    }

    function a(t) {
     for (var e, n = t.length, r = -1, o = ""; ++r < n;) e = t[r], e > 65535 && (e -= 65536, o += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), o += w(e);
     return o
    }

    function c(t, e) {
     if (t >= 55296 && t <= 57343) {
      if (e) throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
      return !1
     }
     return !0
    }

    function u(t, e) {
     return w(t >> e & 63 | 128)
    }

    function p(t, e) {
     if (0 == (4294967168 & t)) return w(t);
     var n = "";
     return 0 == (4294965248 & t) ? n = w(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (c(t, e) || (t = 65533), n = w(t >> 12 & 15 | 224), n += u(t, 6)) : 0 == (4292870144 & t) && (n = w(t >> 18 & 7 | 240), n += u(t, 12), n += u(t, 6)), n += w(63 & t | 128)
    }

    function h(t, e) {
     e = e || {};
     for (var n, r = !1 !== e.strict, o = s(t), i = o.length, a = -1, c = ""; ++a < i;) n = o[a], c += p(n, r);
     return c
    }

    function f() {
     if (b >= v) throw Error("Invalid byte index");
     var t = 255 & g[b];
     if (b++, 128 == (192 & t)) return 63 & t;
     throw Error("Invalid continuation byte")
    }

    function l(t) {
     var e, n, r, o, i;
     if (b > v) throw Error("Invalid byte index");
     if (b == v) return !1;
     if (e = 255 & g[b], b++, 0 == (128 & e)) return e;
     if (192 == (224 & e)) {
      if (n = f(), i = (31 & e) << 6 | n, i >= 128) return i;
      throw Error("Invalid continuation byte")
     }
     if (224 == (240 & e)) {
      if (n = f(), r = f(), i = (15 & e) << 12 | n << 6 | r, i >= 2048) return c(i, t) ? i : 65533;
      throw Error("Invalid continuation byte")
     }
     if (240 == (248 & e) && (n = f(), r = f(), o = f(), i = (7 & e) << 18 | n << 12 | r << 6 | o, i >= 65536 && i <= 1114111)) return i;
     throw Error("Invalid UTF-8 detected")
    }

    function d(t, e) {
     e = e || {};
     var n = !1 !== e.strict;
     g = s(t), v = g.length, b = 0;
     for (var r, o = [];
      (r = l(n)) !== !1;) o.push(r);
     return a(o)
    }
    var y = "object" == typeof e && e,
     m = ("object" == typeof t && t && t.exports == y && t, "object" == typeof o && o);
    m.global !== m && m.window !== m || (i = m);
    var g, v, b, w = String.fromCharCode,
     k = {
      version: "2.1.2",
      encode: h,
      decode: d
     };
    r = function() {
     return k
    }.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
   }(this)
  }).call(e, n(27)(t), function() {
   return this
  }())
 }, function(t, e) {
  t.exports = function(t) {
   return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
  }
 }, function(t, e) {
  ! function() {
   "use strict";
   for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++) n[t.charCodeAt(r)] = r;
   e.encode = function(e) {
    var n, r = new Uint8Array(e),
     o = r.length,
     i = "";
    for (n = 0; n < o; n += 3) i += t[r[n] >> 2], i += t[(3 & r[n]) << 4 | r[n + 1] >> 4], i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += t[63 & r[n + 2]];
    return o % 3 === 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 === 1 && (i = i.substring(0, i.length - 2) + "=="), i
   }, e.decode = function(t) {
    var e, r, o, i, s, a = .75 * t.length,
     c = t.length,
     u = 0;
    "=" === t[t.length - 1] && (a--, "=" === t[t.length - 2] && a--);
    var p = new ArrayBuffer(a),
     h = new Uint8Array(p);
    for (e = 0; e < c; e += 4) r = n[t.charCodeAt(e)], o = n[t.charCodeAt(e + 1)], i = n[t.charCodeAt(e + 2)], s = n[t.charCodeAt(e + 3)], h[u++] = r << 2 | o >> 4, h[u++] = (15 & o) << 4 | i >> 2, h[u++] = (3 & i) << 6 | 63 & s;
    return p
   }
  }()
 }, function(t, e) {
  (function(e) {
   function n(t) {
    for (var e = 0; e < t.length; e++) {
     var n = t[e];
     if (n.buffer instanceof ArrayBuffer) {
      var r = n.buffer;
      if (n.byteLength !== r.byteLength) {
       var o = new Uint8Array(n.byteLength);
       o.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = o.buffer
      }
      t[e] = r
     }
    }
   }

   function r(t, e) {
    e = e || {};
    var r = new i;
    n(t);
    for (var o = 0; o < t.length; o++) r.append(t[o]);
    return e.type ? r.getBlob(e.type) : r.getBlob()
   }

   function o(t, e) {
    return n(t), new Blob(t, e || {})
   }
   var i = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder,
    s = function() {
     try {
      var t = new Blob(["hi"]);
      return 2 === t.size
     } catch (e) {
      return !1
     }
    }(),
    a = s && function() {
     try {
      var t = new Blob([new Uint8Array([1, 2])]);
      return 2 === t.size
     } catch (e) {
      return !1
     }
    }(),
    c = i && i.prototype.append && i.prototype.getBlob;
   t.exports = function() {
    return s ? a ? e.Blob : o : c ? r : void 0
   }()
  }).call(e, function() {
   return this
  }())
 }, function(t, e) {
  e.encode = function(t) {
   var e = "";
   for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
   return e
  }, e.decode = function(t) {
   for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
    var i = n[r].split("=");
    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
   }
   return e
  }
 }, function(t, e) {
  t.exports = function(t, e) {
   var n = function() {};
   n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
  }
 }, function(t, e) {
  "use strict";

  function n(t) {
   var e = "";
   do e = s[t % a] + e, t = Math.floor(t / a); while (t > 0);
   return e
  }

  function r(t) {
   var e = 0;
   for (p = 0; p < t.length; p++) e = e * a + c[t.charAt(p)];
   return e
  }

  function o() {
   var t = n(+new Date);
   return t !== i ? (u = 0, i = t) : t + "." + n(u++)
  }
  for (var i, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, u = 0, p = 0; p < a; p++) c[s[p]] = p;
  o.encode = n, o.decode = r, t.exports = o
 }, function(t, e, n) {
  (function(e) {
   function r() {}

   function o(t) {
    i.call(this, t), this.query = this.query || {}, a || (e.___eio || (e.___eio = []), a = e.___eio), this.index = a.length;
    var n = this;
    a.push(function(t) {
     n.onData(t)
    }), this.query.j = this.index, e.document && e.addEventListener && e.addEventListener("beforeunload", function() {
     n.script && (n.script.onerror = r)
    }, !1)
   }
   var i = n(19),
    s = n(31);
   t.exports = o;
   var a, c = /\n/g,
    u = /\\n/g;
   s(o, i), o.prototype.supportsBinary = !1, o.prototype.doClose = function() {
    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), i.prototype.doClose.call(this)
   }, o.prototype.doPoll = function() {
    var t = this,
     e = document.createElement("script");
    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) {
     t.onError("jsonp poll error", e)
    };
    var n = document.getElementsByTagName("script")[0];
    n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e), this.script = e;
    var r = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
    r && setTimeout(function() {
     var t = document.createElement("iframe");
     document.body.appendChild(t), document.body.removeChild(t)
    }, 100)
   }, o.prototype.doWrite = function(t, e) {
    function n() {
     r(), e()
    }

    function r() {
     if (o.iframe) try {
      o.form.removeChild(o.iframe)
     } catch (t) {
      o.onError("jsonp polling iframe removal error", t)
     }
     try {
      var e = '<iframe src="javascript:0" name="' + o.iframeId + '">';
      i = document.createElement(e)
     } catch (t) {
      i = document.createElement("iframe"), i.name = o.iframeId, i.src = "javascript:0"
     }
     i.id = o.iframeId, o.form.appendChild(i), o.iframe = i
    }
    var o = this;
    if (!this.form) {
     var i, s = document.createElement("form"),
      a = document.createElement("textarea"),
      p = this.iframeId = "eio_iframe_" + this.index;
     s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = p, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a
    }
    this.form.action = this.uri(), r(), t = t.replace(u, "\\\n"), this.area.value = t.replace(c, "\\n");
    try {
     this.form.submit()
    } catch (h) {}
    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
     "complete" === o.iframe.readyState && n()
    } : this.iframe.onload = n
   }
  }).call(e, function() {
   return this
  }())
 }, function(t, e, n) {
  (function(e) {
   function r(t) {
    var e = t && t.forceBase64;
    e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, this.usingBrowserWebSocket = h && !t.forceNode, this.protocols = t.protocols, this.usingBrowserWebSocket || (l = o), i.call(this, t)
   }
   var o, i = n(20),
    s = n(21),
    a = n(30),
    c = n(31),
    u = n(32),
    p = n(3)("engine.io-client:websocket"),
    h = e.WebSocket || e.MozWebSocket;
   if ("undefined" == typeof window) try {
    o = n(35)
   } catch (f) {}
   var l = h;
   l || "undefined" != typeof window || (l = o), t.exports = r, c(r, i), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function() {
    if (this.check()) {
     var t = this.uri(),
      e = this.protocols,
      n = {
       agent: this.agent,
       perMessageDeflate: this.perMessageDeflate
      };
     n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
     try {
      this.ws = this.usingBrowserWebSocket ? e ? new l(t, e) : new l(t) : new l(t, e, n)
     } catch (r) {
      return this.emit("error", r)
     }
     void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
    }
   }, r.prototype.addEventListeners = function() {
    var t = this;
    this.ws.onopen = function() {
     t.onOpen()
    }, this.ws.onclose = function() {
     t.onClose()
    }, this.ws.onmessage = function(e) {
     t.onData(e.data)
    }, this.ws.onerror = function(e) {
     t.onError("websocket error", e)
    }
   }, r.prototype.write = function(t) {
    function n() {
     r.emit("flush"), setTimeout(function() {
      r.writable = !0, r.emit("drain")
     }, 0)
    }
    var r = this;
    this.writable = !1;
    for (var o = t.length, i = 0, a = o; i < a; i++) ! function(t) {
     s.encodePacket(t, r.supportsBinary, function(i) {
      if (!r.usingBrowserWebSocket) {
       var s = {};
       if (t.options && (s.compress = t.options.compress), r.perMessageDeflate) {
        var a = "string" == typeof i ? e.Buffer.byteLength(i) : i.length;
        a < r.perMessageDeflate.threshold && (s.compress = !1)
       }
      }
      try {
       r.usingBrowserWebSocket ? r.ws.send(i) : r.ws.send(i, s)
      } catch (c) {
       p("websocket closed before onclose event")
      }--o || n()
     })
    }(t[i])
   }, r.prototype.onClose = function() {
    i.prototype.onClose.call(this)
   }, r.prototype.doClose = function() {
    "undefined" != typeof this.ws && this.ws.close()
   }, r.prototype.uri = function() {
    var t = this.query || {},
     e = this.secure ? "wss" : "ws",
     n = "";
    this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = u()), this.supportsBinary || (t.b64 = 1), t = a.encode(t), t.length && (t = "?" + t);
    var r = this.hostname.indexOf(":") !== -1;
    return e + "://" + (r ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
   }, r.prototype.check = function() {
    return !(!l || "__initialize" in l && this.name === r.prototype.name)
   }
  }).call(e, function() {
   return this
  }())
 }, function(t, e) {}, function(t, e) {
  var n = [].indexOf;
  t.exports = function(t, e) {
   if (n) return t.indexOf(e);
   for (var r = 0; r < t.length; ++r)
    if (t[r] === e) return r;
   return -1
  }
 }, function(t, e, n) {
  "use strict";

  function r(t, e, n) {
   this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
  }
  var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
   } : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
   },
   i = n(7),
   s = n(8),
   a = n(38),
   c = n(39),
   u = n(40),
   p = n(3)("socket.io-client:socket"),
   h = n(30),
   f = n(23);
  t.exports = e = r;
  var l = {
    connect: 1,
    connect_error: 1,
    connect_timeout: 1,
    connecting: 1,
    disconnect: 1,
    error: 1,
    reconnect: 1,
    reconnect_attempt: 1,
    reconnect_failed: 1,
    reconnect_error: 1,
    reconnecting: 1,
    ping: 1,
    pong: 1
   },
   d = s.prototype.emit;
  s(r.prototype), r.prototype.subEvents = function() {
   if (!this.subs) {
    var t = this.io;
    this.subs = [c(t, "open", u(this, "onopen")), c(t, "packet", u(this, "onpacket")), c(t, "close", u(this, "onclose"))]
   }
  }, r.prototype.open = r.prototype.connect = function() {
   return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
  }, r.prototype.send = function() {
   var t = a(arguments);
   return t.unshift("message"), this.emit.apply(this, t), this
  }, r.prototype.emit = function(t) {
   if (l.hasOwnProperty(t)) return d.apply(this, arguments), this;
   var e = a(arguments),
    n = {
     type: (void 0 !== this.flags.binary ? this.flags.binary : f(e)) ? i.BINARY_EVENT : i.EVENT,
     data: e
    };
   return n.options = {}, n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (p("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
  }, r.prototype.packet = function(t) {
   t.nsp = this.nsp, this.io.packet(t)
  }, r.prototype.onopen = function() {
   if (p("transport is open - connecting"), "/" !== this.nsp)
    if (this.query) {
     var t = "object" === o(this.query) ? h.encode(this.query) : this.query;
     p("sending connect packet with query %s", t), this.packet({
      type: i.CONNECT,
      query: t
     })
    } else this.packet({
     type: i.CONNECT
    })
  }, r.prototype.onclose = function(t) {
   p("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t)
  }, r.prototype.onpacket = function(t) {
   if (t.nsp === this.nsp) switch (t.type) {
    case i.CONNECT:
     this.onconnect();
     break;
    case i.EVENT:
     this.onevent(t);
     break;
    case i.BINARY_EVENT:
     this.onevent(t);
     break;
    case i.ACK:
     this.onack(t);
     break;
    case i.BINARY_ACK:
     this.onack(t);
     break;
    case i.DISCONNECT:
     this.ondisconnect();
     break;
    case i.ERROR:
     this.emit("error", t.data)
   }
  }, r.prototype.onevent = function(t) {
   var e = t.data || [];
   p("emitting event %j", e), null != t.id && (p("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? d.apply(this, e) : this.receiveBuffer.push(e)
  }, r.prototype.ack = function(t) {
   var e = this,
    n = !1;
   return function() {
    if (!n) {
     n = !0;
     var r = a(arguments);
     p("sending ack %j", r), e.packet({
      type: f(r) ? i.BINARY_ACK : i.ACK,
      id: t,
      data: r
     })
    }
   }
  }, r.prototype.onack = function(t) {
   var e = this.acks[t.id];
   "function" == typeof e ? (p("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : p("bad ack %s", t.id)
  }, r.prototype.onconnect = function() {
   this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
  }, r.prototype.emitBuffered = function() {
   var t;
   for (t = 0; t < this.receiveBuffer.length; t++) d.apply(this, this.receiveBuffer[t]);
   for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) this.packet(this.sendBuffer[t]);
   this.sendBuffer = []
  }, r.prototype.ondisconnect = function() {
   p("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
  }, r.prototype.destroy = function() {
   if (this.subs) {
    for (var t = 0; t < this.subs.length; t++) this.subs[t].destroy();
    this.subs = null
   }
   this.io.destroy(this)
  }, r.prototype.close = r.prototype.disconnect = function() {
   return this.connected && (p("performing disconnect (%s)", this.nsp), this.packet({
    type: i.DISCONNECT
   })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
  }, r.prototype.compress = function(t) {
   return this.flags.compress = t, this
  }, r.prototype.binary = function(t) {
   return this.flags.binary = t, this
  }
 }, function(t, e) {
  function n(t, e) {
   var n = [];
   e = e || 0;
   for (var r = e || 0; r < t.length; r++) n[r - e] = t[r];
   return n
  }
  t.exports = n
 }, function(t, e) {
  "use strict";

  function n(t, e, n) {
   return t.on(e, n), {
    destroy: function() {
     t.removeListener(e, n)
    }
   }
  }
  t.exports = n
 }, function(t, e) {
  var n = [].slice;
  t.exports = function(t, e) {
   if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");
   var r = n.call(arguments, 2);
   return function() {
    return e.apply(t, r.concat(n.call(arguments)))
   }
  }
 }, function(t, e) {
  function n(t) {
   t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
  }
  t.exports = n, n.prototype.duration = function() {
   var t = this.ms * Math.pow(this.factor, this.attempts++);
   if (this.jitter) {
    var e = Math.random(),
     n = Math.floor(e * this.jitter * t);
    t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
   }
   return 0 | Math.min(t, this.max)
  }, n.prototype.reset = function() {
   this.attempts = 0
  }, n.prototype.setMin = function(t) {
   this.ms = t
  }, n.prototype.setMax = function(t) {
   this.max = t
  }, n.prototype.setJitter = function(t) {
   this.jitter = t
  }
 }])
});
/*! selectize.js - v0.12.4 | https://github.com/selectize/selectize.js | Apache License (v2) */
! function(a, b) {
 "function" == typeof define && define.amd ? define("sifter", b) : "object" == typeof exports ? module.exports = b() : a.Sifter = b()
}(this, function() {
 var a = function(a, b) {
  this.items = a, this.settings = b || {
   diacritics: !0
  }
 };
 a.prototype.tokenize = function(a) {
  if (a = e(String(a || "").toLowerCase()), !a || !a.length) return [];
  var b, c, d, g, i = [],
   j = a.split(/ +/);
  for (b = 0, c = j.length; b < c; b++) {
   if (d = f(j[b]), this.settings.diacritics)
    for (g in h) h.hasOwnProperty(g) && (d = d.replace(new RegExp(g, "g"), h[g]));
   i.push({
    string: j[b],
    regex: new RegExp(d, "i")
   })
  }
  return i
 }, a.prototype.iterator = function(a, b) {
  var c;
  c = g(a) ? Array.prototype.forEach || function(a) {
   for (var b = 0, c = this.length; b < c; b++) a(this[b], b, this)
  } : function(a) {
   for (var b in this) this.hasOwnProperty(b) && a(this[b], b, this)
  }, c.apply(a, [b])
 }, a.prototype.getScoreFunction = function(a, b) {
  var c, e, f, g, h;
  c = this, a = c.prepareSearch(a, b), f = a.tokens, e = a.options.fields, g = f.length, h = a.options.nesting;
  var i = function(a, b) {
    var c, d;
    return a ? (a = String(a || ""), d = a.search(b.regex), d === -1 ? 0 : (c = b.string.length / a.length, 0 === d && (c += .5), c)) : 0
   },
   j = function() {
    var a = e.length;
    return a ? 1 === a ? function(a, b) {
     return i(d(b, e[0], h), a)
    } : function(b, c) {
     for (var f = 0, g = 0; f < a; f++) g += i(d(c, e[f], h), b);
     return g / a
    } : function() {
     return 0
    }
   }();
  return g ? 1 === g ? function(a) {
   return j(f[0], a)
  } : "and" === a.options.conjunction ? function(a) {
   for (var b, c = 0, d = 0; c < g; c++) {
    if (b = j(f[c], a), b <= 0) return 0;
    d += b
   }
   return d / g
  } : function(a) {
   for (var b = 0, c = 0; b < g; b++) c += j(f[b], a);
   return c / g
  } : function() {
   return 0
  }
 }, a.prototype.getSortFunction = function(a, c) {
  var e, f, g, h, i, j, k, l, m, n, o;
  if (g = this, a = g.prepareSearch(a, c), o = !a.query && c.sort_empty || c.sort, m = function(a, b) {
    return "$score" === a ? b.score : d(g.items[b.id], a, c.nesting)
   }, i = [], o)
   for (e = 0, f = o.length; e < f; e++)(a.query || "$score" !== o[e].field) && i.push(o[e]);
  if (a.query) {
   for (n = !0, e = 0, f = i.length; e < f; e++)
    if ("$score" === i[e].field) {
     n = !1;
     break
    } n && i.unshift({
    field: "$score",
    direction: "desc"
   })
  } else
   for (e = 0, f = i.length; e < f; e++)
    if ("$score" === i[e].field) {
     i.splice(e, 1);
     break
    } for (l = [], e = 0, f = i.length; e < f; e++) l.push("desc" === i[e].direction ? -1 : 1);
  return j = i.length, j ? 1 === j ? (h = i[0].field, k = l[0], function(a, c) {
   return k * b(m(h, a), m(h, c))
  }) : function(a, c) {
   var d, e, f;
   for (d = 0; d < j; d++)
    if (f = i[d].field, e = l[d] * b(m(f, a), m(f, c))) return e;
   return 0
  } : null
 }, a.prototype.prepareSearch = function(a, b) {
  if ("object" == typeof a) return a;
  b = c({}, b);
  var d = b.fields,
   e = b.sort,
   f = b.sort_empty;
  return d && !g(d) && (b.fields = [d]), e && !g(e) && (b.sort = [e]), f && !g(f) && (b.sort_empty = [f]), {
   options: b,
   query: String(a || "").toLowerCase(),
   tokens: this.tokenize(a),
   total: 0,
   items: []
  }
 }, a.prototype.search = function(a, b) {
  var c, d, e, f, g = this;
  return d = this.prepareSearch(a, b), b = d.options, a = d.query, f = b.score || g.getScoreFunction(d), a.length ? g.iterator(g.items, function(a, e) {
   c = f(a), (b.filter === !1 || c > 0) && d.items.push({
    score: c,
    id: e
   })
  }) : g.iterator(g.items, function(a, b) {
   d.items.push({
    score: 1,
    id: b
   })
  }), e = g.getSortFunction(d, b), e && d.items.sort(e), d.total = d.items.length, "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)), d
 };
 var b = function(a, b) {
   return "number" == typeof a && "number" == typeof b ? a > b ? 1 : a < b ? -1 : 0 : (a = i(String(a || "")), b = i(String(b || "")), a > b ? 1 : b > a ? -1 : 0)
  },
  c = function(a, b) {
   var c, d, e, f;
   for (c = 1, d = arguments.length; c < d; c++)
    if (f = arguments[c])
     for (e in f) f.hasOwnProperty(e) && (a[e] = f[e]);
   return a
  },
  d = function(a, b, c) {
   if (a && b) {
    if (!c) return a[b];
    for (var d = b.split("."); d.length && (a = a[d.shift()]););
    return a
   }
  },
  e = function(a) {
   return (a + "").replace(/^\s+|\s+$|/g, "")
  },
  f = function(a) {
   return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
  },
  g = Array.isArray || "undefined" != typeof $ && $.isArray || function(a) {
   return "[object Array]" === Object.prototype.toString.call(a)
  },
  h = {
   a: "[aá¸€á¸Ä‚ÄƒÃ‚Ã¢ÇÇŽÈºâ±¥È¦È§áº áº¡Ã„Ã¤Ã€Ã ÃÃ¡Ä€ÄÃƒÃ£Ã…Ã¥Ä…Ä„ÃƒÄ…Ä„]",
   b: "[bâ¢Î²Î’Bà¸¿ï¿½á›’]",
   c: "[cÄ†Ä‡ÄˆÄ‰ÄŒÄÄŠÄ‹CÌ„cÌ„Ã‡Ã§á¸ˆá¸‰È»È¼Æ‡ÆˆÉ•á´„ï¼£ï½ƒ]",
   d: "[dÄŽÄá¸Šá¸‹á¸á¸‘á¸Œá¸á¸’á¸“á¸Žá¸ÄÄ‘DÌ¦dÌ¦Æ‰É–ÆŠÉ—Æ‹ÆŒáµ­á¶á¶‘È¡á´…ï¼¤ï½„Ã°]",
   e: "[eÃ‰Ã©ÃˆÃ¨ÃŠÃªá¸˜á¸™ÄšÄ›Ä”Ä•áº¼áº½á¸šá¸›áººáº»Ä–Ä—Ã‹Ã«Ä’Ä“È¨È©Ä˜Ä™á¶’É†É‡È„È…áº¾áº¿á»€á»á»„á»…á»‚á»ƒá¸œá¸á¸–á¸—á¸”á¸•È†È‡áº¸áº¹á»†á»‡â±¸á´‡ï¼¥ï½…É˜ÇÆÆÎµ]",
   f: "[fÆ‘Æ’á¸žá¸Ÿ]",
   g: "[gÉ¢â‚²Ç¤Ç¥ÄœÄÄžÄŸÄ¢Ä£Æ“É Ä Ä¡]",
   h: "[hÄ¤Ä¥Ä¦Ä§á¸¨á¸©áº–áº–á¸¤á¸¥á¸¢á¸£É¦Ê°Ç¶Æ•]",
   i: "[iÃÃ­ÃŒÃ¬Ä¬Ä­ÃŽÃ®ÇÇÃÃ¯á¸®á¸¯Ä¨Ä©Ä®Ä¯ÄªÄ«á»ˆá»‰ÈˆÈ‰ÈŠÈ‹á»Šá»‹á¸¬á¸­Æ—É¨É¨Ì†áµ»á¶–Ä°iIÄ±Éªï¼©ï½‰]",
   j: "[jÈ·Ä´ÄµÉˆÉ‰ÊÉŸÊ²]",
   k: "[kÆ˜Æ™ê€êá¸°á¸±Ç¨Ç©á¸²á¸³á¸´á¸µÎºÏ°â‚­]",
   l: "[lÅÅ‚Ä½Ä¾Ä»Ä¼Ä¹Äºá¸¶á¸·á¸¸á¸¹á¸¼á¸½á¸ºá¸»Ä¿Å€È½Æšâ± â±¡â±¢É«É¬á¶…É­È´ÊŸï¼¬ï½Œ]",
   n: "[nÅƒÅ„Ç¸Ç¹Å‡ÅˆÃ‘Ã±á¹„á¹…Å…Å†á¹†á¹‡á¹Šá¹‹á¹ˆá¹‰NÌˆnÌˆÆÉ²È Æžáµ°á¶‡É³ÈµÉ´ï¼®ï½ŽÅŠÅ‹]",
   o: "[oÃ˜Ã¸Ã–Ã¶Ã“Ã³Ã’Ã²Ã”Ã´Ç‘Ç’ÅÅ‘ÅŽÅÈ®È¯á»Œá»ÆŸÉµÆ Æ¡á»Žá»ÅŒÅÃ•ÃµÇªÇ«ÈŒÈÕ•Ö…]",
   p: "[pá¹”á¹•á¹–á¹—â±£áµ½Æ¤Æ¥áµ±]",
   q: "[qê–ê—Ê ÉŠÉ‹ê˜ê™qÌƒ]",
   r: "[rÅ”Å•ÉŒÉÅ˜Å™Å–Å—á¹˜á¹™ÈÈ‘È’È“á¹šá¹›â±¤É½]",
   s: "[sÅšÅ›á¹ á¹¡á¹¢á¹£êž¨êž©ÅœÅÅ Å¡ÅžÅŸÈ˜È™SÌˆsÌˆ]",
   t: "[tÅ¤Å¥á¹ªá¹«Å¢Å£á¹¬á¹­Æ®ÊˆÈšÈ›á¹°á¹±á¹®á¹¯Æ¬Æ­]",
   u: "[uÅ¬Å­É„Ê‰á»¤á»¥ÃœÃ¼ÃšÃºÃ™Ã¹Ã›Ã»Ç“Ç”Å°Å±Å¬Å­Æ¯Æ°á»¦á»§ÅªÅ«Å¨Å©Å²Å³È”È•âˆª]",
   v: "[vá¹¼á¹½á¹¾á¹¿Æ²Ê‹êžêŸâ±±Ê‹]",
   w: "[wáº‚áºƒáº€áºÅ´Åµáº„áº…áº†áº‡áºˆáº‰]",
   x: "[xáºŒáºáºŠáº‹Ï‡]",
   y: "[yÃÃ½á»²á»³Å¶Å·Å¸Ã¿á»¸á»¹áºŽáºá»´á»µÉŽÉÆ³Æ´]",
   z: "[zÅ¹Åºáºáº‘Å½Å¾Å»Å¼áº’áº“áº”áº•ÆµÆ¶]"
  },
  i = function() {
   var a, b, c, d, e = "",
    f = {};
   for (c in h)
    if (h.hasOwnProperty(c))
     for (d = h[c].substring(2, h[c].length - 1), e += d, a = 0, b = d.length; a < b; a++) f[d.charAt(a)] = c;
   var g = new RegExp("[" + e + "]", "g");
   return function(a) {
    return a.replace(g, function(a) {
     return f[a]
    }).toLowerCase()
   }
  }();
 return a
}),
function(a, b) {
 "function" == typeof define && define.amd ? define("microplugin", b) : "object" == typeof exports ? module.exports = b() : a.MicroPlugin = b()
}(this, function() {
 var a = {};
 a.mixin = function(a) {
  a.plugins = {}, a.prototype.initializePlugins = function(a) {
   var c, d, e, f = this,
    g = [];
   if (f.plugins = {
     names: [],
     settings: {},
     requested: {},
     loaded: {}
    }, b.isArray(a))
    for (c = 0, d = a.length; c < d; c++) "string" == typeof a[c] ? g.push(a[c]) : (f.plugins.settings[a[c].name] = a[c].options, g.push(a[c].name));
   else if (a)
    for (e in a) a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], g.push(e));
   for (; g.length;) f.require(g.shift())
  }, a.prototype.loadPlugin = function(b) {
   var c = this,
    d = c.plugins,
    e = a.plugins[b];
   if (!a.plugins.hasOwnProperty(b)) throw new Error('Unable to find "' + b + '" plugin');
   d.requested[b] = !0, d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}]), d.names.push(b)
  }, a.prototype.require = function(a) {
   var b = this,
    c = b.plugins;
   if (!b.plugins.loaded.hasOwnProperty(a)) {
    if (c.requested[a]) throw new Error('Plugin has circular dependency ("' + a + '")');
    b.loadPlugin(a)
   }
   return c.loaded[a]
  }, a.define = function(b, c) {
   a.plugins[b] = {
    name: b,
    fn: c
   }
  }
 };
 var b = {
  isArray: Array.isArray || function(a) {
   return "[object Array]" === Object.prototype.toString.call(a)
  }
 };
 return a
}),
function(a, b) {
 "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], b) : "object" == typeof exports ? module.exports = b(require("jquery"), require("sifter"), require("microplugin")) : a.Selectize = b(a.jQuery, a.Sifter, a.MicroPlugin)
}(this, function(a, b, c) {
 "use strict";
 var d = function(a, b) {
  if ("string" != typeof b || b.length) {
   var c = "string" == typeof b ? new RegExp(b, "i") : b,
    d = function(a) {
     var b = 0;
     if (3 === a.nodeType) {
      var e = a.data.search(c);
      if (e >= 0 && a.data.length > 0) {
       var f = a.data.match(c),
        g = document.createElement("span");
       g.className = "highlight";
       var h = a.splitText(e),
        i = (h.splitText(f[0].length), h.cloneNode(!0));
       g.appendChild(i), h.parentNode.replaceChild(g, h), b = 1
      }
     } else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName))
      for (var j = 0; j < a.childNodes.length; ++j) j += d(a.childNodes[j]);
     return b
    };
   return a.each(function() {
    d(this)
   })
  }
 };
 a.fn.removeHighlight = function() {
  return this.find("span.highlight").each(function() {
   this.parentNode.firstChild.nodeName;
   var a = this.parentNode;
   a.replaceChild(this.firstChild, this), a.normalize()
  }).end()
 };
 var e = function() {};
 e.prototype = {
  on: function(a, b) {
   this._events = this._events || {}, this._events[a] = this._events[a] || [], this._events[a].push(b)
  },
  off: function(a, b) {
   var c = arguments.length;
   return 0 === c ? delete this._events : 1 === c ? delete this._events[a] : (this._events = this._events || {}, void(a in this._events != !1 && this._events[a].splice(this._events[a].indexOf(b), 1)))
  },
  trigger: function(a) {
   if (this._events = this._events || {}, a in this._events != !1)
    for (var b = 0; b < this._events[a].length; b++) this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1))
  }
 }, e.mixin = function(a) {
  for (var b = ["on", "off", "trigger"], c = 0; c < b.length; c++) a.prototype[b[c]] = e.prototype[b[c]]
 };
 var f = /Mac/.test(navigator.userAgent),
  g = 65,
  h = 13,
  i = 27,
  j = 37,
  k = 38,
  l = 80,
  m = 39,
  n = 40,
  o = 78,
  p = 8,
  q = 46,
  r = 16,
  s = f ? 91 : 17,
  t = f ? 18 : 17,
  u = 9,
  v = 1,
  w = 2,
  x = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
  y = function(a) {
   return "undefined" != typeof a
  },
  z = function(a) {
   return "undefined" == typeof a || null === a ? null : "boolean" == typeof a ? a ? "1" : "0" : a + ""
  },
  A = function(a) {
   return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
  },
  B = {};
 B.before = function(a, b, c) {
  var d = a[b];
  a[b] = function() {
   return c.apply(a, arguments), d.apply(a, arguments)
  }
 }, B.after = function(a, b, c) {
  var d = a[b];
  a[b] = function() {
   var b = d.apply(a, arguments);
   return c.apply(a, arguments), b
  }
 };
 var C = function(a) {
   var b = !1;
   return function() {
    b || (b = !0, a.apply(this, arguments))
   }
  },
  D = function(a, b) {
   var c;
   return function() {
    var d = this,
     e = arguments;
    window.clearTimeout(c), c = window.setTimeout(function() {
     a.apply(d, e)
    }, b)
   }
  },
  E = function(a, b, c) {
   var d, e = a.trigger,
    f = {};
   a.trigger = function() {
    var c = arguments[0];
    return b.indexOf(c) === -1 ? e.apply(a, arguments) : void(f[c] = arguments)
   }, c.apply(a, []), a.trigger = e;
   for (d in f) f.hasOwnProperty(d) && e.apply(a, f[d])
  },
  F = function(a, b, c, d) {
   a.on(b, c, function(b) {
    for (var c = b.target; c && c.parentNode !== a[0];) c = c.parentNode;
    return b.currentTarget = c, d.apply(this, [b])
   })
  },
  G = function(a) {
   var b = {};
   if ("selectionStart" in a) b.start = a.selectionStart, b.length = a.selectionEnd - b.start;
   else if (document.selection) {
    a.focus();
    var c = document.selection.createRange(),
     d = document.selection.createRange().text.length;
    c.moveStart("character", -a.value.length), b.start = c.text.length - d, b.length = d
   }
   return b
  },
  H = function(a, b, c) {
   var d, e, f = {};
   if (c)
    for (d = 0, e = c.length; d < e; d++) f[c[d]] = a.css(c[d]);
   else f = a.css();
   b.css(f)
  },
  I = function(b, c) {
   if (!b) return 0;
   var d = a("<test>").css({
    position: "absolute",
    top: -99999,
    left: -99999,
    width: "auto",
    padding: 0,
    whiteSpace: "pre"
   }).text(b).appendTo("body");
   H(c, d, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
   var e = d.width();
   return d.remove(), e
  },
  J = function(a) {
   var b = null,
    c = function(c, d) {
     var e, f, g, h, i, j, k, l;
     c = c || window.event || {}, d = d || {}, c.metaKey || c.altKey || (d.force || a.data("grow") !== !1) && (e = a.val(), c.type && "keydown" === c.type.toLowerCase() && (f = c.keyCode, g = f >= 97 && f <= 122 || f >= 65 && f <= 90 || f >= 48 && f <= 57 || 32 === f, f === q || f === p ? (l = G(a[0]), l.length ? e = e.substring(0, l.start) + e.substring(l.start + l.length) : f === p && l.start ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1) : f === q && "undefined" != typeof l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1))) : g && (j = c.shiftKey, k = String.fromCharCode(c.keyCode), k = j ? k.toUpperCase() : k.toLowerCase(), e += k)), h = a.attr("placeholder"), !e && h && (e = h), i = I(e, a) + 4, i !== b && (b = i, a.width(i), a.triggerHandler("resize")))
    };
   a.on("keydown keyup update blur", c), c()
  },
  K = function(a) {
   var b = document.createElement("div");
   return b.appendChild(a.cloneNode(!0)), b.innerHTML
  },
  L = function(a, b) {
   b || (b = {});
   var c = "Selectize";
   console.error(c + ": " + a), b.explanation && (console.group && console.group(), console.error(b.explanation), console.group && console.groupEnd())
  },
  M = function(c, d) {
   var e, f, g, h, i = this;
   h = c[0], h.selectize = i;
   var j = window.getComputedStyle && window.getComputedStyle(h, null);
   if (g = j ? j.getPropertyValue("direction") : h.currentStyle && h.currentStyle.direction, g = g || c.parents("[dir]:first").attr("dir") || "", a.extend(i, {
     order: 0,
     settings: d,
     $input: c,
     tabIndex: c.attr("tabindex") || "",
     tagType: "select" === h.tagName.toLowerCase() ? v : w,
     rtl: /rtl/i.test(g),
     eventNS: ".selectize" + ++M.count,
     highlightedValue: null,
     isOpen: !1,
     isDisabled: !1,
     isRequired: c.is("[required]"),
     isInvalid: !1,
     isLocked: !1,
     isFocused: !1,
     isInputHidden: !1,
     isSetup: !1,
     isShiftDown: !1,
     isCmdDown: !1,
     isCtrlDown: !1,
     ignoreFocus: !1,
     ignoreBlur: !1,
     ignoreHover: !1,
     hasOptions: !1,
     currentResults: null,
     lastValue: "",
     caretPos: 0,
     loading: 0,
     loadedSearches: {},
     $activeOption: null,
     $activeItems: [],
     optgroups: {},
     options: {},
     userOptions: {},
     items: [],
     renderCache: {},
     onSearchChange: null === d.loadThrottle ? i.onSearchChange : D(i.onSearchChange, d.loadThrottle)
    }), i.sifter = new b(this.options, {
     diacritics: d.diacritics
    }), i.settings.options) {
    for (e = 0, f = i.settings.options.length; e < f; e++) i.registerOption(i.settings.options[e]);
    delete i.settings.options
   }
   if (i.settings.optgroups) {
    for (e = 0, f = i.settings.optgroups.length; e < f; e++) i.registerOptionGroup(i.settings.optgroups[e]);
    delete i.settings.optgroups
   }
   i.settings.mode = i.settings.mode || (1 === i.settings.maxItems ? "single" : "multi"), "boolean" != typeof i.settings.hideSelected && (i.settings.hideSelected = "multi" === i.settings.mode), i.initializePlugins(i.settings.plugins), i.setupCallbacks(), i.setupTemplates(), i.setup()
  };
 return e.mixin(M), "undefined" != typeof c ? c.mixin(M) : L("Dependency MicroPlugin is missing", {
  explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'
 }), a.extend(M.prototype, {
  setup: function() {
   var b, c, d, e, g, h, i, j, k, l, m = this,
    n = m.settings,
    o = m.eventNS,
    p = a(window),
    q = a(document),
    u = m.$input;
   if (i = m.settings.mode, j = u.attr("class") || "", b = a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i), c = a("<div>").addClass(n.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", u.is(":disabled") ? "-1" : m.tabIndex), h = a(n.dropdownParent || b), e = a("<div>").addClass(n.dropdownClass).addClass(i).hide().appendTo(h), g = a("<div>").addClass(n.dropdownContentClass).appendTo(e), (l = u.attr("id")) && (d.attr("id", l + "-selectized"), a("label[for='" + l + "']").attr("for", l + "-selectized")), m.settings.copyClassesToDropdown && e.addClass(j), b.css({
     width: u[0].style.width
    }), m.plugins.names.length && (k = "plugin-" + m.plugins.names.join(" plugin-"), b.addClass(k), e.addClass(k)), (null === n.maxItems || n.maxItems > 1) && m.tagType === v && u.attr("multiple", "multiple"), m.settings.placeholder && d.attr("placeholder", n.placeholder), !m.settings.splitOn && m.settings.delimiter) {
    var w = m.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    m.settings.splitOn = new RegExp("\\s*" + w + "+\\s*")
   }
   u.attr("autocorrect") && d.attr("autocorrect", u.attr("autocorrect")), u.attr("autocapitalize") && d.attr("autocapitalize", u.attr("autocapitalize")), m.$wrapper = b, m.$control = c, m.$control_input = d, m.$dropdown = e, m.$dropdown_content = g, e.on("mouseenter", "[data-selectable]", function() {
    return m.onOptionHover.apply(m, arguments)
   }), e.on("mousedown click", "[data-selectable]", function() {
    return m.onOptionSelect.apply(m, arguments)
   }), F(c, "mousedown", "*:not(input)", function() {
    return m.onItemSelect.apply(m, arguments)
   }), J(d), c.on({
    mousedown: function() {
     return m.onMouseDown.apply(m, arguments)
    },
    click: function() {
     return m.onClick.apply(m, arguments)
    }
   }), d.on({
    mousedown: function(a) {
     a.stopPropagation()
    },
    keydown: function() {
     return m.onKeyDown.apply(m, arguments)
    },
    keyup: function() {
     return m.onKeyUp.apply(m, arguments)
    },
    keypress: function() {
     return m.onKeyPress.apply(m, arguments)
    },
    resize: function() {
     m.positionDropdown.apply(m, [])
    },
    blur: function() {
     return m.onBlur.apply(m, arguments)
    },
    focus: function() {
     return m.ignoreBlur = !1, m.onFocus.apply(m, arguments)
    },
    paste: function() {
     return m.onPaste.apply(m, arguments)
    }
   }), q.on("keydown" + o, function(a) {
    m.isCmdDown = a[f ? "metaKey" : "ctrlKey"], m.isCtrlDown = a[f ? "altKey" : "ctrlKey"], m.isShiftDown = a.shiftKey
   }), q.on("keyup" + o, function(a) {
    a.keyCode === t && (m.isCtrlDown = !1), a.keyCode === r && (m.isShiftDown = !1), a.keyCode === s && (m.isCmdDown = !1)
   }), q.on("mousedown" + o, function(a) {
    if (m.isFocused) {
     if (a.target === m.$dropdown[0] || a.target.parentNode === m.$dropdown[0]) return !1;
     m.$control.has(a.target).length || a.target === m.$control[0] || m.blur(a.target)
    }
   }), p.on(["scroll" + o, "resize" + o].join(" "), function() {
    m.isOpen && m.positionDropdown.apply(m, arguments)
   }), p.on("mousemove" + o, function() {
    m.ignoreHover = !1
   }), this.revertSettings = {
    $children: u.children().detach(),
    tabindex: u.attr("tabindex")
   }, u.attr("tabindex", -1).hide().after(m.$wrapper), a.isArray(n.items) && (m.setValue(n.items), delete n.items), x && u.on("invalid" + o, function(a) {
    a.preventDefault(), m.isInvalid = !0, m.refreshState()
   }), m.updateOriginalInput(), m.refreshItems(), m.refreshState(), m.updatePlaceholder(), m.isSetup = !0, u.is(":disabled") && m.disable(), m.on("change", this.onChange), u.data("selectize", m), u.addClass("selectized"), m.trigger("initialize"), n.preload === !0 && m.onSearchChange("")
  },
  setupTemplates: function() {
   var b = this,
    c = b.settings.labelField,
    d = b.settings.optgroupLabelField,
    e = {
     optgroup: function(a) {
      return '<div class="optgroup">' + a.html + "</div>"
     },
     optgroup_header: function(a, b) {
      return '<div class="optgroup-header">' + b(a[d]) + "</div>"
     },
     option: function(a, b) {
      return '<div class="option">' + b(a[c]) + "</div>"
     },
     item: function(a, b) {
      return '<div class="item">' + b(a[c]) + "</div>"
     },
     option_create: function(a, b) {
      return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>"
     }
    };
   b.settings.render = a.extend({}, e, b.settings.render)
  },
  setupCallbacks: function() {
   var a, b, c = {
    initialize: "onInitialize",
    change: "onChange",
    item_add: "onItemAdd",
    item_remove: "onItemRemove",
    clear: "onClear",
    option_add: "onOptionAdd",
    option_remove: "onOptionRemove",
    option_clear: "onOptionClear",
    optgroup_add: "onOptionGroupAdd",
    optgroup_remove: "onOptionGroupRemove",
    optgroup_clear: "onOptionGroupClear",
    dropdown_open: "onDropdownOpen",
    dropdown_close: "onDropdownClose",
    type: "onType",
    load: "onLoad",
    focus: "onFocus",
    blur: "onBlur"
   };
   for (a in c) c.hasOwnProperty(a) && (b = this.settings[c[a]], b && this.on(a, b))
  },
  onClick: function(a) {
   var b = this;
   b.isFocused || (b.focus(), a.preventDefault())
  },
  onMouseDown: function(b) {
   var c = this,
    d = b.isDefaultPrevented();
   a(b.target);
   if (c.isFocused) {
    if (b.target !== c.$control_input[0]) return "single" === c.settings.mode ? c.isOpen ? c.close() : c.open() : d || c.setActiveItem(null), !1
   } else d || window.setTimeout(function() {
    c.focus()
   }, 0)
  },
  onChange: function() {
   this.$input.trigger("change")
  },
  onPaste: function(b) {
   var c = this;
   return c.isFull() || c.isInputHidden || c.isLocked ? void b.preventDefault() : void(c.settings.splitOn && setTimeout(function() {
    var b = c.$control_input.val();
    if (b.match(c.settings.splitOn))
     for (var d = a.trim(b).split(c.settings.splitOn), e = 0, f = d.length; e < f; e++) c.createItem(d[e])
   }, 0))
  },
  onKeyPress: function(a) {
   if (this.isLocked) return a && a.preventDefault();
   var b = String.fromCharCode(a.keyCode || a.which);
   return this.settings.create && "multi" === this.settings.mode && b === this.settings.delimiter ? (this.createItem(), a.preventDefault(), !1) : void 0
  },
  onKeyDown: function(a) {
   var b = (a.target === this.$control_input[0], this);
   if (b.isLocked) return void(a.keyCode !== u && a.preventDefault());
   switch (a.keyCode) {
    case g:
     if (b.isCmdDown) return void b.selectAll();
     break;
    case i:
     return void(b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close()));
    case o:
     if (!a.ctrlKey || a.altKey) break;
    case n:
     if (!b.isOpen && b.hasOptions) b.open();
     else if (b.$activeOption) {
      b.ignoreHover = !0;
      var c = b.getAdjacentOption(b.$activeOption, 1);
      c.length && b.setActiveOption(c, !0, !0)
     }
     return void a.preventDefault();
    case l:
     if (!a.ctrlKey || a.altKey) break;
    case k:
     if (b.$activeOption) {
      b.ignoreHover = !0;
      var d = b.getAdjacentOption(b.$activeOption, -1);
      d.length && b.setActiveOption(d, !0, !0)
     }
     return void a.preventDefault();
    case h:
     return void(b.isOpen && b.$activeOption && (b.onOptionSelect({
      currentTarget: b.$activeOption
     }), a.preventDefault()));
    case j:
     return void b.advanceSelection(-1, a);
    case m:
     return void b.advanceSelection(1, a);
    case u:
     return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({
      currentTarget: b.$activeOption
     }), b.isFull() || a.preventDefault()), void(b.settings.create && b.createItem() && a.preventDefault());
    case p:
    case q:
     return void b.deleteSelection(a)
   }
   return !b.isFull() && !b.isInputHidden || (f ? a.metaKey : a.ctrlKey) ? void 0 : void a.preventDefault()
  },
  onKeyUp: function(a) {
   var b = this;
   if (b.isLocked) return a && a.preventDefault();
   var c = b.$control_input.val() || "";
   b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), b.trigger("type", c))
  },
  onSearchChange: function(a) {
   var b = this,
    c = b.settings.load;
   c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function(d) {
    c.apply(b, [a, d])
   })))
  },
  onFocus: function(a) {
   var b = this,
    c = b.isFocused;
   return b.isDisabled ? (b.blur(), a && a.preventDefault(), !1) : void(b.ignoreFocus || (b.isFocused = !0, "focus" === b.settings.preload && b.onSearchChange(""), c || b.trigger("focus"), b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), b.refreshState()))
  },
  onBlur: function(a, b) {
   var c = this;
   if (c.isFocused && (c.isFocused = !1, !c.ignoreFocus)) {
    if (!c.ignoreBlur && document.activeElement === c.$dropdown_content[0]) return c.ignoreBlur = !0, void c.onFocus(a);
    var d = function() {
     c.close(), c.setTextboxValue(""), c.setActiveItem(null), c.setActiveOption(null), c.setCaret(c.items.length), c.refreshState(), b && b.focus && b.focus(), c.ignoreFocus = !1, c.trigger("blur")
    };
    c.ignoreFocus = !0, c.settings.create && c.settings.createOnBlur ? c.createItem(null, !1, d) : d()
   }
  },
  onOptionHover: function(a) {
   this.ignoreHover || this.setActiveOption(a.currentTarget, !1)
  },
  onOptionSelect: function(b) {
   var c, d, e = this;
   b.preventDefault && (b.preventDefault(), b.stopPropagation()), d = a(b.currentTarget), d.hasClass("create") ? e.createItem(null, function() {
    e.settings.closeAfterSelect && e.close()
   }) : (c = d.attr("data-value"), "undefined" != typeof c && (e.lastQuery = null, e.setTextboxValue(""), e.addItem(c), e.settings.closeAfterSelect ? e.close() : !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))))
  },
  onItemSelect: function(a) {
   var b = this;
   b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a))
  },
  load: function(a) {
   var b = this,
    c = b.$wrapper.addClass(b.settings.loadingClass);
   b.loading++, a.apply(b, [function(a) {
    b.loading = Math.max(b.loading - 1, 0), a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)), b.loading || c.removeClass(b.settings.loadingClass), b.trigger("load", a)
   }])
  },
  setTextboxValue: function(a) {
   var b = this.$control_input,
    c = b.val() !== a;
   c && (b.val(a).triggerHandler("update"), this.lastValue = a)
  },
  getValue: function() {
   return this.tagType === v && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
  },
  setValue: function(a, b) {
   var c = b ? [] : ["change"];
   E(this, c, function() {
    this.clear(b), this.addItems(a, b)
   })
  },
  setActiveItem: function(b, c) {
   var d, e, f, g, h, i, j, k, l = this;
   if ("single" !== l.settings.mode) {
    if (b = a(b), !b.length) return a(l.$activeItems).removeClass("active"), l.$activeItems = [], void(l.isFocused && l.showInput());
    if (d = c && c.type.toLowerCase(), "mousedown" === d && l.isShiftDown && l.$activeItems.length) {
     for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [k[0]]), h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [b[0]]), g > h && (j = g, g = h, h = j), e = g; e <= h; e++) i = l.$control[0].childNodes[e], l.$activeItems.indexOf(i) === -1 && (a(i).addClass("active"), l.$activeItems.push(i));
     c.preventDefault()
    } else "mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown ? b.hasClass("active") ? (f = l.$activeItems.indexOf(b[0]), l.$activeItems.splice(f, 1), b.removeClass("active")) : l.$activeItems.push(b.addClass("active")[0]) : (a(l.$activeItems).removeClass("active"), l.$activeItems = [b.addClass("active")[0]]);
    l.hideInput(), this.isFocused || l.focus()
   }
  },
  setActiveOption: function(b, c, d) {
   var e, f, g, h, i, j = this;
   j.$activeOption && j.$activeOption.removeClass("active"), j.$activeOption = null, b = a(b), b.length && (j.$activeOption = b.addClass("active"), !c && y(c) || (e = j.$dropdown_content.height(), f = j.$activeOption.outerHeight(!0), c = j.$dropdown_content.scrollTop() || 0, g = j.$activeOption.offset().top - j.$dropdown_content.offset().top + c, h = g, i = g - e + f, g + f > e + c ? j.$dropdown_content.stop().animate({
    scrollTop: i
   }, d ? j.settings.scrollDuration : 0) : g < c && j.$dropdown_content.stop().animate({
    scrollTop: h
   }, d ? j.settings.scrollDuration : 0)))
  },
  selectAll: function() {
   var a = this;
   "single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), a.$activeItems.length && (a.hideInput(), a.close()), a.focus())
  },
  hideInput: function() {
   var a = this;
   a.setTextboxValue(""), a.$control_input.css({
    opacity: 0,
    position: "absolute",
    left: a.rtl ? 1e4 : -1e4
   }), a.isInputHidden = !0
  },
  showInput: function() {
   this.$control_input.css({
    opacity: 1,
    position: "relative",
    left: 0
   }), this.isInputHidden = !1
  },
  focus: function() {
   var a = this;
   a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function() {
    a.ignoreFocus = !1, a.onFocus()
   }, 0))
  },
  blur: function(a) {
   this.$control_input[0].blur(), this.onBlur(null, a)
  },
  getScoreFunction: function(a) {
   return this.sifter.getScoreFunction(a, this.getSearchOptions())
  },
  getSearchOptions: function() {
   var a = this.settings,
    b = a.sortField;
   return "string" == typeof b && (b = [{
    field: b
   }]), {
    fields: a.searchField,
    conjunction: a.searchConjunction,
    sort: b
   }
  },
  search: function(b) {
   var c, d, e, f = this,
    g = f.settings,
    h = this.getSearchOptions();
   if (g.score && (e = f.settings.score.apply(this, [b]), "function" != typeof e)) throw new Error('Selectize "score" setting must be a function that returns a function');
   if (b !== f.lastQuery ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, {
     score: e
    })), f.currentResults = d) : d = a.extend(!0, {}, f.currentResults), g.hideSelected)
    for (c = d.items.length - 1; c >= 0; c--) f.items.indexOf(z(d.items[c].id)) !== -1 && d.items.splice(c, 1);
   return d
  },
  refreshOptions: function(b) {
   var c, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
   "undefined" == typeof b && (b = !0);
   var t = this,
    u = a.trim(t.$control_input.val()),
    v = t.search(u),
    w = t.$dropdown_content,
    x = t.$activeOption && z(t.$activeOption.attr("data-value"));
   for (g = v.items.length, "number" == typeof t.settings.maxOptions && (g = Math.min(g, t.settings.maxOptions)), h = {}, i = [], c = 0; c < g; c++)
    for (j = t.options[v.items[c].id], k = t.render("option", j), l = j[t.settings.optgroupField] || "", m = a.isArray(l) ? l : [l], e = 0, f = m && m.length; e < f; e++) l = m[e], t.optgroups.hasOwnProperty(l) || (l = ""), h.hasOwnProperty(l) || (h[l] = document.createDocumentFragment(), i.push(l)), h[l].appendChild(k);
   for (this.settings.lockOptgroupOrder && i.sort(function(a, b) {
     var c = t.optgroups[a].$order || 0,
      d = t.optgroups[b].$order || 0;
     return c - d
    }), n = document.createDocumentFragment(), c = 0, g = i.length; c < g; c++) l = i[c], t.optgroups.hasOwnProperty(l) && h[l].childNodes.length ? (o = document.createDocumentFragment(), o.appendChild(t.render("optgroup_header", t.optgroups[l])), o.appendChild(h[l]), n.appendChild(t.render("optgroup", a.extend({}, t.optgroups[l], {
    html: K(o),
    dom: o
   })))) : n.appendChild(h[l]);
   if (w.html(n), t.settings.highlight && v.query.length && v.tokens.length)
    for (w.removeHighlight(), c = 0, g = v.tokens.length; c < g; c++) d(w, v.tokens[c].regex);
   if (!t.settings.hideSelected)
    for (c = 0, g = t.items.length; c < g; c++) t.getOption(t.items[c]).addClass("selected");
   p = t.canCreate(u), p && (w.prepend(t.render("option_create", {
    input: u
   })), s = a(w[0].childNodes[0])), t.hasOptions = v.items.length > 0 || p, t.hasOptions ? (v.items.length > 0 ? (r = x && t.getOption(x), r && r.length ? q = r : "single" === t.settings.mode && t.items.length && (q = t.getOption(t.items[0])), q && q.length || (q = s && !t.settings.addPrecedence ? t.getAdjacentOption(s, 1) : w.find("[data-selectable]:first"))) : q = s, t.setActiveOption(q), b && !t.isOpen && t.open()) : (t.setActiveOption(null), b && t.isOpen && t.close())
  },
  addOption: function(b) {
   var c, d, e, f = this;
   if (a.isArray(b))
    for (c = 0, d = b.length; c < d; c++) f.addOption(b[c]);
   else(e = f.registerOption(b)) && (f.userOptions[e] = !0, f.lastQuery = null, f.trigger("option_add", e, b))
  },
  registerOption: function(a) {
   var b = z(a[this.settings.valueField]);
   return "undefined" != typeof b && null !== b && !this.options.hasOwnProperty(b) && (a.$order = a.$order || ++this.order, this.options[b] = a, b)
  },
  registerOptionGroup: function(a) {
   var b = z(a[this.settings.optgroupValueField]);
   return !!b && (a.$order = a.$order || ++this.order, this.optgroups[b] = a, b)
  },
  addOptionGroup: function(a, b) {
   b[this.settings.optgroupValueField] = a, (a = this.registerOptionGroup(b)) && this.trigger("optgroup_add", a, b)
  },
  removeOptionGroup: function(a) {
   this.optgroups.hasOwnProperty(a) && (delete this.optgroups[a], this.renderCache = {}, this.trigger("optgroup_remove", a))
  },
  clearOptionGroups: function() {
   this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
  },
  updateOption: function(b, c) {
   var d, e, f, g, h, i, j, k = this;
   if (b = z(b), f = z(c[k.settings.valueField]), null !== b && k.options.hasOwnProperty(b)) {
    if ("string" != typeof f) throw new Error("Value must be set in option data");
    j = k.options[b].$order, f !== b && (delete k.options[b], g = k.items.indexOf(b), g !== -1 && k.items.splice(g, 1, f)), c.$order = c.$order || j, k.options[f] = c, h = k.renderCache.item, i = k.renderCache.option, h && (delete h[b], delete h[f]), i && (delete i[b], delete i[f]), k.items.indexOf(f) !== -1 && (d = k.getItem(b), e = a(k.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)), k.lastQuery = null, k.isOpen && k.refreshOptions(!1)
   }
  },
  removeOption: function(a, b) {
   var c = this;
   a = z(a);
   var d = c.renderCache.item,
    e = c.renderCache.option;
   d && delete d[a], e && delete e[a], delete c.userOptions[a], delete c.options[a], c.lastQuery = null, c.trigger("option_remove", a), c.removeItem(a, b)
  },
  clearOptions: function() {
   var a = this;
   a.loadedSearches = {}, a.userOptions = {}, a.renderCache = {}, a.options = a.sifter.items = {}, a.lastQuery = null, a.trigger("option_clear"), a.clear()
  },
  getOption: function(a) {
   return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]"))
  },
  getAdjacentOption: function(b, c) {
   var d = this.$dropdown.find("[data-selectable]"),
    e = d.index(b) + c;
   return e >= 0 && e < d.length ? d.eq(e) : a()
  },
  getElementWithValue: function(b, c) {
   if (b = z(b), "undefined" != typeof b && null !== b)
    for (var d = 0, e = c.length; d < e; d++)
     if (c[d].getAttribute("data-value") === b) return a(c[d]);
   return a()
  },
  getItem: function(a) {
   return this.getElementWithValue(a, this.$control.children())
  },
  addItems: function(b, c) {
   for (var d = a.isArray(b) ? b : [b], e = 0, f = d.length; e < f; e++) this.isPending = e < f - 1, this.addItem(d[e], c)
  },
  addItem: function(b, c) {
   var d = c ? [] : ["change"];
   E(this, d, function() {
    var d, e, f, g, h, i = this,
     j = i.settings.mode;
    return b = z(b), i.items.indexOf(b) !== -1 ? void("single" === j && i.close()) : void(i.options.hasOwnProperty(b) && ("single" === j && i.clear(c), "multi" === j && i.isFull() || (d = a(i.render("item", i.options[b])), h = i.isFull(), i.items.splice(i.caretPos, 0, b), i.insertAtCaret(d), (!i.isPending || !h && i.isFull()) && i.refreshState(), i.isSetup && (f = i.$dropdown_content.find("[data-selectable]"), i.isPending || (e = i.getOption(b), g = i.getAdjacentOption(e, 1).attr("data-value"), i.refreshOptions(i.isFocused && "single" !== j), g && i.setActiveOption(i.getOption(g))), !f.length || i.isFull() ? i.close() : i.positionDropdown(), i.updatePlaceholder(), i.trigger("item_add", b, d), i.updateOriginalInput({
     silent: c
    })))))
   })
  },
  removeItem: function(b, c) {
   var d, e, f, g = this;
   d = b instanceof a ? b : g.getItem(b), b = z(d.attr("data-value")), e = g.items.indexOf(b), e !== -1 && (d.remove(), d.hasClass("active") && (f = g.$activeItems.indexOf(d[0]), g.$activeItems.splice(f, 1)), g.items.splice(e, 1), g.lastQuery = null, !g.settings.persist && g.userOptions.hasOwnProperty(b) && g.removeOption(b, c), e < g.caretPos && g.setCaret(g.caretPos - 1), g.refreshState(), g.updatePlaceholder(), g.updateOriginalInput({
    silent: c
   }), g.positionDropdown(), g.trigger("item_remove", b, d))
  },
  createItem: function(b, c) {
   var d = this,
    e = d.caretPos;
   b = b || a.trim(d.$control_input.val() || "");
   var f = arguments[arguments.length - 1];
   if ("function" != typeof f && (f = function() {}), "boolean" != typeof c && (c = !0), !d.canCreate(b)) return f(), !1;
   d.lock();
   var g = "function" == typeof d.settings.create ? this.settings.create : function(a) {
     var b = {};
     return b[d.settings.labelField] = a, b[d.settings.valueField] = a, b
    },
    h = C(function(a) {
     if (d.unlock(), !a || "object" != typeof a) return f();
     var b = z(a[d.settings.valueField]);
     return "string" != typeof b ? f() : (d.setTextboxValue(""), d.addOption(a), d.setCaret(e), d.addItem(b), d.refreshOptions(c && "single" !== d.settings.mode), void f(a))
    }),
    i = g.apply(this, [b, h]);
   return "undefined" != typeof i && h(i), !0
  },
  refreshItems: function() {
   this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
  },
  refreshState: function() {
   this.refreshValidityState(), this.refreshClasses()
  },
  refreshValidityState: function() {
   if (!this.isRequired) return !1;
   var a = !this.items.length;
   this.isInvalid = a, this.$control_input.prop("required", a), this.$input.prop("required", !a)
  },
  refreshClasses: function() {
   var b = this,
    c = b.isFull(),
    d = b.isLocked;
   b.$wrapper.toggleClass("rtl", b.rtl), b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0), b.$control_input.data("grow", !c && !d)
  },
  isFull: function() {
   return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
  },
  updateOriginalInput: function(a) {
   var b, c, d, e, f = this;
   if (a = a || {}, f.tagType === v) {
    for (d = [], b = 0, c = f.items.length; b < c; b++) e = f.options[f.items[b]][f.settings.labelField] || "", d.push('<option value="' + A(f.items[b]) + '" selected="selected">' + A(e) + "</option>");
    d.length || this.$input.attr("multiple") || d.push('<option value="" selected="selected"></option>'),
     f.$input.html(d.join(""))
   } else f.$input.val(f.getValue()), f.$input.attr("value", f.$input.val());
   f.isSetup && (a.silent || f.trigger("change", f.$input.val()))
  },
  updatePlaceholder: function() {
   if (this.settings.placeholder) {
    var a = this.$control_input;
    this.items.length ? a.removeAttr("placeholder") : a.attr("placeholder", this.settings.placeholder), a.triggerHandler("update", {
     force: !0
    })
   }
  },
  open: function() {
   var a = this;
   a.isLocked || a.isOpen || "multi" === a.settings.mode && a.isFull() || (a.focus(), a.isOpen = !0, a.refreshState(), a.$dropdown.css({
    visibility: "hidden",
    display: "block"
   }), a.positionDropdown(), a.$dropdown.css({
    visibility: "visible"
   }), a.trigger("dropdown_open", a.$dropdown))
  },
  close: function() {
   var a = this,
    b = a.isOpen;
   "single" === a.settings.mode && a.items.length && (a.hideInput(), a.$control_input.blur()), a.isOpen = !1, a.$dropdown.hide(), a.setActiveOption(null), a.refreshState(), b && a.trigger("dropdown_close", a.$dropdown)
  },
  positionDropdown: function() {
   var a = this.$control,
    b = "body" === this.settings.dropdownParent ? a.offset() : a.position();
   b.top += a.outerHeight(!0), this.$dropdown.css({
    width: a.outerWidth(),
    top: b.top,
    left: b.left
   })
  },
  clear: function(a) {
   var b = this;
   b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.updateOriginalInput({
    silent: a
   }), b.refreshState(), b.showInput(), b.trigger("clear"))
  },
  insertAtCaret: function(b) {
   var c = Math.min(this.caretPos, this.items.length);
   0 === c ? this.$control.prepend(b) : a(this.$control[0].childNodes[c]).before(b), this.setCaret(c + 1)
  },
  deleteSelection: function(b) {
   var c, d, e, f, g, h, i, j, k, l = this;
   if (e = b && b.keyCode === p ? -1 : 1, f = G(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), g = [], l.$activeItems.length) {
    for (k = l.$control.children(".active:" + (e > 0 ? "last" : "first")), h = l.$control.children(":not(input)").index(k), e > 0 && h++, c = 0, d = l.$activeItems.length; c < d; c++) g.push(a(l.$activeItems[c]).attr("data-value"));
    b && (b.preventDefault(), b.stopPropagation())
   } else(l.isFocused || "single" === l.settings.mode) && l.items.length && (e < 0 && 0 === f.start && 0 === f.length ? g.push(l.items[l.caretPos - 1]) : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos]));
   if (!g.length || "function" == typeof l.settings.onDelete && l.settings.onDelete.apply(l, [g]) === !1) return !1;
   for ("undefined" != typeof h && l.setCaret(h); g.length;) l.removeItem(g.pop());
   return l.showInput(), l.positionDropdown(), l.refreshOptions(!0), i && (j = l.getOption(i), j.length && l.setActiveOption(j)), !0
  },
  advanceSelection: function(a, b) {
   var c, d, e, f, g, h, i = this;
   0 !== a && (i.rtl && (a *= -1), c = a > 0 ? "last" : "first", d = G(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, g = a < 0 ? 0 === d.start && 0 === d.length : d.start === f, g && !f && i.advanceCaret(a, b)) : (h = i.$control.children(".active:" + c), h.length && (e = i.$control.children(":not(input)").index(h), i.setActiveItem(null), i.setCaret(a > 0 ? e + 1 : e))))
  },
  advanceCaret: function(a, b) {
   var c, d, e = this;
   0 !== a && (c = a > 0 ? "next" : "prev", e.isShiftDown ? (d = e.$control_input[c](), d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault())) : e.setCaret(e.caretPos + a))
  },
  setCaret: function(b) {
   var c = this;
   if (b = "single" === c.settings.mode ? c.items.length : Math.max(0, Math.min(c.items.length, b)), !c.isPending) {
    var d, e, f, g;
    for (f = c.$control.children(":not(input)"), d = 0, e = f.length; d < e; d++) g = a(f[d]).detach(), d < b ? c.$control_input.before(g) : c.$control.append(g)
   }
   c.caretPos = b
  },
  lock: function() {
   this.close(), this.isLocked = !0, this.refreshState()
  },
  unlock: function() {
   this.isLocked = !1, this.refreshState()
  },
  disable: function() {
   var a = this;
   a.$input.prop("disabled", !0), a.$control_input.prop("disabled", !0).prop("tabindex", -1), a.isDisabled = !0, a.lock()
  },
  enable: function() {
   var a = this;
   a.$input.prop("disabled", !1), a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex), a.isDisabled = !1, a.unlock()
  },
  destroy: function() {
   var b = this,
    c = b.eventNS,
    d = b.revertSettings;
   b.trigger("destroy"), b.off(), b.$wrapper.remove(), b.$dropdown.remove(), b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({
    tabindex: d.tabindex
   }).show(), b.$control_input.removeData("grow"), b.$input.removeData("selectize"), a(window).off(c), a(document).off(c), a(document.body).off(c), delete b.$input[0].selectize
  },
  render: function(b, c) {
   var d, e, f = "",
    g = !1,
    h = this;
   return "option" !== b && "item" !== b || (d = z(c[h.settings.valueField]), g = !!d), g && (y(h.renderCache[b]) || (h.renderCache[b] = {}), h.renderCache[b].hasOwnProperty(d)) ? h.renderCache[b][d] : (f = a(h.settings.render[b].apply(this, [c, A])), "option" === b || "option_create" === b ? f.attr("data-selectable", "") : "optgroup" === b && (e = c[h.settings.optgroupValueField] || "", f.attr("data-group", e)), "option" !== b && "item" !== b || f.attr("data-value", d || ""), g && (h.renderCache[b][d] = f[0]), f[0])
  },
  clearCache: function(a) {
   var b = this;
   "undefined" == typeof a ? b.renderCache = {} : delete b.renderCache[a]
  },
  canCreate: function(a) {
   var b = this;
   if (!b.settings.create) return !1;
   var c = b.settings.createFilter;
   return a.length && ("function" != typeof c || c.apply(b, [a])) && ("string" != typeof c || new RegExp(c).test(a)) && (!(c instanceof RegExp) || c.test(a))
  }
 }), M.count = 0, M.defaults = {
  options: [],
  optgroups: [],
  plugins: [],
  delimiter: ",",
  splitOn: null,
  persist: !0,
  diacritics: !0,
  create: !1,
  createOnBlur: !1,
  createFilter: null,
  highlight: !0,
  openOnFocus: !0,
  maxOptions: 1e3,
  maxItems: null,
  hideSelected: null,
  addPrecedence: !1,
  selectOnTab: !1,
  preload: !1,
  allowEmptyOption: !1,
  closeAfterSelect: !1,
  scrollDuration: 60,
  loadThrottle: 300,
  loadingClass: "loading",
  dataAttr: "data-data",
  optgroupField: "optgroup",
  valueField: "value",
  labelField: "text",
  optgroupLabelField: "label",
  optgroupValueField: "value",
  lockOptgroupOrder: !1,
  sortField: "$order",
  searchField: ["text"],
  searchConjunction: "and",
  mode: null,
  wrapperClass: "selectize-control",
  inputClass: "selectize-input",
  dropdownClass: "selectize-dropdown",
  dropdownContentClass: "selectize-dropdown-content",
  dropdownParent: null,
  copyClassesToDropdown: !0,
  render: {}
 }, a.fn.selectize = function(b) {
  var c = a.fn.selectize.defaults,
   d = a.extend({}, c, b),
   e = d.dataAttr,
   f = d.labelField,
   g = d.valueField,
   h = d.optgroupField,
   i = d.optgroupLabelField,
   j = d.optgroupValueField,
   k = function(b, c) {
    var h, i, j, k, l = b.attr(e);
    if (l)
     for (c.options = JSON.parse(l), h = 0, i = c.options.length; h < i; h++) c.items.push(c.options[h][g]);
    else {
     var m = a.trim(b.val() || "");
     if (!d.allowEmptyOption && !m.length) return;
     for (j = m.split(d.delimiter), h = 0, i = j.length; h < i; h++) k = {}, k[f] = j[h], k[g] = j[h], c.options.push(k);
     c.items = j
    }
   },
   l = function(b, c) {
    var k, l, m, n, o = c.options,
     p = {},
     q = function(a) {
      var b = e && a.attr(e);
      return "string" == typeof b && b.length ? JSON.parse(b) : null
     },
     r = function(b, e) {
      b = a(b);
      var i = z(b.val());
      if (i || d.allowEmptyOption)
       if (p.hasOwnProperty(i)) {
        if (e) {
         var j = p[i][h];
         j ? a.isArray(j) ? j.push(e) : p[i][h] = [j, e] : p[i][h] = e
        }
       } else {
        var k = q(b) || {};
        k[f] = k[f] || b.text(), k[g] = k[g] || i, k[h] = k[h] || e, p[i] = k, o.push(k), b.is(":selected") && c.items.push(i)
       }
     },
     s = function(b) {
      var d, e, f, g, h;
      for (b = a(b), f = b.attr("label"), f && (g = q(b) || {}, g[i] = f, g[j] = f, c.optgroups.push(g)), h = a("option", b), d = 0, e = h.length; d < e; d++) r(h[d], f)
     };
    for (c.maxItems = b.attr("multiple") ? null : 1, n = b.children(), k = 0, l = n.length; k < l; k++) m = n[k].tagName.toLowerCase(), "optgroup" === m ? s(n[k]) : "option" === m && r(n[k])
   };
  return this.each(function() {
   if (!this.selectize) {
    var e, f = a(this),
     g = this.tagName.toLowerCase(),
     h = f.attr("placeholder") || f.attr("data-placeholder");
    h || d.allowEmptyOption || (h = f.children('option[value=""]').text());
    var i = {
     placeholder: h,
     options: [],
     optgroups: [],
     items: []
    };
    "select" === g ? l(f, i) : k(f, i), e = new M(f, a.extend(!0, {}, c, i, b))
   }
  })
 }, a.fn.selectize.defaults = M.defaults, a.fn.selectize.support = {
  validity: x
 }, M.define("drag_drop", function(b) {
  if (!a.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
  if ("multi" === this.settings.mode) {
   var c = this;
   c.lock = function() {
    var a = c.lock;
    return function() {
     var b = c.$control.data("sortable");
     return b && b.disable(), a.apply(c, arguments)
    }
   }(), c.unlock = function() {
    var a = c.unlock;
    return function() {
     var b = c.$control.data("sortable");
     return b && b.enable(), a.apply(c, arguments)
    }
   }(), c.setup = function() {
    var b = c.setup;
    return function() {
     b.apply(this, arguments);
     var d = c.$control.sortable({
      items: "[data-value]",
      forcePlaceholderSize: !0,
      disabled: c.isLocked,
      start: function(a, b) {
       b.placeholder.css("width", b.helper.css("width")), d.css({
        overflow: "visible"
       })
      },
      stop: function() {
       d.css({
        overflow: "hidden"
       });
       var b = c.$activeItems ? c.$activeItems.slice() : null,
        e = [];
       d.children("[data-value]").each(function() {
        e.push(a(this).attr("data-value"))
       }), c.setValue(e), c.setActiveItem(b)
      }
     })
    }
   }()
  }
 }), M.define("dropdown_header", function(b) {
  var c = this;
  b = a.extend({
   title: "Untitled",
   headerClass: "selectize-dropdown-header",
   titleRowClass: "selectize-dropdown-header-title",
   labelClass: "selectize-dropdown-header-label",
   closeClass: "selectize-dropdown-header-close",
   html: function(a) {
    return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>'
   }
  }, b), c.setup = function() {
   var d = c.setup;
   return function() {
    d.apply(c, arguments), c.$dropdown_header = a(b.html(b)), c.$dropdown.prepend(c.$dropdown_header)
   }
  }()
 }), M.define("optgroup_columns", function(b) {
  var c = this;
  b = a.extend({
   equalizeWidth: !0,
   equalizeHeight: !0
  }, b), this.getAdjacentOption = function(b, c) {
   var d = b.closest("[data-group]").find("[data-selectable]"),
    e = d.index(b) + c;
   return e >= 0 && e < d.length ? d.eq(e) : a()
  }, this.onKeyDown = function() {
   var a = c.onKeyDown;
   return function(b) {
    var d, e, f, g;
    return !this.isOpen || b.keyCode !== j && b.keyCode !== m ? a.apply(this, arguments) : (c.ignoreHover = !0, g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), g = b.keyCode === j ? g.prev("[data-group]") : g.next("[data-group]"), f = g.find("[data-selectable]"), e = f.eq(Math.min(f.length - 1, d)), void(e.length && this.setActiveOption(e)))
   }
  }();
  var d = function() {
    var a, b = d.width,
     c = document;
    return "undefined" == typeof b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, c.body.removeChild(a)), b
   },
   e = function() {
    var e, f, g, h, i, j, k;
    if (k = a("[data-group]", c.$dropdown_content), f = k.length, f && c.$dropdown_content.width()) {
     if (b.equalizeHeight) {
      for (g = 0, e = 0; e < f; e++) g = Math.max(g, k.eq(e).height());
      k.css({
       height: g
      })
     }
     b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), k.css({
      width: h
     }), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({
      width: i
     })))
    }
   };
  (b.equalizeHeight || b.equalizeWidth) && (B.after(this, "positionDropdown", e), B.after(this, "refreshOptions", e))
 }), M.define("remove_button", function(b) {
  b = a.extend({
   label: "&times;",
   title: "Remove",
   className: "remove",
   append: !0
  }, b);
  var c = function(b, c) {
    c.className = "remove-single";
    var d = b,
     e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + A(c.title) + '">' + c.label + "</a>",
     f = function(a, b) {
      return a + b
     };
    b.setup = function() {
     var g = d.setup;
     return function() {
      if (c.append) {
       var h = a(d.$input.context).attr("id"),
        i = (a("#" + h), d.settings.render.item);
       d.settings.render.item = function(a) {
        return f(i.apply(b, arguments), e)
       }
      }
      g.apply(b, arguments), b.$control.on("click", "." + c.className, function(a) {
       a.preventDefault(), d.isLocked || d.clear()
      })
     }
    }()
   },
   d = function(b, c) {
    var d = b,
     e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + A(c.title) + '">' + c.label + "</a>",
     f = function(a, b) {
      var c = a.search(/(<\/[^>]+>\s*)$/);
      return a.substring(0, c) + b + a.substring(c)
     };
    b.setup = function() {
     var g = d.setup;
     return function() {
      if (c.append) {
       var h = d.settings.render.item;
       d.settings.render.item = function(a) {
        return f(h.apply(b, arguments), e)
       }
      }
      g.apply(b, arguments), b.$control.on("click", "." + c.className, function(b) {
       if (b.preventDefault(), !d.isLocked) {
        var c = a(b.currentTarget).parent();
        d.setActiveItem(c), d.deleteSelection() && d.setCaret(d.items.length)
       }
      })
     }
    }()
   };
  return "single" === this.settings.mode ? void c(this, b) : void d(this, b)
 }), M.define("restore_on_backspace", function(a) {
  var b = this;
  a.text = a.text || function(a) {
   return a[this.settings.labelField]
  }, this.onKeyDown = function() {
   var c = b.onKeyDown;
   return function(b) {
    var d, e;
    return b.keyCode === p && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1, d >= 0 && d < this.items.length) ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [e])), this.refreshOptions(!0)), void b.preventDefault()) : c.apply(this, arguments)
   }
  }()
 }), M
});
this.depp || function(n, e) {
  depp = function() {
   var n = {},
    u = function() {},
    f = {},
    o = {},
    a = {},
    s = {},
    d = {};

   function p(n) {
    throw new Error("Depp Error: " + n)
   }

   function r(n, e) {
    var t = function r(n, i) {
     i = i || [];
     var c = [],
      o = [];
     return n.forEach((function(t) {
      if (0 <= i.indexOf(t) && p("Circular reference"), !(t in f)) return c.push("#" + t);
      f[t].forEach((function(n) {
       if ("#" == n[0]) {
        var e = i.slice();
        e.push(t), e = r([n.slice(1)], e), c = c.concat(e[0]), o = o.concat(e[1])
       } else o.push(n)
      }))
     })), [c, o]
    }(n);
    t[0].length ? i(t[0], (function() {
     r(n, e)
    })) : e(t[1])
   }

   function i(n, t) {
    var e, r, i = n.length,
     c = i;
    if (0 == i) return t();
    for (e = function(n, e) {
      if (e) return t(n);
      --c || t()
     }; i--;)(r = n[i]) in a ? e(r, a[r]) : (o[r] = o[r] || []).push(e)
   }

   function l(n, e) {
    var t = o[n];
    if (a[n] = e, t)
     for (; t.length;) t[0](n, e), t.splice(0, 1)
   }
   return n.define = function(n) {
    var e;
    for (var t in n) t in f && p("Bundle already defined"), e = n[t], f[t] = e.push ? e : [e], l("#" + t)
   }, n.config = function(n) {
    for (var e in n) d[e] = n[e]
   }, n.require = function(n, e, t) {
    r(n = n.push ? n : [n], (function(n) {
     i(n, (function(n) {
      n ? (t || u)(n) : (e || u)()
     })), n.forEach((function(n) {
      var t, r, i, c, e, o, f;
      n in s || (s[n] = !0, t = n, r = l, e = document, o = d.before || u, f = t.replace(/^(css|img)!/, ""), /(^css!|\.css$)/.test(t) ? (i = !0, (c = e.createElement("link")).rel = "stylesheet", c.href = f) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (c = e.createElement("img")).src = f : ((c = e.createElement("script")).src = t, c.async = !1), c.onload = c.onerror = c.onbeforeload = function(n) {
       var e = n.type[0];
       if (i && "hideFocus" in c) try {
        c.sheet.cssText.length || (e = "e")
       } catch (n) {
        18 != n.code && (e = "e")
       }
       if ("b" == e) {
        if (!n.defaultPrevented) return;
        e = "e"
       }
       r(t, "e" == e)
      }, o(t, c), e.head.appendChild(c))
     }))
    }))
   }, n.done = function(n) {
    f[n] = [], l("#" + n)
   }, n.isDefined = function(n) {
    return n in f
   }, n.reset = function() {
    f = {}, o = {}, a = {}, s = {}, d = {}
   }, n
  }(), (e = n.createEvent("HTMLEvents")).initEvent ? e.initEvent("depp-load", !1, !1) : e = new Event("depp-load"), n.dispatchEvent(e)
 }(document),
 function(i) {
  var n = {
    callback: function() {},
    runOnLoad: !0,
    frequency: 100,
    previousVisibility: null
   },
   c = {
    checkVisibility: function(i, n) {
     if (jQuery.contains(document, i[0])) {
      var e = n.previousVisibility,
       t = i.is(":visible");
      n.previousVisibility = t;
      var u = null == e;
      u ? n.runOnLoad && n.callback(i, t, u) : e !== t && n.callback(i, t, u), setTimeout((function() {
       c.checkVisibility(i, n)
      }), n.frequency)
     }
    }
   };
  i.fn.visibilityChanged = function(e) {
   var t = i.extend({}, n, e);
   return this.each((function() {
    c.checkVisibility(i(this), t)
   }))
  }
 }(jQuery),
 function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.bounty = e() : t.bounty = e()
 }(this, (function() {
  return function(t) {
   function e(a) {
    if (r[a]) return r[a].exports;
    var n = r[a] = {
     exports: {},
     id: a,
     loaded: !1
    };
    return t[a].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports
   }
   var r = {};
   return e.m = t, e.c = r, e.p = "/", e(0)
  }([function(t, e, r) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
    value: !0
   });
   var a = r(1);
   Object.defineProperty(e, "default", {
    enumerable: !0,
    get: function() {
     return (t = a, t && t.__esModule ? t : {
      default: t
     }).default
    }
   })
  }, function(t, e, r) {
   "use strict";

   function a(t) {
    return t && t.__esModule ? t : {
     default: t
    }
   }
   Object.defineProperty(e, "__esModule", {
    value: !0
   });
   var n = a(r(2)),
    l = r(5),
    i = a(r(10));
   e.default = function(t) {
    var e, r = t.el,
     a = t.value,
     o = t.initialValue,
     c = void 0 === o ? null : o,
     u = t.lineHeight,
     f = void 0 === u ? 1.35 : u,
     d = t.letterSpacing,
     s = void 0 === d ? 1 : d,
     p = t.animationDelay,
     v = void 0 === p ? 100 : p,
     y = t.letterAnimationDelay,
     h = void 0 === y ? 100 : y,
     g = (0, l.select)(r),
     b = window.getComputedStyle(g),
     m = parseInt(b.fontSize, 10),
     x = (m * f - m) / 2 + m / 10,
     _ = m * f - x,
     M = Date.now(),
     j = 0,
     w = m * f + x;
    g.innerHTML = "";
    var P, O, N, S, A, D, E = l.append.call(g, "svg"),
     B = (e = l.append.call(E, "svg"), l.attr).call(e, "mask", "url(#mask-" + M + ")"),
     F = l.append.call(E, "defs");
    S = F, A = M, (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = (D = l.append.call(S, "linearGradient"), l.attr).call(D, "id", "gradient-" + A), l.attr).call(D, "x1", "0%"), l.attr).call(D, "y1", "0%"), l.attr).call(D, "x2", "0%"), l.attr).call(D, "y2", "100%"), l.append).call(D, "stop"), l.attr).call(D, "offset", "0"), l.attr).call(D, "stop-color", "white"), l.attr).call(D, "stop-opacity", "0"), l.select).call(D, "#gradient-" + A), l.append).call(D, "stop"), l.attr).call(D, "offset", "0.2"), l.attr).call(D, "stop-color", "white"), l.attr).call(D, "stop-opacity", "1"), l.select).call(D, "#gradient-" + A), l.append).call(D, "stop"), l.attr).call(D, "offset", "0.8"), l.attr).call(D, "stop-color", "white"), l.attr).call(D, "stop-opacity", "1"), l.select).call(D, "#gradient-" + A), l.append).call(D, "stop"), l.attr).call(D, "offset", "1"), l.attr).call(D, "stop-color", "white"), l.attr).call(D, "stop-opacity", "0"), P = F, O = M, (N = (N = (N = (N = (N = (N = (N = l.append.call(P, "mask"), l.attr).call(N, "id", "mask-" + O), l.append).call(N, "rect"), l.attr).call(N, "x", 0), l.attr).call(N, "y", 0), l.attr).call(N, "width", "100%"), l.attr).call(N, "height", "100%"), l.attr).call(N, "fill", "url(#gradient-" + O + ")");
    var k = function(t, e) {
      for (var r = String(t).replace(/ /g, " ").split(""), a = String(t).search(/\d/); e.length > r.length;) {
       var n = e[e.length - r.length - 1 + a];
       r.splice(a, 0, isNaN(parseInt(n, 10)) ? n : "0")
      }
      return r
     },
     I = String(c || "0"),
     C = k(String(a), I),
     G = k(I, String(a)),
     q = C.map((function(t, e) {
      var r, a, n, i, o, c, u, d, s, p, v, y, h = e + "-" + M;
      return isNaN(parseInt(t, 10)) || isNaN(parseInt(G[e], 10)) ? {
       isDigit: !1,
       node: (p = B, v = t, (y = (y = l.append.call(p, "g"), l.append).call(y, "text"), l.text).call(y, v)),
       value: t,
       offset: {
        x: 0,
        y: _
       }
      } : {
       isDigit: !0,
       id: h,
       node: (i = B, o = m, c = f, u = h, s = (d = (d = l.append.call(i, "g"), l.attr).call(d, "id", "digit-" + u), l.style).call(d, "filter", "url(#motionFilter-" + u + ")"), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].forEach((function(t, e) {
        var r;
        (r = (r = l.append.call(s, "text"), l.attr).call(r, "y", -e * o * c), l.text).call(r, t)
       })), s),
       filter: (r = F, a = h, (n = (n = (n = (n = (n = (n = (n = l.append.call(r, "filter"), l.attr).call(n, "id", "motionFilter-" + a), l.attr).call(n, "width", "300%"), l.attr).call(n, "x", "-100%"), l.append).call(n, "feGaussianBlur"), l.attr).call(n, "class", "blurValues"), l.attr).call(n, "in", "SourceGraphic"), l.attr).call(n, "stdDeviation", "0 0")),
       value: Number(t),
       initial: Number(G[e]),
       offset: {
        x: 0,
        y: _ + Number(G[e]) * (m * f)
       }
      }
     })),
     H = [],
     V = q.filter((function(t) {
      return t.isDigit
     }));
    V.forEach((function(t, e) {
     var r = t.initial * (m * f),
      a = (30 + t.value) * (m * f),
      n = (0, i.default)({
       from: r,
       to: a,
       delay: (V.length - 1 - e) * h + v,
       step: function(e) {
        var n;
        t.offset.y = _ + e % (m * f * 10), (n = t.node, l.attr).call(n, "transform", "translate(" + t.offset.x + ", " + t.offset.y + ")");
        var i = (r + a) / 2,
         o = Number(Math.abs(Math.abs(Math.abs(e - i) - i) - r) / 100).toFixed(1);
        (n = t.filter, l.attr).call(n, "stdDeviation", "0 " + o)
       },
       end: 0 === e ? function() {
        return z()
       } : function(t) {
        return t
       }
      });
     H.push(n)
    }));
    var z = (0, n.default)((function(t) {
     var e, r, a;
     j = 0, q.forEach((function(t) {
      try {
       var e = t.node.getBBox().width;
       t.offset.x = j, t.isDigit && [].concat(function(t) {
        if (Array.isArray(t)) {
         for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
         return r
        }
        return Array.from(t)
       }(t.node.childNodes)).forEach((function(t) {
        var r = t.getBBox().width,
         a = (e - r) / 2;
        t.setAttribute("x", a)
       })), j += e + s
      } catch (t) {}
     })), j -= s, q.forEach((function(t) {
      var e;
      (e = t.node, l.attr).call(e, "transform", "translate(" + t.offset.x + ", " + t.offset.y + ")")
     })), e = E, r = j, a = w, l.attr.call(e, "width", r), l.attr.call(e, "height", a), l.attr.call(e, "viewBox", "0 0 " + r + " " + a), l.style.call(e, "overflow", "visible"), H.forEach((function(e) {
      return e.update(t)
     }))
    }));
    return z
   }
  }, function(t, e) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
    value: !0
   }), e.default = function(t) {
    var e = void 0;
    return function r(a) {
      e = requestAnimationFrame(r), t(a)
     }(0),
     function() {
      return cancelAnimationFrame(e)
     }
   }
  }, function(t, e, r) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
    value: !0
   }), e.default = function(t) {
    var e = document.createElementNS(l.default.svg, t);
    return this.appendChild(e), e
   };
   var a, n, l = (a = r(6)) && a.__esModule ? a : {
    default: a
   }
  }, function(t, e) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
    value: !0
   }), e.default = function(t, e) {
    return this.setAttribute(t, e), this
   }
  }, function(t, e, r) {
   "use strict";

   function a(t) {
    return t && t.__esModule ? t : {
     default: t
    }
   }
   Object.defineProperty(e, "__esModule", {
    value: !0
   });
   var n = r(7);
   Object.defineProperty(e, "select", {
    enumerable: !0,
    get: function() {
     return a(n).default
    }
   });
   var l = r(3);
   Object.defineProperty(e, "append", {
    enumerable: !0,
    get: function() {
     return a(l).default
    }
   });
   var i = r(4);
   Object.defineProperty(e, "attr", {
    enumerable: !0,
    get: function() {
     return a(i).default
    }
   });
   var o = r(8);
   Object.defineProperty(e, "style", {
    enumerable: !0,
    get: function() {
     return a(o).default
    }
   });
   var c = r(9);
   Object.defineProperty(e, "text", {
    enumerable: !0,
    get: function() {
     return a(c).default
    }
   })
  }, function(t, e) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
    value: !0
   }), e.default = {
    svg: "http://www.w3.org/2000/svg"
   }
  }, function(t, e) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
    value: !0
   }), e.default = function(t) {
    return t === String(t) ? document.querySelector(t) : t
   }
  }, function(t, e) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
    value: !0
   }), e.default = function(t, e) {
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return this.style.setProperty(t, e, r), this
   }
  }, function(t, e) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
    value: !0
   }), e.default = function(t) {
    return this.textContent = t, this
   }
  }, function(t, e) {
   "use strict";
   Object.defineProperty(e, "__esModule", {
    value: !0
   });
   var r = function(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
   };
   e.default = function(t) {
    var e = t.from,
     a = t.to,
     n = t.duration,
     l = void 0 === n ? 3e3 : n,
     i = t.delay,
     o = void 0 === i ? 0 : i,
     c = t.easing,
     u = void 0 === c ? r : c,
     f = t.start,
     d = void 0 === f ? function(t) {
      return t
     } : f,
     s = t.step,
     p = void 0 === s ? function(t) {
      return t
     } : s,
     v = t.end,
     y = void 0 === v ? function(t) {
      return t
     } : v,
     h = e,
     g = 0,
     b = !1;
    return {
     update: function(t) {
      if (!b) {
       g || (g = t, d(h));
       var r = Math.min(Math.max(t - g - o, 0), l) / l;
       h = u(r) * (a - e) + e, p(h), 1 === r && (b = !0, y(h))
      }
     }
    }
   }
  }])
 })), depp.define({
  "mcw-chartjs": [mcw.url + "assets/public/js/Chart.min.js"],
  "mcw-echarts": [mcw.url + "assets/public/js/Charts.min.js"],
  "mcw-datatable": [mcw.url + "assets/public/js/jquery.dataTables.min.js", mcw.url + "assets/public/js/dataTables.responsive.min.js"]
 }),
 function($) {
  function hex2rgb(hex) {
   3 === (hex = hex.replace("#", "")).length && (hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]);
   var r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16);
   return isNaN(r) || isNaN(g) || isNaN(b) ? new Error("Invalid Hex") : r + "," + g + "," + b
  }
  mcw.number_format = function(number, decimals, dec_point, thousands_point) {
   if (null == number || !isFinite(number)) return "";
   if (!decimals) {
    var len = number.toString().split(".").length;
    decimals = len > 1 ? len : 0
   }
   dec_point || (dec_point = "."), thousands_point || (thousands_point = ",");
   var splitNum = (number = (number = parseFloat(number).toFixed(decimals)).replace(".", dec_point)).split(dec_point);
   return splitNum[0] = splitNum[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_point), number = splitNum.join(dec_point)
  }, mcw.numberFormat = function(num, iso, shorten = !1, decimals = "auto") {
   num = parseFloat(num);
   var format = void 0 !== mcw.currency_format[iso] ? mcw.currency_format[iso] : mcw.default_currency_format;
   decimals = shorten ? format.decimals : "auto" == decimals ? num >= 1 ? format.decimals : 6 : parseInt(decimals), num = num.toFixed(decimals);
   var index = 0,
    suffix = "",
    suffixes = ["", " K", " M", " B", " T"];
   if (shorten) {
    for (; num > 1e3;) num /= 1e3, index++;
    suffix = suffixes[index]
   }
   return mcw.number_format(num, decimals, format.decimals_sep, format.thousands_sep) + suffix
  }, mcw.priceFormat = function(price, iso, shorten = !1, decimals = "auto") {
   price = parseFloat(price);
   var format = void 0 !== mcw.currency_format[iso] ? mcw.currency_format[iso] : mcw.default_currency_format;
   price = mcw.numberFormat(price, iso, shorten, decimals);
   var out = format.position;
   return out = (out = (out = out.replace("{symbol}", '<b class="fiat-symbol">' + format.symbol + "</b>")).replace("{space}", " ")).replace("{price}", "<span>" + price + "</span>")
  }, $.fn.extend({
   animateCss: function(animationName, callback) {
    var animationEnd = function(el) {
     var animations = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "mozAnimationEnd",
      WebkitAnimation: "webkitAnimationEnd"
     };
     for (var t in animations)
      if (void 0 !== el.style[t]) return animations[t]
    }(document.createElement("div"));
    return this.addClass("mcw-animated " + animationName).one(animationEnd, (function() {
     $(this).removeClass("mcw-animated " + animationName), "function" == typeof callback && callback()
    })), this
   }
  });
  var realtimes = $('[data-realtime="on"]');
  if (realtimes.length > 0) {
   var socket = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");
   socket.addEventListener("message", (function(msg) {
    var prices = JSON.parse(msg.data);
    for (var coin in prices) realtimes.find('[data-live-price="' + coin + '"]').each((function() {
     $(this).realTime(coin, prices[coin])
    }))
   }))
  }

  function rgb2hex(rgb) {
   return (rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === rgb.length ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : ""
  }

  function isBrightness($that) {
   var c = rgb2hex($that.css("background-color")),
    rgb = parseInt(c.substring(1), 16),
    r, g, b, luma;
   .2126 * (rgb >> 16 & 255) + .7152 * (rgb >> 8 & 255) + .0722 * (rgb >> 0 & 255) < 50 && $that.addClass("invert-act")
  }
  $.fn.realTime = function(coin, priceusd) {
   var self = $(this),
    rate = self.data("rate"),
    currency = self.data("currency"),
    timeout = parseInt($(this).attr("data-timeout")) || 0,
    difference;
   if (Math.floor(Date.now()) - timeout > 1e4) {
    var price = mcw.priceFormat(priceusd * rate, currency);
    self.html(price), priceusd > parseFloat(self.attr("data-price")) && self.animateCss("liveup"), priceusd < parseFloat(self.attr("data-price")) && self.animateCss("livedown"), self.attr("data-price", priceusd), self.attr("data-timeout", Math.floor(Date.now()))
   }
  }, $.fn.invertable = function() {
   isBrightness($(this));
   var invertList = ["ethereum", "ripple", "iota", "eos", "0x", "bancor", "dentacoin", "bibox-token", "medishares", "santiment", "quantstamp", "raiden-network-token", "pillar", "republic-protocol", "metal", "eidoo", "credo", "blackmoon", "covesting", "shivom", "suncontract", "numeraire", "daostack", "bitdegree", "matryx", "faceter", "internxt", "cryptoping", "invacio", "chainium", "creativecoin", "trezarcoin", "elcoin-el", "jesus-coin", "mojocoin", "gapcoin", "prime-xi", "speedcash", "veltor", "loopring-neo", "francs"];
   $(this).find("img").each((function() {
    invertList.join("-").toLowerCase().indexOf($(this).attr("alt").toLowerCase()) > -1 && $(this).addClass("invertable")
   }))
  }, $(".mcw-dark-theme,.mcw-midnight-theme,.mcw-custom-theme,.mcw-table.dark").each((function() {
   $(this).invertable()
  })), $.fn.drawChart = function() {
   var self = $(this);
   depp.require("mcw-chartjs", (function() {
    var rate = self.data("rate") ? self.data("rate") : 1,
     currency = self.data("currency") ? self.data("currency") : "USD",
     color = self.data("color"),
     gradient = parseInt(self.data("gradient")),
     border = parseInt(self.data("border")),
     opacity = parseFloat(self.data("opacity")),
     values = self.data("points").split(",").slice(0, 24),
     background;
    if (values = values.map((function(value) {
      var decimals = (value = parseFloat(value) * rate) >= 1 ? 2 : value < 1e-6 ? 8 : 6;
      return value.toFixed(decimals)
     })), background = background || color, 0 === gradient) var background = "rgba(" + color + "," + opacity + ")";
    else(background = self[0].getContext("2d").createLinearGradient(0, 0, 0, gradient)).addColorStop(0, "rgba(" + color + ",0.3)"), background.addColorStop(1, "rgba(" + color + ",0)");
    var data = {
      labels: values,
      datasets: [{
       data: values,
       fill: !0,
       backgroundColor: background,
       borderColor: "rgb(" + color + ")",
       pointBorderColor: "rgb(" + color + ")",
       lineTension: .25,
       pointRadius: 0,
       borderWidth: border
      }]
     },
     options = {
      animation: {
       duration: 500
      },
      legend: {
       display: !1
      },
      scales: {
       xAxes: [{
        display: !1
       }],
       yAxes: [{
        display: !1
       }]
      },
      tooltips: {
       mode: "index",
       intersect: !1,
       displayColors: !1,
       callbacks: {
        label: function(tooltipItem, data) {
         return mcw.priceFormat(tooltipItem.xLabel, currency).replace('<b class="fiat-symbol">', "").replace("</b>", "").replace("<span>", "").replace("</span>", "")
        },
        title: function(tooltipItem, data) {
         return !1
        }
       }
      },
      hover: {
       mode: "nearest",
       intersect: !0
      },
      maintainAspectRatio: !1
     },
     chart = new Chart(self[0].getContext("2d"), {
      type: "line",
      data: data,
      options: options
     })
   }))
  }, $.fn.mcwTable = function() {
   var self = this,
    breakpoint = 480,
    table = self.find(".mcw-datatable");
   depp.require("mcw-datatable", (function() {
    $.fn.dataTableExt.oPagination.info_buttons = {
     fnInit: function(e, a, n) {
      var t = e._iDisplayStart + 1 + " - " + e.fnDisplayEnd() + " of " + e.fnRecordsDisplay(),
       i = document.createElement("span"),
       s = document.createElement("span"),
       o = document.createElement("span");
      i.appendChild(document.createTextNode(e.oLanguage.oPaginate.sPrevious)), o.appendChild(document.createTextNode(e.oLanguage.oPaginate.sNext)), s.appendChild(document.createTextNode(t)), i.className = "paginate_button previous", o.className = "paginate_button next", s.className = "paginate_button info", a.appendChild(i), a.appendChild(s), a.appendChild(o), $(i).click((function() {
       e.oApi._fnPageChange(e, "previous"), n(e)
      })), $(o).click((function() {
       e.oApi._fnPageChange(e, "next"), n(e)
      })), $(i).bind("selectstart", (function() {
       return !1
      })), $(o).bind("selectstart", (function() {
       return !1
      }))
     },
     fnUpdate: function(e, a) {
      if (e.aanFeatures.p)
       for (var n = e.aanFeatures.p, t = 0, i = n.length; t < i; t++) {
        var s = n[t].getElementsByTagName("span");
        s[1].innerText = e._iDisplayStart + 1 + " - " + e.fnDisplayEnd() + " of " + e.fnRecordsDisplay(), 0 === e._iDisplayStart ? s[0].className = "paginate_button previous disabled" : s[0].className = "paginate_button previous enabled", e.fnDisplayEnd() == e.fnRecordsDisplay() ? s[2].className = "paginate_button next disabled" : s[2].className = "paginate_button next enabled"
       }
     }
    };
    var columns = [],
     fields = [];
    table.find("thead th").each((function(index) {
     var column = $(this).data("col");
     fields.push(column), columns.push({
      data: column,
      name: column,
      render: function(data, type, row, meta) {
       if (void 0 === meta.settings.json) return data;
       switch (column) {
        case "rank":
         return data;
        case "name":
         var out = '<div class="coin"><div class="coin-image"><img src="' + row.img + '" style="max-height: 35px;" alt="' + row.slug + '"></div>';
         return row.link ? out += '<a href="' + row.link + '" class="coin-title"><div class="coin-name">' + data + '</div><div class="coin-symbol">' + row.symbol + "</div></a>" : out += '<div class="coin-title"><div class="coin-name">' + data + '</div><div class="coin-symbol">' + row.symbol + "</div></div>", out += "</div>";
        case "price_usd":
         var slug;
         return '<span data-live-price="' + row.name.split(" ").join("-").toLowerCase() + '" data-rate="' + row.fiatrate + '" data-price="' + data + '" data-currency="' + row.currency + '">' + mcw.priceFormat(data * row.fiatrate, row.currency) + "</span>";
        case "price_btc":
         return "Éƒ " + data;
        case "market_cap_usd":
        case "volume_usd_24h":
         var shorten = 1 == row.priceformat;
         return mcw.priceFormat(data * row.fiatrate, row.currency, shorten, 0);
        case "available_supply":
         var shorten = 1 == row.priceformat;
         return mcw.numberFormat(data, row.currency, shorten, 0) + " " + row.symbol;
        case "percent_change_24h":
         return '<span class="' + (data >= 0 ? "up" : "down") + '">' + mcw.numberFormat(Math.abs(data), row.currency, !1, 2) + "%</span>";
        case "weekly":
         return '<td><canvas width="135" height="40" data-rate="' + row.fiatrate + '" data-currency="' + row.currency + '" data-color="' + table.data("chartcolor") + '" data-gradient="50" data-border="2" data-points="' + data.join(",") + '"></canvas></td>';
        default:
         return data
       }
      }
     })
    }));
    var tabledt = table.DataTable({
     dom: 'r<"datatable-scroll"t><"loader"><"dataTables-footer"lp><"clear">',
     order: [],
     scrollCollapse: !0,
     pagingType: "info_buttons",
     responsive: {
      details: {
       type: self.width() < 480 ? "column" : "inline",
       target: "tr"
      }
     },
     pageLength: parseInt(table.data("length")),
     lengthMenu: [parseInt(table.data("length")), 10, 25, 50, 100].sort((function(a, b) {
      return a - b
     })).filter((function(value, index, self) {
      return self.indexOf(value) === index
     })),
     columns: columns,
     processing: !0,
     serverSide: !0,
     deferLoading: parseInt(table.data("total")),
     columnDefs: [{
      targets: "col-name",
      className: "ctrl text-left all"
     }, {
      targets: "col-rank",
      className: "text-left min-tablet-p",
      width: "20px"
     }, {
      targets: "col-price_usd",
      className: "all"
     }, {
      targets: "col-weekly",
      width: "190px",
      "max-width": "190px",
      className: "chart-wrapper"
     }],
     drawCallback: function(data) {
      var realtime;
      table.find("canvas").each((function() {
       $(this).drawChart()
      })), "on" === table.parents(".cryptoboxes").data("realtime") && socket.addEventListener("message", (function(msg) {
       var prices = JSON.parse(msg.data);
       for (var coin in prices) table.find('[data-live-price="' + coin + '"]').each((function() {
        $(this).realTime(coin, prices[coin])
       }))
      })), $(".mcw-table.dark").each((function() {
       $(this).invertable()
      }))
     },
     ajax: {
      url: mcw.ajax_url,
      data: {
       action: "mcw_table",
       mcw_id: self.attr("id").split("-")[1]
      }
     },
     language: {
      processing: "",
      lengthMenu: "Coins per page: _MENU_"
     }
    });
    tabledt.on("responsive-resize", (function(e, datatable, columns) {
     var index = columns[0] ? 0 : 1,
      dtr = ["dtr-inline", "dtr-column"];
     table.find("tr td").removeClass("ctrl"), table.find("tbody tr").each((function() {
      $(this).find("td").eq(index).addClass("ctrl")
     })), table.removeClass("dtr-column dtr-inline"), table.addClass(dtr[index])
    })), tabledt.on("processing.dt", (function(e, settings, processing) {
     processing ? self.addClass("table-processing") : self.removeClass("table-processing")
    })), tabledt.on("responsive-display", (function(e) {
     $(e.currentTarget).find("td.child canvas").parent().addClass("chart-wrapper"), $(e.currentTarget).find("td.child canvas").each((function() {
      $(this).drawChart()
     }))
    }))
   }))
  }, $.fn.mcwChart = function() {
   if (0 !== this.length) {
    var self = $(this);
    depp.require("mcw-echarts", (function() {
     setInterval((function() {
      if (sessionStorage.length > 0)
       for (var j = 0; j < sessionStorage.length; j++) sessionStorage.key(j).indexOf("mcw-") > -1 && sessionStorage.setItem(sessionStorage.key(j), "")
     }), 18e5);
     var options = {
       type: self.attr("data-charttype"),
       coin: self.attr("data-chartcoin"),
       currency: self.attr("data-chartcurrency"),
       rate: parseFloat(self.attr("data-chartrate")),
       period: self.attr("data-chartview"),
       theme: self.attr("data-charttheme"),
       smooth: "true" == self.attr("data-chartsmooth"),
       textColor: self.attr("data-chartareacolor"),
       areaColor: self.attr("data-chartbgcolor"),
       font: self.attr("data-font"),
       config: JSON.parse(self.attr("data-config"))
      },
      opts = $.extend({
       type: "chart",
       coin: "BTC",
       currency: "USD",
       rate: 1,
       period: "day",
       theme: "dark",
       smooth: !0,
       areaColor: "rgba(112,147,254,0.8)",
       textColor: "#202328",
       font: "inherit"
      }, options),
      themes, theme = {
       light: {
        backgroundColor: "#fff",
        color: "chart" == opts.type && "" != opts.textColor ? [opts.textColor] : "#202328",
        fontFamily: "default" == opts.font ? self.css("font-family") : opts.font,
        chartColors: "chart" == opts.type ? "" != opts.areaColor ? [opts.areaColor] : "rgba(112,147,254,0.8)" : ["rgba(108,130,145,0.2)"],
        titleColor: "chart" == opts.type ? "" != opts.areaColor ? [opts.areaColor] : "rgba(112,147,254,0.8)" : "#656565",
        xAxis: "rgba(54,60,78,0.1)",
        yAxis: "rgba(54,60,78,0.1)",
        border: "#eee"
       },
       dark: {
        backgroundColor: "#202328",
        color: "chart" == opts.type && "" != opts.textColor ? [opts.textColor] : "#fff",
        fontFamily: "default" == opts.font ? self.css("font-family") : opts.font,
        chartColors: "chart" == opts.type ? "" != opts.areaColor ? [opts.areaColor] : "rgba(112,147,254,0.8)" : ["rgba(108,130,145,0.2)"],
        titleColor: "chart" == opts.type ? "" != opts.areaColor ? [opts.areaColor] : "rgba(112,147,254,0.8)" : "#fff",
        xAxis: "#363c4e",
        yAxis: "#363c4e",
        border: "#202328"
       }
      } [opts.theme],
      periods = {
       day: 24,
       week: 168,
       month: 30,
       threemonths: 90,
       sixmonths: 180,
       year: 365,
       all: 2e3
      },
      periodnames = {
       day: "Day",
       week: "Week",
       month: "Month",
       threemonths: "3 Months",
       sixmonths: "6 Months",
       year: "Year",
       all: "All Time"
      },
      months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      breakpoint = 320,
      chart = echarts.init(self.get(0)),
      options = {
       animation: !1,
       backgroundColor: theme.backgroundColor,
       color: theme.chartColors,
       textStyle: {
        color: theme.color,
        fontFamily: theme.fontFamily
       },
       title: {
        text: opts.coin + "/" + opts.currency,
        subtext: periodnames[opts.period],
        textStyle: {
         color: theme.titleColor
        }
       },
       grid: {
        left: "chart" == opts.type ? opts.config.line.l : opts.config.candlestick.l,
        right: "chart" == opts.type ? opts.config.line.r : opts.config.candlestick.r,
        top: self.width() > 320 ? 80 : 110,
        bottom: 40
       },
       tooltip: {
        trigger: "axis",
        formatter: function(params) {
         var tooltip = params[0].name;
         return "chart" == opts.type ? (tooltip += "<br/>", tooltip += params[0].marker + ' Price: <b style="color: #fff;">' + mcw.priceFormat(params[0].value, opts.currency), tooltip += "</b>") : (tooltip += "<br/>", tooltip += params[0].marker + ' H: <b style="color: #fff;">' + mcw.priceFormat(params[0].value[4], opts.currency) + "</b>", tooltip += '  L: <b style="color: #fff;">' + mcw.priceFormat(params[0].value[3], opts.currency) + "</b>", tooltip += "<br/>", tooltip += params[0].marker + ' O: <b style="color: #fff;">' + mcw.priceFormat(params[0].value[2], opts.currency) + "</b>", tooltip += '  C: <b style="color: #fff;">' + mcw.priceFormat(params[0].value[1], opts.currency) + "</b>", tooltip += "<br/>", tooltip += params[1].marker + ' V: <b style="color: #fff;">' + mcw.numberFormat(params[1].value, opts.currency, !1, 0) + "</b> " + opts.coin), tooltip
        }
       },
       dataZoom: {
        show: !1,
        realtime: !0,
        start: 0,
        end: 100
       },
       toolbox: {
        show: !0,
        itemSize: 22,
        left: self.width() > 320 ? "right" : "left",
        top: self.width() > 320 ? "top" : 50,
        feature: {
         myTool1: {
          show: !0,
          title: periodnames.day,
          icon: "image://" + mcw.url + "assets/public/charts/images/1d-dark-01.svg",
          onclick: function() {
           changeData("day")
          }
         },
         myTool2: {
          show: !0,
          title: periodnames.week,
          icon: "image://" + mcw.url + "assets/public/charts/images/1w-dark-01.svg",
          onclick: function() {
           changeData("week")
          }
         },
         myTool3: {
          show: !0,
          title: periodnames.month,
          icon: "image://" + mcw.url + "assets/public/charts/images/1m-dark-01.svg",
          onclick: function() {
           changeData("month")
          }
         },
         myTool4: {
          show: !0,
          title: periodnames.threemonths,
          icon: "image://" + mcw.url + "assets/public/charts/images/3m-dark-01.svg",
          onclick: function() {
           changeData("threemonths")
          }
         },
         myTool5: {
          show: !0,
          title: periodnames.sixmonths,
          icon: "image://" + mcw.url + "assets/public/charts/images/6m-dark-01.svg",
          onclick: function() {
           changeData("sixmonths")
          }
         },
         myTool6: {
          show: !0,
          title: periodnames.year,
          icon: "image://" + mcw.url + "assets/public/charts/images/1y-dark-01.svg",
          onclick: function() {
           changeData("year")
          }
         },
         myTool7: {
          show: !0,
          title: periodnames.all,
          icon: "image://" + mcw.url + "assets/public/charts/images/all-dark-01.svg",
          onclick: function() {
           changeData("all")
          }
         },
         mark: {
          show: !1
         },
         dataView: {
          show: !1
         },
         magicType: {
          show: !1
         },
         restore: {
          show: !1
         },
         saveAsImage: {
          show: !1
         }
        }
       },
       xAxis: [],
       yAxis: [],
       series: []
      };

     function changeData(period) {
      opts.period = period, options.title.subtext = periodnames[opts.period], drawChart()
     }

     function getData(callback) {
      var url = "https://min-api.cryptocompare.com/data/";
      url += "day" === opts.period || "week" === opts.period ? "histohour" : "histoday", url += "?fsym=" + opts.coin + "&tsym=USD", url += "all" === opts.period ? "&allData=true" : "&limit=" + periods[opts.period], url += "&aggregate=1&extraParams=massivecrypto";
      var stname = "mcw-" + opts.coin.toLowerCase() + "-usd-" + opts.period;
      if (null !== sessionStorage.getItem(stname) && "" != sessionStorage.getItem(stname)) {
       var json = JSON.parse(sessionStorage.getItem(stname));
       return callback(json)
      }
      $.get(url, (function(data) {
       return sessionStorage.setItem(stname, JSON.stringify(data)), callback(data)
      }), "json")
     }

     function formatAMPM(date) {
      var hours = date.getHours(),
       minutes = date.getMinutes(),
       ampm = hours >= 12 ? "PM" : "AM",
       strTime;
      return (hours = (hours %= 12) || 12) + ":" + (minutes = minutes < 10 ? "0" + minutes : minutes) + " " + ampm
     }

     function drawChart() {
      chart.showLoading("default", {
       text: "",
       color: theme.titleColor,
       maskColor: theme.backgroundColor
      }), getData((function(data) {
       var labels = [],
        values = [],
        volumes = [];
       for (i = 0; i < data.Data.length; i++) {
        var date = new Date(1e3 * data.Data[i].time);
        date = "day" == opts.period ? months[date.getMonth()] + " " + formatAMPM(date) : months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        var value = "chart" == opts.type ? data.Data[i].close * opts.rate : [data.Data[i].close * opts.rate, data.Data[i].open * opts.rate, data.Data[i].low * opts.rate, data.Data[i].high * opts.rate];
        labels.push(date), values.push(value), volumes.push(data.Data[i].volumefrom)
       }
       if (options.xAxis[0].data = labels, options.series[0].data = values, "candlestick" == opts.type) {
        var zoomstart = Math.round(periods[opts.period] / 60 * 10),
         zoomshow = "candlestick" == opts.type && zoomstart > 10;
        options.dataZoom.show = zoomshow, options.dataZoom.start = "all" == opts.period ? 0 : zoomstart, options.grid.bottom = zoomshow ? 80 : 40, options.series[1].data = volumes
       }
       options.yAxis[0].min = "all" == opts.period ? 0 : null, chart.setOption(options), chart.hideLoading()
      }))
     }
     "chart" == opts.type ? (options.xAxis.push({
      type: "category",
      boundaryGap: !1
     }), options.yAxis.push({
      type: "value",
      scale: !0,
      axisLabel: {
       formatter: function(value) {
        return mcw.numberFormat(value, opts.currency)
       }
      },
      splitLine: {
       show: !0,
       lineStyle: {
        color: theme.yAxis,
        width: 1,
        type: "solid"
       }
      },
      boundaryGap: ["5%", "0%"]
     }), options.series.push({
      name: "Price",
      type: "line",
      smooth: opts.smooth,
      itemStyle: {
       normal: {
        areaStyle: {
         type: "default"
        }
       }
      }
     })) : (options.xAxis.push({
      type: "category",
      boundaryGap: !0,
      axisTick: {
       onGap: !1
      },
      splitLine: {
       show: !1
      }
     }), options.yAxis.push({
      type: "value",
      scale: !1,
      axisLabel: {
       formatter: function(value) {
        return mcw.numberFormat(value, opts.currency)
       }
      },
      splitLine: {
       show: !1
      },
      boundaryGap: ["0%", "0%"]
     }, {
      type: "value",
      scale: !0,
      axisLabel: {
       formatter: function(value) {
        return mcw.numberFormat(value, opts.currency)
       }
      },
      splitLine: {
       show: !0,
       lineStyle: {
        color: theme.yAxis,
        width: 1,
        type: "solid"
       }
      },
      boundaryGap: ["0%", "0%"]
     }), options.series.push({
      name: "OHLC",
      type: "k",
      itemStyle: {
       normal: {
        color: "#dc3545",
        color0: "#23BF08"
       }
      },
      yAxisIndex: 1
     }), options.series.push({
      name: "Volume",
      type: "bar"
     })), self.css("background", theme.backgroundColor), self.css("border-color", theme.border), drawChart(), $(window).on("resize", (function() {
      options.grid.top = self.width() > 320 ? 80 : 110, options.toolbox.left = self.width() > 320 ? "right" : "left", options.toolbox.top = self.width() > 320 ? "top" : 50, chart.setOption(options), chart.resize()
     })), self.visibilityChanged({
      callback: function(element, visible, initialLoad) {
       visible && $(window).trigger("resize")
      },
      runOnLoad: !0,
      frequency: 100
     })
    }))
   }
  }, $.fn.mcwConverter = function() {
   var self = this;
   if (0 !== this.length) {
    this.find("select").selectize({
     onInitialize: function() {
      var s = this;
      this.revertSettings.$children.each((function() {
       $.extend(s.options[this.value], $(this).data())
      })), s.$dropdown.addClass("mcw-conv-style")
     },
     dropdownParent: "body"
    }), this.find(".mcw-convert-swap").click((function() {
     self.find(".mcw-form-group").eq(0).toggleClass("mcw-form-group-swap")
    }));
    var from = this.attr("data-from"),
     to = this.attr("data-to"),
     auto = "true" == this.attr("data-auto"),
     optionone = this.find("select").first(),
     optiontwo = this.find("select").last(),
     fieldone = this.find("input.mcw-field").first(),
     fieldtwo = this.find("input.mcw-field").last(),
     direction = "down",
     curfiat = $(this).closest(".cryptoboxes").data("fiat"),
     curcrypto = $(this).closest(".cryptoboxes").data("crypto"),
     fromdefault = "fiat" == from ? curfiat : "",
     todefault = "crypto" == from ? "fiat" == to ? curfiat : "bitcoin" == optionone[0].value ? "ethereum" : "" : "fiat" == to ? "USD" == curfiat ? "EUR" : "USD" : "" != curcrypto ? curcrypto : "",
     button;
    if ("" != fromdefault && optionone[0].selectize.setValue(fromdefault), "" != todefault && optiontwo[0].selectize.setValue(todefault), fieldone.val(1), calcdown(), auto) fieldone.on("input", (function() {
     calcdown()
    })), fieldtwo.on("input", (function() {
     calcup()
    })), optionone.change((function() {
     calcup(), direction = "up"
    })), optiontwo.change((function() {
     calcdown(), direction = "down"
    }));
    else fieldone.on("input", (function() {
     direction = "down"
    })), fieldtwo.on("input", (function() {
     direction = "up"
    })), this.find(".mcw-button").click((function(e) {
     e.preventDefault();
     var calc = "down" == direction ? calcdown() : calcup()
    }))
   }

   function calcdown() {
    var optiononeval = optionone[0].selectize.options[optionone.val()].val,
     optiontwoval = optiontwo[0].selectize.options[optiontwo.val()].val,
     out = "",
     val = parseFloat(fieldone.val().replace(/,/g, ""));
    out = "crypto" === from && "crypto" === to ? val ? val * (optiononeval / optiontwoval) : "" : "fiat" === from && "fiat" === to ? val ? val * (optiontwoval / optiononeval) : "" : "fiat" === from && "crypto" === to ? val ? val / (optiononeval * optiontwoval) : "" : val ? val * optiononeval * optiontwoval : "";
    var out = parseFloat(out);
    fieldtwo.val(mcw.numberFormat(out))
   }

   function calcup() {
    var optiononeval = optionone[0].selectize.options[optionone.val()].val,
     optiontwoval = optiontwo[0].selectize.options[optiontwo.val()].val,
     out = "",
     val = parseFloat(fieldtwo.val().replace(/,/g, ""));
    out = "crypto" === from && "crypto" === to ? val ? val * (optiontwoval / optiononeval) : "" : "fiat" === from && "fiat" === to ? val ? val * (optiononeval / optiontwoval) : "" : "fiat" === from && "crypto" === to ? val ? val * optiononeval * optiontwoval : "" : val ? val * (1 / optiontwoval) / optiononeval : "";
    var out = parseFloat(out);
    fieldone.val(mcw.numberFormat(out))
   }
  }, $.fn.mcwHeadCard = function() {
   var self = this,
    el = self.find(".mcw-price"),
    realtime = self.parents(".cryptoboxes").data("realtime"),
    curprice = el.text(),
    rate = el.data("rate"),
    currency = el.data("currency"),
    toggleswitch;
   bounty.default({
    el: el[0],
    initialValue: curprice,
    value: curprice
   }), "on" == realtime && socket.addEventListener("message", (function(msg) {
    var prices = JSON.parse(msg.data),
     timeout = parseInt(el.attr("data-timeout")) || 0,
     difference = Math.floor(Date.now()) - timeout;
    for (var coin in prices)
     if (el.data("live") == coin && difference > 1e4 && prices[coin] !== parseFloat(el.attr("data-price"))) {
      var newprice = $(mcw.priceFormat(parseFloat(prices[coin] * rate), currency)).text();
      bounty.default({
       el: el[0],
       initialValue: curprice,
       value: newprice
      }), curprice = newprice, el.attr("data-price", prices[coin]), el.attr("data-timeout", Math.floor(Date.now()))
     }
   })), self.find(".mcw-toggle-switch").click((function(e) {
    e.preventDefault(), rate = $(this).data("rate"), currency = $(this).data("currency"), self.find(".mcw-toggle-switch").removeClass("active"), $(this).addClass("active");
    var newprice = $(mcw.priceFormat(parseFloat(el.attr("data-price") * rate), currency)).text();
    return bounty.default({
     el: el[0],
     initialValue: curprice,
     value: newprice
    }), curprice = newprice, !1
   }))
  }, $.fn.mcwAccordion = function() {
   var self = this;
   this.find(".mcw-list-item:eq(0)").addClass("active").find(".mcw-list-body").slideDown(), this.find(".mcw-list-header").click((function() {
    $(this).parents(".mcw-list").find(".mcw-list-item").not($(this).parent()).removeClass("active").find(".mcw-list-body").slideUp(), $(this).parent().toggleClass("active"), $(this).next(".mcw-list-body").slideToggle()
   }))
  }, $(".mcw-card-7").each((function() {
   $(this).mcwHeadCard()
  })), $(".mcw-table").each((function() {
   $(this).mcwTable()
  })), $(".mcw-chart").each((function() {
   $(this).mcwChart()
  })), $.fn.mcwTabs = function() {
   var self = this,
    tabs = this.find(".mcw-tab"),
    items = this.find(".mcw-tab-content");
   tabs.click((function() {
    var index = $(this).index();
    tabs.removeClass("active"), $(this).addClass("active"), items.not(":eq(" + index + ")").removeClass("active"), items.eq(index).addClass("active")
   }))
  }, $(".mcw-converter").each((function() {
   $(this).mcwConverter()
  })), $(".mcw-list-2").each((function() {
   $(this).mcwAccordion(), $(this).find("canvas").each((function() {
    $(this).drawChart()
   }))
  })), $(".mcw-list-3").each((function() {
   $(this).find("canvas").each((function() {
    $(this).drawChart()
   }))
  })), $(".mcw-multi-tabs").each((function() {
   $(this).mcwTabs()
  })), $(".mcw-box").each((function() {
   if ($(this).find("canvas").each((function() {
     $(this).drawChart()
    })), $(this).find(".chart-offset").show(), $(this).hasClass("mcw-box-2")) {
    var self = $(this),
     crypto = self.find(".mcw-crypto-convert"),
     fiat = self.find(".mcw-fiat-convert");
    self.find("select").change((function() {
     var total = parseFloat(crypto.val()) * parseFloat(fiat.val()),
      currency = fiat.find("option:selected").text();
     price = mcw.priceFormat(total, currency), self.find(".mcw-price").html(price);
     var percent = crypto.find(":selected").data("change");
     self.find(".mcw-list-change").html(Math.abs(percent) + "%"), percent >= 0 ? self.find(".mcw-list-change").toggleClass("down up") : self.find(".mcw-list-change").toggleClass("up down")
    }))
   }
  })), $.fn.multiply = function(numCopies) {
   for (var newElements = this.clone(), i = 1; i < numCopies; i++) newElements = newElements.add(this.clone());
   return newElements
  }, $(window).load((function() {
   $(".cc-stats").each((function() {
    var listWidth = 0;
    $(this).find(".cc-coin").each((function() {
     listWidth += $(this).innerWidth()
    }));
    var clonedElem = $(this).find(".cc-coin"),
     mult = $(this).innerWidth() / listWidth;
    $(this).append('<div class="cc-dup"></div>'), mult > .5 ? $(this).find(".cc-dup").append(clonedElem.multiply(Math.ceil(mult))) : $(this).find(".cc-dup").append(clonedElem.multiply(1)), $(this).css("width", listWidth), $(this).find("canvas").each((function() {
     $(this).drawChart()
    }));
    var itemcount = $(this).find(".cc-coin").length,
     itemsize = listWidth / itemcount,
     speed, duration = 10 * itemsize;
    200 === (speed = $(this).closest(".mcw-ticker").data("speed")) ? duration = 10 : 0 == speed ? duration = 0 : speed > 100 ? duration -= speed = (speed -= 100) / 10 * itemsize : speed < 100 && (duration += speed = (speed = 100 - speed) / 10 * (8 * itemsize));
    var speed = itemcount * duration / 1e3;
    $(this).css("animation-duration", speed + "s"), $(this).closest(".mcw-ticker").css("visibility", "visible"), $(this).closest(".mcw-ticker").hasClass("mcw-header") && ($("body").css("padding-top", $(this).closest(".mcw-ticker").height() + "px"), $("#wpadminbar").css("margin-top", $(this).closest(".mcw-ticker").height() + "px"))
   }))
  })), $.fn.coinmcResize = function() {
   var breakpoint = "xs",
    width = this.find(".cmc-row").length > 0 ? this.find(".cmc-row").eq(0).width() : this.width();
   width >= 992 ? breakpoint = "lg" : width >= 768 ? breakpoint = "md" : width >= 576 && (breakpoint = "sm"), this.removeClass("cmcl-xs cmcl-sm cmcl-md cmcl-lg").addClass("cmcl-" + breakpoint), this.trigger("view")
  }, $(".mcwgrid").each((function() {
   var self = this;
   $(this).coinmcResize(), $(window).resize((function() {
    $(self).coinmcResize()
   }))
  }))
 }(jQuery);
! function(d, l) {
 "use strict";
 var e = !1,
  o = !1;
 if (l.querySelector)
  if (d.addEventListener) e = !0;
 if (d.wp = d.wp || {}, !d.wp.receiveEmbedMessage)
  if (d.wp.receiveEmbedMessage = function(e) {
    var t = e.data;
    if (t)
     if (t.secret || t.message || t.value)
      if (!/[^a-zA-Z0-9]/.test(t.secret)) {
       var r, a, i, s, n, o = l.querySelectorAll('iframe[data-secret="' + t.secret + '"]'),
        c = l.querySelectorAll('blockquote[data-secret="' + t.secret + '"]');
       for (r = 0; r < c.length; r++) c[r].style.display = "none";
       for (r = 0; r < o.length; r++)
        if (a = o[r], e.source === a.contentWindow) {
         if (a.removeAttribute("style"), "height" === t.message) {
          if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
          else if (~~i < 200) i = 200;
          a.height = i
         }
         if ("link" === t.message)
          if (s = l.createElement("a"), n = l.createElement("a"), s.href = a.getAttribute("src"), n.href = t.value, n.host === s.host)
           if (l.activeElement === a) d.top.location.href = t.value
        }
      }
   }, e) d.addEventListener("message", d.wp.receiveEmbedMessage, !1), l.addEventListener("DOMContentLoaded", t, !1), d.addEventListener("load", t, !1);

 function t() {
  if (!o) {
   o = !0;
   var e, t, r, a, i = -1 !== navigator.appVersion.indexOf("MSIE 10"),
    s = !!navigator.userAgent.match(/Trident.*rv:11\./),
    n = l.querySelectorAll("iframe.wp-embedded-content");
   for (t = 0; t < n.length; t++) {
    if (!(r = n[t]).getAttribute("data-secret")) a = Math.random().toString(36).substr(2, 10), r.src += "#?secret=" + a, r.setAttribute("data-secret", a);
    if (i || s)(e = r.cloneNode(!0)).removeAttribute("security"), r.parentNode.replaceChild(e, r)
   }
  }
 }
}(window, document);
/*!
Waypoints - 4.0.1
Copyright Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
 "use strict";

 function t(o) {
  if (!o) throw new Error("No options passed to Waypoint constructor");
  if (!o.element) throw new Error("No element option passed to Waypoint constructor");
  if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
  this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
   name: this.options.group,
   axis: this.axis
  }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
 }
 var e = 0,
  i = {};
 t.prototype.queueTrigger = function(t) {
  this.group.queueTrigger(this, t)
 }, t.prototype.trigger = function(t) {
  this.enabled && this.callback && this.callback.apply(this, t)
 }, t.prototype.destroy = function() {
  this.context.remove(this), this.group.remove(this), delete i[this.key]
 }, t.prototype.disable = function() {
  return this.enabled = !1, this
 }, t.prototype.enable = function() {
  return this.context.refresh(), this.enabled = !0, this
 }, t.prototype.next = function() {
  return this.group.next(this)
 }, t.prototype.previous = function() {
  return this.group.previous(this)
 }, t.invokeAll = function(t) {
  var e = [];
  for (var o in i) e.push(i[o]);
  for (var n = 0, r = e.length; r > n; n++) e[n][t]()
 }, t.destroyAll = function() {
  t.invokeAll("destroy")
 }, t.disableAll = function() {
  t.invokeAll("disable")
 }, t.enableAll = function() {
  t.Context.refreshAll();
  for (var e in i) i[e].enabled = !0;
  return this
 }, t.refreshAll = function() {
  t.Context.refreshAll()
 }, t.viewportHeight = function() {
  return window.innerHeight || document.documentElement.clientHeight
 }, t.viewportWidth = function() {
  return document.documentElement.clientWidth
 }, t.adapters = [], t.defaults = {
  context: window,
  continuous: !0,
  enabled: !0,
  group: "default",
  horizontal: !1,
  offset: 0
 }, t.offsetAliases = {
  "bottom-in-view": function() {
   return this.context.innerHeight() - this.adapter.outerHeight()
  },
  "right-in-view": function() {
   return this.context.innerWidth() - this.adapter.outerWidth()
  }
 }, window.Waypoint = t
}(),
function() {
 "use strict";

 function t(t) {
  window.setTimeout(t, 1e3 / 60)
 }

 function e(t) {
  this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
   x: this.adapter.scrollLeft(),
   y: this.adapter.scrollTop()
  }, this.waypoints = {
   vertical: {},
   horizontal: {}
  }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
 }
 var i = 0,
  o = {},
  n = window.Waypoint,
  r = window.onload;
 e.prototype.add = function(t) {
  var e = t.options.horizontal ? "horizontal" : "vertical";
  this.waypoints[e][t.key] = t, this.refresh()
 }, e.prototype.checkEmpty = function() {
  var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
   e = this.Adapter.isEmptyObject(this.waypoints.vertical),
   i = this.element == this.element.window;
  t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
 }, e.prototype.createThrottledResizeHandler = function() {
  function t() {
   e.handleResize(), e.didResize = !1
  }
  var e = this;
  this.adapter.on("resize.waypoints", function() {
   e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
  })
 }, e.prototype.createThrottledScrollHandler = function() {
  function t() {
   e.handleScroll(), e.didScroll = !1
  }
  var e = this;
  this.adapter.on("scroll.waypoints", function() {
   (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
  })
 }, e.prototype.handleResize = function() {
  n.Context.refreshAll()
 }, e.prototype.handleScroll = function() {
  var t = {},
   e = {
    horizontal: {
     newScroll: this.adapter.scrollLeft(),
     oldScroll: this.oldScroll.x,
     forward: "right",
     backward: "left"
    },
    vertical: {
     newScroll: this.adapter.scrollTop(),
     oldScroll: this.oldScroll.y,
     forward: "down",
     backward: "up"
    }
   };
  for (var i in e) {
   var o = e[i],
    n = o.newScroll > o.oldScroll,
    r = n ? o.forward : o.backward;
   for (var s in this.waypoints[i]) {
    var a = this.waypoints[i][s];
    if (null !== a.triggerPoint) {
     var l = o.oldScroll < a.triggerPoint,
      h = o.newScroll >= a.triggerPoint,
      p = l && h,
      u = !l && !h;
     (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
    }
   }
  }
  for (var c in t) t[c].flushTriggers();
  this.oldScroll = {
   x: e.horizontal.newScroll,
   y: e.vertical.newScroll
  }
 }, e.prototype.innerHeight = function() {
  return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
 }, e.prototype.remove = function(t) {
  delete this.waypoints[t.axis][t.key], this.checkEmpty()
 }, e.prototype.innerWidth = function() {
  return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
 }, e.prototype.destroy = function() {
  var t = [];
  for (var e in this.waypoints)
   for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
  for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
 }, e.prototype.refresh = function() {
  var t, e = this.element == this.element.window,
   i = e ? void 0 : this.adapter.offset(),
   o = {};
  this.handleScroll(), t = {
   horizontal: {
    contextOffset: e ? 0 : i.left,
    contextScroll: e ? 0 : this.oldScroll.x,
    contextDimension: this.innerWidth(),
    oldScroll: this.oldScroll.x,
    forward: "right",
    backward: "left",
    offsetProp: "left"
   },
   vertical: {
    contextOffset: e ? 0 : i.top,
    contextScroll: e ? 0 : this.oldScroll.y,
    contextDimension: this.innerHeight(),
    oldScroll: this.oldScroll.y,
    forward: "down",
    backward: "up",
    offsetProp: "top"
   }
  };
  for (var r in t) {
   var s = t[r];
   for (var a in this.waypoints[r]) {
    var l, h, p, u, c, d = this.waypoints[r][a],
     f = d.options.offset,
     w = d.triggerPoint,
     y = 0,
     g = null == w;
    d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
   }
  }
  return n.requestAnimationFrame(function() {
   for (var t in o) o[t].flushTriggers()
  }), this
 }, e.findOrCreateByElement = function(t) {
  return e.findByElement(t) || new e(t)
 }, e.refreshAll = function() {
  for (var t in o) o[t].refresh()
 }, e.findByElement = function(t) {
  return o[t.waypointContextKey]
 }, window.onload = function() {
  r && r(), e.refreshAll()
 }, n.requestAnimationFrame = function(e) {
  var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
  i.call(window, e)
 }, n.Context = e
}(),
function() {
 "use strict";

 function t(t, e) {
  return t.triggerPoint - e.triggerPoint
 }

 function e(t, e) {
  return e.triggerPoint - t.triggerPoint
 }

 function i(t) {
  this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
 }
 var o = {
   vertical: {},
   horizontal: {}
  },
  n = window.Waypoint;
 i.prototype.add = function(t) {
  this.waypoints.push(t)
 }, i.prototype.clearTriggerQueues = function() {
  this.triggerQueues = {
   up: [],
   down: [],
   left: [],
   right: []
  }
 }, i.prototype.flushTriggers = function() {
  for (var i in this.triggerQueues) {
   var o = this.triggerQueues[i],
    n = "up" === i || "left" === i;
   o.sort(n ? e : t);
   for (var r = 0, s = o.length; s > r; r += 1) {
    var a = o[r];
    (a.options.continuous || r === o.length - 1) && a.trigger([i])
   }
  }
  this.clearTriggerQueues()
 }, i.prototype.next = function(e) {
  this.waypoints.sort(t);
  var i = n.Adapter.inArray(e, this.waypoints),
   o = i === this.waypoints.length - 1;
  return o ? null : this.waypoints[i + 1]
 }, i.prototype.previous = function(e) {
  this.waypoints.sort(t);
  var i = n.Adapter.inArray(e, this.waypoints);
  return i ? this.waypoints[i - 1] : null
 }, i.prototype.queueTrigger = function(t, e) {
  this.triggerQueues[e].push(t)
 }, i.prototype.remove = function(t) {
  var e = n.Adapter.inArray(t, this.waypoints);
  e > -1 && this.waypoints.splice(e, 1)
 }, i.prototype.first = function() {
  return this.waypoints[0]
 }, i.prototype.last = function() {
  return this.waypoints[this.waypoints.length - 1]
 }, i.findOrCreate = function(t) {
  return o[t.axis][t.name] || new i(t)
 }, n.Group = i
}(),
function() {
 "use strict";

 function t(t) {
  this.$element = e(t)
 }
 var e = window.jQuery,
  i = window.Waypoint;
 e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
  t.prototype[i] = function() {
   var t = Array.prototype.slice.call(arguments);
   return this.$element[i].apply(this.$element, t)
  }
 }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
  t[o] = e[o]
 }), i.adapters.push({
  name: "jquery",
  Adapter: t
 }), i.Adapter = t
}(),
function() {
 "use strict";

 function t(t) {
  return function() {
   var i = [],
    o = arguments[0];
   return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
    var n = t.extend({}, o, {
     element: this
    });
    "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
   }), i
  }
 }
 var e = window.Waypoint;
 window.jQuery && (window.jQuery.fn.livemeshWaypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.livemeshWaypoint = t(window.Zepto))
}();
(function($) {
 var WidgetLAETestimonialsSliderHandler = function($scope, $) {
  var slider_elem = $scope.find(".lae-testimonials-slider").eq(0);
  var rtl = slider_elem.attr("dir") === "rtl";
  var settings = slider_elem.data("settings");
  slider_elem.flexslider({
   selector: ".lae-slides > .lae-slide",
   animation: settings["slide_animation"],
   direction: settings["direction"],
   slideshowSpeed: settings["slideshow_speed"],
   animationSpeed: settings["animation_speed"],
   namespace: "lae-flex-",
   pauseOnAction: settings["pause_on_action"],
   pauseOnHover: settings["pause_on_hover"],
   controlNav: settings["control_nav"],
   directionNav: settings["direction_nav"],
   prevText: "Previous<span></span>",
   nextText: "Next<span></span>",
   smoothHeight: false,
   animationLoop: true,
   slideshow: true,
   rtl: rtl,
   easing: "swing",
   controlsContainer: "lae-testimonials-slider"
  })
 };
 var WidgetLAEStatsBarHandler = function($scope, $) {
  $scope.find(".lae-stats-bar-content").each(function() {
   var dataperc = $(this).data("perc");
   $(this).animate({
    width: dataperc + "%"
   }, dataperc * 20)
  })
 };
 var WidgetLAEStatsBarHandlerOnScroll = function($scope, $) {
  $scope.livemeshWaypoint(function(direction) {
   WidgetLAEStatsBarHandler($(this.element), $)
  }, {
   offset: (window.innerHeight || document.documentElement.clientHeight) - 150,
   triggerOnce: true
  })
 };
 var WidgetLAEPiechartsHandler = function($scope, $) {
  $scope.find(".lae-piechart .lae-percentage").each(function() {
   var track_color = $(this).data("track-color");
   var bar_color = $(this).data("bar-color");
   $(this).easyPieChart({
    animate: 2e3,
    lineWidth: 10,
    barColor: bar_color,
    trackColor: track_color,
    scaleColor: false,
    lineCap: "square",
    size: 220
   })
  })
 };
 var WidgetLAEPiechartsHandlerOnScroll = function($scope, $) {
  $scope.livemeshWaypoint(function(direction) {
   WidgetLAEPiechartsHandler($(this.element), $)
  }, {
   offset: (window.innerHeight || document.documentElement.clientHeight) - 100,
   triggerOnce: true
  })
 };
 var WidgetLAEOdometersHandler = function($scope, $) {
  $scope.find(".lae-odometer .lae-number").each(function() {
   var odometer = $(this);
   setTimeout(function() {
    var data_stop = odometer.attr("data-stop");
    $(odometer).text(data_stop)
   }, 100)
  })
 };
 var WidgetLAEOdometersHandlerOnScroll = function($scope, $) {
  $scope.livemeshWaypoint(function(direction) {
   WidgetLAEOdometersHandler($(this.element), $)
  }, {
   offset: (window.innerHeight || document.documentElement.clientHeight) - 100,
   triggerOnce: true
  })
 };
 var WidgetLAECarouselHandler = function($scope, $) {
  var carousel_elem = $scope.find(".lae-carousel, .lae-posts-carousel").eq(0);
  if (carousel_elem.length > 0) {
   var rtl = carousel_elem.attr("dir") === "rtl";
   var settings = carousel_elem.data("settings");
   var arrows = settings["arrows"];
   var dots = settings["dots"];
   var autoplay = settings["autoplay"];
   var autoplay_speed = parseInt(settings["autoplay_speed"]) || 3e3;
   var animation_speed = parseInt(settings["animation_speed"]) || 300;
   var fade = settings["fade"];
   var pause_on_hover = settings["pause_on_hover"];
   var display_columns = parseInt(settings["display_columns"]) || 4;
   var scroll_columns = parseInt(settings["scroll_columns"]) || 4;
   var tablet_width = parseInt(settings["tablet_width"]) || 800;
   var tablet_display_columns = parseInt(settings["tablet_display_columns"]) || 2;
   var tablet_scroll_columns = parseInt(settings["tablet_scroll_columns"]) || 2;
   var mobile_width = parseInt(settings["mobile_width"]) || 480;
   var mobile_display_columns = parseInt(settings["mobile_display_columns"]) || 1;
   var mobile_scroll_columns = parseInt(settings["mobile_scroll_columns"]) || 1;
   carousel_elem.slick({
    arrows: arrows,
    dots: dots,
    infinite: true,
    autoplay: autoplay,
    autoplaySpeed: autoplay_speed,
    speed: animation_speed,
    fade: false,
    pauseOnHover: pause_on_hover,
    slidesToShow: display_columns,
    slidesToScroll: scroll_columns,
    rtl: rtl,
    responsive: [{
     breakpoint: tablet_width,
     settings: {
      slidesToShow: tablet_display_columns,
      slidesToScroll: tablet_scroll_columns
     }
    }, {
     breakpoint: mobile_width,
     settings: {
      slidesToShow: mobile_display_columns,
      slidesToScroll: mobile_scroll_columns
     }
    }]
   })
  }
 };
 var WidgetLAEPortfolioHandler = function($scope, $) {
  if ($().isotope === undefined) {
   return
  }
  var portfolioElem = $scope.find(".lae-portfolio");
  if (portfolioElem.length === 0) {
   return
  }
  var rtl = portfolioElem.attr("dir") === "rtl";
  var isotopeOptions = portfolioElem.data("isotope-options");
  portfolioElem.isotope({
   itemSelector: isotopeOptions["itemSelector"],
   layoutMode: isotopeOptions["layoutMode"],
   originLeft: !rtl
  });
  portfolioElem.imagesLoaded(function() {
   portfolioElem.isotope("layout")
  });
  $scope.find(".lae-taxonomy-filter .lae-filter-item a").on("click", function(e) {
   e.preventDefault();
   var selector = $(this).attr("data-value");
   portfolioElem.isotope({
    filter: selector
   });
   $(this).closest(".lae-taxonomy-filter").children().removeClass("lae-active");
   $(this).closest(".lae-filter-item").addClass("lae-active");
   return false
  })
 };
 $(window).on("elementor/frontend/init", function() {
  elementorFrontend.hooks.addAction("frontend/element_ready/lae-testimonials-slider.default", WidgetLAETestimonialsSliderHandler);
  if (elementorFrontend.isEditMode()) {
   elementorFrontend.hooks.addAction("frontend/element_ready/lae-stats-bars.default", WidgetLAEStatsBarHandler);
   elementorFrontend.hooks.addAction("frontend/element_ready/lae-piecharts.default", WidgetLAEPiechartsHandler);
   elementorFrontend.hooks.addAction("frontend/element_ready/lae-odometers.default", WidgetLAEOdometersHandler)
  } else {
   elementorFrontend.hooks.addAction("frontend/element_ready/lae-stats-bars.default", WidgetLAEStatsBarHandlerOnScroll);
   elementorFrontend.hooks.addAction("frontend/element_ready/lae-piecharts.default", WidgetLAEPiechartsHandlerOnScroll);
   elementorFrontend.hooks.addAction("frontend/element_ready/lae-odometers.default", WidgetLAEOdometersHandlerOnScroll)
  }
  elementorFrontend.hooks.addAction("frontend/element_ready/lae-posts-carousel.default", WidgetLAECarouselHandler);
  elementorFrontend.hooks.addAction("frontend/element_ready/lae-portfolio.default", WidgetLAEPortfolioHandler);
  elementorFrontend.hooks.addAction("frontend/element_ready/lae-carousel.default", WidgetLAECarouselHandler)
 })
})(jQuery);
if (typeof jQuery != "undefined") {
 (function($) {
  "use strict";
  $(function() {
   var LAE_Frontend = {
    init: function() {
     this.output_custom_css();
     this.setup_animations()
    },
    setup_animations: function() {
     $(".lae-visible-on-scroll:not(.animated)").css("opacity", 0);
     "function" != typeof window.lae_animate_widgets && (window.lae_animate_widgets = function() {
      "undefined" != typeof $.fn.livemeshWaypoint && $(".lae-animate-on-scroll:not(.animated)").livemeshWaypoint(function() {
       var animateClass = $(this.element).data("animation");
       $(this.element).addClass("animated " + animateClass).css("opacity", 1)
      }, {
       offset: "85%"
      })
     });
     window.setTimeout(lae_animate_widgets, 500)
    },
    output_custom_css: function() {
     var custom_css = lae_settings["custom_css"];
     if (custom_css !== undefined && custom_css != "") {
      custom_css = '<style type="text/css">' + custom_css + "</style>";
      $("head").append(custom_css)
     }
    },
    isMobile: function() {
     "use strict";
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true
     }
     return false
    }
   };
   LAE_Frontend.init()
  })
 })(jQuery)
};
! function($) {
 var e = !0;
 $.flexslider = function(t, a) {
  var n = $(t);
  void 0 === a.rtl && "rtl" == $("html").attr("dir") && (a.rtl = !0), n.vars = $.extend({}, $.flexslider.defaults, a);
  var i = n.vars.namespace,
   r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
   s = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
   o = "click touchend MSPointerUp keyup",
   l = "",
   c, d = "vertical" === n.vars.direction,
   u = n.vars.reverse,
   v = n.vars.itemWidth > 0,
   p = "fade" === n.vars.animation,
   m = "" !== n.vars.asNavFor,
   f = {};
  $.data(t, "flexslider", n), f = {
   init: function() {
    n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : n.vars.rtl ? "marginRight" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function() {
     var e = document.createElement("div"),
      t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
     for (var a in t)
      if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
     return !1
    }(), n.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === $(n.vars.customDirectionNav).length && $(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function() {
     return Math.round(Math.random()) - .5
    }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function(e) {
     var t = e.keyCode;
     if (!n.animating && (39 === t || 37 === t)) {
      var a = n.vars.rtl ? 37 === t ? n.getTarget("next") : 39 === t && n.getTarget("prev") : 39 === t ? n.getTarget("next") : 37 === t && n.getTarget("prev");
      n.flexAnimate(a, n.vars.pauseOnAction)
     }
    }), n.vars.mousewheel && n.bind("mousewheel", function(e, t, a, i) {
     e.preventDefault();
     var r = t < 0 ? n.getTarget("next") : n.getTarget("prev");
     n.flexAnimate(r, n.vars.pauseOnAction)
    }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
     n.manualPlay || n.manualPause || n.pause()
    }, function() {
     n.manualPause || n.manualPlay || n.stopped || n.play()
    }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), s && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
     n.vars.start(n)
    }, 200)
   },
   asNav: {
    setup: function() {
     n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), r ? (t._slider = n, n.slides.each(function() {
      var e = this;
      e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(e) {
       e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
      }, !1), e.addEventListener("MSGestureTap", function(e) {
       e.preventDefault();
       var t = $(this),
        a = t.index();
       $(n.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
      })
     })) : n.slides.on(o, function(e) {
      e.preventDefault();
      var t = $(this),
       a = t.index(),
       r;
      r = n.vars.rtl ? -1 * (t.offset().right - $(n).scrollLeft()) : t.offset().left - $(n).scrollLeft(), r <= 0 && t.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || t.hasClass(i + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
     })
    }
   },
   controlNav: {
    setup: function() {
     n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
    },
    setupPaging: function() {
     var e = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
      t = 1,
      a, r;
     if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + e + '"></ol>'), n.pagingCount > 1)
      for (var s = 0; s < n.pagingCount; s++) {
       r = n.slides.eq(s), void 0 === r.attr("data-thumb-alt") && r.attr("data-thumb-alt", "");
       var c = "" !== r.attr("data-thumb-alt") ? c = ' alt="' + r.attr("data-thumb-alt") + '"' : "";
       if (a = "thumbnails" === n.vars.controlNav ? '<img src="' + r.attr("data-thumb") + '"' + c + "/>" : '<a href="#">' + t + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
        var d = r.attr("data-thumbcaption");
        "" !== d && void 0 !== d && (a += '<span class="' + i + 'caption">' + d + "</span>")
       }
       n.controlNavScaffold.append("<li>" + a + "</li>"), t++
      }
     n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", o, function(e) {
      if (e.preventDefault(), "" === l || l === e.type) {
       var t = $(this),
        a = n.controlNav.index(t);
       t.hasClass(i + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction))
      }
      "" === l && (l = e.type), f.setToClearWatchedEvent()
     })
    },
    setupManual: function() {
     n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(o, function(e) {
      if (e.preventDefault(), "" === l || l === e.type) {
       var t = $(this),
        a = n.controlNav.index(t);
       t.hasClass(i + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction))
      }
      "" === l && (l = e.type), f.setToClearWatchedEvent()
     })
    },
    set: function() {
     var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
     n.controlNav = $("." + i + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
    },
    active: function() {
     n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active")
    },
    update: function(e, t) {
     n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append($('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(t).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(t, e) : f.controlNav.active()
    }
   },
   directionNav: {
    setup: function() {
     var e = $('<ul class="' + i + 'direction-nav"><li class="' + i + 'nav-prev"><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + i + 'nav-next"><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
     n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? ($(n.controlsContainer).append(e), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = $("." + i + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(o, function(e) {
      e.preventDefault();
      var t;
      "" !== l && l !== e.type || (t = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent()
     })
    },
    update: function() {
     var e = i + "disabled";
     1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
    }
   },
   pausePlay: {
    setup: function() {
     var e = $('<div class="' + i + 'pauseplay"><a href="#"></a></div>');
     n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = $("." + i + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(o, function(e) {
      e.preventDefault(), "" !== l && l !== e.type || ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === l && (l = e.type), f.setToClearWatchedEvent()
     })
    },
    update: function(e) {
     "play" === e ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText)
    }
   },
   touch: function() {
    function e(e) {
     e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), w = 0, c = d ? n.h : n.w, f = Number(new Date), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c)
    }

    function a(e) {
     e.stopPropagation();
     var a = e.target._slider;
     if (a) {
      var n = -e.translationX,
       i = -e.translationY;
      if (w += d ? i : n, m = (a.vars.rtl ? -1 : 1) * w, x = d ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA) return void setImmediate(function() {
       t._gesture.stop()
      });
      (!x || Number(new Date) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = w / (0 === a.currentSlide && w < 0 || a.currentSlide === a.last && w > 0 ? Math.abs(w) / c + 2 : 1)), a.setProps(l + m, "setTouch")))
     }
    }

    function i(e) {
     e.stopPropagation();
     var t = e.target._slider;
     if (t) {
      if (t.animatingTo === t.currentSlide && !x && null !== m) {
       var a = u ? -m : m,
        n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
       t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
      }
      s = null, o = null, m = null, l = null, w = 0
     }
    }
    var s, o, l, c, m, f, g, h, S, x = !1,
     y = 0,
     b = 0,
     w = 0;
    r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function(e) {
     n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date), y = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, s = d ? b : y, o = d ? y : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", S, !1))
    }, h = function(e) {
     y = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? s - b : (n.vars.rtl ? -1 : 1) * (s - y), x = d ? Math.abs(m) < Math.abs(y - o) : Math.abs(m) < Math.abs(b - o);
     var t = 500;
     (!x || Number(new Date) - f > 500) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")))
    }, S = function(e) {
     if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !x && null !== m) {
      var a = u ? -m : m,
       i = a > 0 ? n.getTarget("next") : n.getTarget("prev");
      n.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
     }
     t.removeEventListener("touchend", S, !1), s = null, o = null, m = null, l = null
    }, t.addEventListener("touchstart", g, !1))
   },
   resize: function() {
    !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
   },
   smoothHeight: function(e) {
    if (!d || p) {
     var t = p ? n : n.viewport;
     e ? t.animate({
      height: n.slides.eq(n.animatingTo).innerHeight()
     }, e) : t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())
    }
   },
   sync: function(e) {
    var t = $(n.vars.sync).data("flexslider"),
     a = n.animatingTo;
    switch (e) {
     case "animate":
      t.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
      break;
     case "play":
      t.playing || t.asNav || t.play();
      break;
     case "pause":
      t.pause();
      break
    }
   },
   uniqueID: function(e) {
    return e.filter("[id]").add(e.find("[id]")).each(function() {
     var e = $(this);
     e.attr("id", e.attr("id") + "_clone")
    }), e
   },
   pauseInvisible: {
    visProp: null,
    init: function() {
     var e = f.pauseInvisible.getHiddenProp();
     if (e) {
      var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
      document.addEventListener(t, function() {
       f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
      })
     }
    },
    isHidden: function() {
     var e = f.pauseInvisible.getHiddenProp();
     return !!e && document[e]
    },
    getHiddenProp: function() {
     var e = ["webkit", "moz", "ms", "o"];
     if ("hidden" in document) return "hidden";
     for (var t = 0; t < e.length; t++)
      if (e[t] + "Hidden" in document) return e[t] + "Hidden";
     return null
    }
   },
   setToClearWatchedEvent: function() {
    clearTimeout(c), c = setTimeout(function() {
     l = ""
    }, 3e3)
   }
  }, n.flexAnimate = function(e, t, a, r, o) {
   if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || a) && n.is(":visible")) {
    if (m && r) {
     var l = $(n.vars.asNavFor).data("flexslider");
     if (n.atEnd = 0 === e || e === n.count - 1, l.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", l.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), !1;
     n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), e = Math.floor(e / n.visible)
    }
    if (n.animating = !0, n.animatingTo = e, t && n.pause(), n.vars.before(n), n.syncExists && !o && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && f.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) s ? (n.slides.eq(n.currentSlide).css({
     opacity: 0,
     zIndex: 1
    }), n.slides.eq(e).css({
     opacity: 1,
     zIndex: 2
    }), n.wrapup(c)) : (n.slides.eq(n.currentSlide).css({
     zIndex: 1
    }).animate({
     opacity: 0
    }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
     zIndex: 2
    }).animate({
     opacity: 1
    }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
    else {
     var c = d ? n.slides.filter(":first").height() : n.computedW,
      g, h, S;
     v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * c : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * c : u ? (n.count - 1 - e + n.cloneOffset) * c : (e + n.cloneOffset) * c, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
      clearTimeout(n.ensureAnimationEnd), n.wrapup(c)
     }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
      n.wrapup(c)
     }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
      n.wrapup(c)
     })
    }
    n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
   }
  }, n.wrapup = function(e) {
   p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
  }, n.animateSlides = function() {
   !n.animating && e && n.flexAnimate(n.getTarget("next"))
  }, n.pause = function() {
   clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
  }, n.play = function() {
   n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
  }, n.stop = function() {
   n.pause(), n.stopped = !0
  }, n.canAdvance = function(e, t) {
   var a = m ? n.pagingCount - 1 : n.last;
   return !!t || (!(!m || n.currentItem !== n.count - 1 || 0 !== e || "prev" !== n.direction) || (!m || 0 !== n.currentItem || e !== n.pagingCount - 1 || "next" === n.direction) && (!(e === n.currentSlide && !m) && (!!n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || e !== a || "next" === n.direction) && (!n.atEnd || n.currentSlide !== a || 0 !== e || "next" !== n.direction))))
  }, n.getTarget = function(e) {
   return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
  }, n.setProps = function(e, t, a) {
   var i = function() {
    var a = e || (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo;
    return function() {
     if (v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
     switch (t) {
      case "setTotal":
       return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
      case "setTouch":
       return e;
      case "jumpEnd":
       return u ? e : n.count * e;
      case "jumpStart":
       return u ? n.count * e : e;
      default:
       return e
     }
    }() * (n.vars.rtl ? 1 : -1) + "px"
   }();
   n.transitions && (i = n.isFirefox ? d ? "translate3d(0," + i + ",0)" : "translate3d(" + parseInt(i) + "px,0,0)" : d ? "translate3d(0," + i + ",0)" : "translate3d(" + (n.vars.rtl ? -1 : 1) * parseInt(i) + "px,0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
  }, n.setup = function(e) {
   if (p) n.vars.rtl ? n.slides.css({
    width: "100%",
    float: "right",
    marginLeft: "-100%",
    position: "relative"
   }) : n.slides.css({
    width: "100%",
    float: "left",
    marginRight: "-100%",
    position: "relative"
   }), "init" === e && (s ? n.slides.css({
    opacity: 0,
    display: "block",
    webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
    zIndex: 1
   }).eq(n.currentSlide).css({
    opacity: 1,
    zIndex: 2
   }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
    opacity: 0,
    display: "block",
    zIndex: 1
   }).eq(n.currentSlide).css({
    zIndex: 2
   }).css({
    opacity: 1
   }) : n.slides.css({
    opacity: 0,
    display: "block",
    zIndex: 1
   }).eq(n.currentSlide).css({
    zIndex: 2
   }).animate({
    opacity: 1
   }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();
   else {
    var t, a;
    "init" === e && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
     overflow: "hidden",
     position: "relative"
    }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $.makeArray(n.slides).reverse(), n.slides = $(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = $(n.vars.selector, n), t = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
     n.newSlides.css({
      display: "block"
     }), n.doMath(), n.viewport.height(n.h), n.setProps(t * n.h, "init")
    }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(t * n.computedW, "init"), setTimeout(function() {
     n.doMath(), n.vars.rtl && n.isFirefox ? n.newSlides.css({
      width: n.computedW,
      marginRight: n.computedM,
      float: "right",
      display: "block"
     }) : n.newSlides.css({
      width: n.computedW,
      marginRight: n.computedM,
      float: "left",
      display: "block"
     }), n.vars.smoothHeight && f.smoothHeight()
    }, "init" === e ? 100 : 0))
   }
   v || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n)
  }, n.doMath = function() {
   var e = n.slides.first(),
    t = n.vars.itemMargin,
    a = n.vars.minItems,
    i = n.vars.maxItems;
   n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.isFirefox && (n.w = n.width()), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM
  }, n.update = function(e, t) {
   n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
  }, n.addSlide = function(e, t) {
   var a = $(e);
   n.count += 1, n.last = n.count - 1, d && u ? void 0 !== t ? n.slides.eq(n.count - t).after(a) : n.container.prepend(a) : void 0 !== t ? n.slides.eq(t).before(a) : n.container.append(a), n.update(t, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
  }, n.removeSlide = function(e) {
   var t = isNaN(e) ? n.slides.index($(e)) : e;
   n.count -= 1, n.last = n.count - 1, isNaN(e) ? $(e, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(t, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
  }, f.init()
 }, $(window).blur(function(t) {
  e = !1
 }).focus(function(t) {
  e = !0
 }), $.flexslider.defaults = {
  namespace: "flex-",
  selector: ".slides > li",
  animation: "fade",
  easing: "swing",
  direction: "horizontal",
  reverse: !1,
  animationLoop: !0,
  smoothHeight: !1,
  startAt: 0,
  slideshow: !0,
  slideshowSpeed: 7e3,
  animationSpeed: 600,
  initDelay: 0,
  randomize: !1,
  fadeFirstSlide: !0,
  thumbCaptions: !1,
  pauseOnAction: !0,
  pauseOnHover: !1,
  pauseInvisible: !0,
  useCSS: !0,
  touch: !0,
  video: !1,
  controlNav: !0,
  directionNav: !0,
  prevText: "Previous",
  nextText: "Next",
  keyboard: !0,
  multipleKeyboard: !1,
  mousewheel: !1,
  pausePlay: !1,
  pauseText: "Pause",
  playText: "Play",
  controlsContainer: "",
  manualControls: "",
  customDirectionNav: "",
  sync: "",
  asNavFor: "",
  itemWidth: 0,
  itemMargin: 0,
  minItems: 1,
  maxItems: 0,
  move: 0,
  allowOneSlide: !0,
  isFirefox: !1,
  start: function() {},
  before: function() {},
  after: function() {},
  end: function() {},
  added: function() {},
  removed: function() {},
  init: function() {},
  rtl: !1
 }, $.fn.flexslider = function(e) {
  if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
   var t = $(this),
    a = e.selector ? e.selector : ".slides > li",
    n = t.find(a);
   1 === n.length && !1 === e.allowOneSlide || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
  });
  var t = $(this).data("flexslider");
  switch (e) {
   case "play":
    t.play();
    break;
   case "pause":
    t.pause();
    break;
   case "stop":
    t.stop();
    break;
   case "next":
    t.flexAnimate(t.getTarget("next"), !0);
    break;
   case "prev":
   case "previous":
    t.flexAnimate(t.getTarget("prev"), !0);
    break;
   default:
    "number" == typeof e && t.flexAnimate(e, !0)
  }
 }
}(jQuery);
/*! elementor - v2.7.5 - 28-10-2019 */
! function(t) {
 var e = {};

 function __webpack_require__(n) {
  if (e[n]) return e[n].exports;
  var r = e[n] = {
   i: n,
   l: !1,
   exports: {}
  };
  return t[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
 }
 __webpack_require__.m = t, __webpack_require__.c = e, __webpack_require__.d = function(t, e, n) {
  __webpack_require__.o(t, e) || Object.defineProperty(t, e, {
   enumerable: !0,
   get: n
  })
 }, __webpack_require__.r = function(t) {
  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
   value: "Module"
  }), Object.defineProperty(t, "__esModule", {
   value: !0
  })
 }, __webpack_require__.t = function(t, e) {
  if (1 & e && (t = __webpack_require__(t)), 8 & e) return t;
  if (4 & e && "object" == typeof t && t && t.__esModule) return t;
  var n = Object.create(null);
  if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
    enumerable: !0,
    value: t
   }), 2 & e && "string" != typeof t)
   for (var r in t) __webpack_require__.d(n, r, function(e) {
    return t[e]
   }.bind(null, r));
  return n
 }, __webpack_require__.n = function(t) {
  var e = t && t.__esModule ? function getDefault() {
   return t.default
  } : function getModuleExports() {
   return t
  };
  return __webpack_require__.d(e, "a", e), e
 }, __webpack_require__.o = function(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e)
 }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 509)
}([function(t, e) {
 t.exports = function _interopRequireDefault(t) {
  return t && t.__esModule ? t : {
   default: t
  }
 }
}, function(t, e) {
 var n = t.exports = {
  version: "2.6.9"
 };
 "number" == typeof __e && (__e = n)
}, function(t, e, n) {
 t.exports = n(107)
}, function(t, e, n) {
 var r = n(128),
  o = n(79);

 function _getPrototypeOf(e) {
  return t.exports = _getPrototypeOf = o ? r : function _getPrototypeOf(t) {
   return t.__proto__ || r(t)
  }, _getPrototypeOf(e)
 }
 t.exports = _getPrototypeOf
}, function(t, e) {
 t.exports = function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
 }
}, function(t, e, n) {
 var r = n(2);

 function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
   var o = e[n];
   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), r(t, o.key, o)
  }
 }
 t.exports = function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t
 }
}, function(t, e, n) {
 var r = n(65),
  o = n(81);
 t.exports = function _possibleConstructorReturn(t, e) {
  return !e || "object" !== r(e) && "function" != typeof e ? o(t) : e
 }
}, function(t, e, n) {
 var r = n(96),
  o = n(136);
 t.exports = function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = r(e && e.prototype, {
   constructor: {
    value: t,
    writable: !0,
    configurable: !0
   }
  }), e && o(t, e)
 }
}, function(t, e, n) {
 var r = n(10),
  o = n(1),
  i = n(68),
  u = n(23),
  c = n(12),
  s = function(t, e, n) {
   var f, a, l, p = t & s.F,
    g = t & s.G,
    d = t & s.S,
    v = t & s.P,
    h = t & s.B,
    y = t & s.W,
    m = g ? o : o[e] || (o[e] = {}),
    _ = m.prototype,
    x = g ? r : d ? r[e] : (r[e] || {}).prototype;
   for (f in g && (n = e), n)(a = !p && x && void 0 !== x[f]) && c(m, f) || (l = a ? x[f] : n[f], m[f] = g && "function" != typeof x[f] ? n[f] : h && a ? i(l, r) : y && x[f] == l ? function(t) {
    var e = function(e, n, r) {
     if (this instanceof t) {
      switch (arguments.length) {
       case 0:
        return new t;
       case 1:
        return new t(e);
       case 2:
        return new t(e, n)
      }
      return new t(e, n, r)
     }
     return t.apply(this, arguments)
    };
    return e.prototype = t.prototype, e
   }(l) : v && "function" == typeof l ? i(Function.call, l) : l, v && ((m.virtual || (m.virtual = {}))[f] = l, t & s.R && _ && !_[f] && u(_, f, l)))
  };
 s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function(t, e, n) {
 var r = n(45)("wks"),
  o = n(46),
  i = n(11).Symbol,
  u = "function" == typeof i;
 (t.exports = function(t) {
  return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
 }).store = r
}, function(t, e) {
 var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
 "number" == typeof __g && (__g = n)
}, function(t, e) {
 var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
 "number" == typeof __g && (__g = n)
}, function(t, e) {
 var n = {}.hasOwnProperty;
 t.exports = function(t, e) {
  return n.call(t, e)
 }
}, function(t, e, n) {
 t.exports = !n(25)(function() {
  return 7 != Object.defineProperty({}, "a", {
   get: function() {
    return 7
   }
  }).a
 })
}, function(t, e, n) {
 var r = n(18),
  o = n(74),
  i = n(49),
  u = Object.defineProperty;
 e.f = n(13) ? Object.defineProperty : function defineProperty(t, e, n) {
  if (r(t), e = i(e, !0), r(n), o) try {
   return u(t, e, n)
  } catch (t) {}
  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
  return "value" in n && (t[e] = n.value), t
 }
}, function(t, e, n) {
 var r = n(94),
  o = n(39);
 t.exports = function(t) {
  return r(o(t))
 }
}, function(t, e, n) {
 var r = n(53)("wks"),
  o = n(35),
  i = n(10).Symbol,
  u = "function" == typeof i;
 (t.exports = function(t) {
  return r[t] || (r[t] = u && i[t] || (u ? i : o)("Symbol." + t))
 }).store = r
}, function(t, e) {
 t.exports = function(t) {
  return "object" == typeof t ? null !== t : "function" == typeof t
 }
}, function(t, e, n) {
 var r = n(17);
 t.exports = function(t) {
  if (!r(t)) throw TypeError(t + " is not an object!");
  return t
 }
}, function(t, e, n) {
 var r = n(22);
 t.exports = function(t) {
  if (!r(t)) throw TypeError(t + " is not an object!");
  return t
 }
}, function(t, e, n) {
 t.exports = !n(24)(function() {
  return 7 != Object.defineProperty({}, "a", {
   get: function() {
    return 7
   }
  }).a
 })
}, function(t, e, n) {
 var r = n(36),
  o = n(67);
 t.exports = n(20) ? function(t, e, n) {
  return r.f(t, e, o(1, n))
 } : function(t, e, n) {
  return t[e] = n, t
 }
}, function(t, e) {
 t.exports = function(t) {
  return "object" == typeof t ? null !== t : "function" == typeof t
 }
}, function(t, e, n) {
 var r = n(14),
  o = n(30);
 t.exports = n(13) ? function(t, e, n) {
  return r.f(t, e, o(1, n))
 } : function(t, e, n) {
  return t[e] = n, t
 }
}, function(t, e) {
 t.exports = function(t) {
  try {
   return !!t()
  } catch (t) {
   return !0
  }
 }
}, function(t, e) {
 t.exports = function(t) {
  try {
   return !!t()
  } catch (t) {
   return !0
  }
 }
}, function(t, e, n) {
 "use strict";
 var r = n(37),
  o = n(100)(5),
  i = !0;
 "find" in [] && Array(1).find(function() {
  i = !1
 }), r(r.P + r.F * i, "Array", {
  find: function find(t) {
   return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
  }
 }), n(73)("find")
}, function(t, e, n) {
 var r = n(11),
  o = n(21),
  i = n(47),
  u = n(46)("src"),
  c = n(87),
  s = ("" + c).split("toString");
 n(33).inspectSource = function(t) {
  return c.call(t)
 }, (t.exports = function(t, e, n, c) {
  var f = "function" == typeof n;
  f && (i(n, "name") || o(n, "name", e)), t[e] !== n && (f && (i(n, u) || o(n, u, t[e] ? "" + t[e] : s.join(String(e)))), t === r ? t[e] = n : c ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
 })(Function.prototype, "toString", function toString() {
  return "function" == typeof this && this[u] || c.call(this)
 })
}, function(t, e, n) {
 var r = n(78),
  o = n(54);
 t.exports = Object.keys || function keys(t) {
  return r(t, o)
 }
}, function(t, e) {
 var n = {}.toString;
 t.exports = function(t) {
  return n.call(t).slice(8, -1)
 }
}, function(t, e) {
 t.exports = function(t, e) {
  return {
   enumerable: !(1 & t),
   configurable: !(2 & t),
   writable: !(4 & t),
   value: e
  }
 }
}, function(t, e, n) {
 var r = n(39);
 t.exports = function(t) {
  return Object(r(t))
 }
}, function(t, e) {
 t.exports = function(t) {
  if (null == t) throw TypeError("Can't call method on  " + t);
  return t
 }
}, function(t, e) {
 var n = t.exports = {
  version: "2.6.9"
 };
 "number" == typeof __e && (__e = n)
}, function(t, e) {
 t.exports = !0
}, function(t, e) {
 var n = 0,
  r = Math.random();
 t.exports = function(t) {
  return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
 }
}, function(t, e, n) {
 var r = n(19),
  o = n(84),
  i = n(82),
  u = Object.defineProperty;
 e.f = n(20) ? Object.defineProperty : function defineProperty(t, e, n) {
  if (r(t), e = i(e, !0), r(n), o) try {
   return u(t, e, n)
  } catch (t) {}
  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
  return "value" in n && (t[e] = n.value), t
 }
}, function(t, e, n) {
 var r = n(11),
  o = n(33),
  i = n(21),
  u = n(27),
  c = n(60),
  s = function(t, e, n) {
   var f, a, l, p, g = t & s.F,
    d = t & s.G,
    v = t & s.S,
    h = t & s.P,
    y = t & s.B,
    m = d ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
    _ = d ? o : o[e] || (o[e] = {}),
    x = _.prototype || (_.prototype = {});
   for (f in d && (n = e), n) l = ((a = !g && m && void 0 !== m[f]) ? m : n)[f], p = y && a ? c(l, r) : h && "function" == typeof l ? c(Function.call, l) : l, m && u(m, f, l, t & s.U), _[f] != l && i(_, f, p), h && x[f] != l && (x[f] = l)
  };
 r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s
}, function(t, e, n) {
 var r = n(41),
  o = n(30),
  i = n(15),
  u = n(49),
  c = n(12),
  s = n(74),
  f = Object.getOwnPropertyDescriptor;
 e.f = n(13) ? f : function getOwnPropertyDescriptor(t, e) {
  if (t = i(t), e = u(e, !0), s) try {
   return f(t, e)
  } catch (t) {}
  if (c(t, e)) return o(!r.f.call(t, e), t[e])
 }
}, function(t, e) {
 t.exports = function(t) {
  if (null == t) throw TypeError("Can't call method on  " + t);
  return t
 }
}, function(t, e) {
 t.exports = {}
}, function(t, e) {
 e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
 var r = n(43),
  o = Math.min;
 t.exports = function(t) {
  return t > 0 ? o(r(t), 9007199254740991) : 0
 }
}, function(t, e) {
 var n = Math.ceil,
  r = Math.floor;
 t.exports = function(t) {
  return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
 }
}, function(t, e, n) {
 var r = n(141),
  o = n(148),
  i = (n(3), n(151));

 function _get(e, n, u) {
  return "undefined" != typeof Reflect && o ? t.exports = _get = o : t.exports = _get = function _get(t, e, n) {
   var o = i(t, e);
   if (o) {
    var u = r(o, e);
    return u.get ? u.get.call(n) : u.value
   }
  }, _get(e, n, u || e)
 }
 t.exports = _get
}, function(t, e, n) {
 var r = n(33),
  o = n(11),
  i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
 (t.exports = function(t, e) {
  return i[t] || (i[t] = void 0 !== e ? e : {})
 })("versions", []).push({
  version: r.version,
  mode: n(71) ? "pure" : "global",
  copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
 })
}, function(t, e) {
 var n = 0,
  r = Math.random();
 t.exports = function(t) {
  return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
 }
}, function(t, e) {
 var n = {}.hasOwnProperty;
 t.exports = function(t, e) {
  return n.call(t, e)
 }
}, function(t, e, n) {
 var r = n(36).f,
  o = Function.prototype,
  i = /^\s*function ([^ (]*)/;
 "name" in o || n(20) && r(o, "name", {
  configurable: !0,
  get: function() {
   try {
    return ("" + this).match(i)[1]
   } catch (t) {
    return ""
   }
  }
 })
}, function(t, e, n) {
 var r = n(17);
 t.exports = function(t, e) {
  if (!r(t)) return t;
  var n, o;
  if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
  if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
  if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
  throw TypeError("Can't convert object to primitive value")
 }
}, function(t, e) {
 var n = Math.ceil,
  r = Math.floor;
 t.exports = function(t) {
  return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
 }
}, function(t, e, n) {
 var r = n(18),
  o = n(101),
  i = n(54),
  u = n(52)("IE_PROTO"),
  c = function() {},
  s = function() {
   var t, e = n(75)("iframe"),
    r = i.length;
   for (e.style.display = "none", n(116).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]];
   return s()
  };
 t.exports = Object.create || function create(t, e) {
  var n;
  return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[u] = t) : n = s(), void 0 === e ? n : o(n, e)
 }
}, function(t, e, n) {
 var r = n(53)("keys"),
  o = n(35);
 t.exports = function(t) {
  return r[t] || (r[t] = o(t))
 }
}, function(t, e, n) {
 var r = n(1),
  o = n(10),
  i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
 (t.exports = function(t, e) {
  return i[t] || (i[t] = void 0 !== e ? e : {})
 })("versions", []).push({
  version: r.version,
  mode: n(34) ? "pure" : "global",
  copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
 })
}, function(t, e) {
 t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
 var r = n(14).f,
  o = n(12),
  i = n(16)("toStringTag");
 t.exports = function(t, e, n) {
  t && !o(t = n ? t : t.prototype, i) && r(t, i, {
   configurable: !0,
   value: e
  })
 }
}, function(t, e, n) {
 e.f = n(16)
}, function(t, e, n) {
 var r = n(10),
  o = n(1),
  i = n(34),
  u = n(56),
  c = n(14).f;
 t.exports = function(t) {
  var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
  "_" == t.charAt(0) || t in e || c(e, t, {
   value: u.f(t)
  })
 }
}, function(t, e, n) {
 t.exports = n(152)
}, function(t, e, n) {
 var r = n(12),
  o = n(31),
  i = n(52)("IE_PROTO"),
  u = Object.prototype;
 t.exports = Object.getPrototypeOf || function(t) {
  return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
 }
}, function(t, e, n) {
 var r = n(61);
 t.exports = function(t, e, n) {
  if (r(t), void 0 === e) return t;
  switch (n) {
   case 1:
    return function(n) {
     return t.call(e, n)
    };
   case 2:
    return function(n, r) {
     return t.call(e, n, r)
    };
   case 3:
    return function(n, r, o) {
     return t.call(e, n, r, o)
    }
  }
  return function() {
   return t.apply(e, arguments)
  }
 }
}, function(t, e) {
 t.exports = function(t) {
  if ("function" != typeof t) throw TypeError(t + " is not a function!");
  return t
 }
}, function(t, e, n) {
 var r = n(32);
 t.exports = function(t) {
  return Object(r(t))
 }
}, function(t, e, n) {
 var r = n(8),
  o = n(1),
  i = n(25);
 t.exports = function(t, e) {
  var n = (o.Object || {})[t] || Object[t],
   u = {};
  u[t] = e(n), r(r.S + r.F * i(function() {
   n(1)
  }), "Object", u)
 }
}, function(t, e) {
 e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
 var r = n(110),
  o = n(120);

 function _typeof2(t) {
  return (_typeof2 = "function" == typeof o && "symbol" == typeof r ? function _typeof2(t) {
   return typeof t
  } : function _typeof2(t) {
   return t && "function" == typeof o && t.constructor === o && t !== o.prototype ? "symbol" : typeof t
  })(t)
 }

 function _typeof(e) {
  return "function" == typeof o && "symbol" === _typeof2(r) ? t.exports = _typeof = function _typeof(t) {
   return _typeof2(t)
  } : t.exports = _typeof = function _typeof(t) {
   return t && "function" == typeof o && t.constructor === o && t !== o.prototype ? "symbol" : _typeof2(t)
  }, _typeof(e)
 }
 t.exports = _typeof
}, function(t, e) {
 var n = {}.toString;
 t.exports = function(t) {
  return n.call(t).slice(8, -1)
 }
}, function(t, e) {
 t.exports = function(t, e) {
  return {
   enumerable: !(1 & t),
   configurable: !(2 & t),
   writable: !(4 & t),
   value: e
  }
 }
}, function(t, e, n) {
 var r = n(109);
 t.exports = function(t, e, n) {
  if (r(t), void 0 === e) return t;
  switch (n) {
   case 1:
    return function(n) {
     return t.call(e, n)
    };
   case 2:
    return function(n, r) {
     return t.call(e, n, r)
    };
   case 3:
    return function(n, r, o) {
     return t.call(e, n, r, o)
    }
  }
  return function() {
   return t.apply(e, arguments)
  }
 }
}, function(t, e, n) {
 var r = n(78),
  o = n(54).concat("length", "prototype");
 e.f = Object.getOwnPropertyNames || function getOwnPropertyNames(t) {
  return r(t, o)
 }
}, function(t, e, n) {
 var r = n(22),
  o = n(11).document,
  i = r(o) && r(o.createElement);
 t.exports = function(t) {
  return i ? o.createElement(t) : {}
 }
}, function(t, e) {
 t.exports = !1
}, function(t, e, n) {
 "use strict";
 var r, o, i = n(99),
  u = RegExp.prototype.exec,
  c = String.prototype.replace,
  s = u,
  f = (r = /a/, o = /b*/g, u.call(r, "a"), u.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
  a = void 0 !== /()??/.exec("")[1];
 (f || a) && (s = function exec(t) {
  var e, n, r, o, s = this;
  return a && (n = new RegExp("^" + s.source + "$(?!\\s)", i.call(s))), f && (e = s.lastIndex), r = u.call(s, t), f && r && (s.lastIndex = s.global ? r.index + r[0].length : e), a && r && r.length > 1 && c.call(r[0], n, function() {
   for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
  }), r
 }), t.exports = s
}, function(t, e, n) {
 var r = n(9)("unscopables"),
  o = Array.prototype;
 null == o[r] && n(21)(o, r, {}), t.exports = function(t) {
  o[r][t] = !0
 }
}, function(t, e, n) {
 t.exports = !n(13) && !n(25)(function() {
  return 7 != Object.defineProperty(n(75)("div"), "a", {
   get: function() {
    return 7
   }
  }).a
 })
}, function(t, e, n) {
 var r = n(17),
  o = n(10).document,
  i = r(o) && r(o.createElement);
 t.exports = function(t) {
  return i ? o.createElement(t) : {}
 }
}, function(t, e, n) {
 "use strict";
 var r = n(34),
  o = n(8),
  i = n(77),
  u = n(23),
  c = n(40),
  s = n(113),
  f = n(55),
  a = n(59),
  l = n(16)("iterator"),
  p = !([].keys && "next" in [].keys()),
  g = function() {
   return this
  };
 t.exports = function(t, e, n, d, v, h, y) {
  s(n, e, d);
  var m, _, x, b = function(t) {
    if (!p && t in E) return E[t];
    switch (t) {
     case "keys":
      return function keys() {
       return new n(this, t)
      };
     case "values":
      return function values() {
       return new n(this, t)
      }
    }
    return function entries() {
     return new n(this, t)
    }
   },
   S = e + " Iterator",
   O = "values" == v,
   w = !1,
   E = t.prototype,
   P = E[l] || E["@@iterator"] || v && E[v],
   j = P || b(v),
   k = v ? O ? b("entries") : j : void 0,
   L = "Array" == e && E.entries || P;
  if (L && (x = a(L.call(new t))) !== Object.prototype && x.next && (f(x, S, !0), r || "function" == typeof x[l] || u(x, l, g)), O && P && "values" !== P.name && (w = !0, j = function values() {
    return P.call(this)
   }), r && !y || !p && !w && E[l] || u(E, l, j), c[e] = j, c[S] = g, v)
   if (m = {
     values: O ? j : b("values"),
     keys: h ? j : b("keys"),
     entries: k
    }, y)
    for (_ in m) _ in E || i(E, _, m[_]);
   else o(o.P + o.F * (p || w), e, m);
  return m
 }
}, function(t, e, n) {
 t.exports = n(23)
}, function(t, e, n) {
 var r = n(12),
  o = n(15),
  i = n(114)(!1),
  u = n(52)("IE_PROTO");
 t.exports = function(t, e) {
  var n, c = o(t),
   s = 0,
   f = [];
  for (n in c) n != u && r(c, n) && f.push(n);
  for (; e.length > s;) r(c, n = e[s++]) && (~i(f, n) || f.push(n));
  return f
 }
}, function(t, e, n) {
 t.exports = n(131)
}, , function(t, e) {
 t.exports = function _assertThisInitialized(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
 }
}, function(t, e, n) {
 var r = n(22);
 t.exports = function(t, e) {
  if (!r(t)) return t;
  var n, o;
  if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
  if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
  if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
  throw TypeError("Can't convert object to primitive value")
 }
}, function(t, e, n) {
 var r = n(29);
 t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
  return "String" == r(t) ? t.split("") : Object(t)
 }
}, function(t, e, n) {
 t.exports = !n(20) && !n(24)(function() {
  return 7 != Object.defineProperty(n(70)("div"), "a", {
   get: function() {
    return 7
   }
  }).a
 })
}, function(t, e, n) {
 "use strict";
 var r = n(93),
  o = RegExp.prototype.exec;
 t.exports = function(t, e) {
  var n = t.exec;
  if ("function" == typeof n) {
   var i = n.call(t, e);
   if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
   return i
  }
  if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
  return o.call(t, e)
 }
}, function(t, e, n) {
 "use strict";
 n(145);
 var r = n(27),
  o = n(21),
  i = n(24),
  u = n(32),
  c = n(9),
  s = n(72),
  f = c("species"),
  a = !i(function() {
   var t = /./;
   return t.exec = function() {
    var t = [];
    return t.groups = {
     a: "7"
    }, t
   }, "7" !== "".replace(t, "$<a>")
  }),
  l = function() {
   var t = /(?:)/,
    e = t.exec;
   t.exec = function() {
    return e.apply(this, arguments)
   };
   var n = "ab".split(t);
   return 2 === n.length && "a" === n[0] && "b" === n[1]
  }();
 t.exports = function(t, e, n) {
  var p = c(t),
   g = !i(function() {
    var e = {};
    return e[p] = function() {
     return 7
    }, 7 != "" [t](e)
   }),
   d = g ? !i(function() {
    var e = !1,
     n = /a/;
    return n.exec = function() {
     return e = !0, null
    }, "split" === t && (n.constructor = {}, n.constructor[f] = function() {
     return n
    }), n[p](""), !e
   }) : void 0;
  if (!g || !d || "replace" === t && !a || "split" === t && !l) {
   var v = /./ [p],
    h = n(u, p, "" [t], function maybeCallNative(t, e, n, r, o) {
     return e.exec === s ? g && !o ? {
      done: !0,
      value: v.call(e, n, r)
     } : {
      done: !0,
      value: t.call(n, e, r)
     } : {
      done: !1
     }
    }),
    y = h[0],
    m = h[1];
   r(String.prototype, t, y), o(RegExp.prototype, p, 2 == e ? function(t, e) {
    return m.call(t, this, e)
   } : function(t) {
    return m.call(t, this)
   })
  }
 }
}, function(t, e, n) {
 t.exports = n(45)("native-function-to-string", Function.toString)
}, function(t, e, n) {
 "use strict";
 var r = n(112)(!0);
 n(76)(String, "String", function(t) {
  this._t = String(t), this._i = 0
 }, function() {
  var t, e = this._t,
   n = this._i;
  return n >= e.length ? {
   value: void 0,
   done: !0
  } : (t = r(e, n), this._i += t.length, {
   value: t,
   done: !1
  })
 })
}, function(t, e, n) {
 "use strict";
 var r = n(139),
  o = n(19),
  i = n(156),
  u = n(92),
  c = n(42),
  s = n(85),
  f = n(72),
  a = n(24),
  l = Math.min,
  p = [].push,
  g = !a(function() {
   RegExp(4294967295, "y")
  });
 n(86)("split", 2, function(t, e, n, a) {
  var d;
  return d = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, e) {
   var o = String(this);
   if (void 0 === t && 0 === e) return [];
   if (!r(t)) return n.call(o, t, e);
   for (var i, u, c, s = [], a = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, g = void 0 === e ? 4294967295 : e >>> 0, d = new RegExp(t.source, a + "g");
    (i = f.call(d, o)) && !((u = d.lastIndex) > l && (s.push(o.slice(l, i.index)), i.length > 1 && i.index < o.length && p.apply(s, i.slice(1)), c = i[0].length, l = u, s.length >= g));) d.lastIndex === i.index && d.lastIndex++;
   return l === o.length ? !c && d.test("") || s.push("") : s.push(o.slice(l)), s.length > g ? s.slice(0, g) : s
  } : "0".split(void 0, 0).length ? function(t, e) {
   return void 0 === t && 0 === e ? [] : n.call(this, t, e)
  } : n, [function split(n, r) {
   var o = t(this),
    i = null == n ? void 0 : n[e];
   return void 0 !== i ? i.call(n, o, r) : d.call(String(o), n, r)
  }, function(t, e) {
   var r = a(d, t, this, e, d !== n);
   if (r.done) return r.value;
   var f = o(t),
    p = String(this),
    v = i(f, RegExp),
    h = f.unicode,
    y = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (g ? "y" : "g"),
    m = new v(g ? f : "^(?:" + f.source + ")", y),
    _ = void 0 === e ? 4294967295 : e >>> 0;
   if (0 === _) return [];
   if (0 === p.length) return null === s(m, p) ? [p] : [];
   for (var x = 0, b = 0, S = []; b < p.length;) {
    m.lastIndex = g ? b : 0;
    var O, w = s(m, g ? p : p.slice(b));
    if (null === w || (O = l(c(m.lastIndex + (g ? 0 : b)), p.length)) === x) b = u(p, b, h);
    else {
     if (S.push(p.slice(x, b)), S.length === _) return S;
     for (var E = 1; E <= w.length - 1; E++)
      if (S.push(w[E]), S.length === _) return S;
     b = x = O
    }
   }
   return S.push(p.slice(x)), S
  }]
 })
}, function(t, e, n) {
 n(117);
 for (var r = n(10), o = n(23), i = n(40), u = n(16)("toStringTag"), c = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), s = 0; s < c.length; s++) {
  var f = c[s],
   a = r[f],
   l = a && a.prototype;
  l && !l[u] && o(l, u, f), i[f] = i.Array
 }
}, function(t, e, n) {
 var r = n(83),
  o = n(32);
 t.exports = function(t) {
  return r(o(t))
 }
}, function(t, e, n) {
 "use strict";
 var r = n(144)(!0);
 t.exports = function(t, e, n) {
  return e + (n ? r(t, e).length : 1)
 }
}, function(t, e, n) {
 var r = n(29),
  o = n(9)("toStringTag"),
  i = "Arguments" == r(function() {
   return arguments
  }());
 t.exports = function(t) {
  var e, n, u;
  return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
   try {
    return t[e]
   } catch (t) {}
  }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (u = r(e)) && "function" == typeof e.callee ? "Arguments" : u
 }
}, function(t, e, n) {
 var r = n(66);
 t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
  return "String" == r(t) ? t.split("") : Object(t)
 }
}, function(t, e, n) {
 var r = n(66);
 t.exports = Array.isArray || function isArray(t) {
  return "Array" == r(t)
 }
}, function(t, e, n) {
 t.exports = n(134)
}, , , function(t, e, n) {
 "use strict";
 var r = n(19);
 t.exports = function() {
  var t = r(this),
   e = "";
  return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
 }
}, function(t, e, n) {
 var r = n(60),
  o = n(83),
  i = n(62),
  u = n(42),
  c = n(104);
 t.exports = function(t, e) {
  var n = 1 == t,
   s = 2 == t,
   f = 3 == t,
   a = 4 == t,
   l = 6 == t,
   p = 5 == t || l,
   g = e || c;
  return function(e, c, d) {
   for (var v, h, y = i(e), m = o(y), _ = r(c, d, 3), x = u(m.length), b = 0, S = n ? g(e, x) : s ? g(e, 0) : void 0; x > b; b++)
    if ((p || b in m) && (h = _(v = m[b], b, y), t))
     if (n) S[b] = h;
     else if (h) switch (t) {
    case 3:
     return !0;
    case 5:
     return v;
    case 6:
     return b;
    case 2:
     S.push(v)
   } else if (a) return !1;
   return l ? -1 : f || a ? a : S
  }
 }
}, function(t, e, n) {
 var r = n(14),
  o = n(18),
  i = n(28);
 t.exports = n(13) ? Object.defineProperties : function defineProperties(t, e) {
  o(t);
  for (var n, u = i(e), c = u.length, s = 0; c > s;) r.f(t, n = u[s++], e[n]);
  return t
 }
}, function(t, e, n) {
 var r = n(50),
  o = Math.min;
 t.exports = function(t) {
  return t > 0 ? o(r(t), 9007199254740991) : 0
 }
}, function(t, e, n) {
 "use strict";
 var r = n(10),
  o = n(12),
  i = n(13),
  u = n(8),
  c = n(77),
  s = n(122).KEY,
  f = n(25),
  a = n(53),
  l = n(55),
  p = n(35),
  g = n(16),
  d = n(56),
  v = n(57),
  h = n(123),
  y = n(95),
  m = n(18),
  _ = n(17),
  x = n(31),
  b = n(15),
  S = n(49),
  O = n(30),
  w = n(51),
  E = n(124),
  P = n(38),
  j = n(64),
  k = n(14),
  L = n(28),
  M = P.f,
  D = k.f,
  C = E.f,
  I = r.Symbol,
  T = r.JSON,
  A = T && T.stringify,
  F = g("_hidden"),
  R = g("toPrimitive"),
  $ = {}.propertyIsEnumerable,
  N = a("symbol-registry"),
  q = a("symbols"),
  G = a("op-symbols"),
  H = Object.prototype,
  V = "function" == typeof I && !!j.f,
  Q = r.QObject,
  W = !Q || !Q.prototype || !Q.prototype.findChild,
  U = i && f(function() {
   return 7 != w(D({}, "a", {
    get: function() {
     return D(this, "a", {
      value: 7
     }).a
    }
   })).a
  }) ? function(t, e, n) {
   var r = M(H, e);
   r && delete H[e], D(t, e, n), r && t !== H && D(H, e, r)
  } : D,
  B = function(t) {
   var e = q[t] = w(I.prototype);
   return e._k = t, e
  },
  z = V && "symbol" == typeof I.iterator ? function(t) {
   return "symbol" == typeof t
  } : function(t) {
   return t instanceof I
  },
  J = function defineProperty(t, e, n) {
   return t === H && J(G, e, n), m(t), e = S(e, !0), m(n), o(q, e) ? (n.enumerable ? (o(t, F) && t[F][e] && (t[F][e] = !1), n = w(n, {
    enumerable: O(0, !1)
   })) : (o(t, F) || D(t, F, O(1, {})), t[F][e] = !0), U(t, e, n)) : D(t, e, n)
  },
  K = function defineProperties(t, e) {
   m(t);
   for (var n, r = h(e = b(e)), o = 0, i = r.length; i > o;) J(t, n = r[o++], e[n]);
   return t
  },
  Y = function propertyIsEnumerable(t) {
   var e = $.call(this, t = S(t, !0));
   return !(this === H && o(q, t) && !o(G, t)) && (!(e || !o(this, t) || !o(q, t) || o(this, F) && this[F][t]) || e)
  },
  X = function getOwnPropertyDescriptor(t, e) {
   if (t = b(t), e = S(e, !0), t !== H || !o(q, e) || o(G, e)) {
    var n = M(t, e);
    return !n || !o(q, e) || o(t, F) && t[F][e] || (n.enumerable = !0), n
   }
  },
  Z = function getOwnPropertyNames(t) {
   for (var e, n = C(b(t)), r = [], i = 0; n.length > i;) o(q, e = n[i++]) || e == F || e == s || r.push(e);
   return r
  },
  tt = function getOwnPropertySymbols(t) {
   for (var e, n = t === H, r = C(n ? G : b(t)), i = [], u = 0; r.length > u;) !o(q, e = r[u++]) || n && !o(H, e) || i.push(q[e]);
   return i
  };
 V || (c((I = function Symbol() {
  if (this instanceof I) throw TypeError("Symbol is not a constructor!");
  var t = p(arguments.length > 0 ? arguments[0] : void 0),
   e = function(n) {
    this === H && e.call(G, n), o(this, F) && o(this[F], t) && (this[F][t] = !1), U(this, t, O(1, n))
   };
  return i && W && U(H, t, {
   configurable: !0,
   set: e
  }), B(t)
 }).prototype, "toString", function toString() {
  return this._k
 }), P.f = X, k.f = J, n(69).f = E.f = Z, n(41).f = Y, j.f = tt, i && !n(34) && c(H, "propertyIsEnumerable", Y, !0), d.f = function(t) {
  return B(g(t))
 }), u(u.G + u.W + u.F * !V, {
  Symbol: I
 });
 for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) g(et[nt++]);
 for (var rt = L(g.store), ot = 0; rt.length > ot;) v(rt[ot++]);
 u(u.S + u.F * !V, "Symbol", {
  for: function(t) {
   return o(N, t += "") ? N[t] : N[t] = I(t)
  },
  keyFor: function keyFor(t) {
   if (!z(t)) throw TypeError(t + " is not a symbol!");
   for (var e in N)
    if (N[e] === t) return e
  },
  useSetter: function() {
   W = !0
  },
  useSimple: function() {
   W = !1
  }
 }), u(u.S + u.F * !V, "Object", {
  create: function create(t, e) {
   return void 0 === e ? w(t) : K(w(t), e)
  },
  defineProperty: J,
  defineProperties: K,
  getOwnPropertyDescriptor: X,
  getOwnPropertyNames: Z,
  getOwnPropertySymbols: tt
 });
 var it = f(function() {
  j.f(1)
 });
 u(u.S + u.F * it, "Object", {
  getOwnPropertySymbols: function getOwnPropertySymbols(t) {
   return j.f(x(t))
  }
 }), T && u(u.S + u.F * (!V || f(function() {
  var t = I();
  return "[null]" != A([t]) || "{}" != A({
   a: t
  }) || "{}" != A(Object(t))
 })), "JSON", {
  stringify: function stringify(t) {
   for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
   if (n = e = r[1], (_(e) || void 0 !== t) && !z(t)) return y(e) || (e = function(t, e) {
    if ("function" == typeof n && (e = n.call(this, t, e)), !z(e)) return e
   }), r[1] = e, A.apply(T, r)
  }
 }), I.prototype[R] || n(23)(I.prototype, R, I.prototype.valueOf), l(I, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
}, function(t, e, n) {
 var r = n(105);
 t.exports = function(t, e) {
  return new(r(t))(e)
 }
}, function(t, e, n) {
 var r = n(22),
  o = n(106),
  i = n(9)("species");
 t.exports = function(t) {
  var e;
  return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
 }
}, function(t, e, n) {
 var r = n(29);
 t.exports = Array.isArray || function isArray(t) {
  return "Array" == r(t)
 }
}, function(t, e, n) {
 n(108);
 var r = n(1).Object;
 t.exports = function defineProperty(t, e, n) {
  return r.defineProperty(t, e, n)
 }
}, function(t, e, n) {
 var r = n(8);
 r(r.S + r.F * !n(13), "Object", {
  defineProperty: n(14).f
 })
}, function(t, e) {
 t.exports = function(t) {
  if ("function" != typeof t) throw TypeError(t + " is not a function!");
  return t
 }
}, function(t, e, n) {
 t.exports = n(111)
}, function(t, e, n) {
 n(88), n(90), t.exports = n(56).f("iterator")
}, function(t, e, n) {
 var r = n(50),
  o = n(39);
 t.exports = function(t) {
  return function(e, n) {
   var i, u, c = String(o(e)),
    s = r(n),
    f = c.length;
   return s < 0 || s >= f ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === f || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
  }
 }
}, function(t, e, n) {
 "use strict";
 var r = n(51),
  o = n(30),
  i = n(55),
  u = {};
 n(23)(u, n(16)("iterator"), function() {
  return this
 }), t.exports = function(t, e, n) {
  t.prototype = r(u, {
   next: o(1, n)
  }), i(t, e + " Iterator")
 }
}, function(t, e, n) {
 var r = n(15),
  o = n(102),
  i = n(115);
 t.exports = function(t) {
  return function(e, n, u) {
   var c, s = r(e),
    f = o(s.length),
    a = i(u, f);
   if (t && n != n) {
    for (; f > a;)
     if ((c = s[a++]) != c) return !0
   } else
    for (; f > a; a++)
     if ((t || a in s) && s[a] === n) return t || a || 0;
   return !t && -1
  }
 }
}, function(t, e, n) {
 var r = n(50),
  o = Math.max,
  i = Math.min;
 t.exports = function(t, e) {
  return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
 }
}, function(t, e, n) {
 var r = n(10).document;
 t.exports = r && r.documentElement
}, function(t, e, n) {
 "use strict";
 var r = n(118),
  o = n(119),
  i = n(40),
  u = n(15);
 t.exports = n(76)(Array, "Array", function(t, e) {
  this._t = u(t), this._i = 0, this._k = e
 }, function() {
  var t = this._t,
   e = this._k,
   n = this._i++;
  return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
 }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t, e) {
 t.exports = function() {}
}, function(t, e) {
 t.exports = function(t, e) {
  return {
   value: e,
   done: !!t
  }
 }
}, function(t, e, n) {
 t.exports = n(121)
}, function(t, e, n) {
 n(103), n(125), n(126), n(127), t.exports = n(1).Symbol
}, function(t, e, n) {
 var r = n(35)("meta"),
  o = n(17),
  i = n(12),
  u = n(14).f,
  c = 0,
  s = Object.isExtensible || function() {
   return !0
  },
  f = !n(25)(function() {
   return s(Object.preventExtensions({}))
  }),
  a = function(t) {
   u(t, r, {
    value: {
     i: "O" + ++c,
     w: {}
    }
   })
  },
  l = t.exports = {
   KEY: r,
   NEED: !1,
   fastKey: function(t, e) {
    if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
    if (!i(t, r)) {
     if (!s(t)) return "F";
     if (!e) return "E";
     a(t)
    }
    return t[r].i
   },
   getWeak: function(t, e) {
    if (!i(t, r)) {
     if (!s(t)) return !0;
     if (!e) return !1;
     a(t)
    }
    return t[r].w
   },
   onFreeze: function(t) {
    return f && l.NEED && s(t) && !i(t, r) && a(t), t
   }
  }
}, function(t, e, n) {
 var r = n(28),
  o = n(64),
  i = n(41);
 t.exports = function(t) {
  var e = r(t),
   n = o.f;
  if (n)
   for (var u, c = n(t), s = i.f, f = 0; c.length > f;) s.call(t, u = c[f++]) && e.push(u);
  return e
 }
}, function(t, e, n) {
 var r = n(15),
  o = n(69).f,
  i = {}.toString,
  u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
 t.exports.f = function getOwnPropertyNames(t) {
  return u && "[object Window]" == i.call(t) ? function(t) {
   try {
    return o(t)
   } catch (t) {
    return u.slice()
   }
  }(t) : o(r(t))
 }
}, function(t, e) {}, function(t, e, n) {
 n(57)("asyncIterator")
}, function(t, e, n) {
 n(57)("observable")
}, function(t, e, n) {
 t.exports = n(129)
}, function(t, e, n) {
 n(130), t.exports = n(1).Object.getPrototypeOf
}, function(t, e, n) {
 var r = n(31),
  o = n(59);
 n(63)("getPrototypeOf", function() {
  return function getPrototypeOf(t) {
   return o(r(t))
  }
 })
}, function(t, e, n) {
 n(132), t.exports = n(1).Object.setPrototypeOf
}, function(t, e, n) {
 var r = n(8);
 r(r.S, "Object", {
  setPrototypeOf: n(133).set
 })
}, function(t, e, n) {
 var r = n(17),
  o = n(18),
  i = function(t, e) {
   if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
  };
 t.exports = {
  set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
   try {
    (r = n(68)(Function.call, n(38).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
   } catch (t) {
    e = !0
   }
   return function setPrototypeOf(t, n) {
    return i(t, n), e ? t.__proto__ = n : r(t, n), t
   }
  }({}, !1) : void 0),
  check: i
 }
}, function(t, e, n) {
 n(135);
 var r = n(1).Object;
 t.exports = function create(t, e) {
  return r.create(t, e)
 }
}, function(t, e, n) {
 var r = n(8);
 r(r.S, "Object", {
  create: n(51)
 })
}, function(t, e, n) {
 var r = n(79);

 function _setPrototypeOf(e, n) {
  return t.exports = _setPrototypeOf = r || function _setPrototypeOf(t, e) {
   return t.__proto__ = e, t
  }, _setPrototypeOf(e, n)
 }
 t.exports = _setPrototypeOf
}, function(t, e) {
 t.exports = {}
}, function(t, e, n) {
 var r = n(45)("keys"),
  o = n(46);
 t.exports = function(t) {
  return r[t] || (r[t] = o(t))
 }
}, function(t, e, n) {
 var r = n(22),
  o = n(29),
  i = n(9)("match");
 t.exports = function(t) {
  var e;
  return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
 }
}, function(t, e, n) {
 "use strict";
 var r = n(93),
  o = {};
 o[n(9)("toStringTag")] = "z", o + "" != "[object z]" && n(27)(Object.prototype, "toString", function toString() {
  return "[object " + r(this) + "]"
 }, !0)
}, function(t, e, n) {
 t.exports = n(146)
}, function(t, e, n) {
 "use strict";
 var r = n(73),
  o = n(170),
  i = n(137),
  u = n(91);
 t.exports = n(171)(Array, "Array", function(t, e) {
  this._t = u(t), this._i = 0, this._k = e
 }, function() {
  var t = this._t,
   e = this._k,
   n = this._i++;
  return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
 }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t, e) {
 t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
 var r = n(43),
  o = n(32);
 t.exports = function(t) {
  return function(e, n) {
   var i, u, c = String(o(e)),
    s = r(n),
    f = c.length;
   return s < 0 || s >= f ? t ? "" : void 0 : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === f || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343 ? t ? c.charAt(s) : i : t ? c.slice(s, s + 2) : u - 56320 + (i - 55296 << 10) + 65536
  }
 }
}, function(t, e, n) {
 "use strict";
 var r = n(72);
 n(37)({
  target: "RegExp",
  proto: !0,
  forced: r !== /./.exec
 }, {
  exec: r
 })
}, function(t, e, n) {
 n(147);
 var r = n(1).Object;
 t.exports = function getOwnPropertyDescriptor(t, e) {
  return r.getOwnPropertyDescriptor(t, e)
 }
}, function(t, e, n) {
 var r = n(15),
  o = n(38).f;
 n(63)("getOwnPropertyDescriptor", function() {
  return function getOwnPropertyDescriptor(t, e) {
   return o(r(t), e)
  }
 })
}, function(t, e, n) {
 t.exports = n(149)
}, function(t, e, n) {
 n(150), t.exports = n(1).Reflect.get
}, function(t, e, n) {
 var r = n(38),
  o = n(59),
  i = n(12),
  u = n(8),
  c = n(17),
  s = n(18);
 u(u.S, "Reflect", {
  get: function get(t, e) {
   var n, u, f = arguments.length < 3 ? t : arguments[2];
   return s(t) === f ? t[e] : (n = r.f(t, e)) ? i(n, "value") ? n.value : void 0 !== n.get ? n.get.call(f) : void 0 : c(u = o(t)) ? get(u, e, f) : void 0
  }
 })
}, function(t, e, n) {
 var r = n(3);
 t.exports = function _superPropBase(t, e) {
  for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)););
  return t
 }
}, function(t, e, n) {
 n(153), t.exports = n(1).Object.keys
}, function(t, e, n) {
 var r = n(31),
  o = n(28);
 n(63)("keys", function() {
  return function keys(t) {
   return o(r(t))
  }
 })
}, function(t, e, n) {
 var r = n(166),
  o = n(143);
 t.exports = Object.keys || function keys(t) {
  return r(t, o)
 }
}, function(t, e, n) {
 var r = n(36).f,
  o = n(47),
  i = n(9)("toStringTag");
 t.exports = function(t, e, n) {
  t && !o(t = n ? t : t.prototype, i) && r(t, i, {
   configurable: !0,
   value: e
  })
 }
}, function(t, e, n) {
 var r = n(19),
  o = n(61),
  i = n(9)("species");
 t.exports = function(t, e) {
  var n, u = r(t).constructor;
  return void 0 === u || null == (n = r(u)[i]) ? e : o(n)
 }
}, function(t, e) {
 t.exports = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"
}, , function(t, e, n) {
 var r = n(91),
  o = n(42),
  i = n(160);
 t.exports = function(t) {
  return function(e, n, u) {
   var c, s = r(e),
    f = o(s.length),
    a = i(u, f);
   if (t && n != n) {
    for (; f > a;)
     if ((c = s[a++]) != c) return !0
   } else
    for (; f > a; a++)
     if ((t || a in s) && s[a] === n) return t || a || 0;
   return !t && -1
  }
 }
}, function(t, e, n) {
 var r = n(43),
  o = Math.max,
  i = Math.min;
 t.exports = function(t, e) {
  return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
 }
}, , function(t, e, n) {
 t.exports = n(176)
}, , function(t, e, n) {
 for (var r = n(142), o = n(154), i = n(27), u = n(11), c = n(21), s = n(137), f = n(9), a = f("iterator"), l = f("toStringTag"), p = s.Array, g = {
   CSSRuleList: !0,
   CSSStyleDeclaration: !1,
   CSSValueList: !1,
   ClientRectList: !1,
   DOMRectList: !1,
   DOMStringList: !1,
   DOMTokenList: !0,
   DataTransferItemList: !1,
   FileList: !1,
   HTMLAllCollection: !1,
   HTMLCollection: !1,
   HTMLFormElement: !1,
   HTMLSelectElement: !1,
   MediaList: !0,
   MimeTypeArray: !1,
   NamedNodeMap: !1,
   NodeList: !0,
   PaintRequestList: !1,
   Plugin: !1,
   PluginArray: !1,
   SVGLengthList: !1,
   SVGNumberList: !1,
   SVGPathSegList: !1,
   SVGPointList: !1,
   SVGStringList: !1,
   SVGTransformList: !1,
   SourceBufferList: !1,
   StyleSheetList: !0,
   TextTrackCueList: !1,
   TextTrackList: !1,
   TouchList: !1
  }, d = o(g), v = 0; v < d.length; v++) {
  var h, y = d[v],
   m = g[y],
   _ = u[y],
   x = _ && _.prototype;
  if (x && (x[a] || c(x, a, p), x[l] || c(x, l, y), s[y] = p, m))
   for (h in r) x[h] || i(x, h, r[h], !0)
 }
}, function(t, e, n) {
 var r = n(19),
  o = n(173),
  i = n(143),
  u = n(138)("IE_PROTO"),
  c = function() {},
  s = function() {
   var t, e = n(70)("iframe"),
    r = i.length;
   for (e.style.display = "none", n(174).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]];
   return s()
  };
 t.exports = Object.create || function create(t, e) {
  var n;
  return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[u] = t) : n = s(), void 0 === e ? n : o(n, e)
 }
}, function(t, e, n) {
 var r = n(47),
  o = n(91),
  i = n(159)(!1),
  u = n(138)("IE_PROTO");
 t.exports = function(t, e) {
  var n, c = o(t),
   s = 0,
   f = [];
  for (n in c) n != u && r(c, n) && f.push(n);
  for (; e.length > s;) r(c, n = e[s++]) && (~i(f, n) || f.push(n));
  return f
 }
}, , , , function(t, e) {
 t.exports = function(t, e) {
  return {
   value: e,
   done: !!t
  }
 }
}, function(t, e, n) {
 "use strict";
 var r = n(71),
  o = n(37),
  i = n(27),
  u = n(21),
  c = n(137),
  s = n(172),
  f = n(155),
  a = n(175),
  l = n(9)("iterator"),
  p = !([].keys && "next" in [].keys()),
  g = function() {
   return this
  };
 t.exports = function(t, e, n, d, v, h, y) {
  s(n, e, d);
  var m, _, x, b = function(t) {
    if (!p && t in E) return E[t];
    switch (t) {
     case "keys":
      return function keys() {
       return new n(this, t)
      };
     case "values":
      return function values() {
       return new n(this, t)
      }
    }
    return function entries() {
     return new n(this, t)
    }
   },
   S = e + " Iterator",
   O = "values" == v,
   w = !1,
   E = t.prototype,
   P = E[l] || E["@@iterator"] || v && E[v],
   j = P || b(v),
   k = v ? O ? b("entries") : j : void 0,
   L = "Array" == e && E.entries || P;
  if (L && (x = a(L.call(new t))) !== Object.prototype && x.next && (f(x, S, !0), r || "function" == typeof x[l] || u(x, l, g)), O && P && "values" !== P.name && (w = !0, j = function values() {
    return P.call(this)
   }), r && !y || !p && !w && E[l] || u(E, l, j), c[e] = j, c[S] = g, v)
   if (m = {
     values: O ? j : b("values"),
     keys: h ? j : b("keys"),
     entries: k
    }, y)
    for (_ in m) _ in E || i(E, _, m[_]);
   else o(o.P + o.F * (p || w), e, m);
  return m
 }
}, function(t, e, n) {
 "use strict";
 var r = n(165),
  o = n(67),
  i = n(155),
  u = {};
 n(21)(u, n(9)("iterator"), function() {
  return this
 }), t.exports = function(t, e, n) {
  t.prototype = r(u, {
   next: o(1, n)
  }), i(t, e + " Iterator")
 }
}, function(t, e, n) {
 var r = n(36),
  o = n(19),
  i = n(154);
 t.exports = n(20) ? Object.defineProperties : function defineProperties(t, e) {
  o(t);
  for (var n, u = i(e), c = u.length, s = 0; c > s;) r.f(t, n = u[s++], e[n]);
  return t
 }
}, function(t, e, n) {
 var r = n(11).document;
 t.exports = r && r.documentElement
}, function(t, e, n) {
 var r = n(47),
  o = n(62),
  i = n(138)("IE_PROTO"),
  u = Object.prototype;
 t.exports = Object.getPrototypeOf || function(t) {
  return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
 }
}, function(t, e, n) {
 n(177), t.exports = n(1).parseInt
}, function(t, e, n) {
 var r = n(8),
  o = n(178);
 r(r.G + r.F * (parseInt != o), {
  parseInt: o
 })
}, function(t, e, n) {
 var r = n(10).parseInt,
  o = n(179).trim,
  i = n(157),
  u = /^[-+]?0[xX]/;
 t.exports = 8 !== r(i + "08") || 22 !== r(i + "0x16") ? function parseInt(t, e) {
  var n = o(String(t), 3);
  return r(n, e >>> 0 || (u.test(n) ? 16 : 10))
 } : r
}, function(t, e, n) {
 var r = n(8),
  o = n(39),
  i = n(25),
  u = n(157),
  c = "[" + u + "]",
  s = RegExp("^" + c + c + "*"),
  f = RegExp(c + c + "*$"),
  a = function(t, e, n) {
   var o = {},
    c = i(function() {
     return !!u[t]() || "â€‹Â…" != "â€‹Â…" [t]()
    }),
    s = o[t] = c ? e(l) : u[t];
   n && (o[n] = s), r(r.P + r.F * c, "String", o)
  },
  l = a.trim = function(t, e) {
   return t = String(o(t)), 1 & e && (t = t.replace(s, "")), 2 & e && (t = t.replace(f, "")), t
  };
 t.exports = a
}, , , , , , , , , , , function(t, e, n) {
 "use strict";
 var r = n(0),
  o = r(n(96));
 n(48);
 var i = r(n(65));
 n(89);
 var u = function Module() {
  var t, e = jQuery,
   n = arguments,
   r = this,
   o = {},
   u = function ensureClosureMethods() {
    e.each(r, function(t) {
     var e = r[t];
     "function" == typeof e && (r[t] = function() {
      return e.apply(r, arguments)
     })
    })
   },
   c = function initSettings() {
    t = r.getDefaultSettings();
    var o = n[0];
    o && e.extend(!0, t, o)
   },
   s = function init() {
    r.__construct.apply(r, n), u(), c(), r.trigger("init")
   };
  this.getItems = function(t, e) {
   if (e) {
    var n = e.split("."),
     r = n.splice(0, 1);
    if (!n.length) return t[r];
    if (!t[r]) return;
    return this.getItems(t[r], n.join("."))
   }
   return t
  }, this.getSettings = function(e) {
   return this.getItems(t, e)
  }, this.setSettings = function(n, o, u) {
   if (u || (u = t), "object" === (0, i.default)(n)) return e.extend(u, n), r;
   var c = n.split("."),
    s = c.splice(0, 1);
   return c.length ? (u[s] || (u[s] = {}), r.setSettings(c.join("."), o, u[s])) : (u[s] = o, r)
  }, this.getErrorMessage = function(t, e) {
   var n;
   switch (t) {
    case "forceMethodImplementation":
     n = "The method '".concat(e, "' must to be implemented in the inheritor child.");
     break;
    default:
     n = "An error occurs"
   }
   return n
  }, this.forceMethodImplementation = function(t) {
   throw new Error(this.getErrorMessage("forceMethodImplementation", t))
  }, this.on = function(t, n) {
   return "object" === (0, i.default)(t) ? (e.each(t, function(t) {
    r.on(t, this)
   }), r) : (t.split(" ").forEach(function(t) {
    o[t] || (o[t] = []), o[t].push(n)
   }), r)
  }, this.off = function(t, e) {
   if (!o[t]) return r;
   if (!e) return delete o[t], r;
   var n = o[t].indexOf(e);
   return -1 !== n && delete o[t][n], r
  }, this.trigger = function(t) {
   var n = "on" + t[0].toUpperCase() + t.slice(1),
    i = Array.prototype.slice.call(arguments, 1);
   r[n] && r[n].apply(r, i);
   var u = o[t];
   return u ? (e.each(u, function(t, e) {
    e.apply(r, i)
   }), r) : r
  }, s()
 };
 u.prototype.__construct = function() {}, u.prototype.getDefaultSettings = function() {
  return {}
 }, u.prototype.getConstructorID = function() {
  return this.constructor.name
 }, u.extend = function(t) {
  var e = jQuery,
   n = this,
   r = function child() {
    return n.apply(this, arguments)
   };
  return e.extend(r, n), (r.prototype = (0, o.default)(e.extend({}, n.prototype, t))).constructor = r, r.__super__ = n.prototype, r
 }, t.exports = u
}, function(t, e, n) {
 "use strict";
 var r = n(0)(n(190));
 t.exports = r.default.extend({
  elements: null,
  getDefaultElements: function getDefaultElements() {
   return {}
  },
  bindEvents: function bindEvents() {},
  onInit: function onInit() {
   this.initElements(), this.bindEvents()
  },
  initElements: function initElements() {
   this.elements = this.getDefaultElements()
  }
 })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
 "use strict";
 var r = n(0);
 n(2)(e, "__esModule", {
  value: !0
 }), e.default = void 0, n(26);
 var o = r(n(4)),
  i = r(n(5)),
  u = r(n(6)),
  c = r(n(3)),
  s = r(n(44)),
  f = r(n(7)),
  a = function(t) {
   function _default() {
    return (0, o.default)(this, _default), (0, u.default)(this, (0, c.default)(_default).apply(this, arguments))
   }
   return (0, f.default)(_default, t), (0, i.default)(_default, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       elements: ".elementor-element",
       nestedDocumentElements: ".elementor .elementor-element"
      },
      classes: {
       editMode: "elementor-edit-mode"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var t = this.getSettings("selectors");
     return {
      $elements: this.$element.find(t.elements).not(this.$element.find(t.nestedDocumentElements))
     }
    }
   }, {
    key: "getDocumentSettings",
    value: function getDocumentSettings(t) {
     var e;
     if (this.isEdit) {
      e = {};
      var n = elementor.settings.page.model;
      jQuery.each(n.getActiveControls(), function(t) {
       e[t] = n.attributes[t]
      })
     } else e = this.$element.data("elementor-settings") || {};
     return this.getItems(e, t)
    }
   }, {
    key: "runElementsHandlers",
    value: function runElementsHandlers() {
     this.elements.$elements.each(function(t, e) {
      return elementorFrontend.elementsHandler.runReadyTrigger(e)
     })
    }
   }, {
    key: "onInit",
    value: function onInit() {
     this.$element = this.getSettings("$element"), (0, s.default)((0, c.default)(_default.prototype), "onInit", this).call(this), this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")), this.isEdit ? elementor.settings.page.model.on("change", this.onSettingsChange.bind(this)) : this.runElementsHandlers()
    }
   }, {
    key: "onSettingsChange",
    value: function onSettingsChange() {}
   }]), _default
  }(elementorModules.ViewModule);
 e.default = a
}, , function(t, e, n) {
 "use strict";
 var r = n(0);
 n(2)(e, "__esModule", {
  value: !0
 }), e.default = void 0;
 var o = r(n(190)),
  i = r(n(191)),
  u = r(n(235)),
  c = window.elementorModules = {
   Module: o.default,
   ViewModule: i.default,
   utils: {
    Masonry: u.default
   }
  };
 e.default = c
}, function(t, e, n) {
 "use strict";
 var r = n(0),
  o = r(n(162)),
  i = r(n(191));
 t.exports = i.default.extend({
  getDefaultSettings: function getDefaultSettings() {
   return {
    container: null,
    items: null,
    columnsCount: 3,
    verticalSpaceBetween: 30
   }
  },
  getDefaultElements: function getDefaultElements() {
   return {
    $container: jQuery(this.getSettings("container")),
    $items: jQuery(this.getSettings("items"))
   }
  },
  run: function run() {
   var t = [],
    e = this.elements.$container.position().top,
    n = this.getSettings(),
    r = n.columnsCount;
   e += (0, o.default)(this.elements.$container.css("margin-top"), 10), this.elements.$items.each(function(i) {
    var u = Math.floor(i / r),
     c = jQuery(this),
     s = c[0].getBoundingClientRect().height + n.verticalSpaceBetween;
    if (u) {
     var f = c.position(),
      a = i % r,
      l = f.top - e - t[a];
     l -= (0, o.default)(c.css("margin-top"), 10), l *= -1, c.css("margin-top", l + "px"), t[a] += s
    } else t.push(s)
   })
  }
 })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
 "use strict";
 var r = n(0),
  o = r(n(234)),
  i = r(n(232)),
  u = r(n(510)),
  c = r(n(511));
 o.default.frontend = {
  Document: i.default,
  tools: {
   StretchElement: u.default
  },
  handlers: {
   Base: c.default
  }
 }
}, function(t, e, n) {
 "use strict";
 t.exports = elementorModules.ViewModule.extend({
  getDefaultSettings: function getDefaultSettings() {
   return {
    element: null,
    direction: elementorFrontend.config.is_rtl ? "right" : "left",
    selectors: {
     container: window
    }
   }
  },
  getDefaultElements: function getDefaultElements() {
   return {
    $element: jQuery(this.getSettings("element"))
   }
  },
  stretch: function stretch() {
   var t, e = this.getSettings("selectors.container");
   try {
    t = jQuery(e)
   } catch (t) {}
   t && t.length || (t = jQuery(this.getDefaultSettings().selectors.container)), this.reset();
   var n = this.elements.$element,
    r = t.outerWidth(),
    o = n.offset().left,
    i = "fixed" === n.css("position"),
    u = i ? 0 : o;
   if (window !== t[0]) {
    var c = t.offset().left;
    i && (u = c), o > c && (u = o - c)
   }
   i || (elementorFrontend.config.is_rtl && (u = r - (n.outerWidth() + u)), u = -u);
   var s = {};
   s.width = r + "px", s[this.getSettings("direction")] = u + "px", n.css(s)
  },
  reset: function reset() {
   var t = {
    width: ""
   };
   t[this.getSettings("direction")] = "", this.elements.$element.css(t)
  }
 })
}, function(t, e, n) {
 "use strict";
 var r = n(0);
 n(164), n(142), n(140), n(89);
 var o = r(n(58));
 n(26), t.exports = elementorModules.ViewModule.extend({
  $element: null,
  editorListeners: null,
  onElementChange: null,
  onEditSettingsChange: null,
  onGeneralSettingsChange: null,
  onPageSettingsChange: null,
  isEdit: null,
  __construct: function __construct(t) {
   this.$element = t.$element, this.isEdit = this.$element.hasClass("elementor-element-edit-mode"), this.isEdit && this.addEditorListeners()
  },
  findElement: function findElement(t) {
   var e = this.$element;
   return e.find(t).filter(function() {
    return jQuery(this).closest(".elementor-element").is(e)
   })
  },
  getUniqueHandlerID: function getUniqueHandlerID(t, e) {
   return t || (t = this.getModelCID()), e || (e = this.$element), t + e.attr("data-element_type") + this.getConstructorID()
  },
  initEditorListeners: function initEditorListeners() {
   var t = this;
   if (t.editorListeners = [{
     event: "element:destroy",
     to: elementor.channels.data,
     callback: function callback(e) {
      e.cid === t.getModelCID() && t.onDestroy()
     }
    }], t.onElementChange) {
    var e = t.getWidgetType() || t.getElementType(),
     n = "change";
    "global" !== e && (n += ":" + e), t.editorListeners.push({
     event: n,
     to: elementor.channels.editor,
     callback: function callback(e, n) {
      t.getUniqueHandlerID(n.model.cid, n.$el) === t.getUniqueHandlerID() && t.onElementChange(e.model.get("name"), e, n)
     }
    })
   }
   t.onEditSettingsChange && t.editorListeners.push({
    event: "change:editSettings",
    to: elementor.channels.editor,
    callback: function callback(e, n) {
     n.model.cid === t.getModelCID() && t.onEditSettingsChange((0, o.default)(e.changed)[0])
    }
   }), ["page", "general"].forEach(function(e) {
    var n = "on" + e[0].toUpperCase() + e.slice(1) + "SettingsChange";
    t[n] && t.editorListeners.push({
     event: "change",
     to: elementor.settings[e].model,
     callback: function callback(e) {
      t[n](e.changed)
     }
    })
   })
  },
  getEditorListeners: function getEditorListeners() {
   return this.editorListeners || this.initEditorListeners(), this.editorListeners
  },
  addEditorListeners: function addEditorListeners() {
   var t = this.getUniqueHandlerID();
   this.getEditorListeners().forEach(function(e) {
    elementorFrontend.addListenerOnce(t, e.event, e.callback, e.to)
   })
  },
  removeEditorListeners: function removeEditorListeners() {
   var t = this.getUniqueHandlerID();
   this.getEditorListeners().forEach(function(e) {
    elementorFrontend.removeListeners(t, e.event, null, e.to)
   })
  },
  getElementType: function getElementType() {
   return this.$element.data("element_type")
  },
  getWidgetType: function getWidgetType() {
   var t = this.$element.data("widget_type");
   if (t) return t.split(".")[0]
  },
  getID: function getID() {
   return this.$element.data("id")
  },
  getModelCID: function getModelCID() {
   return this.$element.data("model-cid")
  },
  getElementSettings: function getElementSettings(t) {
   var e = {},
    n = this.getModelCID();
   if (this.isEdit && n) {
    var r = elementorFrontend.config.elements.data[n],
     o = r.attributes,
     i = o.widgetType || o.elType;
    o.isInner && (i = "inner-" + i);
    var u = elementorFrontend.config.elements.keys[i];
    u || (u = elementorFrontend.config.elements.keys[i] = [], jQuery.each(r.controls, function(t, e) {
     e.frontend_available && u.push(t)
    })), jQuery.each(r.getActiveControls(), function(t) {
     if (-1 !== u.indexOf(t)) {
      var n = o[t];
      n.toJSON && (n = n.toJSON()), e[t] = n
     }
    })
   } else e = this.$element.data("settings") || {};
   return this.getItems(e, t)
  },
  getEditSettings: function getEditSettings(t) {
   var e = {};
   return this.isEdit && (e = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes), this.getItems(e, t)
  },
  getCurrentDeviceSetting: function getCurrentDeviceSetting(t) {
   return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), t)
  },
  onDestroy: function onDestroy() {
   this.isEdit && this.removeEditorListeners(), this.unbindEvents && this.unbindEvents()
  }
 })
}]);
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
! function(t) {
 "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(I) {
 return function() {
  I.ui = I.ui || {};
  var n, H, x = Math.max,
   T = Math.abs,
   L = Math.round,
   o = /left|center|right/,
   l = /top|center|bottom/,
   f = /[\+\-]\d+(\.[\d]+)?%?/,
   s = /^\w+/,
   h = /%$/,
   i = I.fn.position;

  function P(t, i, e) {
   return [parseFloat(t[0]) * (h.test(t[0]) ? i / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? e / 100 : 1)]
  }

  function D(t, i) {
   return parseInt(I.css(t, i), 10) || 0
  }
  I.position = {
    scrollbarWidth: function() {
     if (void 0 !== n) return n;
     var t, i, e = I("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
      o = e.children()[0];
     return I("body").append(e), t = o.offsetWidth, e.css("overflow", "scroll"), t === (i = o.offsetWidth) && (i = e[0].clientWidth), e.remove(), n = t - i
    },
    getScrollInfo: function(t) {
     var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
      e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
      o = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth;
     return {
      width: "scroll" === e || "auto" === e && t.height < t.element[0].scrollHeight ? I.position.scrollbarWidth() : 0,
      height: o ? I.position.scrollbarWidth() : 0
     }
    },
    getWithinInfo: function(t) {
     var i = I(t || window),
      e = I.isWindow(i[0]),
      o = !!i[0] && 9 === i[0].nodeType;
     return {
      element: i,
      isWindow: e,
      isDocument: o,
      offset: i.offset() || {
       left: 0,
       top: 0
      },
      scrollLeft: i.scrollLeft(),
      scrollTop: i.scrollTop(),
      width: e || o ? i.width() : i.outerWidth(),
      height: e || o ? i.height() : i.outerHeight()
     }
    }
   }, I.fn.position = function(c) {
    if (!c || !c.of) return i.apply(this, arguments);
    c = I.extend({}, c);
    var d, a, g, u, m, t, w = I(c.of),
     W = I.position.getWithinInfo(c.within),
     v = I.position.getScrollInfo(W),
     y = (c.collision || "flip").split(" "),
     b = {};
    return t = function(t) {
     var i = t[0];
     return 9 === i.nodeType ? {
      width: t.width(),
      height: t.height(),
      offset: {
       top: 0,
       left: 0
      }
     } : I.isWindow(i) ? {
      width: t.width(),
      height: t.height(),
      offset: {
       top: t.scrollTop(),
       left: t.scrollLeft()
      }
     } : i.preventDefault ? {
      width: 0,
      height: 0,
      offset: {
       top: i.pageY,
       left: i.pageX
      }
     } : {
      width: t.outerWidth(),
      height: t.outerHeight(),
      offset: t.offset()
     }
    }(w), w[0].preventDefault && (c.at = "left top"), a = t.width, g = t.height, u = t.offset, m = I.extend({}, u), I.each(["my", "at"], function() {
     var t, i, e = (c[this] || "").split(" ");
     1 === e.length && (e = o.test(e[0]) ? e.concat(["center"]) : l.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = l.test(e[1]) ? e[1] : "center", t = f.exec(e[0]), i = f.exec(e[1]), b[this] = [t ? t[0] : 0, i ? i[0] : 0], c[this] = [s.exec(e[0])[0], s.exec(e[1])[0]]
    }), 1 === y.length && (y[1] = y[0]), "right" === c.at[0] ? m.left += a : "center" === c.at[0] && (m.left += a / 2), "bottom" === c.at[1] ? m.top += g : "center" === c.at[1] && (m.top += g / 2), d = P(b.at, a, g), m.left += d[0], m.top += d[1], this.each(function() {
     var e, t, f = I(this),
      s = f.outerWidth(),
      h = f.outerHeight(),
      i = D(this, "marginLeft"),
      o = D(this, "marginTop"),
      n = s + i + D(this, "marginRight") + v.width,
      l = h + o + D(this, "marginBottom") + v.height,
      r = I.extend({}, m),
      p = P(b.my, f.outerWidth(), f.outerHeight());
     "right" === c.my[0] ? r.left -= s : "center" === c.my[0] && (r.left -= s / 2), "bottom" === c.my[1] ? r.top -= h : "center" === c.my[1] && (r.top -= h / 2), r.left += p[0], r.top += p[1], H || (r.left = L(r.left), r.top = L(r.top)), e = {
      marginLeft: i,
      marginTop: o
     }, I.each(["left", "top"], function(t, i) {
      I.ui.position[y[t]] && I.ui.position[y[t]][i](r, {
       targetWidth: a,
       targetHeight: g,
       elemWidth: s,
       elemHeight: h,
       collisionPosition: e,
       collisionWidth: n,
       collisionHeight: l,
       offset: [d[0] + p[0], d[1] + p[1]],
       my: c.my,
       at: c.at,
       within: W,
       elem: f
      })
     }), c.using && (t = function(t) {
      var i = u.left - r.left,
       e = i + a - s,
       o = u.top - r.top,
       n = o + g - h,
       l = {
        target: {
         element: w,
         left: u.left,
         top: u.top,
         width: a,
         height: g
        },
        element: {
         element: f,
         left: r.left,
         top: r.top,
         width: s,
         height: h
        },
        horizontal: e < 0 ? "left" : 0 < i ? "right" : "center",
        vertical: n < 0 ? "top" : 0 < o ? "bottom" : "middle"
       };
      a < s && T(i + e) < a && (l.horizontal = "center"), g < h && T(o + n) < g && (l.vertical = "middle"), x(T(i), T(e)) > x(T(o), T(n)) ? l.important = "horizontal" : l.important = "vertical", c.using.call(this, t, l)
     }), f.offset(I.extend(r, {
      using: t
     }))
    })
   }, I.ui.position = {
    fit: {
     left: function(t, i) {
      var e, o = i.within,
       n = o.isWindow ? o.scrollLeft : o.offset.left,
       l = o.width,
       f = t.left - i.collisionPosition.marginLeft,
       s = n - f,
       h = f + i.collisionWidth - l - n;
      i.collisionWidth > l ? 0 < s && h <= 0 ? (e = t.left + s + i.collisionWidth - l - n, t.left += s - e) : t.left = 0 < h && s <= 0 ? n : h < s ? n + l - i.collisionWidth : n : 0 < s ? t.left += s : 0 < h ? t.left -= h : t.left = x(t.left - f, t.left)
     },
     top: function(t, i) {
      var e, o = i.within,
       n = o.isWindow ? o.scrollTop : o.offset.top,
       l = i.within.height,
       f = t.top - i.collisionPosition.marginTop,
       s = n - f,
       h = f + i.collisionHeight - l - n;
      i.collisionHeight > l ? 0 < s && h <= 0 ? (e = t.top + s + i.collisionHeight - l - n, t.top += s - e) : t.top = 0 < h && s <= 0 ? n : h < s ? n + l - i.collisionHeight : n : 0 < s ? t.top += s : 0 < h ? t.top -= h : t.top = x(t.top - f, t.top)
     }
    },
    flip: {
     left: function(t, i) {
      var e, o, n = i.within,
       l = n.offset.left + n.scrollLeft,
       f = n.width,
       s = n.isWindow ? n.scrollLeft : n.offset.left,
       h = t.left - i.collisionPosition.marginLeft,
       r = h - s,
       p = h + i.collisionWidth - f - s,
       c = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
       d = "left" === i.at[0] ? i.targetWidth : "right" === i.at[0] ? -i.targetWidth : 0,
       a = -2 * i.offset[0];
      r < 0 ? ((e = t.left + c + d + a + i.collisionWidth - f - l) < 0 || e < T(r)) && (t.left += c + d + a) : 0 < p && (0 < (o = t.left - i.collisionPosition.marginLeft + c + d + a - s) || T(o) < p) && (t.left += c + d + a)
     },
     top: function(t, i) {
      var e, o, n = i.within,
       l = n.offset.top + n.scrollTop,
       f = n.height,
       s = n.isWindow ? n.scrollTop : n.offset.top,
       h = t.top - i.collisionPosition.marginTop,
       r = h - s,
       p = h + i.collisionHeight - f - s,
       c = "top" === i.my[1] ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
       d = "top" === i.at[1] ? i.targetHeight : "bottom" === i.at[1] ? -i.targetHeight : 0,
       a = -2 * i.offset[1];
      r < 0 ? ((o = t.top + c + d + a + i.collisionHeight - f - l) < 0 || o < T(r)) && (t.top += c + d + a) : 0 < p && (0 < (e = t.top - i.collisionPosition.marginTop + c + d + a - s) || T(e) < p) && (t.top += c + d + a)
     }
    },
    flipfit: {
     left: function() {
      I.ui.position.flip.left.apply(this, arguments), I.ui.position.fit.left.apply(this, arguments)
     },
     top: function() {
      I.ui.position.flip.top.apply(this, arguments), I.ui.position.fit.top.apply(this, arguments)
     }
    }
   },
   function() {
    var t, i, e, o, n, l = document.getElementsByTagName("body")[0],
     f = document.createElement("div");
    for (n in t = document.createElement(l ? "div" : "body"), e = {
      visibility: "hidden",
      width: 0,
      height: 0,
      border: 0,
      margin: 0,
      background: "none"
     }, l && I.extend(e, {
      position: "absolute",
      left: "-1000px",
      top: "-1000px"
     }), e) t.style[n] = e[n];
    t.appendChild(f), (i = l || document.documentElement).insertBefore(t, i.firstChild), f.style.cssText = "position: absolute; left: 10.7432222px;", o = I(f).offset().left, H = 10 < o && o < 11, t.innerHTML = "", i.removeChild(t)
   }()
 }(), I.ui.position
});
/*! dialogs-manager v4.7.3 | (c) Kobi Zaltzberg | https://github.com/kobizz/dialogs-manager/blob/master/LICENSE.txt 
 2019-07-15 18:16 */
! function(a, b) {
 "use strict";
 var c = {
  widgetsTypes: {},
  createWidgetType: function(b, d, e) {
   e || (e = this.Widget);
   var f = function() {
     e.apply(this, arguments)
    },
    g = f.prototype = new e(b);
   return g.types = g.types.concat([b]), a.extend(g, d), g.constructor = f, f.extend = function(a, b) {
    return c.createWidgetType(a, b, f)
   }, f
  },
  addWidgetType: function(a, b, c) {
   return b && b.prototype instanceof this.Widget ? this.widgetsTypes[a] = b : this.widgetsTypes[a] = this.createWidgetType(a, b, c)
  },
  getWidgetType: function(a) {
   return this.widgetsTypes[a]
  }
 };
 c.Instance = function() {
  var b = this,
   d = {},
   e = {},
   f = function() {
    d.body = a("body")
   },
   g = function(b) {
    var c = {
     classPrefix: "dialog",
     effects: {
      show: "fadeIn",
      hide: "fadeOut"
     }
    };
    a.extend(e, c, b)
   };
  this.createWidget = function(a, d) {
   var e = c.getWidgetType(a),
    f = new e(a);
   return d = d || {}, f.init(b, d), f
  }, this.getSettings = function(a) {
   return a ? e[a] : Object.create(e)
  }, this.init = function(a) {
   return g(a), f(), b
  }, b.init()
 }, c.Widget = function(b) {
  var d = this,
   e = {},
   f = {},
   g = {},
   h = 0,
   i = ["refreshPosition"],
   j = function() {
    var a = [g.window];
    g.iframe && a.push(jQuery(g.iframe[0].contentWindow)), a.forEach(function(a) {
     e.hide.onEscKeyPress && a.on("keyup", v), e.hide.onOutsideClick && a[0].addEventListener("click", p, !0), e.hide.onOutsideContextMenu && a[0].addEventListener("contextmenu", p, !0), e.position.autoRefresh && a.on("resize", d.refreshPosition)
    }), (e.hide.onClick || e.hide.onBackgroundClick) && g.widget.on("click", n)
   },
   k = function(b, c) {
    var d = e.effects[b],
     f = g.widget;
    if (a.isFunction(d)) d.apply(f, c);
    else {
     if (!f[d]) throw "Reference Error: The effect " + d + " not found";
     f[d].apply(f, c)
    }
   },
   l = function() {
    var b = i.concat(d.getClosureMethods());
    a.each(b, function() {
     var a = this,
      b = d[a];
     d[a] = function() {
      b.apply(d, arguments)
     }
    })
   },
   m = function(a) {
    if (a.my) {
     var b = /left|right/,
      c = /([+-]\d+)?$/,
      d = g.iframe.offset(),
      e = g.iframe[0].contentWindow,
      f = a.my.split(" "),
      h = [];
     1 === f.length && (b.test(f[0]) ? f.push("center") : f.unshift("center")), f.forEach(function(a, b) {
      var f = a.replace(c, function(a) {
       return a = +a || 0, a += b ? d.top - e.scrollY : d.left - e.scrollX, a >= 0 && (a = "+" + a), a
      });
      h.push(f)
     }), a.my = h.join(" ")
    }
   },
   n = function(b) {
    if (!t(b)) {
     if (e.hide.onClick) {
      if (a(b.target).closest(e.selectors.preventClose).length) return
     } else if (b.target !== this) return;
     d.hide()
    }
   },
   o = function(b) {
    return !!e.hide.ignore && !!a(b.target).closest(e.hide.ignore).length
   },
   p = function(b) {
    t(b) || a(b.target).closest(g.widget).length || o(b) || d.hide()
   },
   q = function() {
    d.addElement("widget"), d.addElement("header"), d.addElement("message"), d.addElement("window", window), d.addElement("body", document.body), d.addElement("container", e.container), e.iframe && d.addElement("iframe", e.iframe), e.closeButton && d.addElement("closeButton", '<div><i class="' + e.closeButtonClass + '"></i></div>');
    var b = d.getSettings("id");
    b && d.setID(b);
    var c = [];
    a.each(d.types, function() {
     c.push(e.classes.globalPrefix + "-type-" + this)
    }), c.push(d.getSettings("className")), g.widget.addClass(c.join(" "))
   },
   r = function(c, f) {
    var g = a.extend(!0, {}, c.getSettings());
    e = {
     headerMessage: "",
     message: "",
     effects: g.effects,
     classes: {
      globalPrefix: g.classPrefix,
      prefix: g.classPrefix + "-" + b,
      preventScroll: g.classPrefix + "-prevent-scroll"
     },
     selectors: {
      preventClose: "." + g.classPrefix + "-prevent-close"
     },
     container: "body",
     preventScroll: !1,
     iframe: null,
     closeButton: !1,
     closeButtonClass: g.classPrefix + "-close-button-icon",
     position: {
      element: "widget",
      my: "center",
      at: "center",
      enable: !0,
      autoRefresh: !1
     },
     hide: {
      auto: !1,
      autoDelay: 5e3,
      onClick: !1,
      onOutsideClick: !0,
      onOutsideContextMenu: !1,
      onBackgroundClick: !0,
      onEscKeyPress: !0,
      ignore: ""
     }
    }, a.extend(!0, e, d.getDefaultSettings(), f), s()
   },
   s = function() {
    a.each(e, function(a) {
     var b = a.match(/^on([A-Z].*)/);
     b && (b = b[1].charAt(0).toLowerCase() + b[1].slice(1), d.on(b, this))
    })
   },
   t = function(a) {
    return "click" === a.type && 2 === a.button
   },
   u = function(a) {
    return a.replace(/([a-z])([A-Z])/g, function() {
     return arguments[1] + "-" + arguments[2].toLowerCase()
    })
   },
   v = function(a) {
    var b = 27,
     c = a.which;
    b === c && d.hide()
   },
   w = function() {
    var a = [g.window];
    g.iframe && a.push(jQuery(g.iframe[0].contentWindow)), a.forEach(function(a) {
     e.hide.onEscKeyPress && a.off("keyup", v), e.hide.onOutsideClick && a[0].removeEventListener("click", p, !0), e.hide.onOutsideContextMenu && a[0].removeEventListener("contextmenu", p, !0), e.position.autoRefresh && a.off("resize", d.refreshPosition)
    }), (e.hide.onClick || e.hide.onBackgroundClick) && g.widget.off("click", n)
   };
  this.addElement = function(b, c, d) {
   var f = g[b] = a(c || "<div>"),
    h = u(b);
   return d = d ? d + " " : "", d += e.classes.globalPrefix + "-" + h, d += " " + e.classes.prefix + "-" + h, f.addClass(d), f
  }, this.destroy = function() {
   return w(), g.widget.remove(), d.trigger("destroy"), d
  }, this.getElements = function(a) {
   return a ? g[a] : g
  }, this.getSettings = function(a) {
   var b = Object.create(e);
   return a ? b[a] : b
  }, this.hide = function() {
   return clearTimeout(h), k("hide", arguments), w(), e.preventScroll && d.getElements("body").removeClass(e.classes.preventScroll), d.trigger("hide"), d
  }, this.init = function(a, b) {
   if (!(a instanceof c.Instance)) throw "The " + d.widgetName + " must to be initialized from an instance of DialogsManager.Instance";
   return l(), d.trigger("init", b), r(a, b), q(), d.buildWidget(), d.attachEvents(), d.trigger("ready"), d
  }, this.isVisible = function() {
   return g.widget.is(":visible")
  }, this.on = function(b, c) {
   if ("object" == typeof b) return a.each(b, function(a) {
    d.on(a, this)
   }), d;
   var e = b.split(" ");
   return e.forEach(function(a) {
    f[a] || (f[a] = []), f[a].push(c)
   }), d
  }, this.off = function(a, b) {
   if (!f[a]) return d;
   if (!b) return delete f[a], d;
   var c = f[a].indexOf(b);
   return -1 !== c && f[a].splice(c, 1), d
  }, this.refreshPosition = function() {
   if (e.position.enable) {
    var b = a.extend({}, e.position);
    g[b.of] && (b.of = g[b.of]), b.of || (b.of = window), e.iframe && m(b), g[b.element].position(b)
   }
  }, this.setID = function(a) {
   return g.widget.attr("id", a), d
  }, this.setHeaderMessage = function(a) {
   return d.getElements("header").html(a), this
  }, this.setMessage = function(a) {
   return g.message.html(a), d
  }, this.setSettings = function(b, c) {
   return jQuery.isPlainObject(c) ? a.extend(!0, e[b], c) : e[b] = c, d
  }, this.show = function() {
   return clearTimeout(h), g.widget.appendTo(g.container).hide(), k("show", arguments), d.refreshPosition(), e.hide.auto && (h = setTimeout(d.hide, e.hide.autoDelay)), j(), e.preventScroll && d.getElements("body").addClass(e.classes.preventScroll), d.trigger("show"), d
  }, this.trigger = function(b, c) {
   var e = "on" + b[0].toUpperCase() + b.slice(1);
   d[e] && d[e](c);
   var g = f[b];
   if (g) return a.each(g, function(a, b) {
    b.call(d, c)
   }), d
  }
 }, c.Widget.prototype.types = [], c.Widget.prototype.buildWidget = function() {
  var a = this.getElements(),
   b = this.getSettings();
  a.widget.append(a.header, a.message), this.setHeaderMessage(b.headerMessage), this.setMessage(b.message), this.getSettings("closeButton") && a.widget.prepend(a.closeButton)
 }, c.Widget.prototype.attachEvents = function() {
  var a = this;
  a.getSettings("closeButton") && a.getElements("closeButton").on("click", function() {
   a.hide()
  })
 }, c.Widget.prototype.getDefaultSettings = function() {
  return {}
 }, c.Widget.prototype.getClosureMethods = function() {
  return []
 }, c.Widget.prototype.onHide = function() {}, c.Widget.prototype.onShow = function() {}, c.Widget.prototype.onInit = function() {}, c.Widget.prototype.onReady = function() {}, c.widgetsTypes.simple = c.Widget, c.addWidgetType("buttons", {
  activeKeyUp: function(a) {
   var b = 9;
   a.which === b && a.preventDefault(), this.hotKeys[a.which] && this.hotKeys[a.which](this)
  },
  activeKeyDown: function(a) {
   if (this.focusedButton) {
    var b = 9;
    if (a.which === b) {
     a.preventDefault();
     var c, d = this.focusedButton.index();
     a.shiftKey ? (c = d - 1, c < 0 && (c = this.buttons.length - 1)) : (c = d + 1, c >= this.buttons.length && (c = 0)), this.focusedButton = this.buttons[c].focus()
    }
   }
  },
  addButton: function(b) {
   var c = this,
    d = c.getSettings(),
    e = jQuery.extend(d.button, b),
    f = b.classes ? b.classes + " " : "";
   f += d.classes.globalPrefix + "-button";
   var g = c.addElement(b.name, a("<" + e.tag + ">").text(b.text), f);
   c.buttons.push(g);
   var h = function() {
    d.hide.onButtonClick && c.hide(), a.isFunction(b.callback) && b.callback.call(this, c)
   };
   return g.on("click", h), b.hotKey && (this.hotKeys[b.hotKey] = h), this.getElements("buttonsWrapper").append(g), b.focus && (this.focusedButton = g), c
  },
  bindHotKeys: function() {
   this.getElements("window").on({
    keyup: this.activeKeyUp,
    keydown: this.activeKeyDown
   })
  },
  buildWidget: function() {
   c.Widget.prototype.buildWidget.apply(this, arguments);
   var a = this.addElement("buttonsWrapper");
   this.getElements("widget").append(a)
  },
  getClosureMethods: function() {
   return ["activeKeyUp", "activeKeyDown"]
  },
  getDefaultSettings: function() {
   return {
    hide: {
     onButtonClick: !0
    },
    button: {
     tag: "button"
    }
   }
  },
  onHide: function() {
   this.unbindHotKeys()
  },
  onInit: function() {
   this.buttons = [], this.hotKeys = {}, this.focusedButton = null
  },
  onShow: function() {
   this.bindHotKeys(), this.focusedButton || (this.focusedButton = this.buttons[0]), this.focusedButton && this.focusedButton.focus()
  },
  unbindHotKeys: function() {
   this.getElements("window").off({
    keyup: this.activeKeyUp,
    keydown: this.activeKeyDown
   })
  }
 }), c.addWidgetType("lightbox", c.getWidgetType("buttons").extend("lightbox", {
  getDefaultSettings: function() {
   var b = c.getWidgetType("buttons").prototype.getDefaultSettings.apply(this, arguments);
   return a.extend(!0, b, {
    contentWidth: "auto",
    contentHeight: "auto",
    position: {
     element: "widgetContent",
     of: "widget",
     autoRefresh: !0
    }
   })
  },
  buildWidget: function() {
   c.getWidgetType("buttons").prototype.buildWidget.apply(this, arguments);
   var a = this.addElement("widgetContent"),
    b = this.getElements();
   a.append(b.header, b.message, b.buttonsWrapper), b.widget.html(a), b.closeButton && a.prepend(b.closeButton)
  },
  onReady: function() {
   var a = this.getElements(),
    b = this.getSettings();
   "auto" !== b.contentWidth && a.message.width(b.contentWidth), "auto" !== b.contentHeight && a.message.height(b.contentHeight)
  }
 })), c.addWidgetType("confirm", c.getWidgetType("lightbox").extend("confirm", {
  onReady: function() {
   c.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
   var a = this.getSettings("strings"),
    b = "cancel" === this.getSettings("defaultOption");
   this.addButton({
    name: "cancel",
    text: a.cancel,
    callback: function(a) {
     a.trigger("cancel")
    },
    focus: b
   }), this.addButton({
    name: "ok",
    text: a.confirm,
    callback: function(a) {
     a.trigger("confirm")
    },
    focus: !b
   })
  },
  getDefaultSettings: function() {
   var a = c.getWidgetType("lightbox").prototype.getDefaultSettings.apply(this, arguments);
   return a.strings = {
    confirm: "OK",
    cancel: "Cancel"
   }, a.defaultOption = "cancel", a
  }
 })), c.addWidgetType("alert", c.getWidgetType("lightbox").extend("alert", {
  onReady: function() {
   c.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
   var a = this.getSettings("strings");
   this.addButton({
    name: "ok",
    text: a.confirm,
    callback: function(a) {
     a.trigger("confirm")
    }
   })
  },
  getDefaultSettings: function() {
   var a = c.getWidgetType("lightbox").prototype.getDefaultSettings.apply(this, arguments);
   return a.strings = {
    confirm: "OK"
   }, a
  }
 })), b.DialogsManager = c
}("undefined" != typeof jQuery ? jQuery : "function" == typeof require && require("jquery"), "undefined" != typeof module ? module.exports : window);
! function() {
 "use strict";

 function Waypoint(options) {
  if (!options) throw new Error("No options passed to Waypoint constructor");
  if (!options.element) throw new Error("No element option passed to Waypoint constructor");
  if (!options.handler) throw new Error("No handler option passed to Waypoint constructor");
  this.key = "waypoint-" + keyCounter, this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options), this.element = this.options.element, this.adapter = new Waypoint.Adapter(this.element), this.callback = options.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = Waypoint.Group.findOrCreate({
   name: this.options.group,
   axis: this.axis
  }), this.context = Waypoint.Context.findOrCreateByElement(this.options.context), Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), allWaypoints[this.key] = this, keyCounter += 1
 }
 var keyCounter = 0,
  allWaypoints = {};
 Waypoint.prototype.queueTrigger = function(direction) {
  this.group.queueTrigger(this, direction)
 }, Waypoint.prototype.trigger = function(args) {
  this.enabled && this.callback && this.callback.apply(this, args)
 }, Waypoint.prototype.destroy = function() {
  this.context.remove(this), this.group.remove(this), delete allWaypoints[this.key]
 }, Waypoint.prototype.disable = function() {
  return this.enabled = !1, this
 }, Waypoint.prototype.enable = function() {
  return this.context.refresh(), this.enabled = !0, this
 }, Waypoint.prototype.next = function() {
  return this.group.next(this)
 }, Waypoint.prototype.previous = function() {
  return this.group.previous(this)
 }, Waypoint.invokeAll = function(method) {
  var allWaypointsArray = [];
  for (var waypointKey in allWaypoints) allWaypointsArray.push(allWaypoints[waypointKey]);
  for (var i = 0, end = allWaypointsArray.length; i < end; i++) allWaypointsArray[i][method]()
 }, Waypoint.destroyAll = function() {
  Waypoint.invokeAll("destroy")
 }, Waypoint.disableAll = function() {
  Waypoint.invokeAll("disable")
 }, Waypoint.enableAll = function() {
  Waypoint.Context.refreshAll();
  for (var waypointKey in allWaypoints) allWaypoints[waypointKey].enabled = !0;
  return this
 }, Waypoint.refreshAll = function() {
  Waypoint.Context.refreshAll()
 }, Waypoint.viewportHeight = function() {
  return window.innerHeight || document.documentElement.clientHeight
 }, Waypoint.viewportWidth = function() {
  return document.documentElement.clientWidth
 }, Waypoint.adapters = [], Waypoint.defaults = {
  context: window,
  continuous: !0,
  enabled: !0,
  group: "default",
  horizontal: !1,
  offset: 0
 }, Waypoint.offsetAliases = {
  "bottom-in-view": function() {
   return this.context.innerHeight() - this.adapter.outerHeight()
  },
  "right-in-view": function() {
   return this.context.innerWidth() - this.adapter.outerWidth()
  }
 }, window.Waypoint = Waypoint
}(),
function() {
 "use strict";

 function requestAnimationFrameShim(callback) {
  window.setTimeout(callback, 1e3 / 60)
 }

 function Context(element) {
  this.element = element, this.Adapter = Waypoint.Adapter, this.adapter = new this.Adapter(element), this.key = "waypoint-context-" + keyCounter, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
   x: this.adapter.scrollLeft(),
   y: this.adapter.scrollTop()
  }, this.waypoints = {
   vertical: {},
   horizontal: {}
  }, element.waypointContextKey = this.key, contexts[element.waypointContextKey] = this, keyCounter += 1, Waypoint.windowContext || (Waypoint.windowContext = !0, Waypoint.windowContext = new Context(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
 }
 var keyCounter = 0,
  contexts = {},
  Waypoint = window.Waypoint,
  oldWindowLoad = window.onload;
 Context.prototype.add = function(waypoint) {
  var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
  this.waypoints[axis][waypoint.key] = waypoint, this.refresh()
 }, Context.prototype.checkEmpty = function() {
  var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal),
   verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
   isWindow = this.element == this.element.window;
  horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"), delete contexts[this.key])
 }, Context.prototype.createThrottledResizeHandler = function() {
  function resizeHandler() {
   self.handleResize(), self.didResize = !1
  }
  var self = this;
  this.adapter.on("resize.waypoints", function() {
   self.didResize || (self.didResize = !0, Waypoint.requestAnimationFrame(resizeHandler))
  })
 }, Context.prototype.createThrottledScrollHandler = function() {
  function scrollHandler() {
   self.handleScroll(), self.didScroll = !1
  }
  var self = this;
  this.adapter.on("scroll.waypoints", function() {
   self.didScroll && !Waypoint.isTouch || (self.didScroll = !0, Waypoint.requestAnimationFrame(scrollHandler))
  })
 }, Context.prototype.handleResize = function() {
  Waypoint.Context.refreshAll()
 }, Context.prototype.handleScroll = function() {
  var triggeredGroups = {},
   axes = {
    horizontal: {
     newScroll: this.adapter.scrollLeft(),
     oldScroll: this.oldScroll.x,
     forward: "right",
     backward: "left"
    },
    vertical: {
     newScroll: this.adapter.scrollTop(),
     oldScroll: this.oldScroll.y,
     forward: "down",
     backward: "up"
    }
   };
  for (var axisKey in axes) {
   var axis = axes[axisKey],
    isForward = axis.newScroll > axis.oldScroll,
    direction = isForward ? axis.forward : axis.backward;
   for (var waypointKey in this.waypoints[axisKey]) {
    var waypoint = this.waypoints[axisKey][waypointKey];
    if (null !== waypoint.triggerPoint) {
     var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint,
      nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
      crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
      crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
     (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction), triggeredGroups[waypoint.group.id] = waypoint.group)
    }
   }
  }
  for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers();
  this.oldScroll = {
   x: axes.horizontal.newScroll,
   y: axes.vertical.newScroll
  }
 }, Context.prototype.innerHeight = function() {
  return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
 }, Context.prototype.remove = function(waypoint) {
  delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty()
 }, Context.prototype.innerWidth = function() {
  return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
 }, Context.prototype.destroy = function() {
  var allWaypoints = [];
  for (var axis in this.waypoints)
   for (var waypointKey in this.waypoints[axis]) allWaypoints.push(this.waypoints[axis][waypointKey]);
  for (var i = 0, end = allWaypoints.length; i < end; i++) allWaypoints[i].destroy()
 }, Context.prototype.refresh = function() {
  var axes, isWindow = this.element == this.element.window,
   contextOffset = isWindow ? void 0 : this.adapter.offset(),
   triggeredGroups = {};
  this.handleScroll(), axes = {
   horizontal: {
    contextOffset: isWindow ? 0 : contextOffset.left,
    contextScroll: isWindow ? 0 : this.oldScroll.x,
    contextDimension: this.innerWidth(),
    oldScroll: this.oldScroll.x,
    forward: "right",
    backward: "left",
    offsetProp: "left"
   },
   vertical: {
    contextOffset: isWindow ? 0 : contextOffset.top,
    contextScroll: isWindow ? 0 : this.oldScroll.y,
    contextDimension: this.innerHeight(),
    oldScroll: this.oldScroll.y,
    forward: "down",
    backward: "up",
    offsetProp: "top"
   }
  };
  for (var axisKey in axes) {
   var axis = axes[axisKey];
   for (var waypointKey in this.waypoints[axisKey]) {
    var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey],
     adjustment = waypoint.options.offset,
     oldTriggerPoint = waypoint.triggerPoint,
     elementOffset = 0,
     freshWaypoint = null == oldTriggerPoint;
    waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]), "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment), waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))), contextModifier = axis.contextScroll - axis.contextOffset, waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment), wasBeforeScroll = oldTriggerPoint < axis.oldScroll, nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll, triggeredBackward = wasBeforeScroll && nowAfterScroll, triggeredForward = !wasBeforeScroll && !nowAfterScroll, !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward), triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group)
   }
  }
  return Waypoint.requestAnimationFrame(function() {
   for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers()
  }), this
 }, Context.findOrCreateByElement = function(element) {
  return Context.findByElement(element) || new Context(element)
 }, Context.refreshAll = function() {
  for (var contextId in contexts) contexts[contextId].refresh()
 }, Context.findByElement = function(element) {
  return contexts[element.waypointContextKey]
 }, window.onload = function() {
  oldWindowLoad && oldWindowLoad(), Context.refreshAll()
 }, Waypoint.requestAnimationFrame = function(callback) {
  var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
  requestFn.call(window, callback)
 }, Waypoint.Context = Context
}(),
function() {
 "use strict";

 function byTriggerPoint(a, b) {
  return a.triggerPoint - b.triggerPoint
 }

 function byReverseTriggerPoint(a, b) {
  return b.triggerPoint - a.triggerPoint
 }

 function Group(options) {
  this.name = options.name, this.axis = options.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), groups[this.axis][this.name] = this
 }
 var groups = {
   vertical: {},
   horizontal: {}
  },
  Waypoint = window.Waypoint;
 Group.prototype.add = function(waypoint) {
  this.waypoints.push(waypoint)
 }, Group.prototype.clearTriggerQueues = function() {
  this.triggerQueues = {
   up: [],
   down: [],
   left: [],
   right: []
  }
 }, Group.prototype.flushTriggers = function() {
  for (var direction in this.triggerQueues) {
   var waypoints = this.triggerQueues[direction],
    reverse = "up" === direction || "left" === direction;
   waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
   for (var i = 0, end = waypoints.length; i < end; i += 1) {
    var waypoint = waypoints[i];
    (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
   }
  }
  this.clearTriggerQueues()
 }, Group.prototype.next = function(waypoint) {
  this.waypoints.sort(byTriggerPoint);
  var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
   isLast = index === this.waypoints.length - 1;
  return isLast ? null : this.waypoints[index + 1]
 }, Group.prototype.previous = function(waypoint) {
  this.waypoints.sort(byTriggerPoint);
  var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
  return index ? this.waypoints[index - 1] : null
 }, Group.prototype.queueTrigger = function(waypoint, direction) {
  this.triggerQueues[direction].push(waypoint)
 }, Group.prototype.remove = function(waypoint) {
  var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
  index > -1 && this.waypoints.splice(index, 1)
 }, Group.prototype.first = function() {
  return this.waypoints[0]
 }, Group.prototype.last = function() {
  return this.waypoints[this.waypoints.length - 1]
 }, Group.findOrCreate = function(options) {
  return groups[options.axis][options.name] || new Group(options)
 }, Waypoint.Group = Group
}(),
function() {
 "use strict";

 function JQueryAdapter(element) {
  this.$element = $(element)
 }
 var $ = window.jQuery,
  Waypoint = window.Waypoint;
 $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(i, method) {
  JQueryAdapter.prototype[method] = function() {
   var args = Array.prototype.slice.call(arguments);
   return this.$element[method].apply(this.$element, args)
  }
 }), $.each(["extend", "inArray", "isEmptyObject"], function(i, method) {
  JQueryAdapter[method] = $[method]
 }), Waypoint.adapters.push({
  name: "jquery",
  Adapter: JQueryAdapter
 }), Waypoint.Adapter = JQueryAdapter
}(),
function() {
 "use strict";

 function createExtension(framework) {
  return function() {
   var waypoints = [],
    overrides = arguments[0];
   return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]), overrides.handler = arguments[0]), this.each(function() {
    var options = framework.extend({}, overrides, {
     element: this
    });
    "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]), waypoints.push(new Waypoint(options))
   }), waypoints
  }
 }
 var Waypoint = window.Waypoint;
 window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)), window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();

! function(e, t) {
 "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
 "use strict";
 var f = "undefined" == typeof document ? {
   body: {},
   addEventListener: function() {},
   removeEventListener: function() {},
   activeElement: {
    blur: function() {},
    nodeName: ""
   },
   querySelector: function() {
    return null
   },
   querySelectorAll: function() {
    return []
   },
   getElementById: function() {
    return null
   },
   createEvent: function() {
    return {
     initEvent: function() {}
    }
   },
   createElement: function() {
    return {
     children: [],
     childNodes: [],
     style: {},
     setAttribute: function() {},
     getElementsByTagName: function() {
      return []
     }
    }
   },
   location: {
    hash: ""
   }
  } : document,
  J = "undefined" == typeof window ? {
   document: f,
   navigator: {
    userAgent: ""
   },
   location: {},
   history: {},
   CustomEvent: function() {
    return this
   },
   addEventListener: function() {},
   removeEventListener: function() {},
   getComputedStyle: function() {
    return {
     getPropertyValue: function() {
      return ""
     }
    }
   },
   Image: function() {},
   Date: function() {},
   screen: {},
   setTimeout: function() {},
   clearTimeout: function() {}
  } : window,
  l = function(e) {
   for (var t = 0; t < e.length; t += 1) this[t] = e[t];
   return this.length = e.length, this
  };

 function L(e, t) {
  var a = [],
   i = 0;
  if (e && !t && e instanceof l) return e;
  if (e)
   if ("string" == typeof e) {
    var s, r, n = e.trim();
    if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
     var o = "div";
     for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
    } else
     for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
   } else if (e.nodeType || e === J || e === f) a.push(e);
  else if (0 < e.length && e[0].nodeType)
   for (i = 0; i < e.length; i += 1) a.push(e[i]);
  return new l(a)
 }

 function r(e) {
  for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
  return t
 }
 L.fn = l.prototype, L.Class = l, L.Dom7 = l;
 var t = {
  addClass: function(e) {
   if (void 0 === e) return this;
   for (var t = e.split(" "), a = 0; a < t.length; a += 1)
    for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
   return this
  },
  removeClass: function(e) {
   for (var t = e.split(" "), a = 0; a < t.length; a += 1)
    for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
   return this
  },
  hasClass: function(e) {
   return !!this[0] && this[0].classList.contains(e)
  },
  toggleClass: function(e) {
   for (var t = e.split(" "), a = 0; a < t.length; a += 1)
    for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
   return this
  },
  attr: function(e, t) {
   var a = arguments;
   if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
   for (var i = 0; i < this.length; i += 1)
    if (2 === a.length) this[i].setAttribute(e, t);
    else
     for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
   return this
  },
  removeAttr: function(e) {
   for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
   return this
  },
  data: function(e, t) {
   var a;
   if (void 0 !== t) {
    for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
    return this
   }
   if (a = this[0]) {
    if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
    var s = a.getAttribute("data-" + e);
    return s || void 0
   }
  },
  transform: function(e) {
   for (var t = 0; t < this.length; t += 1) {
    var a = this[t].style;
    a.webkitTransform = e, a.transform = e
   }
   return this
  },
  transition: function(e) {
   "string" != typeof e && (e += "ms");
   for (var t = 0; t < this.length; t += 1) {
    var a = this[t].style;
    a.webkitTransitionDuration = e, a.transitionDuration = e
   }
   return this
  },
  on: function() {
   for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
   var i = t[0],
    r = t[1],
    n = t[2],
    s = t[3];

   function o(e) {
    var t = e.target;
    if (t) {
     var a = e.target.dom7EventData || [];
     if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);
     else
      for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
    }
   }

   function l(e) {
    var t = e && e.target && e.target.dom7EventData || [];
    t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
   }
   "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
   for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
    var u = this[c];
    if (r)
     for (d = 0; d < p.length; d += 1) {
      var h = p[d];
      u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
       listener: n,
       proxyListener: o
      }), u.addEventListener(h, o, s)
     } else
      for (d = 0; d < p.length; d += 1) {
       var v = p[d];
       u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
        listener: n,
        proxyListener: l
       }), u.addEventListener(v, l, s)
      }
   }
   return this
  },
  off: function() {
   for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
   var i = t[0],
    s = t[1],
    r = t[2],
    n = t[3];
   "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
   for (var o = i.split(" "), l = 0; l < o.length; l += 1)
    for (var d = o[l], p = 0; p < this.length; p += 1) {
     var c = this[p],
      u = void 0;
     if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length)
      for (var h = u.length - 1; 0 <= h; h -= 1) {
       var v = u[h];
       r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
      }
    }
   return this
  },
  trigger: function() {
   for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
   for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
    for (var r = a[s], n = 0; n < this.length; n += 1) {
     var o = this[n],
      l = void 0;
     try {
      l = new J.CustomEvent(r, {
       detail: i,
       bubbles: !0,
       cancelable: !0
      })
     } catch (e) {
      (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
     }
     o.dom7EventData = e.filter(function(e, t) {
      return 0 < t
     }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
    }
   return this
  },
  transitionEnd: function(t) {
   var a, i = ["webkitTransitionEnd", "transitionend"],
    s = this;

   function r(e) {
    if (e.target === this)
     for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
   }
   if (t)
    for (a = 0; a < i.length; a += 1) s.on(i[a], r);
   return this
  },
  outerWidth: function(e) {
   if (0 < this.length) {
    if (e) {
     var t = this.styles();
     return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
    }
    return this[0].offsetWidth
   }
   return null
  },
  outerHeight: function(e) {
   if (0 < this.length) {
    if (e) {
     var t = this.styles();
     return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
    }
    return this[0].offsetHeight
   }
   return null
  },
  offset: function() {
   if (0 < this.length) {
    var e = this[0],
     t = e.getBoundingClientRect(),
     a = f.body,
     i = e.clientTop || a.clientTop || 0,
     s = e.clientLeft || a.clientLeft || 0,
     r = e === J ? J.scrollY : e.scrollTop,
     n = e === J ? J.scrollX : e.scrollLeft;
    return {
     top: t.top + r - i,
     left: t.left + n - s
    }
   }
   return null
  },
  css: function(e, t) {
   var a;
   if (1 === arguments.length) {
    if ("string" != typeof e) {
     for (a = 0; a < this.length; a += 1)
      for (var i in e) this[a].style[i] = e[i];
     return this
    }
    if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
   }
   if (2 === arguments.length && "string" == typeof e) {
    for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
    return this
   }
   return this
  },
  each: function(e) {
   if (!e) return this;
   for (var t = 0; t < this.length; t += 1)
    if (!1 === e.call(this[t], t, this[t])) return this;
   return this
  },
  html: function(e) {
   if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
   for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
   return this
  },
  text: function(e) {
   if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
   for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
   return this
  },
  is: function(e) {
   var t, a, i = this[0];
   if (!i || void 0 === e) return !1;
   if ("string" == typeof e) {
    if (i.matches) return i.matches(e);
    if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
    if (i.msMatchesSelector) return i.msMatchesSelector(e);
    for (t = L(e), a = 0; a < t.length; a += 1)
     if (t[a] === i) return !0;
    return !1
   }
   if (e === f) return i === f;
   if (e === J) return i === J;
   if (e.nodeType || e instanceof l) {
    for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
     if (t[a] === i) return !0;
    return !1
   }
   return !1
  },
  index: function() {
   var e, t = this[0];
   if (t) {
    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
    return e
   }
  },
  eq: function(e) {
   if (void 0 === e) return this;
   var t, a = this.length;
   return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
  },
  append: function() {
   for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
   for (var i = 0; i < t.length; i += 1) {
    e = t[i];
    for (var s = 0; s < this.length; s += 1)
     if ("string" == typeof e) {
      var r = f.createElement("div");
      for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
     } else if (e instanceof l)
     for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
    else this[s].appendChild(e)
   }
   return this
  },
  prepend: function(e) {
   var t, a;
   for (t = 0; t < this.length; t += 1)
    if ("string" == typeof e) {
     var i = f.createElement("div");
     for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
    } else if (e instanceof l)
    for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
   else this[t].insertBefore(e, this[t].childNodes[0]);
   return this
  },
  next: function(e) {
   return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
  },
  nextAll: function(e) {
   var t = [],
    a = this[0];
   if (!a) return new l([]);
   for (; a.nextElementSibling;) {
    var i = a.nextElementSibling;
    e ? L(i).is(e) && t.push(i) : t.push(i), a = i
   }
   return new l(t)
  },
  prev: function(e) {
   if (0 < this.length) {
    var t = this[0];
    return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
   }
   return new l([])
  },
  prevAll: function(e) {
   var t = [],
    a = this[0];
   if (!a) return new l([]);
   for (; a.previousElementSibling;) {
    var i = a.previousElementSibling;
    e ? L(i).is(e) && t.push(i) : t.push(i), a = i
   }
   return new l(t)
  },
  parent: function(e) {
   for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
   return L(r(t))
  },
  parents: function(e) {
   for (var t = [], a = 0; a < this.length; a += 1)
    for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
   return L(r(t))
  },
  closest: function(e) {
   var t = this;
   return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
  },
  find: function(e) {
   for (var t = [], a = 0; a < this.length; a += 1)
    for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
   return new l(t)
  },
  children: function(e) {
   for (var t = [], a = 0; a < this.length; a += 1)
    for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
   return new l(r(t))
  },
  remove: function() {
   for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
   return this
  },
  add: function() {
   for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
   var a, i;
   for (a = 0; a < e.length; a += 1) {
    var s = L(e[a]);
    for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
   }
   return this
  },
  styles: function() {
   return this[0] ? J.getComputedStyle(this[0], null) : {}
  }
 };
 Object.keys(t).forEach(function(e) {
  L.fn[e] = t[e]
 });
 var e, a, i, ee = {
   deleteProps: function(e) {
    var t = e;
    Object.keys(t).forEach(function(e) {
     try {
      t[e] = null
     } catch (e) {}
     try {
      delete t[e]
     } catch (e) {}
    })
   },
   nextTick: function(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t)
   },
   now: function() {
    return Date.now()
   },
   getTranslate: function(e, t) {
    var a, i, s;
    void 0 === t && (t = "x");
    var r = J.getComputedStyle(e, null);
    return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
     return e.replace(",", ".")
    }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
   },
   parseUrlQuery: function(e) {
    var t, a, i, s, r = {},
     n = e || J.location.href;
    if ("string" == typeof n && n.length)
     for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
       return "" !== e
      })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
    return r
   },
   isObject: function(e) {
    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
   },
   extend: function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
     var s = e[i];
     if (null != s)
      for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
       var l = r[n],
        d = Object.getOwnPropertyDescriptor(s, l);
       void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l])
      }
    }
    return a
   }
  },
  te = (i = f.createElement("div"), {
   touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
   pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator),
   prefixedPointerEvents: !!J.navigator.msPointerEnabled,
   transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
   transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
   flexbox: function() {
    for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
     if (t[a] in e) return !0;
    return !1
   }(),
   observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
   passiveListener: function() {
    var e = !1;
    try {
     var t = Object.defineProperty({}, "passive", {
      get: function() {
       e = !0
      }
     });
     J.addEventListener("testPassiveListener", null, t)
    } catch (e) {}
    return e
   }(),
   gestures: "ongesturestart" in J
  }),
  s = function(e) {
   void 0 === e && (e = {});
   var t = this;
   t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
    t.on(e, t.params.on[e])
   })
  },
  n = {
   components: {
    configurable: !0
   }
  };
 s.prototype.on = function(e, t, a) {
  var i = this;
  if ("function" != typeof t) return i;
  var s = a ? "unshift" : "push";
  return e.split(" ").forEach(function(e) {
   i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
  }), i
 }, s.prototype.once = function(i, s, e) {
  var r = this;
  if ("function" != typeof s) return r;
  return r.on(i, function e() {
   for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
   s.apply(r, t), r.off(i, e)
  }, e)
 }, s.prototype.off = function(e, i) {
  var s = this;
  return s.eventsListeners && e.split(" ").forEach(function(a) {
   void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function(e, t) {
    e === i && s.eventsListeners[a].splice(t, 1)
   })
  }), s
 }, s.prototype.emit = function() {
  for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
  var a, i, s, r = this;
  return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
   if (r.eventsListeners && r.eventsListeners[e]) {
    var t = [];
    r.eventsListeners[e].forEach(function(e) {
     t.push(e)
    }), t.forEach(function(e) {
     e.apply(s, i)
    })
   }
  })), r
 }, s.prototype.useModulesParams = function(a) {
  var i = this;
  i.modules && Object.keys(i.modules).forEach(function(e) {
   var t = i.modules[e];
   t.params && ee.extend(a, t.params)
  })
 }, s.prototype.useModules = function(i) {
  void 0 === i && (i = {});
  var s = this;
  s.modules && Object.keys(s.modules).forEach(function(e) {
   var a = s.modules[e],
    t = i[e] || {};
   a.instance && Object.keys(a.instance).forEach(function(e) {
    var t = a.instance[e];
    s[e] = "function" == typeof t ? t.bind(s) : t
   }), a.on && s.on && Object.keys(a.on).forEach(function(e) {
    s.on(e, a.on[e])
   }), a.create && a.create.bind(s)(t)
  })
 }, n.components.set = function(e) {
  this.use && this.use(e)
 }, s.installModule = function(t) {
  for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
  var i = this;
  i.prototype.modules || (i.prototype.modules = {});
  var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
  return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
   i.prototype[e] = t.proto[e]
  }), t.static && Object.keys(t.static).forEach(function(e) {
   i[e] = t.static[e]
  }), t.install && t.install.apply(i, e), i
 }, s.use = function(e) {
  for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
  var i = this;
  return Array.isArray(e) ? (e.forEach(function(e) {
   return i.installModule(e)
  }), i) : i.installModule.apply(i, [e].concat(t))
 }, Object.defineProperties(s, n);
 var o = {
  updateSize: function() {
   var e, t, a = this,
    i = a.$el;
   e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
    width: e,
    height: t,
    size: a.isHorizontal() ? e : t
   }))
  },
  updateSlides: function() {
   var e = this,
    t = e.params,
    a = e.$wrapperEl,
    i = e.size,
    s = e.rtlTranslate,
    r = e.wrongRTL,
    n = e.virtual && t.virtual.enabled,
    o = n ? e.virtual.slides.length : e.slides.length,
    l = a.children("." + e.params.slideClass),
    d = n ? e.virtual.slides.length : l.length,
    p = [],
    c = [],
    u = [],
    h = t.slidesOffsetBefore;
   "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
   var v = t.slidesOffsetAfter;
   "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
   var f = e.snapGrid.length,
    m = e.snapGrid.length,
    g = t.spaceBetween,
    b = -h,
    w = 0,
    y = 0;
   if (void 0 !== i) {
    var x, T;
    "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
     marginLeft: "",
     marginTop: ""
    }) : l.css({
     marginRight: "",
     marginBottom: ""
    }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
    for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), k = 0; k < d; k += 1) {
     T = 0;
     var P = l.eq(k);
     if (1 < t.slidesPerColumn) {
      var z = void 0,
       $ = void 0,
       L = void 0;
      "column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), z = $ + L * x / S, P.css({
       "-webkit-box-ordinal-group": z,
       "-moz-box-ordinal-group": z,
       "-ms-flex-order": z,
       "-webkit-order": z,
       order: z
      })) : $ = k - (L = Math.floor(k / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
     }
     if ("none" !== P.css("display")) {
      if ("auto" === t.slidesPerView) {
       var I = J.getComputedStyle(P[0], null),
        D = P[0].style.transform,
        O = P[0].style.webkitTransform;
       if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
       else if (e.isHorizontal()) {
        var A = parseFloat(I.getPropertyValue("width")),
         N = parseFloat(I.getPropertyValue("padding-left")),
         H = parseFloat(I.getPropertyValue("padding-right")),
         G = parseFloat(I.getPropertyValue("margin-left")),
         B = parseFloat(I.getPropertyValue("margin-right")),
         X = I.getPropertyValue("box-sizing");
        T = X && "border-box" === X ? A + G + B : A + N + H + G + B
       } else {
        var Y = parseFloat(I.getPropertyValue("height")),
         V = parseFloat(I.getPropertyValue("padding-top")),
         F = parseFloat(I.getPropertyValue("padding-bottom")),
         R = parseFloat(I.getPropertyValue("margin-top")),
         q = parseFloat(I.getPropertyValue("margin-bottom")),
         W = I.getPropertyValue("box-sizing");
        T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
       }
       D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
      } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
      l[k] && (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
     }
    }
    if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
      width: e.virtualSize + t.spaceBetween + "px"
     }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
      width: e.virtualSize + t.spaceBetween + "px"
     }) : a.css({
      height: e.virtualSize + t.spaceBetween + "px"
     })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
      width: e.virtualSize + t.spaceBetween + "px"
     }) : a.css({
      height: e.virtualSize + t.spaceBetween + "px"
     }), t.centeredSlides)) {
     E = [];
     for (var j = 0; j < p.length; j += 1) {
      var U = p[j];
      t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U)
     }
     p = E
    }
    if (!t.centeredSlides) {
     E = [];
     for (var K = 0; K < p.length; K += 1) {
      var _ = p[K];
      t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_)
     }
     p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
    }
    if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
      marginLeft: g + "px"
     }) : l.css({
      marginRight: g + "px"
     }) : l.css({
      marginBottom: g + "px"
     })), t.centerInsufficientSlides) {
     var Z = 0;
     if (u.forEach(function(e) {
       Z += e + (t.spaceBetween ? t.spaceBetween : 0)
      }), (Z -= t.spaceBetween) < i) {
      var Q = (i - Z) / 2;
      p.forEach(function(e, t) {
       p[t] = e - Q
      }), c.forEach(function(e, t) {
       c[t] = e + Q
      })
     }
    }
    ee.extend(e, {
     slides: l,
     snapGrid: p,
     slidesGrid: c,
     slidesSizesGrid: u
    }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
   }
  },
  updateAutoHeight: function(e) {
   var t, a = this,
    i = [],
    s = 0;
   if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
    for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
     var r = a.activeIndex + t;
     if (r > a.slides.length) break;
     i.push(a.slides.eq(r)[0])
    } else i.push(a.slides.eq(a.activeIndex)[0]);
   for (t = 0; t < i.length; t += 1)
    if (void 0 !== i[t]) {
     var n = i[t].offsetHeight;
     s = s < n ? n : s
    } s && a.$wrapperEl.css("height", s + "px")
  },
  updateSlidesOffset: function() {
   for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
  },
  updateSlidesProgress: function(e) {
   void 0 === e && (e = this && this.translate || 0);
   var t = this,
    a = t.params,
    i = t.slides,
    s = t.rtlTranslate;
   if (0 !== i.length) {
    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
    var r = -e;
    s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    for (var n = 0; n < i.length; n += 1) {
     var o = i[n],
      l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
     if (a.watchSlidesVisibility) {
      var d = -(r - o.swiperSlideOffset),
       p = d + t.slidesSizesGrid[n];
      (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
     }
     o.progress = s ? -l : l
    }
    t.visibleSlides = L(t.visibleSlides)
   }
  },
  updateProgress: function(e) {
   void 0 === e && (e = this && this.translate || 0);
   var t = this,
    a = t.params,
    i = t.maxTranslate() - t.minTranslate(),
    s = t.progress,
    r = t.isBeginning,
    n = t.isEnd,
    o = r,
    l = n;
   0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
    progress: s,
    isBeginning: r,
    isEnd: n
   }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
  },
  updateSlidesClasses: function() {
   var e, t = this,
    a = t.slides,
    i = t.params,
    s = t.$wrapperEl,
    r = t.activeIndex,
    n = t.realIndex,
    o = t.virtual && i.virtual.enabled;
   a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
   var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
   i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
   var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
   i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
  },
  updateActiveIndex: function(e) {
   var t, a = this,
    i = a.rtlTranslate ? a.translate : -a.translate,
    s = a.slidesGrid,
    r = a.snapGrid,
    n = a.params,
    o = a.activeIndex,
    l = a.realIndex,
    d = a.snapIndex,
    p = e;
   if (void 0 === p) {
    for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
    n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
   }
   if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
    var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
    ee.extend(a, {
     snapIndex: t,
     realIndex: u,
     previousIndex: o,
     activeIndex: p
    }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
   } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
  },
  updateClickedSlide: function(e) {
   var t = this,
    a = t.params,
    i = L(e.target).closest("." + a.slideClass)[0],
    s = !1;
   if (i)
    for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
   if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
   t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
  }
 };
 var d = {
  getTranslate: function(e) {
   void 0 === e && (e = this.isHorizontal() ? "x" : "y");
   var t = this.params,
    a = this.rtlTranslate,
    i = this.translate,
    s = this.$wrapperEl;
   if (t.virtualTranslate) return a ? -i : i;
   var r = ee.getTranslate(s[0], e);
   return a && (r = -r), r || 0
  },
  setTranslate: function(e, t) {
   var a = this,
    i = a.rtlTranslate,
    s = a.params,
    r = a.$wrapperEl,
    n = a.progress,
    o = 0,
    l = 0;
   a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
   var d = a.maxTranslate() - a.minTranslate();
   (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
  },
  minTranslate: function() {
   return -this.snapGrid[0]
  },
  maxTranslate: function() {
   return -this.snapGrid[this.snapGrid.length - 1]
  }
 };
 var p = {
  setTransition: function(e, t) {
   this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
  },
  transitionStart: function(e, t) {
   void 0 === e && (e = !0);
   var a = this,
    i = a.activeIndex,
    s = a.params,
    r = a.previousIndex;
   s.autoHeight && a.updateAutoHeight();
   var n = t;
   if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
    if ("reset" === n) return void a.emit("slideResetTransitionStart");
    a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
   }
  },
  transitionEnd: function(e, t) {
   void 0 === e && (e = !0);
   var a = this,
    i = a.activeIndex,
    s = a.previousIndex;
   a.animating = !1, a.setTransition(0);
   var r = t;
   if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
    if ("reset" === r) return void a.emit("slideResetTransitionEnd");
    a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
   }
  }
 };
 var c = {
  slideTo: function(e, t, a, i) {
   void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
   var s = this,
    r = e;
   r < 0 && (r = 0);
   var n = s.params,
    o = s.snapGrid,
    l = s.slidesGrid,
    d = s.previousIndex,
    p = s.activeIndex,
    c = s.rtlTranslate;
   if (s.animating && n.preventInteractionOnTransition) return !1;
   var u = Math.floor(r / n.slidesPerGroup);
   u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
   var h, v = -o[u];
   if (s.updateProgress(v), n.normalizeSlideIndex)
    for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
   if (s.initialized && r !== p) {
    if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
    if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
   }
   return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
    s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
   }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
  },
  slideToLoop: function(e, t, a, i) {
   void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
   var s = e;
   return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
  },
  slideNext: function(e, t, a) {
   void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
   var i = this,
    s = i.params,
    r = i.animating;
   return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
  },
  slidePrev: function(e, t, a) {
   void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
   var i = this,
    s = i.params,
    r = i.animating,
    n = i.snapGrid,
    o = i.slidesGrid,
    l = i.rtlTranslate;
   if (s.loop) {
    if (r) return !1;
    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
   }

   function d(e) {
    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
   }
   var p, c = d(l ? i.translate : -i.translate),
    u = n.map(function(e) {
     return d(e)
    }),
    h = (o.map(function(e) {
     return d(e)
    }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
   return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
  },
  slideReset: function(e, t, a) {
   return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
  },
  slideToClosest: function(e, t, a) {
   void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
   var i = this,
    s = i.activeIndex,
    r = Math.floor(s / i.params.slidesPerGroup);
   if (r < i.snapGrid.length - 1) {
    var n = i.rtlTranslate ? i.translate : -i.translate,
     o = i.snapGrid[r];
    (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
   }
   return i.slideTo(s, e, t, a)
  },
  slideToClickedSlide: function() {
   var e, t = this,
    a = t.params,
    i = t.$wrapperEl,
    s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
    r = t.clickedIndex;
   if (a.loop) {
    if (t.animating) return;
    e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
     t.slideTo(r)
    })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
     t.slideTo(r)
    })) : t.slideTo(r)
   } else t.slideTo(r)
  }
 };
 var u = {
  loopCreate: function() {
   var i = this,
    e = i.params,
    t = i.$wrapperEl;
   t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
   var s = t.children("." + e.slideClass);
   if (e.loopFillGroupWithBlank) {
    var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
    if (a !== e.slidesPerGroup) {
     for (var r = 0; r < a; r += 1) {
      var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
      t.append(n)
     }
     s = t.children("." + e.slideClass)
    }
   }
   "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
   var o = [],
    l = [];
   s.each(function(e, t) {
    var a = L(t);
    e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
   });
   for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
   for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
  },
  loopFix: function() {
   var e, t = this,
    a = t.params,
    i = t.activeIndex,
    s = t.slides,
    r = t.loopedSlides,
    n = t.allowSlidePrev,
    o = t.allowSlideNext,
    l = t.snapGrid,
    d = t.rtlTranslate;
   t.allowSlidePrev = !0, t.allowSlideNext = !0;
   var p = -l[i] - t.getTranslate();
   i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
   t.allowSlidePrev = n, t.allowSlideNext = o
  },
  loopDestroy: function() {
   var e = this.$wrapperEl,
    t = this.params,
    a = this.slides;
   e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
  }
 };
 var h = {
  setGrabCursor: function(e) {
   if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
    var t = this.el;
    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
   }
  },
  unsetGrabCursor: function() {
   te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
  }
 };
 var v = {
   appendSlide: function(e) {
    var t = this,
     a = t.$wrapperEl,
     i = t.params;
    if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
     for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
    else a.append(e);
    i.loop && t.loopCreate(), i.observer && te.observer || t.update()
   },
   prependSlide: function(e) {
    var t = this,
     a = t.params,
     i = t.$wrapperEl,
     s = t.activeIndex;
    a.loop && t.loopDestroy();
    var r = s + 1;
    if ("object" == typeof e && "length" in e) {
     for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
     r = s + e.length
    } else i.prepend(e);
    a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1)
   },
   addSlide: function(e, t) {
    var a = this,
     i = a.$wrapperEl,
     s = a.params,
     r = a.activeIndex;
    s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
    var n = a.slides.length;
    if (e <= 0) a.prependSlide(t);
    else if (n <= e) a.appendSlide(t);
    else {
     for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
      var p = a.slides.eq(d);
      p.remove(), l.unshift(p)
     }
     if ("object" == typeof t && "length" in t) {
      for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
      o = e < r ? r + t.length : r
     } else i.append(t);
     for (var u = 0; u < l.length; u += 1) i.append(l[u]);
     s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
    }
   },
   removeSlide: function(e) {
    var t = this,
     a = t.params,
     i = t.$wrapperEl,
     s = t.activeIndex;
    a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
    var r, n = s;
    if ("object" == typeof e && "length" in e) {
     for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
     n = Math.max(n, 0)
    } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
    a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
   },
   removeAllSlides: function() {
    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
    this.removeSlide(e)
   }
  },
  m = function() {
   var e = J.navigator.userAgent,
    t = {
     ios: !1,
     android: !1,
     androidChrome: !1,
     desktop: !1,
     windows: !1,
     iphone: !1,
     ipod: !1,
     ipad: !1,
     cordova: J.cordova || J.phonegap,
     phonegap: J.cordova || J.phonegap
    },
    a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
    i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
    s = e.match(/(iPad).*OS\s([\d_]+)/),
    r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
    n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
   if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
    var o = t.osVersion.split("."),
     l = f.querySelector('meta[name="viewport"]');
    t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
   }
   return t.pixelRatio = J.devicePixelRatio || 1, t
  }();

 function g() {
  var e = this,
   t = e.params,
   a = e.el;
  if (!a || 0 !== a.offsetWidth) {
   t.breakpoints && e.setBreakpoint();
   var i = e.allowSlideNext,
    s = e.allowSlidePrev,
    r = e.snapGrid;
   if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
    var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
    e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
   } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
   e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
  }
 }
 var b = {
  attachEvents: function() {
   var e = this,
    t = e.params,
    a = e.touchEvents,
    i = e.el,
    s = e.wrapperEl;
   e.onTouchStart = function(e) {
    var t = this,
     a = t.touchEventsData,
     i = t.params,
     s = t.touches;
    if (!t.animating || !i.preventInteractionOnTransition) {
     var r = e;
     if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved))
      if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
      else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
      s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
      var n = s.currentX,
       o = s.currentY,
       l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
       d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
      if (!l || !(n <= d || n >= J.screen.width - d)) {
       if (ee.extend(a, {
         isTouched: !0,
         isMoved: !1,
         allowTouchCallbacks: !0,
         isScrolling: void 0,
         startMoving: void 0
        }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
        var p = !0;
        L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
        var c = p && t.allowTouchMove && i.touchStartPreventDefault;
        (i.touchStartForcePreventDefault || c) && r.preventDefault()
       }
       t.emit("touchStart", r)
      }
     }
    }
   }.bind(e), e.onTouchMove = function(e) {
    var t = this,
     a = t.touchEventsData,
     i = t.params,
     s = t.touches,
     r = t.rtlTranslate,
     n = e;
    if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
     if (!a.isTouchEvent || "mousemove" !== n.type) {
      var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
       l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
      if (n.preventedByNestedSwiper) return s.startX = o, void(s.startY = l);
      if (!t.allowTouchMove) return t.allowClick = !1, void(a.isTouched && (ee.extend(s, {
       startX: o,
       startY: l,
       currentX: o,
       currentY: l
      }), a.touchStartTime = ee.now()));
      if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
       if (t.isVertical()) {
        if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
       } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
      if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void(t.allowClick = !1);
      if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
       s.currentX = o, s.currentY = l;
       var d, p = s.currentX - s.startX,
        c = s.currentY - s.startY;
       if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
        if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
        else if (a.startMoving) {
        t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
        var u = t.isHorizontal() ? p : c;
        s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
        var h = !0,
         v = i.resistanceRatio;
        if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
         if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
         if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
        }
        i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
         position: s[t.isHorizontal() ? "startX" : "startY"],
         time: a.touchStartTime
        }), a.velocities.push({
         position: s[t.isHorizontal() ? "currentX" : "currentY"],
         time: ee.now()
        })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
       }
      }
     }
    } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
   }.bind(e), e.onTouchEnd = function(e) {
    var t = this,
     a = t.touchEventsData,
     i = t.params,
     s = t.touches,
     r = t.rtlTranslate,
     n = t.$wrapperEl,
     o = t.slidesGrid,
     l = t.snapGrid,
     d = e;
    if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
    i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var p, c = ee.now(),
     u = c - a.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function() {
      t && !t.destroyed && t.emit("click", d)
     }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function() {
      t.destroyed || (t.allowClick = !0)
     }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
    if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
     if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
     if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
     if (i.freeModeMomentum) {
      if (1 < a.velocities.length) {
       var h = a.velocities.pop(),
        v = a.velocities.pop(),
        f = h.position - v.position,
        m = h.time - v.time;
       t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
      } else t.velocity = 0;
      t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
      var g = 1e3 * i.freeModeMomentumRatio,
       b = t.velocity * g,
       w = t.translate + b;
      r && (w = -w);
      var y, x, T = !1,
       E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
      if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
      else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
      else if (i.freeModeSticky) {
       for (var S, C = 0; C < l.length; C += 1)
        if (l[C] > -w) {
         S = C;
         break
        } w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
      }
      if (x && t.once("transitionEnd", function() {
        t.loopFix()
       }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
      else if (i.freeModeSticky) return void t.slideToClosest();
      i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
       t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function() {
        t && !t.destroyed && t.transitionEnd()
       }))
      })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
       t && !t.destroyed && t.transitionEnd()
      }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
     } else if (i.freeModeSticky) return void t.slideToClosest();
     (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
    } else {
     for (var M = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (k = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, k = o[o.length - 1] - o[o.length - 2]);
     var z = (p - o[M]) / k;
     if (u > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
     } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
     }
    }
   }.bind(e), e.onClick = function(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
   }.bind(e);
   var r = "container" === t.touchEventsTarget ? i : s,
    n = !!t.nested;
   if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
    if (te.touch) {
     var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
      passive: !0,
      capture: !1
     };
     r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
      passive: !1,
      capture: n
     } : n), r.addEventListener(a.end, e.onTouchEnd, o)
    }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
   } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
   (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
  },
  detachEvents: function() {
   var e = this,
    t = e.params,
    a = e.touchEvents,
    i = e.el,
    s = e.wrapperEl,
    r = "container" === t.touchEventsTarget ? i : s,
    n = !!t.nested;
   if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
    if (te.touch) {
     var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
      passive: !0,
      capture: !1
     };
     r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
    }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
   } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
   (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
  }
 };
 var w, y = {
   setBreakpoint: function() {
    var e = this,
     t = e.activeIndex,
     a = e.initialized,
     i = e.loopedSlides;
    void 0 === i && (i = 0);
    var s = e.params,
     r = s.breakpoints;
    if (r && (!r || 0 !== Object.keys(r).length)) {
     var n = e.getBreakpoint(r);
     if (n && e.currentBreakpoint !== n) {
      var o = n in r ? r[n] : void 0;
      o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
       var t = o[e];
       void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
      });
      var l = o || e.originalParams,
       d = s.loop && l.slidesPerView !== s.slidesPerView;
      ee.extend(e.params, l), ee.extend(e, {
       allowTouchMove: e.params.allowTouchMove,
       allowSlideNext: e.params.allowSlideNext,
       allowSlidePrev: e.params.allowSlidePrev
      }), e.currentBreakpoint = n, d && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
     }
    }
   },
   getBreakpoint: function(e) {
    if (e) {
     var t = !1,
      a = [];
     Object.keys(e).forEach(function(e) {
      a.push(e)
     }), a.sort(function(e, t) {
      return parseInt(e, 10) - parseInt(t, 10)
     });
     for (var i = 0; i < a.length; i += 1) {
      var s = a[i];
      this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
     }
     return t || "max"
    }
   }
  },
  I = {
   isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
   isEdge: !!J.navigator.userAgent.match(/Edge/g),
   isSafari: (w = J.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
   isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
  };
 var x = {
   init: !0,
   direction: "horizontal",
   touchEventsTarget: "container",
   initialSlide: 0,
   speed: 300,
   preventInteractionOnTransition: !1,
   edgeSwipeDetection: !1,
   edgeSwipeThreshold: 20,
   freeMode: !1,
   freeModeMomentum: !0,
   freeModeMomentumRatio: 1,
   freeModeMomentumBounce: !0,
   freeModeMomentumBounceRatio: 1,
   freeModeMomentumVelocityRatio: 1,
   freeModeSticky: !1,
   freeModeMinimumVelocity: .02,
   autoHeight: !1,
   setWrapperSize: !1,
   virtualTranslate: !1,
   effect: "slide",
   breakpoints: void 0,
   breakpointsInverse: !1,
   spaceBetween: 0,
   slidesPerView: 1,
   slidesPerColumn: 1,
   slidesPerColumnFill: "column",
   slidesPerGroup: 1,
   centeredSlides: !1,
   slidesOffsetBefore: 0,
   slidesOffsetAfter: 0,
   normalizeSlideIndex: !0,
   centerInsufficientSlides: !1,
   watchOverflow: !1,
   roundLengths: !1,
   touchRatio: 1,
   touchAngle: 45,
   simulateTouch: !0,
   shortSwipes: !0,
   longSwipes: !0,
   longSwipesRatio: .5,
   longSwipesMs: 300,
   followFinger: !0,
   allowTouchMove: !0,
   threshold: 0,
   touchMoveStopPropagation: !0,
   touchStartPreventDefault: !0,
   touchStartForcePreventDefault: !1,
   touchReleaseOnEdges: !1,
   uniqueNavElements: !0,
   resistance: !0,
   resistanceRatio: .85,
   watchSlidesProgress: !1,
   watchSlidesVisibility: !1,
   grabCursor: !1,
   preventClicks: !0,
   preventClicksPropagation: !0,
   slideToClickedSlide: !1,
   preloadImages: !0,
   updateOnImagesReady: !0,
   loop: !1,
   loopAdditionalSlides: 0,
   loopedSlides: null,
   loopFillGroupWithBlank: !1,
   allowSlidePrev: !0,
   allowSlideNext: !0,
   swipeHandler: null,
   noSwiping: !0,
   noSwipingClass: "swiper-no-swiping",
   noSwipingSelector: null,
   passiveListeners: !0,
   containerModifierClass: "swiper-container-",
   slideClass: "swiper-slide",
   slideBlankClass: "swiper-slide-invisible-blank",
   slideActiveClass: "swiper-slide-active",
   slideDuplicateActiveClass: "swiper-slide-duplicate-active",
   slideVisibleClass: "swiper-slide-visible",
   slideDuplicateClass: "swiper-slide-duplicate",
   slideNextClass: "swiper-slide-next",
   slideDuplicateNextClass: "swiper-slide-duplicate-next",
   slidePrevClass: "swiper-slide-prev",
   slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
   wrapperClass: "swiper-wrapper",
   runCallbacksOnInit: !0
  },
  T = {
   update: o,
   translate: d,
   transition: p,
   slide: c,
   loop: u,
   grabCursor: h,
   manipulation: v,
   events: b,
   breakpoints: y,
   checkOverflow: {
    checkOverflow: function() {
     var e = this,
      t = e.isLocked;
     e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
    }
   },
   classes: {
    addClasses: function() {
     var t = this.classNames,
      a = this.params,
      e = this.rtl,
      i = this.$el,
      s = [];
     s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function(e) {
      t.push(a.containerModifierClass + e)
     }), i.addClass(t.join(" "))
    },
    removeClasses: function() {
     var e = this.$el,
      t = this.classNames;
     e.removeClass(t.join(" "))
    }
   },
   images: {
    loadImage: function(e, t, a, i, s, r) {
     var n;

     function o() {
      r && r()
     }
     e.complete && s ? o() : t ? ((n = new J.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
    },
    preloadImages: function() {
     var e = this;

     function t() {
      null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
     }
     e.imagesToLoad = e.$el.find("img");
     for (var a = 0; a < e.imagesToLoad.length; a += 1) {
      var i = e.imagesToLoad[a];
      e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
     }
    }
   }
  },
  E = {},
  S = function(u) {
   function h() {
    for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
    1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(T).forEach(function(t) {
     Object.keys(T[t]).forEach(function(e) {
      h.prototype[e] || (h.prototype[e] = T[t][e])
     })
    });
    var r = this;
    void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function(e) {
     var t = r.modules[e];
     if (t.params) {
      var a = Object.keys(t.params)[0],
       i = t.params[a];
      if ("object" != typeof i || null === i) return;
      if (!(a in s && "enabled" in i)) return;
      !0 === s[a] && (s[a] = {
       enabled: !0
      }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
       enabled: !1
      })
     }
    });
    var n = ee.extend({}, x);
    r.useModulesParams(n), r.params = ee.extend({}, n, E, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
    var o = (r.$ = L)(r.params.el);
    if (t = o[0]) {
     if (1 < o.length) {
      var l = [];
      return o.each(function(e, t) {
       var a = ee.extend({}, s, {
        el: t
       });
       l.push(new h(a))
      }), l
     }
     t.swiper = r, o.data("swiper", r);
     var d, p, c = o.children("." + r.params.wrapperClass);
     return ee.extend(r, {
      $el: o,
      el: t,
      $wrapperEl: c,
      wrapperEl: c[0],
      classNames: [],
      slides: L(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal: function() {
       return "horizontal" === r.params.direction
      },
      isVertical: function() {
       return "vertical" === r.params.direction
      },
      rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
      rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
      wrongRTL: "-webkit-box" === c.css("display"),
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      allowSlideNext: r.params.allowSlideNext,
      allowSlidePrev: r.params.allowSlidePrev,
      touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
       start: d[0],
       move: d[1],
       end: d[2]
      }, r.touchEventsDesktop = {
       start: p[0],
       move: p[1],
       end: p[2]
      }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
      touchEventsData: {
       isTouched: void 0,
       isMoved: void 0,
       allowTouchCallbacks: void 0,
       touchStartTime: void 0,
       isScrolling: void 0,
       currentTranslate: void 0,
       startTranslate: void 0,
       allowThresholdMove: void 0,
       formElements: "input, select, option, textarea, button, video",
       lastClickTime: ee.now(),
       clickTimeout: void 0,
       velocities: [],
       allowMomentumBounce: void 0,
       isTouchEvent: void 0,
       startMoving: void 0
      },
      allowClick: !0,
      allowTouchMove: r.params.allowTouchMove,
      touches: {
       startX: 0,
       startY: 0,
       currentX: 0,
       currentY: 0,
       diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
     }), r.useModules(), r.params.init && r.init(), r
    }
   }
   u && (h.__proto__ = u);
   var e = {
    extendedDefaults: {
     configurable: !0
    },
    defaults: {
     configurable: !0
    },
    Class: {
     configurable: !0
    },
    $: {
     configurable: !0
    }
   };
   return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
    var e = this,
     t = e.params,
     a = e.slides,
     i = e.slidesGrid,
     s = e.size,
     r = e.activeIndex,
     n = 1;
    if (t.centeredSlides) {
     for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
     for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
    } else
     for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
    return n
   }, h.prototype.update = function() {
    var a = this;
    if (a && !a.destroyed) {
     var e = a.snapGrid,
      t = a.params;
     t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
    }

    function i() {
     var e = a.rtlTranslate ? -1 * a.translate : a.translate,
      t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
     a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
    }
   }, h.prototype.init = function() {
    var e = this;
    e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
   }, h.prototype.destroy = function(e, t) {
    void 0 === e && (e = !0), void 0 === t && (t = !0);
    var a = this,
     i = a.params,
     s = a.$el,
     r = a.$wrapperEl,
     n = a.slides;
    return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(e) {
     a.off(e)
    }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null
   }, h.extendDefaults = function(e) {
    ee.extend(E, e)
   }, e.extendedDefaults.get = function() {
    return E
   }, e.defaults.get = function() {
    return x
   }, e.Class.get = function() {
    return u
   }, e.$.get = function() {
    return L
   }, Object.defineProperties(h, e), h
  }(s),
  C = {
   name: "device",
   proto: {
    device: m
   },
   static: {
    device: m
   }
  },
  M = {
   name: "support",
   proto: {
    support: te
   },
   static: {
    support: te
   }
  },
  k = {
   name: "browser",
   proto: {
    browser: I
   },
   static: {
    browser: I
   }
  },
  P = {
   name: "resize",
   create: function() {
    var e = this;
    ee.extend(e, {
     resize: {
      resizeHandler: function() {
       e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
      },
      orientationChangeHandler: function() {
       e && !e.destroyed && e.initialized && e.emit("orientationchange")
      }
     }
    })
   },
   on: {
    init: function() {
     J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
    },
    destroy: function() {
     J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
    }
   }
  },
  z = {
   func: J.MutationObserver || J.WebkitMutationObserver,
   attach: function(e, t) {
    void 0 === t && (t = {});
    var a = this,
     i = new z.func(function(e) {
      if (1 !== e.length) {
       var t = function() {
        a.emit("observerUpdate", e[0])
       };
       J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
      } else a.emit("observerUpdate", e[0])
     });
    i.observe(e, {
     attributes: void 0 === t.attributes || t.attributes,
     childList: void 0 === t.childList || t.childList,
     characterData: void 0 === t.characterData || t.characterData
    }), a.observer.observers.push(i)
   },
   init: function() {
    var e = this;
    if (te.observer && e.params.observer) {
     if (e.params.observeParents)
      for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
     e.observer.attach(e.$el[0], {
      childList: e.params.observeSlideChildren
     }), e.observer.attach(e.$wrapperEl[0], {
      attributes: !1
     })
    }
   },
   destroy: function() {
    this.observer.observers.forEach(function(e) {
     e.disconnect()
    }), this.observer.observers = []
   }
  },
  $ = {
   name: "observer",
   params: {
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
   },
   create: function() {
    ee.extend(this, {
     observer: {
      init: z.init.bind(this),
      attach: z.attach.bind(this),
      destroy: z.destroy.bind(this),
      observers: []
     }
    })
   },
   on: {
    init: function() {
     this.observer.init()
    },
    destroy: function() {
     this.observer.destroy()
    }
   }
  },
  D = {
   update: function(e) {
    var t = this,
     a = t.params,
     i = a.slidesPerView,
     s = a.slidesPerGroup,
     r = a.centeredSlides,
     n = t.params.virtual,
     o = n.addSlidesBefore,
     l = n.addSlidesAfter,
     d = t.virtual,
     p = d.from,
     c = d.to,
     u = d.slides,
     h = d.slidesGrid,
     v = d.renderSlide,
     f = d.offset;
    t.updateActiveIndex();
    var m, g, b, w = t.activeIndex || 0;
    m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
    var y = Math.max((w || 0) - b, 0),
     x = Math.min((w || 0) + g, u.length - 1),
     T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

    function E() {
     t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
    }
    if (ee.extend(t.virtual, {
      from: y,
      to: x,
      offset: T,
      slidesGrid: t.slidesGrid
     }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
    if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
     offset: T,
     from: y,
     to: x,
     slides: function() {
      for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
      return e
     }()
    }), void E();
    var S = [],
     C = [];
    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
    else
     for (var M = p; M <= c; M += 1)(M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
    for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
    C.forEach(function(e) {
     t.$wrapperEl.append(v(u[e], e))
    }), S.sort(function(e, t) {
     return t - e
    }).forEach(function(e) {
     t.$wrapperEl.prepend(v(u[e], e))
    }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
   },
   renderSlide: function(e, t) {
    var a = this,
     i = a.params.virtual;
    if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
    var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
    return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
   },
   appendSlide: function(e) {
    this.virtual.slides.push(e), this.virtual.update(!0)
   },
   prependSlide: function(e) {
    var t = this;
    if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
     var a = t.virtual.cache,
      i = {};
     Object.keys(a).forEach(function(e) {
      i[e + 1] = a[e]
     }), t.virtual.cache = i
    }
    t.virtual.update(!0), t.slideNext(0)
   }
  },
  O = {
   name: "virtual",
   params: {
    virtual: {
     enabled: !1,
     slides: [],
     cache: !0,
     renderSlide: null,
     renderExternal: null,
     addSlidesBefore: 0,
     addSlidesAfter: 0
    }
   },
   create: function() {
    var e = this;
    ee.extend(e, {
     virtual: {
      update: D.update.bind(e),
      appendSlide: D.appendSlide.bind(e),
      prependSlide: D.prependSlide.bind(e),
      renderSlide: D.renderSlide.bind(e),
      slides: e.params.virtual.slides,
      cache: {}
     }
    })
   },
   on: {
    beforeInit: function() {
     var e = this;
     if (e.params.virtual.enabled) {
      e.classNames.push(e.params.containerModifierClass + "virtual");
      var t = {
       watchSlidesProgress: !0
      };
      ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
     }
    },
    setTranslate: function() {
     this.params.virtual.enabled && this.virtual.update()
    }
   }
  },
  A = {
   handle: function(e) {
    var t = this,
     a = t.rtlTranslate,
     i = e;
    i.originalEvent && (i = i.originalEvent);
    var s = i.keyCode || i.charCode;
    if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
    if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
    if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
     if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
      var r = !1;
      if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
      var n = J.innerWidth,
       o = J.innerHeight,
       l = t.$el.offset();
      a && (l.left -= t.$el[0].scrollLeft);
      for (var d = [
        [l.left, l.top],
        [l.left + t.width, l.top],
        [l.left, l.top + t.height],
        [l.left + t.width, l.top + t.height]
       ], p = 0; p < d.length; p += 1) {
       var c = d[p];
       0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
      }
      if (!r) return
     }
     t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
    }
   },
   enable: function() {
    this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
   },
   disable: function() {
    this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
   }
  },
  N = {
   name: "keyboard",
   params: {
    keyboard: {
     enabled: !1,
     onlyInViewport: !0
    }
   },
   create: function() {
    ee.extend(this, {
     keyboard: {
      enabled: !1,
      enable: A.enable.bind(this),
      disable: A.disable.bind(this),
      handle: A.handle.bind(this)
     }
    })
   },
   on: {
    init: function() {
     this.params.keyboard.enabled && this.keyboard.enable()
    },
    destroy: function() {
     this.keyboard.enabled && this.keyboard.disable()
    }
   }
  };
 var H = {
   lastScrollTime: ee.now(),
   event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
    var e = "onwheel",
     t = e in f;
    if (!t) {
     var a = f.createElement("div");
     a.setAttribute(e, "return;"), t = "function" == typeof a[e]
    }
    return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
   }() ? "wheel" : "mousewheel",
   normalize: function(e) {
    var t = 0,
     a = 0,
     i = 0,
     s = 0;
    return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
     spinX: t,
     spinY: a,
     pixelX: i,
     pixelY: s
    }
   },
   handleMouseEnter: function() {
    this.mouseEntered = !0
   },
   handleMouseLeave: function() {
    this.mouseEntered = !1
   },
   handle: function(e) {
    var t = e,
     a = this,
     i = a.params.mousewheel;
    if (!a.mouseEntered && !i.releaseOnEdges) return !0;
    t.originalEvent && (t = t.originalEvent);
    var s = 0,
     r = a.rtlTranslate ? -1 : 1,
     n = H.normalize(t);
    if (i.forceToAxis)
     if (a.isHorizontal()) {
      if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
      s = n.pixelX * r
     } else {
      if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
      s = n.pixelY
     }
    else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
    if (0 === s) return !0;
    if (i.invert && (s = -s), a.params.freeMode) {
     a.params.loop && a.loopFix();
     var o = a.getTranslate() + s * i.sensitivity,
      l = a.isBeginning,
      d = a.isEnd;
     if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function() {
       a.slideToClosest()
      }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
    } else {
     if (60 < ee.now() - a.mousewheel.lastScrollTime)
      if (s < 0)
       if (a.isEnd && !a.params.loop || a.animating) {
        if (i.releaseOnEdges) return !0
       } else a.slideNext(), a.emit("scroll", t);
     else if (a.isBeginning && !a.params.loop || a.animating) {
      if (i.releaseOnEdges) return !0
     } else a.slidePrev(), a.emit("scroll", t);
     a.mousewheel.lastScrollTime = (new J.Date).getTime()
    }
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
   },
   enable: function() {
    var e = this;
    if (!H.event) return !1;
    if (e.mousewheel.enabled) return !1;
    var t = e.$el;
    return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(H.event, e.mousewheel.handle), e.mousewheel.enabled = !0
   },
   disable: function() {
    var e = this;
    if (!H.event) return !1;
    if (!e.mousewheel.enabled) return !1;
    var t = e.$el;
    return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
   }
  },
  G = {
   update: function() {
    var e = this,
     t = e.params.navigation;
    if (!e.params.loop) {
     var a = e.navigation,
      i = a.$nextEl,
      s = a.$prevEl;
     s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
    }
   },
   onPrevClick: function(e) {
    e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
   },
   onNextClick: function(e) {
    e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
   },
   init: function() {
    var e, t, a = this,
     i = a.params.navigation;
    (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
     $nextEl: e,
     nextEl: e && e[0],
     $prevEl: t,
     prevEl: t && t[0]
    }))
   },
   destroy: function() {
    var e = this,
     t = e.navigation,
     a = t.$nextEl,
     i = t.$prevEl;
    a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
   }
  },
  B = {
   update: function() {
    var e = this,
     t = e.rtl,
     s = e.params.pagination;
    if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
     var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
      i = e.pagination.$el,
      n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
     if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
      var o, l, d, p = e.pagination.bullets;
      if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function(e, t) {
       var a = L(t),
        i = a.index();
       i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
      });
      else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
       for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
       c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
      }
      if (s.dynamicBullets) {
       var v = Math.min(p.length, s.dynamicMainBullets + 4),
        f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
        m = t ? "right" : "left";
       p.css(e.isHorizontal() ? m : "top", f + "px")
      }
     }
     if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
      var g;
      g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
      var b = (r + 1) / n,
       w = 1,
       y = 1;
      "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
     }
     "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
    }
   },
   render: function() {
    var e = this,
     t = e.params.pagination;
    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
     var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
      i = e.pagination.$el,
      s = "";
     if ("bullets" === t.type) {
      for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
      i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
     }
     "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
    }
   },
   init: function() {
    var a = this,
     e = a.params.pagination;
    if (e.el) {
     var t = L(e.el);
     0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
      e.preventDefault();
      var t = L(this).index() * a.params.slidesPerGroup;
      a.params.loop && (t += a.loopedSlides), a.slideTo(t)
     }), ee.extend(a.pagination, {
      $el: t,
      el: t[0]
     }))
    }
   },
   destroy: function() {
    var e = this,
     t = e.params.pagination;
    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
     var a = e.pagination.$el;
     a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
    }
   }
  },
  X = {
   setTranslate: function() {
    var e = this;
    if (e.params.scrollbar.el && e.scrollbar.el) {
     var t = e.scrollbar,
      a = e.rtlTranslate,
      i = e.progress,
      s = t.dragSize,
      r = t.trackSize,
      n = t.$dragEl,
      o = t.$el,
      l = e.params.scrollbar,
      d = s,
      p = (r - s) * i;
     a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
      o[0].style.opacity = 0, o.transition(400)
     }, 1e3))
    }
   },
   setTransition: function(e) {
    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
   },
   updateSize: function() {
    var e = this;
    if (e.params.scrollbar.el && e.scrollbar.el) {
     var t = e.scrollbar,
      a = t.$dragEl,
      i = t.$el;
     a[0].style.width = "", a[0].style.height = "";
     var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
      n = e.size / e.virtualSize,
      o = n * (r / e.size);
     s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), ee.extend(t, {
      trackSize: r,
      divider: n,
      moveDivider: o,
      dragSize: s
     }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
    }
   },
   setDragPosition: function(e) {
    var t, a = this,
     i = a.scrollbar,
     s = a.rtlTranslate,
     r = i.$el,
     n = i.dragSize,
     o = i.trackSize;
    t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
    var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
    a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
   },
   onDragStart: function(e) {
    var t = this,
     a = t.params.scrollbar,
     i = t.scrollbar,
     s = t.$wrapperEl,
     r = i.$el,
     n = i.$dragEl;
    t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
   },
   onDragMove: function(e) {
    var t = this.scrollbar,
     a = this.$wrapperEl,
     i = t.$el,
     s = t.$dragEl;
    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
   },
   onDragEnd: function(e) {
    var t = this,
     a = t.params.scrollbar,
     i = t.scrollbar.$el;
    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function() {
     i.css("opacity", 0), i.transition(400)
    }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
   },
   enableDraggable: function() {
    var e = this;
    if (e.params.scrollbar.el) {
     var t = e.scrollbar,
      a = e.touchEventsTouch,
      i = e.touchEventsDesktop,
      s = e.params,
      r = t.$el[0],
      n = !(!te.passiveListener || !s.passiveListeners) && {
       passive: !1,
       capture: !1
      },
      o = !(!te.passiveListener || !s.passiveListeners) && {
       passive: !0,
       capture: !1
      };
     te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
    }
   },
   disableDraggable: function() {
    var e = this;
    if (e.params.scrollbar.el) {
     var t = e.scrollbar,
      a = e.touchEventsTouch,
      i = e.touchEventsDesktop,
      s = e.params,
      r = t.$el[0],
      n = !(!te.passiveListener || !s.passiveListeners) && {
       passive: !1,
       capture: !1
      },
      o = !(!te.passiveListener || !s.passiveListeners) && {
       passive: !0,
       capture: !1
      };
     te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
    }
   },
   init: function() {
    var e = this;
    if (e.params.scrollbar.el) {
     var t = e.scrollbar,
      a = e.$el,
      i = e.params.scrollbar,
      s = L(i.el);
     e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
     var r = s.find("." + e.params.scrollbar.dragClass);
     0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
      $el: s,
      el: s[0],
      $dragEl: r,
      dragEl: r[0]
     }), i.draggable && t.enableDraggable()
    }
   },
   destroy: function() {
    this.scrollbar.disableDraggable()
   }
  },
  Y = {
   setTransform: function(e, t) {
    var a = this.rtl,
     i = L(e),
     s = a ? -1 : 1,
     r = i.attr("data-swiper-parallax") || "0",
     n = i.attr("data-swiper-parallax-x"),
     o = i.attr("data-swiper-parallax-y"),
     l = i.attr("data-swiper-parallax-scale"),
     d = i.attr("data-swiper-parallax-opacity");
    if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
     var p = d - (d - 1) * (1 - Math.abs(t));
     i[0].style.opacity = p
    }
    if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
    else {
     var c = l - (l - 1) * (1 - Math.abs(t));
     i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
    }
   },
   setTranslate: function() {
    var i = this,
     e = i.$el,
     t = i.slides,
     s = i.progress,
     r = i.snapGrid;
    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
     i.parallax.setTransform(t, s)
    }), t.each(function(e, t) {
     var a = t.progress;
     1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
      i.parallax.setTransform(t, a)
     })
    })
   },
   setTransition: function(s) {
    void 0 === s && (s = this.params.speed);
    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
     var a = L(t),
      i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
     0 === s && (i = 0), a.transition(i)
    })
   }
  },
  V = {
   getDistanceBetweenTouches: function(e) {
    if (e.targetTouches.length < 2) return 1;
    var t = e.targetTouches[0].pageX,
     a = e.targetTouches[0].pageY,
     i = e.targetTouches[1].pageX,
     s = e.targetTouches[1].pageY;
    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
   },
   onGestureStart: function(e) {
    var t = this,
     a = t.params.zoom,
     i = t.zoom,
     s = i.gesture;
    if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
     if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
     i.fakeGestureTouched = !0, s.scaleStart = V.getDistanceBetweenTouches(e)
    }
    s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
   },
   onGestureChange: function(e) {
    var t = this.params.zoom,
     a = this.zoom,
     i = a.gesture;
    if (!te.gestures) {
     if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
     a.fakeGestureMoved = !0, i.scaleMove = V.getDistanceBetweenTouches(e)
    }
    i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
   },
   onGestureEnd: function(e) {
    var t = this.params.zoom,
     a = this.zoom,
     i = a.gesture;
    if (!te.gestures) {
     if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
     if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
     a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
    }
    i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
   },
   onTouchStart: function(e) {
    var t = this.zoom,
     a = t.gesture,
     i = t.image;
    a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
   },
   onTouchMove: function(e) {
    var t = this,
     a = t.zoom,
     i = a.gesture,
     s = a.image,
     r = a.velocity;
    if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
     s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
     var n = s.width * a.scale,
      o = s.height * a.scale;
     if (!(n < i.slideWidth && o < i.slideHeight)) {
      if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
       if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
       if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
      }
      e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
     }
    }
   },
   onTouchEnd: function() {
    var e = this.zoom,
     t = e.gesture,
     a = e.image,
     i = e.velocity;
    if (t.$imageEl && 0 !== t.$imageEl.length) {
     if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
     a.isTouched = !1, a.isMoved = !1;
     var s = 300,
      r = 300,
      n = i.x * s,
      o = a.currentX + n,
      l = i.y * r,
      d = a.currentY + l;
     0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
     var p = Math.max(s, r);
     a.currentX = o, a.currentY = d;
     var c = a.width * e.scale,
      u = a.height * e.scale;
     a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
    }
   },
   onTransitionEnd: function() {
    var e = this.zoom,
     t = e.gesture;
    t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
   },
   toggle: function(e) {
    var t = this.zoom;
    t.scale && 1 !== t.scale ? t.out() : t.in(e)
   },
   in: function(e) {
    var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this,
     b = g.zoom,
     w = g.params.zoom,
     y = b.gesture,
     x = b.image;
    (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
   },
   out: function() {
    var e = this,
     t = e.zoom,
     a = e.params.zoom,
     i = t.gesture;
    i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
   },
   enable: function() {
    var e = this,
     t = e.zoom;
    if (!t.enabled) {
     t.enabled = !0;
     var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
      passive: !0,
      capture: !1
     };
     te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
    }
   },
   disable: function() {
    var e = this,
     t = e.zoom;
    if (t.enabled) {
     e.zoom.enabled = !1;
     var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
      passive: !0,
      capture: !1
     };
     te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
    }
   }
  },
  F = {
   loadInSlide: function(e, l) {
    void 0 === l && (l = !0);
    var d = this,
     p = d.params.lazy;
    if (void 0 !== e && 0 !== d.slides.length) {
     var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
      t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
     !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function(e, t) {
      var i = L(t);
      i.addClass(p.loadingClass);
      var s = i.attr("data-background"),
       r = i.attr("data-src"),
       n = i.attr("data-srcset"),
       o = i.attr("data-sizes");
      d.loadImage(i[0], r || s, n, o, !1, function() {
       if (null != d && d && (!d || d.params) && !d.destroyed) {
        if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
         var e = c.attr("data-swiper-slide-index");
         if (c.hasClass(d.params.slideDuplicateClass)) {
          var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
          d.lazy.loadInSlide(t.index(), !1)
         } else {
          var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
          d.lazy.loadInSlide(a.index(), !1)
         }
        }
        d.emit("lazyImageReady", c[0], i[0])
       }
      }), d.emit("lazyImageLoad", c[0], i[0])
     })
    }
   },
   load: function() {
    var i = this,
     t = i.$wrapperEl,
     a = i.params,
     s = i.slides,
     e = i.activeIndex,
     r = i.virtual && a.virtual.enabled,
     n = a.lazy,
     o = a.slidesPerView;

    function l(e) {
     if (r) {
      if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
     } else if (s[e]) return !0;
     return !1
    }

    function d(e) {
     return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
    }
    if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function(e, t) {
     var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
     i.lazy.loadInSlide(a)
    });
    else if (1 < o)
     for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
    else i.lazy.loadInSlide(e);
    if (n.loadPrevNext)
     if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
      for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
      for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
     } else {
      var g = t.children("." + a.slideNextClass);
      0 < g.length && i.lazy.loadInSlide(d(g));
      var b = t.children("." + a.slidePrevClass);
      0 < b.length && i.lazy.loadInSlide(d(b))
     }
   }
  },
  R = {
   LinearSpline: function(e, t) {
    var a, i, s, r, n, o = function(e, t) {
     for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
     return a
    };
    return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
     return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
    }, this
   },
   getInterpolateFunction: function(e) {
    var t = this;
    t.controller.spline || (t.controller.spline = t.params.loop ? new R.LinearSpline(t.slidesGrid, e.slidesGrid) : new R.LinearSpline(t.snapGrid, e.snapGrid))
   },
   setTranslate: function(e, t) {
    var a, i, s = this,
     r = s.controller.control;

    function n(e) {
     var t = s.rtlTranslate ? -s.translate : s.translate;
     "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
    }
    if (Array.isArray(r))
     for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]);
    else r instanceof S && t !== r && n(r)
   },
   setTransition: function(t, e) {
    var a, i = this,
     s = i.controller.control;

    function r(e) {
     e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function() {
      e.updateAutoHeight()
     }), e.$wrapperEl.transitionEnd(function() {
      s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
     }))
    }
    if (Array.isArray(s))
     for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]);
    else s instanceof S && e !== s && r(s)
   }
  },
  q = {
   makeElFocusable: function(e) {
    return e.attr("tabIndex", "0"), e
   },
   addElRole: function(e, t) {
    return e.attr("role", t), e
   },
   addElLabel: function(e, t) {
    return e.attr("aria-label", t), e
   },
   disableEl: function(e) {
    return e.attr("aria-disabled", !0), e
   },
   enableEl: function(e) {
    return e.attr("aria-disabled", !1), e
   },
   onEnterKey: function(e) {
    var t = this,
     a = t.params.a11y;
    if (13 === e.keyCode) {
     var i = L(e.target);
     t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
    }
   },
   notify: function(e) {
    var t = this.a11y.liveRegion;
    0 !== t.length && (t.html(""), t.html(e))
   },
   updateNavigation: function() {
    var e = this;
    if (!e.params.loop) {
     var t = e.navigation,
      a = t.$nextEl,
      i = t.$prevEl;
     i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
    }
   },
   updatePagination: function() {
    var i = this,
     s = i.params.a11y;
    i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
     var a = L(t);
     i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
    })
   },
   init: function() {
    var e = this;
    e.$el.append(e.a11y.liveRegion);
    var t, a, i = e.params.a11y;
    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
   },
   destroy: function() {
    var e, t, a = this;
    a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
   }
  },
  W = {
   init: function() {
    var e = this;
    if (e.params.history) {
     if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
     var t = e.history;
     t.initialized = !0, t.paths = W.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
    }
   },
   destroy: function() {
    this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
   },
   setHistoryPopState: function() {
    this.history.paths = W.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
   },
   getPathValues: function() {
    var e = J.location.pathname.slice(1).split("/").filter(function(e) {
      return "" !== e
     }),
     t = e.length;
    return {
     key: e[t - 2],
     value: e[t - 1]
    }
   },
   setHistory: function(e, t) {
    if (this.history.initialized && this.params.history.enabled) {
     var a = this.slides.eq(t),
      i = W.slugify(a.attr("data-history"));
     J.location.pathname.includes(e) || (i = e + "/" + i);
     var s = J.history.state;
     s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
      value: i
     }, null, i) : J.history.pushState({
      value: i
     }, null, i))
    }
   },
   slugify: function(e) {
    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
   },
   scrollToSlide: function(e, t, a) {
    var i = this;
    if (t)
     for (var s = 0, r = i.slides.length; s < r; s += 1) {
      var n = i.slides.eq(s);
      if (W.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
       var o = n.index();
       i.slideTo(o, e, a)
      }
     } else i.slideTo(0, e, a)
   }
  },
  j = {
   onHashCange: function() {
    var e = this,
     t = f.location.hash.replace("#", "");
    if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
     var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
     if (void 0 === a) return;
     e.slideTo(a)
    }
   },
   setHash: function() {
    var e = this;
    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
     if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
     else {
      var t = e.slides.eq(e.activeIndex),
       a = t.attr("data-hash") || t.attr("data-history");
      f.location.hash = a || ""
     }
   },
   init: function() {
    var e = this;
    if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
     e.hashNavigation.initialized = !0;
     var t = f.location.hash.replace("#", "");
     if (t)
      for (var a = 0, i = e.slides.length; a < i; a += 1) {
       var s = e.slides.eq(a);
       if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
        var r = s.index();
        e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
       }
      }
     e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
    }
   },
   destroy: function() {
    this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
   }
  },
  U = {
   run: function() {
    var e = this,
     t = e.slides.eq(e.activeIndex),
     a = e.params.autoplay.delay;
    t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function() {
     e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
    }, a)
   },
   start: function() {
    var e = this;
    return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
   },
   stop: function() {
    var e = this;
    return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
   },
   pause: function(e) {
    var t = this;
    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
   }
  },
  K = {
   setTranslate: function() {
    for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
     var i = e.slides.eq(a),
      s = -i[0].swiperSlideOffset;
     e.params.virtualTranslate || (s -= e.translate);
     var r = 0;
     e.isHorizontal() || (r = s, s = 0);
     var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
     i.css({
      opacity: n
     }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
    }
   },
   setTransition: function(e) {
    var a = this,
     t = a.slides,
     i = a.$wrapperEl;
    if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
     var s = !1;
     t.transitionEnd(function() {
      if (!s && a && !a.destroyed) {
       s = !0, a.animating = !1;
       for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
      }
     })
    }
   }
  },
  _ = {
   setTranslate: function() {
    var e, t = this,
     a = t.$el,
     i = t.$wrapperEl,
     s = t.slides,
     r = t.width,
     n = t.height,
     o = t.rtlTranslate,
     l = t.size,
     d = t.params.cubeEffect,
     p = t.isHorizontal(),
     c = t.virtual && t.params.virtual.enabled,
     u = 0;
    d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
     height: r + "px"
    })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
    for (var h = 0; h < s.length; h += 1) {
     var v = s.eq(h),
      f = h;
     c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
     var m = 90 * f,
      g = Math.floor(m / 360);
     o && (m = -m, g = Math.floor(-m / 360));
     var b = Math.max(Math.min(v[0].progress, 1), -1),
      w = 0,
      y = 0,
      x = 0;
     f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
     var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
     if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
      var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
       S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
      0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
     }
    }
    if (i.css({
      "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
      "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
      "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
      "transform-origin": "50% 50% -" + l / 2 + "px"
     }), d.shadow)
     if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
     else {
      var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
       M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
       k = d.shadowScale,
       P = d.shadowScale / M,
       z = d.shadowOffset;
      e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + z) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
     } var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
    i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
   },
   setTransition: function(e) {
    var t = this.$el;
    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
   }
  },
  Z = {
   setTranslate: function() {
    for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
     var s = t.eq(i),
      r = s[0].progress;
     e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
     var n = -180 * r,
      o = 0,
      l = -s[0].swiperSlideOffset,
      d = 0;
     if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
      var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
       c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
      0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
     }
     s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
    }
   },
   setTransition: function(e) {
    var a = this,
     t = a.slides,
     i = a.activeIndex,
     s = a.$wrapperEl;
    if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
     var r = !1;
     t.eq(i).transitionEnd(function() {
      if (!r && a && !a.destroyed) {
       r = !0, a.animating = !1;
       for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
      }
     })
    }
   }
  },
  Q = {
   setTranslate: function() {
    for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
     var v = i.eq(u),
      f = r[u],
      m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
      g = o ? p * m : 0,
      b = o ? 0 : p * m,
      w = -c * Math.abs(m),
      y = o ? 0 : n.stretch * m,
      x = o ? n.stretch * m : 0;
     Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
     var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
     if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
      var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
       S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
      0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
     }
    }(te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
   },
   setTransition: function(e) {
    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
   }
  },
  ae = {
   init: function() {
    var e = this,
     t = e.params.thumbs,
     a = e.constructor;
    t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
     watchSlidesProgress: !0,
     slideToClickedSlide: !1
    }), ee.extend(e.thumbs.swiper.params, {
     watchSlidesProgress: !0,
     slideToClickedSlide: !1
    })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
     watchSlidesVisibility: !0,
     watchSlidesProgress: !0,
     slideToClickedSlide: !1
    })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
   },
   onThumbClick: function() {
    var e = this,
     t = e.thumbs.swiper;
    if (t) {
     var a = t.clickedIndex,
      i = t.clickedSlide;
     if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
      var s;
      if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
       var r = e.activeIndex;
       e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
       var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
        o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
       s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
      }
      e.slideTo(s)
     }
    }
   },
   update: function(e) {
    var t = this,
     a = t.thumbs.swiper;
    if (a) {
     var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
     if (t.realIndex !== a.realIndex) {
      var s, r = a.activeIndex;
      if (a.params.loop) {
       a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
       var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
        o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
       s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
      } else s = t.realIndex;
      a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
     }
     var l = 1,
      d = t.params.thumbs.slideThumbActiveClass;
     if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop)
      for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
     else
      for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
    }
   }
  },
  ie = [C, M, k, P, $, O, N, {
   name: "mousewheel",
   params: {
    mousewheel: {
     enabled: !1,
     releaseOnEdges: !1,
     invert: !1,
     forceToAxis: !1,
     sensitivity: 1,
     eventsTarged: "container"
    }
   },
   create: function() {
    var e = this;
    ee.extend(e, {
     mousewheel: {
      enabled: !1,
      enable: H.enable.bind(e),
      disable: H.disable.bind(e),
      handle: H.handle.bind(e),
      handleMouseEnter: H.handleMouseEnter.bind(e),
      handleMouseLeave: H.handleMouseLeave.bind(e),
      lastScrollTime: ee.now()
     }
    })
   },
   on: {
    init: function() {
     this.params.mousewheel.enabled && this.mousewheel.enable()
    },
    destroy: function() {
     this.mousewheel.enabled && this.mousewheel.disable()
    }
   }
  }, {
   name: "navigation",
   params: {
    navigation: {
     nextEl: null,
     prevEl: null,
     hideOnClick: !1,
     disabledClass: "swiper-button-disabled",
     hiddenClass: "swiper-button-hidden",
     lockClass: "swiper-button-lock"
    }
   },
   create: function() {
    var e = this;
    ee.extend(e, {
     navigation: {
      init: G.init.bind(e),
      update: G.update.bind(e),
      destroy: G.destroy.bind(e),
      onNextClick: G.onNextClick.bind(e),
      onPrevClick: G.onPrevClick.bind(e)
     }
    })
   },
   on: {
    init: function() {
     this.navigation.init(), this.navigation.update()
    },
    toEdge: function() {
     this.navigation.update()
    },
    fromEdge: function() {
     this.navigation.update()
    },
    destroy: function() {
     this.navigation.destroy()
    },
    click: function(e) {
     var t = this.navigation,
      a = t.$nextEl,
      i = t.$prevEl;
     !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
    }
   }
  }, {
   name: "pagination",
   params: {
    pagination: {
     el: null,
     bulletElement: "span",
     clickable: !1,
     hideOnClick: !1,
     renderBullet: null,
     renderProgressbar: null,
     renderFraction: null,
     renderCustom: null,
     progressbarOpposite: !1,
     type: "bullets",
     dynamicBullets: !1,
     dynamicMainBullets: 1,
     formatFractionCurrent: function(e) {
      return e
     },
     formatFractionTotal: function(e) {
      return e
     },
     bulletClass: "swiper-pagination-bullet",
     bulletActiveClass: "swiper-pagination-bullet-active",
     modifierClass: "swiper-pagination-",
     currentClass: "swiper-pagination-current",
     totalClass: "swiper-pagination-total",
     hiddenClass: "swiper-pagination-hidden",
     progressbarFillClass: "swiper-pagination-progressbar-fill",
     progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
     clickableClass: "swiper-pagination-clickable",
     lockClass: "swiper-pagination-lock"
    }
   },
   create: function() {
    var e = this;
    ee.extend(e, {
     pagination: {
      init: B.init.bind(e),
      render: B.render.bind(e),
      update: B.update.bind(e),
      destroy: B.destroy.bind(e),
      dynamicBulletIndex: 0
     }
    })
   },
   on: {
    init: function() {
     this.pagination.init(), this.pagination.render(), this.pagination.update()
    },
    activeIndexChange: function() {
     this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
    },
    snapIndexChange: function() {
     this.params.loop || this.pagination.update()
    },
    slidesLengthChange: function() {
     this.params.loop && (this.pagination.render(), this.pagination.update())
    },
    snapGridLengthChange: function() {
     this.params.loop || (this.pagination.render(), this.pagination.update())
    },
    destroy: function() {
     this.pagination.destroy()
    },
    click: function(e) {
     var t = this;
     t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
    }
   }
  }, {
   name: "scrollbar",
   params: {
    scrollbar: {
     el: null,
     dragSize: "auto",
     hide: !1,
     draggable: !1,
     snapOnRelease: !0,
     lockClass: "swiper-scrollbar-lock",
     dragClass: "swiper-scrollbar-drag"
    }
   },
   create: function() {
    var e = this;
    ee.extend(e, {
     scrollbar: {
      init: X.init.bind(e),
      destroy: X.destroy.bind(e),
      updateSize: X.updateSize.bind(e),
      setTranslate: X.setTranslate.bind(e),
      setTransition: X.setTransition.bind(e),
      enableDraggable: X.enableDraggable.bind(e),
      disableDraggable: X.disableDraggable.bind(e),
      setDragPosition: X.setDragPosition.bind(e),
      onDragStart: X.onDragStart.bind(e),
      onDragMove: X.onDragMove.bind(e),
      onDragEnd: X.onDragEnd.bind(e),
      isTouched: !1,
      timeout: null,
      dragTimeout: null
     }
    })
   },
   on: {
    init: function() {
     this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
    },
    update: function() {
     this.scrollbar.updateSize()
    },
    resize: function() {
     this.scrollbar.updateSize()
    },
    observerUpdate: function() {
     this.scrollbar.updateSize()
    },
    setTranslate: function() {
     this.scrollbar.setTranslate()
    },
    setTransition: function(e) {
     this.scrollbar.setTransition(e)
    },
    destroy: function() {
     this.scrollbar.destroy()
    }
   }
  }, {
   name: "parallax",
   params: {
    parallax: {
     enabled: !1
    }
   },
   create: function() {
    ee.extend(this, {
     parallax: {
      setTransform: Y.setTransform.bind(this),
      setTranslate: Y.setTranslate.bind(this),
      setTransition: Y.setTransition.bind(this)
     }
    })
   },
   on: {
    beforeInit: function() {
     this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
    },
    init: function() {
     this.params.parallax && this.parallax.setTranslate()
    },
    setTranslate: function() {
     this.params.parallax && this.parallax.setTranslate()
    },
    setTransition: function(e) {
     this.params.parallax && this.parallax.setTransition(e)
    }
   }
  }, {
   name: "zoom",
   params: {
    zoom: {
     enabled: !1,
     maxRatio: 3,
     minRatio: 1,
     toggle: !0,
     containerClass: "swiper-zoom-container",
     zoomedSlideClass: "swiper-slide-zoomed"
    }
   },
   create: function() {
    var i = this,
     t = {
      enabled: !1,
      scale: 1,
      currentScale: 1,
      isScaling: !1,
      gesture: {
       $slideEl: void 0,
       slideWidth: void 0,
       slideHeight: void 0,
       $imageEl: void 0,
       $imageWrapEl: void 0,
       maxRatio: 3
      },
      image: {
       isTouched: void 0,
       isMoved: void 0,
       currentX: void 0,
       currentY: void 0,
       minX: void 0,
       minY: void 0,
       maxX: void 0,
       maxY: void 0,
       width: void 0,
       height: void 0,
       startX: void 0,
       startY: void 0,
       touchesStart: {},
       touchesCurrent: {}
      },
      velocity: {
       x: void 0,
       y: void 0,
       prevPositionX: void 0,
       prevPositionY: void 0,
       prevTime: void 0
      }
     };
    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
     t[e] = V[e].bind(i)
    }), ee.extend(i, {
     zoom: t
    });
    var s = 1;
    Object.defineProperty(i.zoom, "scale", {
     get: function() {
      return s
     },
     set: function(e) {
      if (s !== e) {
       var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
        a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
       i.emit("zoomChange", e, t, a)
      }
      s = e
     }
    })
   },
   on: {
    init: function() {
     this.params.zoom.enabled && this.zoom.enable()
    },
    destroy: function() {
     this.zoom.disable()
    },
    touchStart: function(e) {
     this.zoom.enabled && this.zoom.onTouchStart(e)
    },
    touchEnd: function(e) {
     this.zoom.enabled && this.zoom.onTouchEnd(e)
    },
    doubleTap: function(e) {
     this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
    },
    transitionEnd: function() {
     this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
    }
   }
  }, {
   name: "lazy",
   params: {
    lazy: {
     enabled: !1,
     loadPrevNext: !1,
     loadPrevNextAmount: 1,
     loadOnTransitionStart: !1,
     elementClass: "swiper-lazy",
     loadingClass: "swiper-lazy-loading",
     loadedClass: "swiper-lazy-loaded",
     preloaderClass: "swiper-lazy-preloader"
    }
   },
   create: function() {
    ee.extend(this, {
     lazy: {
      initialImageLoaded: !1,
      load: F.load.bind(this),
      loadInSlide: F.loadInSlide.bind(this)
     }
    })
   },
   on: {
    beforeInit: function() {
     this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
    },
    init: function() {
     this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
    },
    scroll: function() {
     this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
    },
    resize: function() {
     this.params.lazy.enabled && this.lazy.load()
    },
    scrollbarDragMove: function() {
     this.params.lazy.enabled && this.lazy.load()
    },
    transitionStart: function() {
     var e = this;
     e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
    },
    transitionEnd: function() {
     this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
    }
   }
  }, {
   name: "controller",
   params: {
    controller: {
     control: void 0,
     inverse: !1,
     by: "slide"
    }
   },
   create: function() {
    var e = this;
    ee.extend(e, {
     controller: {
      control: e.params.controller.control,
      getInterpolateFunction: R.getInterpolateFunction.bind(e),
      setTranslate: R.setTranslate.bind(e),
      setTransition: R.setTransition.bind(e)
     }
    })
   },
   on: {
    update: function() {
     this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
    },
    resize: function() {
     this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
    },
    observerUpdate: function() {
     this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
    },
    setTranslate: function(e, t) {
     this.controller.control && this.controller.setTranslate(e, t)
    },
    setTransition: function(e, t) {
     this.controller.control && this.controller.setTransition(e, t)
    }
   }
  }, {
   name: "a11y",
   params: {
    a11y: {
     enabled: !0,
     notificationClass: "swiper-notification",
     prevSlideMessage: "Previous slide",
     nextSlideMessage: "Next slide",
     firstSlideMessage: "This is the first slide",
     lastSlideMessage: "This is the last slide",
     paginationBulletMessage: "Go to slide {{index}}"
    }
   },
   create: function() {
    var t = this;
    ee.extend(t, {
     a11y: {
      liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
     }
    }), Object.keys(q).forEach(function(e) {
     t.a11y[e] = q[e].bind(t)
    })
   },
   on: {
    init: function() {
     this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
    },
    toEdge: function() {
     this.params.a11y.enabled && this.a11y.updateNavigation()
    },
    fromEdge: function() {
     this.params.a11y.enabled && this.a11y.updateNavigation()
    },
    paginationUpdate: function() {
     this.params.a11y.enabled && this.a11y.updatePagination()
    },
    destroy: function() {
     this.params.a11y.enabled && this.a11y.destroy()
    }
   }
  }, {
   name: "history",
   params: {
    history: {
     enabled: !1,
     replaceState: !1,
     key: "slides"
    }
   },
   create: function() {
    var e = this;
    ee.extend(e, {
     history: {
      init: W.init.bind(e),
      setHistory: W.setHistory.bind(e),
      setHistoryPopState: W.setHistoryPopState.bind(e),
      scrollToSlide: W.scrollToSlide.bind(e),
      destroy: W.destroy.bind(e)
     }
    })
   },
   on: {
    init: function() {
     this.params.history.enabled && this.history.init()
    },
    destroy: function() {
     this.params.history.enabled && this.history.destroy()
    },
    transitionEnd: function() {
     this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
    }
   }
  }, {
   name: "hash-navigation",
   params: {
    hashNavigation: {
     enabled: !1,
     replaceState: !1,
     watchState: !1
    }
   },
   create: function() {
    var e = this;
    ee.extend(e, {
     hashNavigation: {
      initialized: !1,
      init: j.init.bind(e),
      destroy: j.destroy.bind(e),
      setHash: j.setHash.bind(e),
      onHashCange: j.onHashCange.bind(e)
     }
    })
   },
   on: {
    init: function() {
     this.params.hashNavigation.enabled && this.hashNavigation.init()
    },
    destroy: function() {
     this.params.hashNavigation.enabled && this.hashNavigation.destroy()
    },
    transitionEnd: function() {
     this.hashNavigation.initialized && this.hashNavigation.setHash()
    }
   }
  }, {
   name: "autoplay",
   params: {
    autoplay: {
     enabled: !1,
     delay: 3e3,
     waitForTransition: !0,
     disableOnInteraction: !0,
     stopOnLastSlide: !1,
     reverseDirection: !1
    }
   },
   create: function() {
    var t = this;
    ee.extend(t, {
     autoplay: {
      running: !1,
      paused: !1,
      run: U.run.bind(t),
      start: U.start.bind(t),
      stop: U.stop.bind(t),
      pause: U.pause.bind(t),
      onTransitionEnd: function(e) {
       t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
      }
     }
    })
   },
   on: {
    init: function() {
     this.params.autoplay.enabled && this.autoplay.start()
    },
    beforeTransitionStart: function(e, t) {
     this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
    },
    sliderFirstMove: function() {
     this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
    },
    destroy: function() {
     this.autoplay.running && this.autoplay.stop()
    }
   }
  }, {
   name: "effect-fade",
   params: {
    fadeEffect: {
     crossFade: !1
    }
   },
   create: function() {
    ee.extend(this, {
     fadeEffect: {
      setTranslate: K.setTranslate.bind(this),
      setTransition: K.setTransition.bind(this)
     }
    })
   },
   on: {
    beforeInit: function() {
     var e = this;
     if ("fade" === e.params.effect) {
      e.classNames.push(e.params.containerModifierClass + "fade");
      var t = {
       slidesPerView: 1,
       slidesPerColumn: 1,
       slidesPerGroup: 1,
       watchSlidesProgress: !0,
       spaceBetween: 0,
       virtualTranslate: !0
      };
      ee.extend(e.params, t), ee.extend(e.originalParams, t)
     }
    },
    setTranslate: function() {
     "fade" === this.params.effect && this.fadeEffect.setTranslate()
    },
    setTransition: function(e) {
     "fade" === this.params.effect && this.fadeEffect.setTransition(e)
    }
   }
  }, {
   name: "effect-cube",
   params: {
    cubeEffect: {
     slideShadows: !0,
     shadow: !0,
     shadowOffset: 20,
     shadowScale: .94
    }
   },
   create: function() {
    ee.extend(this, {
     cubeEffect: {
      setTranslate: _.setTranslate.bind(this),
      setTransition: _.setTransition.bind(this)
     }
    })
   },
   on: {
    beforeInit: function() {
     var e = this;
     if ("cube" === e.params.effect) {
      e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
      var t = {
       slidesPerView: 1,
       slidesPerColumn: 1,
       slidesPerGroup: 1,
       watchSlidesProgress: !0,
       resistanceRatio: 0,
       spaceBetween: 0,
       centeredSlides: !1,
       virtualTranslate: !0
      };
      ee.extend(e.params, t), ee.extend(e.originalParams, t)
     }
    },
    setTranslate: function() {
     "cube" === this.params.effect && this.cubeEffect.setTranslate()
    },
    setTransition: function(e) {
     "cube" === this.params.effect && this.cubeEffect.setTransition(e)
    }
   }
  }, {
   name: "effect-flip",
   params: {
    flipEffect: {
     slideShadows: !0,
     limitRotation: !0
    }
   },
   create: function() {
    ee.extend(this, {
     flipEffect: {
      setTranslate: Z.setTranslate.bind(this),
      setTransition: Z.setTransition.bind(this)
     }
    })
   },
   on: {
    beforeInit: function() {
     var e = this;
     if ("flip" === e.params.effect) {
      e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
      var t = {
       slidesPerView: 1,
       slidesPerColumn: 1,
       slidesPerGroup: 1,
       watchSlidesProgress: !0,
       spaceBetween: 0,
       virtualTranslate: !0
      };
      ee.extend(e.params, t), ee.extend(e.originalParams, t)
     }
    },
    setTranslate: function() {
     "flip" === this.params.effect && this.flipEffect.setTranslate()
    },
    setTransition: function(e) {
     "flip" === this.params.effect && this.flipEffect.setTransition(e)
    }
   }
  }, {
   name: "effect-coverflow",
   params: {
    coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: !0
    }
   },
   create: function() {
    ee.extend(this, {
     coverflowEffect: {
      setTranslate: Q.setTranslate.bind(this),
      setTransition: Q.setTransition.bind(this)
     }
    })
   },
   on: {
    beforeInit: function() {
     var e = this;
     "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
    },
    setTranslate: function() {
     "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
    },
    setTransition: function(e) {
     "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
    }
   }
  }, {
   name: "thumbs",
   params: {
    thumbs: {
     swiper: null,
     slideThumbActiveClass: "swiper-slide-thumb-active",
     thumbsContainerClass: "swiper-container-thumbs"
    }
   },
   create: function() {
    ee.extend(this, {
     thumbs: {
      swiper: null,
      init: ae.init.bind(this),
      update: ae.update.bind(this),
      onThumbClick: ae.onThumbClick.bind(this)
     }
    })
   },
   on: {
    beforeInit: function() {
     var e = this.params.thumbs;
     e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
    },
    slideChange: function() {
     this.thumbs.swiper && this.thumbs.update()
    },
    update: function() {
     this.thumbs.swiper && this.thumbs.update()
    },
    resize: function() {
     this.thumbs.swiper && this.thumbs.update()
    },
    observerUpdate: function() {
     this.thumbs.swiper && this.thumbs.update()
    },
    setTransition: function(e) {
     var t = this.thumbs.swiper;
     t && t.setTransition(e)
    },
    beforeDestroy: function() {
     var e = this.thumbs.swiper;
     e && this.thumbs.swiperCreated && e && e.destroy()
    }
   }
  }];
 return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
});
/*! elementor - v2.7.5 - 28-10-2019 */
! function(e) {
 var t = {};

 function __webpack_require__(n) {
  if (t[n]) return t[n].exports;
  var i = t[n] = {
   i: n,
   l: !1,
   exports: {}
  };
  return e[n].call(i.exports, i, i.exports, __webpack_require__), i.l = !0, i.exports
 }
 __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
  __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
   enumerable: !0,
   get: n
  })
 }, __webpack_require__.r = function(e) {
  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
   value: "Module"
  }), Object.defineProperty(e, "__esModule", {
   value: !0
  })
 }, __webpack_require__.t = function(e, t) {
  if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
  if (4 & t && "object" == typeof e && e && e.__esModule) return e;
  var n = Object.create(null);
  if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
    enumerable: !0,
    value: e
   }), 2 & t && "string" != typeof e)
   for (var i in e) __webpack_require__.d(n, i, function(t) {
    return e[t]
   }.bind(null, i));
  return n
 }, __webpack_require__.n = function(e) {
  var t = e && e.__esModule ? function getDefault() {
   return e.default
  } : function getModuleExports() {
   return e
  };
  return __webpack_require__.d(t, "a", t), t
 }, __webpack_require__.o = function(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
 }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 479)
}([function(e, t) {
 e.exports = function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
   default: e
  }
 }
}, function(e, t) {
 var n = e.exports = {
  version: "2.6.9"
 };
 "number" == typeof __e && (__e = n)
}, function(e, t, n) {
 e.exports = n(107)
}, function(e, t, n) {
 var i = n(128),
  r = n(79);

 function _getPrototypeOf(t) {
  return e.exports = _getPrototypeOf = r ? i : function _getPrototypeOf(e) {
   return e.__proto__ || i(e)
  }, _getPrototypeOf(t)
 }
 e.exports = _getPrototypeOf
}, function(e, t) {
 e.exports = function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
 }
}, function(e, t, n) {
 var i = n(2);

 function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
   var r = t[n];
   r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), i(e, r.key, r)
  }
 }
 e.exports = function _createClass(e, t, n) {
  return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
 }
}, function(e, t, n) {
 var i = n(65),
  r = n(81);
 e.exports = function _possibleConstructorReturn(e, t) {
  return !t || "object" !== i(t) && "function" != typeof t ? r(e) : t
 }
}, function(e, t, n) {
 var i = n(96),
  r = n(136);
 e.exports = function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
  e.prototype = i(t && t.prototype, {
   constructor: {
    value: e,
    writable: !0,
    configurable: !0
   }
  }), t && r(e, t)
 }
}, function(e, t, n) {
 var i = n(10),
  r = n(1),
  o = n(68),
  a = n(23),
  s = n(12),
  l = function(e, t, n) {
   var u, c, d, f = e & l.F,
    p = e & l.G,
    h = e & l.S,
    g = e & l.P,
    v = e & l.B,
    m = e & l.W,
    y = p ? r : r[t] || (r[t] = {}),
    b = y.prototype,
    _ = p ? i : h ? i[t] : (i[t] || {}).prototype;
   for (u in p && (n = t), n)(c = !f && _ && void 0 !== _[u]) && s(y, u) || (d = c ? _[u] : n[u], y[u] = p && "function" != typeof _[u] ? n[u] : v && c ? o(d, i) : m && _[u] == d ? function(e) {
    var t = function(t, n, i) {
     if (this instanceof e) {
      switch (arguments.length) {
       case 0:
        return new e;
       case 1:
        return new e(t);
       case 2:
        return new e(t, n)
      }
      return new e(t, n, i)
     }
     return e.apply(this, arguments)
    };
    return t.prototype = e.prototype, t
   }(d) : g && "function" == typeof d ? o(Function.call, d) : d, g && ((y.virtual || (y.virtual = {}))[u] = d, e & l.R && b && !b[u] && a(b, u, d)))
  };
 l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function(e, t, n) {
 var i = n(45)("wks"),
  r = n(46),
  o = n(11).Symbol,
  a = "function" == typeof o;
 (e.exports = function(e) {
  return i[e] || (i[e] = a && o[e] || (a ? o : r)("Symbol." + e))
 }).store = i
}, function(e, t) {
 var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
 "number" == typeof __g && (__g = n)
}, function(e, t) {
 var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
 "number" == typeof __g && (__g = n)
}, function(e, t) {
 var n = {}.hasOwnProperty;
 e.exports = function(e, t) {
  return n.call(e, t)
 }
}, function(e, t, n) {
 e.exports = !n(25)(function() {
  return 7 != Object.defineProperty({}, "a", {
   get: function() {
    return 7
   }
  }).a
 })
}, function(e, t, n) {
 var i = n(18),
  r = n(74),
  o = n(49),
  a = Object.defineProperty;
 t.f = n(13) ? Object.defineProperty : function defineProperty(e, t, n) {
  if (i(e), t = o(t, !0), i(n), r) try {
   return a(e, t, n)
  } catch (e) {}
  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
  return "value" in n && (e[t] = n.value), e
 }
}, function(e, t, n) {
 var i = n(94),
  r = n(39);
 e.exports = function(e) {
  return i(r(e))
 }
}, function(e, t, n) {
 var i = n(53)("wks"),
  r = n(35),
  o = n(10).Symbol,
  a = "function" == typeof o;
 (e.exports = function(e) {
  return i[e] || (i[e] = a && o[e] || (a ? o : r)("Symbol." + e))
 }).store = i
}, function(e, t) {
 e.exports = function(e) {
  return "object" == typeof e ? null !== e : "function" == typeof e
 }
}, function(e, t, n) {
 var i = n(17);
 e.exports = function(e) {
  if (!i(e)) throw TypeError(e + " is not an object!");
  return e
 }
}, function(e, t, n) {
 var i = n(22);
 e.exports = function(e) {
  if (!i(e)) throw TypeError(e + " is not an object!");
  return e
 }
}, function(e, t, n) {
 e.exports = !n(24)(function() {
  return 7 != Object.defineProperty({}, "a", {
   get: function() {
    return 7
   }
  }).a
 })
}, function(e, t, n) {
 var i = n(36),
  r = n(67);
 e.exports = n(20) ? function(e, t, n) {
  return i.f(e, t, r(1, n))
 } : function(e, t, n) {
  return e[t] = n, e
 }
}, function(e, t) {
 e.exports = function(e) {
  return "object" == typeof e ? null !== e : "function" == typeof e
 }
}, function(e, t, n) {
 var i = n(14),
  r = n(30);
 e.exports = n(13) ? function(e, t, n) {
  return i.f(e, t, r(1, n))
 } : function(e, t, n) {
  return e[t] = n, e
 }
}, function(e, t) {
 e.exports = function(e) {
  try {
   return !!e()
  } catch (e) {
   return !0
  }
 }
}, function(e, t) {
 e.exports = function(e) {
  try {
   return !!e()
  } catch (e) {
   return !0
  }
 }
}, function(e, t, n) {
 "use strict";
 var i = n(37),
  r = n(100)(5),
  o = !0;
 "find" in [] && Array(1).find(function() {
  o = !1
 }), i(i.P + i.F * o, "Array", {
  find: function find(e) {
   return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
  }
 }), n(73)("find")
}, function(e, t, n) {
 var i = n(11),
  r = n(21),
  o = n(47),
  a = n(46)("src"),
  s = n(87),
  l = ("" + s).split("toString");
 n(33).inspectSource = function(e) {
  return s.call(e)
 }, (e.exports = function(e, t, n, s) {
  var u = "function" == typeof n;
  u && (o(n, "name") || r(n, "name", t)), e[t] !== n && (u && (o(n, a) || r(n, a, e[t] ? "" + e[t] : l.join(String(t)))), e === i ? e[t] = n : s ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t], r(e, t, n)))
 })(Function.prototype, "toString", function toString() {
  return "function" == typeof this && this[a] || s.call(this)
 })
}, function(e, t, n) {
 var i = n(78),
  r = n(54);
 e.exports = Object.keys || function keys(e) {
  return i(e, r)
 }
}, function(e, t) {
 var n = {}.toString;
 e.exports = function(e) {
  return n.call(e).slice(8, -1)
 }
}, function(e, t) {
 e.exports = function(e, t) {
  return {
   enumerable: !(1 & e),
   configurable: !(2 & e),
   writable: !(4 & e),
   value: t
  }
 }
}, function(e, t, n) {
 var i = n(39);
 e.exports = function(e) {
  return Object(i(e))
 }
}, function(e, t) {
 e.exports = function(e) {
  if (null == e) throw TypeError("Can't call method on  " + e);
  return e
 }
}, function(e, t) {
 var n = e.exports = {
  version: "2.6.9"
 };
 "number" == typeof __e && (__e = n)
}, function(e, t) {
 e.exports = !0
}, function(e, t) {
 var n = 0,
  i = Math.random();
 e.exports = function(e) {
  return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
 }
}, function(e, t, n) {
 var i = n(19),
  r = n(84),
  o = n(82),
  a = Object.defineProperty;
 t.f = n(20) ? Object.defineProperty : function defineProperty(e, t, n) {
  if (i(e), t = o(t, !0), i(n), r) try {
   return a(e, t, n)
  } catch (e) {}
  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
  return "value" in n && (e[t] = n.value), e
 }
}, function(e, t, n) {
 var i = n(11),
  r = n(33),
  o = n(21),
  a = n(27),
  s = n(60),
  l = function(e, t, n) {
   var u, c, d, f, p = e & l.F,
    h = e & l.G,
    g = e & l.S,
    v = e & l.P,
    m = e & l.B,
    y = h ? i : g ? i[t] || (i[t] = {}) : (i[t] || {}).prototype,
    b = h ? r : r[t] || (r[t] = {}),
    _ = b.prototype || (b.prototype = {});
   for (u in h && (n = t), n) d = ((c = !p && y && void 0 !== y[u]) ? y : n)[u], f = m && c ? s(d, i) : v && "function" == typeof d ? s(Function.call, d) : d, y && a(y, u, d, e & l.U), b[u] != d && o(b, u, f), v && _[u] != d && (_[u] = d)
  };
 i.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function(e, t, n) {
 var i = n(41),
  r = n(30),
  o = n(15),
  a = n(49),
  s = n(12),
  l = n(74),
  u = Object.getOwnPropertyDescriptor;
 t.f = n(13) ? u : function getOwnPropertyDescriptor(e, t) {
  if (e = o(e), t = a(t, !0), l) try {
   return u(e, t)
  } catch (e) {}
  if (s(e, t)) return r(!i.f.call(e, t), e[t])
 }
}, function(e, t) {
 e.exports = function(e) {
  if (null == e) throw TypeError("Can't call method on  " + e);
  return e
 }
}, function(e, t) {
 e.exports = {}
}, function(e, t) {
 t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
 var i = n(43),
  r = Math.min;
 e.exports = function(e) {
  return e > 0 ? r(i(e), 9007199254740991) : 0
 }
}, function(e, t) {
 var n = Math.ceil,
  i = Math.floor;
 e.exports = function(e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
 }
}, function(e, t, n) {
 var i = n(141),
  r = n(148),
  o = (n(3), n(151));

 function _get(t, n, a) {
  return "undefined" != typeof Reflect && r ? e.exports = _get = r : e.exports = _get = function _get(e, t, n) {
   var r = o(e, t);
   if (r) {
    var a = i(r, t);
    return a.get ? a.get.call(n) : a.value
   }
  }, _get(t, n, a || t)
 }
 e.exports = _get
}, function(e, t, n) {
 var i = n(33),
  r = n(11),
  o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
 (e.exports = function(e, t) {
  return o[e] || (o[e] = void 0 !== t ? t : {})
 })("versions", []).push({
  version: i.version,
  mode: n(71) ? "pure" : "global",
  copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
 })
}, function(e, t) {
 var n = 0,
  i = Math.random();
 e.exports = function(e) {
  return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
 }
}, function(e, t) {
 var n = {}.hasOwnProperty;
 e.exports = function(e, t) {
  return n.call(e, t)
 }
}, , function(e, t, n) {
 var i = n(17);
 e.exports = function(e, t) {
  if (!i(e)) return e;
  var n, r;
  if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
  if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
  if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
  throw TypeError("Can't convert object to primitive value")
 }
}, function(e, t) {
 var n = Math.ceil,
  i = Math.floor;
 e.exports = function(e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
 }
}, function(e, t, n) {
 var i = n(18),
  r = n(101),
  o = n(54),
  a = n(52)("IE_PROTO"),
  s = function() {},
  l = function() {
   var e, t = n(75)("iframe"),
    i = o.length;
   for (t.style.display = "none", n(116).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[o[i]];
   return l()
  };
 e.exports = Object.create || function create(e, t) {
  var n;
  return null !== e ? (s.prototype = i(e), n = new s, s.prototype = null, n[a] = e) : n = l(), void 0 === t ? n : r(n, t)
 }
}, function(e, t, n) {
 var i = n(53)("keys"),
  r = n(35);
 e.exports = function(e) {
  return i[e] || (i[e] = r(e))
 }
}, function(e, t, n) {
 var i = n(1),
  r = n(10),
  o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
 (e.exports = function(e, t) {
  return o[e] || (o[e] = void 0 !== t ? t : {})
 })("versions", []).push({
  version: i.version,
  mode: n(34) ? "pure" : "global",
  copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
 })
}, function(e, t) {
 e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
 var i = n(14).f,
  r = n(12),
  o = n(16)("toStringTag");
 e.exports = function(e, t, n) {
  e && !r(e = n ? e : e.prototype, o) && i(e, o, {
   configurable: !0,
   value: t
  })
 }
}, function(e, t, n) {
 t.f = n(16)
}, function(e, t, n) {
 var i = n(10),
  r = n(1),
  o = n(34),
  a = n(56),
  s = n(14).f;
 e.exports = function(e) {
  var t = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
  "_" == e.charAt(0) || e in t || s(t, e, {
   value: a.f(e)
  })
 }
}, function(e, t, n) {
 e.exports = n(152)
}, function(e, t, n) {
 var i = n(12),
  r = n(31),
  o = n(52)("IE_PROTO"),
  a = Object.prototype;
 e.exports = Object.getPrototypeOf || function(e) {
  return e = r(e), i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
 }
}, function(e, t, n) {
 var i = n(61);
 e.exports = function(e, t, n) {
  if (i(e), void 0 === t) return e;
  switch (n) {
   case 1:
    return function(n) {
     return e.call(t, n)
    };
   case 2:
    return function(n, i) {
     return e.call(t, n, i)
    };
   case 3:
    return function(n, i, r) {
     return e.call(t, n, i, r)
    }
  }
  return function() {
   return e.apply(t, arguments)
  }
 }
}, function(e, t) {
 e.exports = function(e) {
  if ("function" != typeof e) throw TypeError(e + " is not a function!");
  return e
 }
}, function(e, t, n) {
 var i = n(32);
 e.exports = function(e) {
  return Object(i(e))
 }
}, function(e, t, n) {
 var i = n(8),
  r = n(1),
  o = n(25);
 e.exports = function(e, t) {
  var n = (r.Object || {})[e] || Object[e],
   a = {};
  a[e] = t(n), i(i.S + i.F * o(function() {
   n(1)
  }), "Object", a)
 }
}, function(e, t) {
 t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
 var i = n(110),
  r = n(120);

 function _typeof2(e) {
  return (_typeof2 = "function" == typeof r && "symbol" == typeof i ? function _typeof2(e) {
   return typeof e
  } : function _typeof2(e) {
   return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : typeof e
  })(e)
 }

 function _typeof(t) {
  return "function" == typeof r && "symbol" === _typeof2(i) ? e.exports = _typeof = function _typeof(e) {
   return _typeof2(e)
  } : e.exports = _typeof = function _typeof(e) {
   return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : _typeof2(e)
  }, _typeof(t)
 }
 e.exports = _typeof
}, function(e, t) {
 var n = {}.toString;
 e.exports = function(e) {
  return n.call(e).slice(8, -1)
 }
}, function(e, t) {
 e.exports = function(e, t) {
  return {
   enumerable: !(1 & e),
   configurable: !(2 & e),
   writable: !(4 & e),
   value: t
  }
 }
}, function(e, t, n) {
 var i = n(109);
 e.exports = function(e, t, n) {
  if (i(e), void 0 === t) return e;
  switch (n) {
   case 1:
    return function(n) {
     return e.call(t, n)
    };
   case 2:
    return function(n, i) {
     return e.call(t, n, i)
    };
   case 3:
    return function(n, i, r) {
     return e.call(t, n, i, r)
    }
  }
  return function() {
   return e.apply(t, arguments)
  }
 }
}, function(e, t, n) {
 var i = n(78),
  r = n(54).concat("length", "prototype");
 t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
  return i(e, r)
 }
}, function(e, t, n) {
 var i = n(22),
  r = n(11).document,
  o = i(r) && i(r.createElement);
 e.exports = function(e) {
  return o ? r.createElement(e) : {}
 }
}, function(e, t) {
 e.exports = !1
}, function(e, t, n) {
 "use strict";
 var i, r, o = n(99),
  a = RegExp.prototype.exec,
  s = String.prototype.replace,
  l = a,
  u = (i = /a/, r = /b*/g, a.call(i, "a"), a.call(r, "a"), 0 !== i.lastIndex || 0 !== r.lastIndex),
  c = void 0 !== /()??/.exec("")[1];
 (u || c) && (l = function exec(e) {
  var t, n, i, r, l = this;
  return c && (n = new RegExp("^" + l.source + "$(?!\\s)", o.call(l))), u && (t = l.lastIndex), i = a.call(l, e), u && i && (l.lastIndex = l.global ? i.index + i[0].length : t), c && i && i.length > 1 && s.call(i[0], n, function() {
   for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
  }), i
 }), e.exports = l
}, function(e, t, n) {
 var i = n(9)("unscopables"),
  r = Array.prototype;
 null == r[i] && n(21)(r, i, {}), e.exports = function(e) {
  r[i][e] = !0
 }
}, function(e, t, n) {
 e.exports = !n(13) && !n(25)(function() {
  return 7 != Object.defineProperty(n(75)("div"), "a", {
   get: function() {
    return 7
   }
  }).a
 })
}, function(e, t, n) {
 var i = n(17),
  r = n(10).document,
  o = i(r) && i(r.createElement);
 e.exports = function(e) {
  return o ? r.createElement(e) : {}
 }
}, function(e, t, n) {
 "use strict";
 var i = n(34),
  r = n(8),
  o = n(77),
  a = n(23),
  s = n(40),
  l = n(113),
  u = n(55),
  c = n(59),
  d = n(16)("iterator"),
  f = !([].keys && "next" in [].keys()),
  p = function() {
   return this
  };
 e.exports = function(e, t, n, h, g, v, m) {
  l(n, t, h);
  var y, b, _, S = function(e) {
    if (!f && e in E) return E[e];
    switch (e) {
     case "keys":
      return function keys() {
       return new n(this, e)
      };
     case "values":
      return function values() {
       return new n(this, e)
      }
    }
    return function entries() {
     return new n(this, e)
    }
   },
   w = t + " Iterator",
   k = "values" == g,
   x = !1,
   E = e.prototype,
   C = E[d] || E["@@iterator"] || g && E[g],
   O = C || S(g),
   M = g ? k ? S("entries") : O : void 0,
   $ = "Array" == t && E.entries || C;
  if ($ && (_ = c($.call(new e))) !== Object.prototype && _.next && (u(_, w, !0), i || "function" == typeof _[d] || a(_, d, p)), k && C && "values" !== C.name && (x = !0, O = function values() {
    return C.call(this)
   }), i && !m || !f && !x && E[d] || a(E, d, O), s[t] = O, s[w] = p, g)
   if (y = {
     values: k ? O : S("values"),
     keys: v ? O : S("keys"),
     entries: M
    }, m)
    for (b in y) b in E || o(E, b, y[b]);
   else r(r.P + r.F * (f || x), t, y);
  return y
 }
}, function(e, t, n) {
 e.exports = n(23)
}, function(e, t, n) {
 var i = n(12),
  r = n(15),
  o = n(114)(!1),
  a = n(52)("IE_PROTO");
 e.exports = function(e, t) {
  var n, s = r(e),
   l = 0,
   u = [];
  for (n in s) n != a && i(s, n) && u.push(n);
  for (; t.length > l;) i(s, n = t[l++]) && (~o(u, n) || u.push(n));
  return u
 }
}, function(e, t, n) {
 e.exports = n(131)
}, function(e, t, n) {
 "use strict";
 var i = n(19),
  r = n(62),
  o = n(42),
  a = n(43),
  s = n(92),
  l = n(85),
  u = Math.max,
  c = Math.min,
  d = Math.floor,
  f = /\$([$&`']|\d\d?|<[^>]*>)/g,
  p = /\$([$&`']|\d\d?)/g;
 n(86)("replace", 2, function(e, t, n, h) {
  return [function replace(i, r) {
   var o = e(this),
    a = null == i ? void 0 : i[t];
   return void 0 !== a ? a.call(i, o, r) : n.call(String(o), i, r)
  }, function(e, t) {
   var r = h(n, e, this, t);
   if (r.done) return r.value;
   var d = i(e),
    f = String(this),
    p = "function" == typeof t;
   p || (t = String(t));
   var g = d.global;
   if (g) {
    var v = d.unicode;
    d.lastIndex = 0
   }
   for (var m = [];;) {
    var y = l(d, f);
    if (null === y) break;
    if (m.push(y), !g) break;
    "" === String(y[0]) && (d.lastIndex = s(f, o(d.lastIndex), v))
   }
   for (var b, _ = "", S = 0, w = 0; w < m.length; w++) {
    y = m[w];
    for (var k = String(y[0]), x = u(c(a(y.index), f.length), 0), E = [], C = 1; C < y.length; C++) E.push(void 0 === (b = y[C]) ? b : String(b));
    var O = y.groups;
    if (p) {
     var M = [k].concat(E, x, f);
     void 0 !== O && M.push(O);
     var $ = String(t.apply(void 0, M))
    } else $ = getSubstitution(k, f, x, E, O, t);
    x >= S && (_ += f.slice(S, x) + $, S = x + k.length)
   }
   return _ + f.slice(S)
  }];

  function getSubstitution(e, t, i, o, a, s) {
   var l = i + e.length,
    u = o.length,
    c = p;
   return void 0 !== a && (a = r(a), c = f), n.call(s, c, function(n, r) {
    var s;
    switch (r.charAt(0)) {
     case "$":
      return "$";
     case "&":
      return e;
     case "`":
      return t.slice(0, i);
     case "'":
      return t.slice(l);
     case "<":
      s = a[r.slice(1, -1)];
      break;
     default:
      var c = +r;
      if (0 === c) return n;
      if (c > u) {
       var f = d(c / 10);
       return 0 === f ? n : f <= u ? void 0 === o[f - 1] ? r.charAt(1) : o[f - 1] + r.charAt(1) : n
      }
      s = o[c - 1]
    }
    return void 0 === s ? "" : s
   })
  }
 })
}, function(e, t) {
 e.exports = function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
 }
}, function(e, t, n) {
 var i = n(22);
 e.exports = function(e, t) {
  if (!i(e)) return e;
  var n, r;
  if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
  if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
  if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
  throw TypeError("Can't convert object to primitive value")
 }
}, function(e, t, n) {
 var i = n(29);
 e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
  return "String" == i(e) ? e.split("") : Object(e)
 }
}, function(e, t, n) {
 e.exports = !n(20) && !n(24)(function() {
  return 7 != Object.defineProperty(n(70)("div"), "a", {
   get: function() {
    return 7
   }
  }).a
 })
}, function(e, t, n) {
 "use strict";
 var i = n(93),
  r = RegExp.prototype.exec;
 e.exports = function(e, t) {
  var n = e.exec;
  if ("function" == typeof n) {
   var o = n.call(e, t);
   if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
   return o
  }
  if ("RegExp" !== i(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
  return r.call(e, t)
 }
}, function(e, t, n) {
 "use strict";
 n(145);
 var i = n(27),
  r = n(21),
  o = n(24),
  a = n(32),
  s = n(9),
  l = n(72),
  u = s("species"),
  c = !o(function() {
   var e = /./;
   return e.exec = function() {
    var e = [];
    return e.groups = {
     a: "7"
    }, e
   }, "7" !== "".replace(e, "$<a>")
  }),
  d = function() {
   var e = /(?:)/,
    t = e.exec;
   e.exec = function() {
    return t.apply(this, arguments)
   };
   var n = "ab".split(e);
   return 2 === n.length && "a" === n[0] && "b" === n[1]
  }();
 e.exports = function(e, t, n) {
  var f = s(e),
   p = !o(function() {
    var t = {};
    return t[f] = function() {
     return 7
    }, 7 != "" [e](t)
   }),
   h = p ? !o(function() {
    var t = !1,
     n = /a/;
    return n.exec = function() {
     return t = !0, null
    }, "split" === e && (n.constructor = {}, n.constructor[u] = function() {
     return n
    }), n[f](""), !t
   }) : void 0;
  if (!p || !h || "replace" === e && !c || "split" === e && !d) {
   var g = /./ [f],
    v = n(a, f, "" [e], function maybeCallNative(e, t, n, i, r) {
     return t.exec === l ? p && !r ? {
      done: !0,
      value: g.call(t, n, i)
     } : {
      done: !0,
      value: e.call(n, t, i)
     } : {
      done: !1
     }
    }),
    m = v[0],
    y = v[1];
   i(String.prototype, e, m), r(RegExp.prototype, f, 2 == t ? function(e, t) {
    return y.call(e, this, t)
   } : function(e) {
    return y.call(e, this)
   })
  }
 }
}, function(e, t, n) {
 e.exports = n(45)("native-function-to-string", Function.toString)
}, function(e, t, n) {
 "use strict";
 var i = n(112)(!0);
 n(76)(String, "String", function(e) {
  this._t = String(e), this._i = 0
 }, function() {
  var e, t = this._t,
   n = this._i;
  return n >= t.length ? {
   value: void 0,
   done: !0
  } : (e = i(t, n), this._i += e.length, {
   value: e,
   done: !1
  })
 })
}, function(e, t, n) {
 "use strict";
 var i = n(139),
  r = n(19),
  o = n(156),
  a = n(92),
  s = n(42),
  l = n(85),
  u = n(72),
  c = n(24),
  d = Math.min,
  f = [].push,
  p = !c(function() {
   RegExp(4294967295, "y")
  });
 n(86)("split", 2, function(e, t, n, c) {
  var h;
  return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, t) {
   var r = String(this);
   if (void 0 === e && 0 === t) return [];
   if (!i(e)) return n.call(r, e, t);
   for (var o, a, s, l = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, p = void 0 === t ? 4294967295 : t >>> 0, h = new RegExp(e.source, c + "g");
    (o = u.call(h, r)) && !((a = h.lastIndex) > d && (l.push(r.slice(d, o.index)), o.length > 1 && o.index < r.length && f.apply(l, o.slice(1)), s = o[0].length, d = a, l.length >= p));) h.lastIndex === o.index && h.lastIndex++;
   return d === r.length ? !s && h.test("") || l.push("") : l.push(r.slice(d)), l.length > p ? l.slice(0, p) : l
  } : "0".split(void 0, 0).length ? function(e, t) {
   return void 0 === e && 0 === t ? [] : n.call(this, e, t)
  } : n, [function split(n, i) {
   var r = e(this),
    o = null == n ? void 0 : n[t];
   return void 0 !== o ? o.call(n, r, i) : h.call(String(r), n, i)
  }, function(e, t) {
   var i = c(h, e, this, t, h !== n);
   if (i.done) return i.value;
   var u = r(e),
    f = String(this),
    g = o(u, RegExp),
    v = u.unicode,
    m = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (p ? "y" : "g"),
    y = new g(p ? u : "^(?:" + u.source + ")", m),
    b = void 0 === t ? 4294967295 : t >>> 0;
   if (0 === b) return [];
   if (0 === f.length) return null === l(y, f) ? [f] : [];
   for (var _ = 0, S = 0, w = []; S < f.length;) {
    y.lastIndex = p ? S : 0;
    var k, x = l(y, p ? f : f.slice(S));
    if (null === x || (k = d(s(y.lastIndex + (p ? 0 : S)), f.length)) === _) S = a(f, S, v);
    else {
     if (w.push(f.slice(_, S)), w.length === b) return w;
     for (var E = 1; E <= x.length - 1; E++)
      if (w.push(x[E]), w.length === b) return w;
     S = _ = k
    }
   }
   return w.push(f.slice(_)), w
  }]
 })
}, function(e, t, n) {
 n(117);
 for (var i = n(10), r = n(23), o = n(40), a = n(16)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
  var u = s[l],
   c = i[u],
   d = c && c.prototype;
  d && !d[a] && r(d, a, u), o[u] = o.Array
 }
}, function(e, t, n) {
 var i = n(83),
  r = n(32);
 e.exports = function(e) {
  return i(r(e))
 }
}, function(e, t, n) {
 "use strict";
 var i = n(144)(!0);
 e.exports = function(e, t, n) {
  return t + (n ? i(e, t).length : 1)
 }
}, function(e, t, n) {
 var i = n(29),
  r = n(9)("toStringTag"),
  o = "Arguments" == i(function() {
   return arguments
  }());
 e.exports = function(e) {
  var t, n, a;
  return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
   try {
    return e[t]
   } catch (e) {}
  }(t = Object(e), r)) ? n : o ? i(t) : "Object" == (a = i(t)) && "function" == typeof t.callee ? "Arguments" : a
 }
}, function(e, t, n) {
 var i = n(66);
 e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
  return "String" == i(e) ? e.split("") : Object(e)
 }
}, function(e, t, n) {
 var i = n(66);
 e.exports = Array.isArray || function isArray(e) {
  return "Array" == i(e)
 }
}, function(e, t, n) {
 e.exports = n(134)
}, , function(e, t, n) {
 "use strict";
 var i = n(19),
  r = n(42),
  o = n(92),
  a = n(85);
 n(86)("match", 1, function(e, t, n, s) {
  return [function match(n) {
   var i = e(this),
    r = null == n ? void 0 : n[t];
   return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
  }, function(e) {
   var t = s(n, e, this);
   if (t.done) return t.value;
   var l = i(e),
    u = String(this);
   if (!l.global) return a(l, u);
   var c = l.unicode;
   l.lastIndex = 0;
   for (var d, f = [], p = 0; null !== (d = a(l, u));) {
    var h = String(d[0]);
    f[p] = h, "" === h && (l.lastIndex = o(u, r(l.lastIndex), c)), p++
   }
   return 0 === p ? null : f
  }]
 })
}, function(e, t, n) {
 "use strict";
 var i = n(19);
 e.exports = function() {
  var e = i(this),
   t = "";
  return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
 }
}, function(e, t, n) {
 var i = n(60),
  r = n(83),
  o = n(62),
  a = n(42),
  s = n(104);
 e.exports = function(e, t) {
  var n = 1 == e,
   l = 2 == e,
   u = 3 == e,
   c = 4 == e,
   d = 6 == e,
   f = 5 == e || d,
   p = t || s;
  return function(t, s, h) {
   for (var g, v, m = o(t), y = r(m), b = i(s, h, 3), _ = a(y.length), S = 0, w = n ? p(t, _) : l ? p(t, 0) : void 0; _ > S; S++)
    if ((f || S in y) && (v = b(g = y[S], S, m), e))
     if (n) w[S] = v;
     else if (v) switch (e) {
    case 3:
     return !0;
    case 5:
     return g;
    case 6:
     return S;
    case 2:
     w.push(g)
   } else if (c) return !1;
   return d ? -1 : u || c ? c : w
  }
 }
}, function(e, t, n) {
 var i = n(14),
  r = n(18),
  o = n(28);
 e.exports = n(13) ? Object.defineProperties : function defineProperties(e, t) {
  r(e);
  for (var n, a = o(t), s = a.length, l = 0; s > l;) i.f(e, n = a[l++], t[n]);
  return e
 }
}, function(e, t, n) {
 var i = n(50),
  r = Math.min;
 e.exports = function(e) {
  return e > 0 ? r(i(e), 9007199254740991) : 0
 }
}, function(e, t, n) {
 "use strict";
 var i = n(10),
  r = n(12),
  o = n(13),
  a = n(8),
  s = n(77),
  l = n(122).KEY,
  u = n(25),
  c = n(53),
  d = n(55),
  f = n(35),
  p = n(16),
  h = n(56),
  g = n(57),
  v = n(123),
  m = n(95),
  y = n(18),
  b = n(17),
  _ = n(31),
  S = n(15),
  w = n(49),
  k = n(30),
  x = n(51),
  E = n(124),
  C = n(38),
  O = n(64),
  M = n(14),
  $ = n(28),
  D = C.f,
  I = M.f,
  T = E.f,
  A = i.Symbol,
  P = i.JSON,
  j = P && P.stringify,
  V = p("_hidden"),
  F = p("toPrimitive"),
  L = {}.propertyIsEnumerable,
  H = c("symbol-registry"),
  B = c("symbols"),
  R = c("op-symbols"),
  Q = Object.prototype,
  N = "function" == typeof A && !!O.f,
  G = i.QObject,
  z = !G || !G.prototype || !G.prototype.findChild,
  U = o && u(function() {
   return 7 != x(I({}, "a", {
    get: function() {
     return I(this, "a", {
      value: 7
     }).a
    }
   })).a
  }) ? function(e, t, n) {
   var i = D(Q, t);
   i && delete Q[t], I(e, t, n), i && e !== Q && I(Q, t, i)
  } : I,
  W = function(e) {
   var t = B[e] = x(A.prototype);
   return t._k = e, t
  },
  q = N && "symbol" == typeof A.iterator ? function(e) {
   return "symbol" == typeof e
  } : function(e) {
   return e instanceof A
  },
  Y = function defineProperty(e, t, n) {
   return e === Q && Y(R, t, n), y(e), t = w(t, !0), y(n), r(B, t) ? (n.enumerable ? (r(e, V) && e[V][t] && (e[V][t] = !1), n = x(n, {
    enumerable: k(0, !1)
   })) : (r(e, V) || I(e, V, k(1, {})), e[V][t] = !0), U(e, t, n)) : I(e, t, n)
  },
  J = function defineProperties(e, t) {
   y(e);
   for (var n, i = v(t = S(t)), r = 0, o = i.length; o > r;) Y(e, n = i[r++], t[n]);
   return e
  },
  K = function propertyIsEnumerable(e) {
   var t = L.call(this, e = w(e, !0));
   return !(this === Q && r(B, e) && !r(R, e)) && (!(t || !r(this, e) || !r(B, e) || r(this, V) && this[V][e]) || t)
  },
  X = function getOwnPropertyDescriptor(e, t) {
   if (e = S(e), t = w(t, !0), e !== Q || !r(B, t) || r(R, t)) {
    var n = D(e, t);
    return !n || !r(B, t) || r(e, V) && e[V][t] || (n.enumerable = !0), n
   }
  },
  Z = function getOwnPropertyNames(e) {
   for (var t, n = T(S(e)), i = [], o = 0; n.length > o;) r(B, t = n[o++]) || t == V || t == l || i.push(t);
   return i
  },
  ee = function getOwnPropertySymbols(e) {
   for (var t, n = e === Q, i = T(n ? R : S(e)), o = [], a = 0; i.length > a;) !r(B, t = i[a++]) || n && !r(Q, t) || o.push(B[t]);
   return o
  };
 N || (s((A = function Symbol() {
  if (this instanceof A) throw TypeError("Symbol is not a constructor!");
  var e = f(arguments.length > 0 ? arguments[0] : void 0),
   t = function(n) {
    this === Q && t.call(R, n), r(this, V) && r(this[V], e) && (this[V][e] = !1), U(this, e, k(1, n))
   };
  return o && z && U(Q, e, {
   configurable: !0,
   set: t
  }), W(e)
 }).prototype, "toString", function toString() {
  return this._k
 }), C.f = X, M.f = Y, n(69).f = E.f = Z, n(41).f = K, O.f = ee, o && !n(34) && s(Q, "propertyIsEnumerable", K, !0), h.f = function(e) {
  return W(p(e))
 }), a(a.G + a.W + a.F * !N, {
  Symbol: A
 });
 for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) p(te[ne++]);
 for (var ie = $(p.store), re = 0; ie.length > re;) g(ie[re++]);
 a(a.S + a.F * !N, "Symbol", {
  for: function(e) {
   return r(H, e += "") ? H[e] : H[e] = A(e)
  },
  keyFor: function keyFor(e) {
   if (!q(e)) throw TypeError(e + " is not a symbol!");
   for (var t in H)
    if (H[t] === e) return t
  },
  useSetter: function() {
   z = !0
  },
  useSimple: function() {
   z = !1
  }
 }), a(a.S + a.F * !N, "Object", {
  create: function create(e, t) {
   return void 0 === t ? x(e) : J(x(e), t)
  },
  defineProperty: Y,
  defineProperties: J,
  getOwnPropertyDescriptor: X,
  getOwnPropertyNames: Z,
  getOwnPropertySymbols: ee
 });
 var oe = u(function() {
  O.f(1)
 });
 a(a.S + a.F * oe, "Object", {
  getOwnPropertySymbols: function getOwnPropertySymbols(e) {
   return O.f(_(e))
  }
 }), P && a(a.S + a.F * (!N || u(function() {
  var e = A();
  return "[null]" != j([e]) || "{}" != j({
   a: e
  }) || "{}" != j(Object(e))
 })), "JSON", {
  stringify: function stringify(e) {
   for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]);
   if (n = t = i[1], (b(t) || void 0 !== e) && !q(e)) return m(t) || (t = function(e, t) {
    if ("function" == typeof n && (t = n.call(this, e, t)), !q(t)) return t
   }), i[1] = t, j.apply(P, i)
  }
 }), A.prototype[F] || n(23)(A.prototype, F, A.prototype.valueOf), d(A, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
}, function(e, t, n) {
 var i = n(105);
 e.exports = function(e, t) {
  return new(i(e))(t)
 }
}, function(e, t, n) {
 var i = n(22),
  r = n(106),
  o = n(9)("species");
 e.exports = function(e) {
  var t;
  return r(e) && ("function" != typeof(t = e.constructor) || t !== Array && !r(t.prototype) || (t = void 0), i(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
 }
}, function(e, t, n) {
 var i = n(29);
 e.exports = Array.isArray || function isArray(e) {
  return "Array" == i(e)
 }
}, function(e, t, n) {
 n(108);
 var i = n(1).Object;
 e.exports = function defineProperty(e, t, n) {
  return i.defineProperty(e, t, n)
 }
}, function(e, t, n) {
 var i = n(8);
 i(i.S + i.F * !n(13), "Object", {
  defineProperty: n(14).f
 })
}, function(e, t) {
 e.exports = function(e) {
  if ("function" != typeof e) throw TypeError(e + " is not a function!");
  return e
 }
}, function(e, t, n) {
 e.exports = n(111)
}, function(e, t, n) {
 n(88), n(90), e.exports = n(56).f("iterator")
}, function(e, t, n) {
 var i = n(50),
  r = n(39);
 e.exports = function(e) {
  return function(t, n) {
   var o, a, s = String(r(t)),
    l = i(n),
    u = s.length;
   return l < 0 || l >= u ? e ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
  }
 }
}, function(e, t, n) {
 "use strict";
 var i = n(51),
  r = n(30),
  o = n(55),
  a = {};
 n(23)(a, n(16)("iterator"), function() {
  return this
 }), e.exports = function(e, t, n) {
  e.prototype = i(a, {
   next: r(1, n)
  }), o(e, t + " Iterator")
 }
}, function(e, t, n) {
 var i = n(15),
  r = n(102),
  o = n(115);
 e.exports = function(e) {
  return function(t, n, a) {
   var s, l = i(t),
    u = r(l.length),
    c = o(a, u);
   if (e && n != n) {
    for (; u > c;)
     if ((s = l[c++]) != s) return !0
   } else
    for (; u > c; c++)
     if ((e || c in l) && l[c] === n) return e || c || 0;
   return !e && -1
  }
 }
}, function(e, t, n) {
 var i = n(50),
  r = Math.max,
  o = Math.min;
 e.exports = function(e, t) {
  return (e = i(e)) < 0 ? r(e + t, 0) : o(e, t)
 }
}, function(e, t, n) {
 var i = n(10).document;
 e.exports = i && i.documentElement
}, function(e, t, n) {
 "use strict";
 var i = n(118),
  r = n(119),
  o = n(40),
  a = n(15);
 e.exports = n(76)(Array, "Array", function(e, t) {
  this._t = a(e), this._i = 0, this._k = t
 }, function() {
  var e = this._t,
   t = this._k,
   n = this._i++;
  return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
 }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function(e, t) {
 e.exports = function() {}
}, function(e, t) {
 e.exports = function(e, t) {
  return {
   value: t,
   done: !!e
  }
 }
}, function(e, t, n) {
 e.exports = n(121)
}, function(e, t, n) {
 n(103), n(125), n(126), n(127), e.exports = n(1).Symbol
}, function(e, t, n) {
 var i = n(35)("meta"),
  r = n(17),
  o = n(12),
  a = n(14).f,
  s = 0,
  l = Object.isExtensible || function() {
   return !0
  },
  u = !n(25)(function() {
   return l(Object.preventExtensions({}))
  }),
  c = function(e) {
   a(e, i, {
    value: {
     i: "O" + ++s,
     w: {}
    }
   })
  },
  d = e.exports = {
   KEY: i,
   NEED: !1,
   fastKey: function(e, t) {
    if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
    if (!o(e, i)) {
     if (!l(e)) return "F";
     if (!t) return "E";
     c(e)
    }
    return e[i].i
   },
   getWeak: function(e, t) {
    if (!o(e, i)) {
     if (!l(e)) return !0;
     if (!t) return !1;
     c(e)
    }
    return e[i].w
   },
   onFreeze: function(e) {
    return u && d.NEED && l(e) && !o(e, i) && c(e), e
   }
  }
}, function(e, t, n) {
 var i = n(28),
  r = n(64),
  o = n(41);
 e.exports = function(e) {
  var t = i(e),
   n = r.f;
  if (n)
   for (var a, s = n(e), l = o.f, u = 0; s.length > u;) l.call(e, a = s[u++]) && t.push(a);
  return t
 }
}, function(e, t, n) {
 var i = n(15),
  r = n(69).f,
  o = {}.toString,
  a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
 e.exports.f = function getOwnPropertyNames(e) {
  return a && "[object Window]" == o.call(e) ? function(e) {
   try {
    return r(e)
   } catch (e) {
    return a.slice()
   }
  }(e) : r(i(e))
 }
}, function(e, t) {}, function(e, t, n) {
 n(57)("asyncIterator")
}, function(e, t, n) {
 n(57)("observable")
}, function(e, t, n) {
 e.exports = n(129)
}, function(e, t, n) {
 n(130), e.exports = n(1).Object.getPrototypeOf
}, function(e, t, n) {
 var i = n(31),
  r = n(59);
 n(63)("getPrototypeOf", function() {
  return function getPrototypeOf(e) {
   return r(i(e))
  }
 })
}, function(e, t, n) {
 n(132), e.exports = n(1).Object.setPrototypeOf
}, function(e, t, n) {
 var i = n(8);
 i(i.S, "Object", {
  setPrototypeOf: n(133).set
 })
}, function(e, t, n) {
 var i = n(17),
  r = n(18),
  o = function(e, t) {
   if (r(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
  };
 e.exports = {
  set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, i) {
   try {
    (i = n(68)(Function.call, n(38).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
   } catch (e) {
    t = !0
   }
   return function setPrototypeOf(e, n) {
    return o(e, n), t ? e.__proto__ = n : i(e, n), e
   }
  }({}, !1) : void 0),
  check: o
 }
}, function(e, t, n) {
 n(135);
 var i = n(1).Object;
 e.exports = function create(e, t) {
  return i.create(e, t)
 }
}, function(e, t, n) {
 var i = n(8);
 i(i.S, "Object", {
  create: n(51)
 })
}, function(e, t, n) {
 var i = n(79);

 function _setPrototypeOf(t, n) {
  return e.exports = _setPrototypeOf = i || function _setPrototypeOf(e, t) {
   return e.__proto__ = t, e
  }, _setPrototypeOf(t, n)
 }
 e.exports = _setPrototypeOf
}, , , function(e, t, n) {
 var i = n(22),
  r = n(29),
  o = n(9)("match");
 e.exports = function(e) {
  var t;
  return i(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e))
 }
}, function(e, t, n) {
 "use strict";
 var i = n(93),
  r = {};
 r[n(9)("toStringTag")] = "z", r + "" != "[object z]" && n(27)(Object.prototype, "toString", function toString() {
  return "[object " + i(this) + "]"
 }, !0)
}, function(e, t, n) {
 e.exports = n(146)
}, , , function(e, t, n) {
 var i = n(43),
  r = n(32);
 e.exports = function(e) {
  return function(t, n) {
   var o, a, s = String(r(t)),
    l = i(n),
    u = s.length;
   return l < 0 || l >= u ? e ? "" : void 0 : (o = s.charCodeAt(l)) < 55296 || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : a - 56320 + (o - 55296 << 10) + 65536
  }
 }
}, function(e, t, n) {
 "use strict";
 var i = n(72);
 n(37)({
  target: "RegExp",
  proto: !0,
  forced: i !== /./.exec
 }, {
  exec: i
 })
}, function(e, t, n) {
 n(147);
 var i = n(1).Object;
 e.exports = function getOwnPropertyDescriptor(e, t) {
  return i.getOwnPropertyDescriptor(e, t)
 }
}, function(e, t, n) {
 var i = n(15),
  r = n(38).f;
 n(63)("getOwnPropertyDescriptor", function() {
  return function getOwnPropertyDescriptor(e, t) {
   return r(i(e), t)
  }
 })
}, function(e, t, n) {
 e.exports = n(149)
}, function(e, t, n) {
 n(150), e.exports = n(1).Reflect.get
}, function(e, t, n) {
 var i = n(38),
  r = n(59),
  o = n(12),
  a = n(8),
  s = n(17),
  l = n(18);
 a(a.S, "Reflect", {
  get: function get(e, t) {
   var n, a, u = arguments.length < 3 ? e : arguments[2];
   return l(e) === u ? e[t] : (n = i.f(e, t)) ? o(n, "value") ? n.value : void 0 !== n.get ? n.get.call(u) : void 0 : s(a = r(e)) ? get(a, t, u) : void 0
  }
 })
}, function(e, t, n) {
 var i = n(3);
 e.exports = function _superPropBase(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e)););
  return e
 }
}, function(e, t, n) {
 n(153), e.exports = n(1).Object.keys
}, function(e, t, n) {
 var i = n(31),
  r = n(28);
 n(63)("keys", function() {
  return function keys(e) {
   return r(i(e))
  }
 })
}, , , function(e, t, n) {
 var i = n(19),
  r = n(61),
  o = n(9)("species");
 e.exports = function(e, t) {
  var n, a = i(e).constructor;
  return void 0 === a || null == (n = i(a)[o]) ? t : r(n)
 }
}, function(e, t) {
 e.exports = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"
}, function(e, t, n) {
 e.exports = n(183)
}, function(e, t, n) {
 var i = n(91),
  r = n(42),
  o = n(160);
 e.exports = function(e) {
  return function(t, n, a) {
   var s, l = i(t),
    u = r(l.length),
    c = o(a, u);
   if (e && n != n) {
    for (; u > c;)
     if ((s = l[c++]) != s) return !0
   } else
    for (; u > c; c++)
     if ((e || c in l) && l[c] === n) return e || c || 0;
   return !e && -1
  }
 }
}, function(e, t, n) {
 var i = n(43),
  r = Math.max,
  o = Math.min;
 e.exports = function(e, t) {
  return (e = i(e)) < 0 ? r(e + t, 0) : o(e, t)
 }
}, function(e, t, n) {
 "use strict";
 var i = n(37),
  r = n(61),
  o = n(62),
  a = n(24),
  s = [].sort,
  l = [1, 2, 3];
 i(i.P + i.F * (a(function() {
  l.sort(void 0)
 }) || !a(function() {
  l.sort(null)
 }) || !n(189)(s)), "Array", {
  sort: function sort(e) {
   return void 0 === e ? s.call(o(this)) : s.call(o(this), r(e))
  }
 })
}, function(e, t, n) {
 e.exports = n(176)
}, , , , , , function(e, t, n) {
 "use strict";
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var i = navigator.userAgent,
  r = {
   webkit: -1 !== i.indexOf("AppleWebKit"),
   firefox: -1 !== i.indexOf("Firefox"),
   ie: /Trident|MSIE/.test(i),
   edge: -1 !== i.indexOf("Edge"),
   mac: -1 !== i.indexOf("Macintosh")
  };
 t.default = r
}, , , , , , , , function(e, t, n) {
 n(177), e.exports = n(1).parseInt
}, function(e, t, n) {
 var i = n(8),
  r = n(178);
 i(i.G + i.F * (parseInt != r), {
  parseInt: r
 })
}, function(e, t, n) {
 var i = n(10).parseInt,
  r = n(179).trim,
  o = n(157),
  a = /^[-+]?0[xX]/;
 e.exports = 8 !== i(o + "08") || 22 !== i(o + "0x16") ? function parseInt(e, t) {
  var n = r(String(e), 3);
  return i(n, t >>> 0 || (a.test(n) ? 16 : 10))
 } : i
}, function(e, t, n) {
 var i = n(8),
  r = n(39),
  o = n(25),
  a = n(157),
  s = "[" + a + "]",
  l = RegExp("^" + s + s + "*"),
  u = RegExp(s + s + "*$"),
  c = function(e, t, n) {
   var r = {},
    s = o(function() {
     return !!a[e]() || "â€‹Â…" != "â€‹Â…" [e]()
    }),
    l = r[e] = s ? t(d) : a[e];
   n && (r[n] = l), i(i.P + i.F * s, "String", r)
  },
  d = c.trim = function(e, t) {
   return e = String(r(e)), 1 & t && (e = e.replace(l, "")), 2 & t && (e = e.replace(u, "")), e
  };
 e.exports = c
}, , function(e, t, n) {
 "use strict";
 n(225);
 var i = n(19),
  r = n(99),
  o = n(20),
  a = /./.toString,
  s = function(e) {
   n(27)(RegExp.prototype, "toString", e, !0)
  };
 n(24)(function() {
  return "/a/b" != a.call({
   source: "a",
   flags: "b"
  })
 }) ? s(function toString() {
  var e = i(this);
  return "/".concat(e.source, "/", "flags" in e ? e.flags : !o && e instanceof RegExp ? r.call(e) : void 0)
 }) : "toString" != a.name && s(function toString() {
  return a.call(this)
 })
}, , function(e, t, n) {
 var i = n(1),
  r = i.JSON || (i.JSON = {
   stringify: JSON.stringify
  });
 e.exports = function stringify(e) {
  return r.stringify.apply(r, arguments)
 }
}, , , , , , function(e, t, n) {
 "use strict";
 var i = n(24);
 e.exports = function(e, t) {
  return !!e && i(function() {
   t ? e.call(null, function() {}, 1) : e.call(null)
  })
 }
}, , , function(e, t, n) {
 "use strict";
 var i = n(37),
  r = n(159)(!0);
 i(i.P, "Array", {
  includes: function includes(e) {
   return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
  }
 }), n(73)("includes")
}, function(e, t, n) {
 "use strict";
 var i = n(37),
  r = n(203);
 i(i.P + i.F * n(204)("includes"), "String", {
  includes: function includes(e) {
   return !!~r(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
  }
 })
}, , , , , , , , , , function(e, t, n) {
 var i = n(139),
  r = n(32);
 e.exports = function(e, t, n) {
  if (i(t)) throw TypeError("String#" + n + " doesn't accept regex!");
  return String(r(e))
 }
}, function(e, t, n) {
 var i = n(9)("match");
 e.exports = function(e) {
  var t = /./;
  try {
   "/./" [e](t)
  } catch (n) {
   try {
    return t[i] = !1, !"/./" [e](t)
   } catch (e) {}
  }
  return !0
 }
}, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
 n(20) && "g" != /./g.flags && n(36).f(RegExp.prototype, "flags", {
  configurable: !0,
  get: n(99)
 })
}, , , , function(e, t, n) {
 "use strict";
 var i = n(0)(n(162));
 e.exports = function EventManager() {
  var e, t = Array.prototype.slice,
   n = {
    actions: {},
    filters: {}
   };

  function _removeHook(e, t, i, r) {
   var o, a, s;
   if (n[e][t])
    if (i)
     if (o = n[e][t], r)
      for (s = o.length; s--;)(a = o[s]).callback === i && a.context === r && o.splice(s, 1);
     else
      for (s = o.length; s--;) o[s].callback === i && o.splice(s, 1);
   else n[e][t] = []
  }

  function _addHook(e, t, i, r, o) {
   var a = {
     callback: i,
     priority: r,
     context: o
    },
    s = n[e][t];
   if (s) {
    var l = !1;
    if (jQuery.each(s, function() {
      if (this.callback === i) return l = !0, !1
     }), l) return;
    s.push(a), s = function _hookInsertSort(e) {
     for (var t, n, i, r = 1, o = e.length; r < o; r++) {
      for (t = e[r], n = r;
       (i = e[n - 1]) && i.priority > t.priority;) e[n] = e[n - 1], --n;
      e[n] = t
     }
     return e
    }(s)
   } else s = [a];
   n[e][t] = s
  }

  function _runHook(e, t, i) {
   var r, o, a = n[e][t];
   if (!a) return "filters" === e && i[0];
   if (o = a.length, "filters" === e)
    for (r = 0; r < o; r++) i[0] = a[r].callback.apply(a[r].context, i);
   else
    for (r = 0; r < o; r++) a[r].callback.apply(a[r].context, i);
   return "filters" !== e || i[0]
  }
  return e = {
   removeFilter: function removeFilter(t, n) {
    return "string" == typeof t && _removeHook("filters", t, n), e
   },
   applyFilters: function applyFilters() {
    var n = t.call(arguments),
     i = n.shift();
    return "string" == typeof i ? _runHook("filters", i, n) : e
   },
   addFilter: function addFilter(t, n, r, o) {
    return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, r = (0, i.default)(r || 10, 10), o), e
   },
   removeAction: function removeAction(t, n) {
    return "string" == typeof t && _removeHook("actions", t, n), e
   },
   doAction: function doAction() {
    var n = t.call(arguments),
     i = n.shift();
    return "string" == typeof i && _runHook("actions", i, n), e
   },
   addAction: function addAction(t, n, r, o) {
    return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, r = (0, i.default)(r || 10, 10), o), e
   }
  }
 }
}, , function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(158)),
  o = i(n(58)),
  a = i(n(4)),
  s = i(n(5)),
  l = i(n(6)),
  u = i(n(3)),
  c = i(n(7)),
  d = function(e) {
   function _default() {
    return (0, a.default)(this, _default), (0, l.default)(this, (0, u.default)(_default).apply(this, arguments))
   }
   return (0, c.default)(_default, e), (0, s.default)(_default, [{
    key: "get",
    value: function get(e, t) {
     var n;
     t = t || {};
     try {
      n = t.session ? sessionStorage : localStorage
     } catch (t) {
      return e ? void 0 : {}
     }
     var i = n.getItem("elementor");
     (i = i ? JSON.parse(i) : {}).__expiration || (i.__expiration = {});
     var r = i.__expiration,
      a = [];
     e ? r[e] && (a = [e]) : a = (0, o.default)(r);
     var s = !1;
     return a.forEach(function(e) {
      new Date(r[e]) < new Date && (delete i[e], delete r[e], s = !0)
     }), s && this.save(i, t.session), e ? i[e] : i
    }
   }, {
    key: "set",
    value: function set(e, t, n) {
     n = n || {};
     var i = this.get(null, n);
     if (i[e] = t, n.lifetimeInSeconds) {
      var r = new Date;
      r.setTime(r.getTime() + 1e3 * n.lifetimeInSeconds), i.__expiration[e] = r.getTime()
     }
     this.save(i, n.session)
    }
   }, {
    key: "save",
    value: function save(e, t) {
     var n;
     try {
      n = t ? sessionStorage : localStorage
     } catch (e) {
      return
     }
     n.setItem("elementor", (0, r.default)(e))
    }
   }]), _default
  }(elementorModules.Module);
 t.default = d
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function _default() {
    return (0, r.default)(this, _default), (0, a.default)(this, (0, s.default)(_default).apply(this, arguments))
   }
   return (0, u.default)(_default, e), (0, o.default)(_default, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       elements: ".elementor-element",
       nestedDocumentElements: ".elementor .elementor-element"
      },
      classes: {
       editMode: "elementor-edit-mode"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors");
     return {
      $elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))
     }
    }
   }, {
    key: "getDocumentSettings",
    value: function getDocumentSettings(e) {
     var t;
     if (this.isEdit) {
      t = {};
      var n = elementor.settings.page.model;
      jQuery.each(n.getActiveControls(), function(e) {
       t[e] = n.attributes[e]
      })
     } else t = this.$element.data("elementor-settings") || {};
     return this.getItems(t, e)
    }
   }, {
    key: "runElementsHandlers",
    value: function runElementsHandlers() {
     this.elements.$elements.each(function(e, t) {
      return elementorFrontend.elementsHandler.runReadyTrigger(t)
     })
    }
   }, {
    key: "onInit",
    value: function onInit() {
     this.$element = this.getSettings("$element"), (0, l.default)((0, s.default)(_default.prototype), "onInit", this).call(this), this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")), this.isEdit ? elementor.settings.page.model.on("change", this.onSettingsChange.bind(this)) : this.runElementsHandlers()
    }
   }, {
    key: "onSettingsChange",
    value: function onSettingsChange() {}
   }]), _default
  }(elementorModules.ViewModule);
 t.default = c
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function baseTabs() {
    return (0, r.default)(this, baseTabs), (0, a.default)(this, (0, s.default)(baseTabs).apply(this, arguments))
   }
   return (0, u.default)(baseTabs, e), (0, o.default)(baseTabs, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       tabTitle: ".elementor-tab-title",
       tabContent: ".elementor-tab-content"
      },
      classes: {
       active: "elementor-active"
      },
      showTabFn: "show",
      hideTabFn: "hide",
      toggleSelf: !0,
      hidePrevious: !0,
      autoExpand: !0
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors");
     return {
      $tabTitles: this.findElement(e.tabTitle),
      $tabContents: this.findElement(e.tabContent)
     }
    }
   }, {
    key: "activateDefaultTab",
    value: function activateDefaultTab() {
     var e = this.getSettings();
     if (e.autoExpand && ("editor" !== e.autoExpand || this.isEdit)) {
      var t = this.getEditSettings("activeItemIndex") || 1,
       n = {
        showTabFn: e.showTabFn,
        hideTabFn: e.hideTabFn
       };
      this.setSettings({
       showTabFn: "show",
       hideTabFn: "hide"
      }), this.changeActiveTab(t), this.setSettings(n)
     }
    }
   }, {
    key: "deactivateActiveTab",
    value: function deactivateActiveTab(e) {
     var t = this.getSettings(),
      n = t.classes.active,
      i = e ? '[data-tab="' + e + '"]' : "." + n,
      r = this.elements.$tabTitles.filter(i),
      o = this.elements.$tabContents.filter(i);
     r.add(o).removeClass(n), o[t.hideTabFn]()
    }
   }, {
    key: "activateTab",
    value: function activateTab(e) {
     var t = this.getSettings(),
      n = t.classes.active,
      i = this.elements.$tabTitles.filter('[data-tab="' + e + '"]'),
      r = this.elements.$tabContents.filter('[data-tab="' + e + '"]');
     i.add(r).addClass(n), r[t.showTabFn]()
    }
   }, {
    key: "isActiveTab",
    value: function isActiveTab(e) {
     return this.elements.$tabTitles.filter('[data-tab="' + e + '"]').hasClass(this.getSettings("classes.active"))
    }
   }, {
    key: "bindEvents",
    value: function bindEvents() {
     var e = this;
     this.elements.$tabTitles.on({
      keydown: function keydown(t) {
       "Enter" === t.key && (t.preventDefault(), e.changeActiveTab(t.currentTarget.getAttribute("data-tab")))
      },
      click: function click(t) {
       t.preventDefault(), e.changeActiveTab(t.currentTarget.getAttribute("data-tab"))
      }
     })
    }
   }, {
    key: "onInit",
    value: function onInit() {
     for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
     (e = (0, l.default)((0, s.default)(baseTabs.prototype), "onInit", this)).call.apply(e, [this].concat(n)), this.activateDefaultTab()
    }
   }, {
    key: "onEditSettingsChange",
    value: function onEditSettingsChange(e) {
     "activeItemIndex" === e && this.activateDefaultTab()
    }
   }, {
    key: "changeActiveTab",
    value: function changeActiveTab(e) {
     var t = this.isActiveTab(e),
      n = this.getSettings();
     !n.toggleSelf && t || !n.hidePrevious || this.deactivateActiveTab(), !n.hidePrevious && t && this.deactivateActiveTab(e), t || this.activateTab(e)
    }
   }]), baseTabs
  }(elementorModules.frontend.handlers.Base);
 t.default = c
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(98);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(7)),
  u = function(e) {
   function BaseLoader() {
    return (0, r.default)(this, BaseLoader), (0, a.default)(this, (0, s.default)(BaseLoader).apply(this, arguments))
   }
   return (0, l.default)(BaseLoader, e), (0, o.default)(BaseLoader, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      isInserted: !1,
      selectors: {
       firstScript: "script:first"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     return {
      $firstScript: jQuery(this.getSettings("selectors.firstScript"))
     }
    }
   }, {
    key: "insertAPI",
    value: function insertAPI() {
     this.elements.$firstScript.before(jQuery("<script>", {
      src: this.getApiURL()
     })), this.setSettings("isInserted", !0)
    }
   }, {
    key: "getVideoIDFromURL",
    value: function getVideoIDFromURL(e) {
     var t = e.match(this.getURLRegex());
     return t && t[1]
    }
   }, {
    key: "onApiReady",
    value: function onApiReady(e) {
     var t = this;
     this.getSettings("isInserted") || this.insertAPI(), this.isApiLoaded() ? e(this.getApiObject()) : setTimeout(function() {
      t.onApiReady(e)
     }, 350)
    }
   }]), BaseLoader
  }(elementorModules.ViewModule);
 t.default = u
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function BackgroundSlideshow() {
    return (0, r.default)(this, BackgroundSlideshow), (0, a.default)(this, (0, s.default)(BackgroundSlideshow).apply(this, arguments))
   }
   return (0, u.default)(BackgroundSlideshow, e), (0, o.default)(BackgroundSlideshow, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      classes: {
       swiperContainer: "elementor-background-slideshow swiper-container",
       swiperWrapper: "swiper-wrapper",
       swiperSlide: "elementor-background-slideshow__slide swiper-slide",
       swiperSlideInner: "elementor-background-slideshow__slide__image",
       kenBurns: "elementor-ken-burns",
       kenBurnsActive: "elementor-ken-burns--active",
       kenBurnsIn: "elementor-ken-burns--in",
       kenBurnsOut: "elementor-ken-burns--out"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("classes"),
      t = {
       $slider: this.$element.find("." + e.swiperContainer)
      };
     return t.$mainSwiperSlides = t.$slider.find("." + e.swiperSlide), t
    }
   }, {
    key: "getSwiperOptions",
    value: function getSwiperOptions() {
     var e = this,
      t = this.getElementSettings(),
      n = {
       grabCursor: !1,
       slidesPerView: 1,
       slidesPerGroup: 1,
       loop: "yes" === t.background_slideshow_loop,
       speed: t.background_slideshow_transition_duration,
       autoplay: {
        delay: t.background_slideshow_slide_duration,
        stopOnLastSlide: !t.background_slideshow_loop
       },
       on: {
        slideChange: function slideChange() {
         e.handleKenBurns()
        }
       }
      };
     switch ("yes" === t.background_slideshow_loop && (n.loopedSlides = this.getSlidesCount()), t.background_slideshow_slide_transition) {
      case "fade":
       n.effect = "fade", n.fadeEffect = {
        crossFade: !0
       };
       break;
      case "slide_down":
       n.autoplay.reverseDirection = !0;
      case "slide_up":
       n.direction = "vertical"
     }
     return n
    }
   }, {
    key: "getInitialSlide",
    value: function getInitialSlide() {
     var e = this.getEditSettings();
     return e.activeItemIndex ? e.activeItemIndex - 1 : 0
    }
   }, {
    key: "handleKenBurns",
    value: function handleKenBurns() {
     var e = this.getSettings();
     this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive), this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide(), this.swiper ? this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.swiperSlideInner) : this.$activeImageBg = jQuery(this.elements.$mainSwiperSlides[0]).children("." + e.classes.swiperSlideInner), this.$activeImageBg.addClass(e.classes.kenBurnsActive)
    }
   }, {
    key: "getSlidesCount",
    value: function getSlidesCount() {
     return this.elements.$slides.length
    }
   }, {
    key: "buildSwiperElements",
    value: function buildSwiperElements() {
     var e = this,
      t = this.getSettings("classes"),
      n = this.getElementSettings(),
      i = "slide_left" === n.background_slideshow_slide_transition ? "ltr" : "rtl",
      r = jQuery("<div>", {
       class: t.swiperContainer,
       dir: i
      }),
      o = jQuery("<div>", {
       class: t.swiperWrapper
      }),
      a = n.background_slideshow_ken_burns,
      s = t.swiperSlideInner;
     if (a) {
      s += " " + t.kenBurns;
      var l = "in" === n.background_slideshow_ken_burns_zoom_direction ? "kenBurnsIn" : "kenBurnsOut";
      s += " " + t[l]
     }
     this.elements.$slides = jQuery(), n.background_slideshow_gallery.forEach(function(n) {
      var i = jQuery("<div>", {
        class: t.swiperSlide
       }),
       r = jQuery("<div>", {
        class: s,
        style: 'background-image: url("' + n.url + '");'
       });
      i.append(r), o.append(i), e.elements.$slides = e.elements.$slides.add(i)
     }), r.append(o), this.$element.prepend(r), this.elements.$backgroundSlideShowContainer = r
    }
   }, {
    key: "initSlider",
    value: function initSlider() {
     1 >= this.getSlidesCount() || (this.swiper = new Swiper(this.elements.$backgroundSlideShowContainer, this.getSwiperOptions()), this.handleKenBurns())
    }
   }, {
    key: "activate",
    value: function activate() {
     this.buildSwiperElements(), this.initSlider()
    }
   }, {
    key: "deactivate",
    value: function deactivate() {
     this.swiper && (this.swiper.destroy(), this.elements.$backgroundSlideShowContainer.remove())
    }
   }, {
    key: "run",
    value: function run() {
     "slideshow" === this.getElementSettings("background_background") ? this.activate() : this.deactivate()
    }
   }, {
    key: "onInit",
    value: function onInit() {
     (0, l.default)((0, s.default)(BackgroundSlideshow.prototype), "onInit", this).call(this), this.getElementSettings("background_slideshow_gallery") && this.run()
    }
   }, {
    key: "onDestroy",
    value: function onDestroy() {
     (0, l.default)((0, s.default)(BackgroundSlideshow.prototype), "onDestroy", this).call(this), this.deactivate()
    }
   }, {
    key: "onElementChange",
    value: function onElementChange(e) {
     "background_background" === e && this.run()
    }
   }]), BackgroundSlideshow
  }(elementorModules.frontend.handlers.Base);
 t.default = c
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
 "use strict";
 var i = n(0);
 n(26), n(80);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(7)),
  u = i(n(480)),
  c = i(n(231)),
  d = i(n(168)),
  f = i(n(481)),
  p = i(n(482)),
  h = n(229),
  g = n(483),
  v = n(500),
  m = n(501),
  y = function(e) {
   function Frontend() {
    var e, t;
    (0, r.default)(this, Frontend);
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
    return (t = (0, a.default)(this, (e = (0, s.default)(Frontend)).call.apply(e, [this].concat(i)))).config = elementorFrontendConfig, t
   }
   return (0, l.default)(Frontend, e), (0, o.default)(Frontend, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       elementor: ".elementor",
       adminBar: "#wpadminbar"
      },
      classes: {
       ie: "elementor-msie"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = {
      window: window,
      $window: jQuery(window),
      $document: jQuery(document),
      $head: jQuery(document.head),
      $body: jQuery(document.body),
      $deviceMode: jQuery("<span>", {
       id: "elementor-device-mode",
       class: "elementor-screen-only"
      })
     };
     return e.$body.append(e.$deviceMode), e
    }
   }, {
    key: "bindEvents",
    value: function bindEvents() {
     var e = this;
     this.elements.$window.on("resize", function() {
      return e.setDeviceModeData()
     })
    }
   }, {
    key: "getElements",
    value: function getElements(e) {
     return this.getItems(this.elements, e)
    }
   }, {
    key: "getPageSettings",
    value: function getPageSettings(e) {
     var t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
     return this.getItems(t, e)
    }
   }, {
    key: "getGeneralSettings",
    value: function getGeneralSettings(e) {
     var t = this.isEditMode() ? elementor.settings.general.model.attributes : this.config.settings.general;
     return this.getItems(t, e)
    }
   }, {
    key: "getCurrentDeviceMode",
    value: function getCurrentDeviceMode() {
     return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
    }
   }, {
    key: "getDeviceSetting",
    value: function getDeviceSetting(e, t, n) {
     for (var i = ["desktop", "tablet", "mobile"], r = i.indexOf(e); r > 0;) {
      var o = t[n + "_" + i[r]];
      if (o) return o;
      r--
     }
     return t[n]
    }
   }, {
    key: "getCurrentDeviceSetting",
    value: function getCurrentDeviceSetting(e, t) {
     return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
    }
   }, {
    key: "isEditMode",
    value: function isEditMode() {
     return this.config.environmentMode.edit
    }
   }, {
    key: "isWPPreviewMode",
    value: function isWPPreviewMode() {
     return this.config.environmentMode.wpPreview
    }
   }, {
    key: "initDialogsManager",
    value: function initDialogsManager() {
     var e;
     this.getDialogsManager = function() {
      return e || (e = new DialogsManager.Instance), e
     }
    }
   }, {
    key: "initOnReadyComponents",
    value: function initOnReadyComponents() {
     this.utils = {
      youtube: new f.default,
      vimeo: new p.default,
      anchors: new v,
      lightbox: new m
     }, this.modules = {
      StretchElement: elementorModules.frontend.tools.StretchElement,
      Masonry: elementorModules.utils.Masonry
     }, this.elementsHandler = new g(jQuery), this.documentsManager = new u.default, this.trigger("components:init")
    }
   }, {
    key: "initOnReadyElements",
    value: function initOnReadyElements() {
     this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
    }
   }, {
    key: "addIeCompatibility",
    value: function addIeCompatibility() {
     var e = "string" == typeof document.createElement("div").style.grid;
     if (d.default.ie || !e) {
      this.elements.$body.addClass(this.getSettings("classes.ie"));
      var t = '<link rel="stylesheet" id="elementor-frontend-css-msie" href="' + this.config.urls.assets + "css/frontend-msie.min.css?" + this.config.version + '" type="text/css" />';
      this.elements.$body.append(t)
     }
    }
   }, {
    key: "setDeviceModeData",
    value: function setDeviceModeData() {
     this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
    }
   }, {
    key: "addListenerOnce",
    value: function addListenerOnce(e, t, n, i) {
     if (i || (i = this.elements.$window), this.isEditMode())
      if (this.removeListeners(e, t, i), i instanceof jQuery) {
       var r = t + "." + e;
       i.on(r, n)
      } else i.on(t, n, e);
     else i.on(t, n)
    }
   }, {
    key: "removeListeners",
    value: function removeListeners(e, t, n, i) {
     if (i || (i = this.elements.$window), i instanceof jQuery) {
      var r = t + "." + e;
      i.off(r, n)
     } else i.off(t, n, e)
    }
   }, {
    key: "debounce",
    value: function debounce(e, t) {
     var n;
     return function() {
      var i = this,
       r = arguments,
       o = function later() {
        n = null, e.apply(i, r)
       },
       a = !n;
      clearTimeout(n), n = setTimeout(o, t), a && e.apply(i, r)
     }
    }
   }, {
    key: "waypoint",
    value: function waypoint(e, t, n) {
     n = jQuery.extend({
      offset: "100%",
      triggerOnce: !0
     }, n);
     return e.elementorWaypoint(function correctCallback() {
      var e = this.element || this,
       i = t.apply(e, arguments);
      return n.triggerOnce && this.destroy && this.destroy(), i
     }, n)
    }
   }, {
    key: "muteMigrationTraces",
    value: function muteMigrationTraces() {
     jQuery.migrateMute = !0, jQuery.migrateTrace = !1
    }
   }, {
    key: "init",
    value: function init() {
     this.hooks = new h, this.storage = new c.default, this.addIeCompatibility(), this.setDeviceModeData(), this.initDialogsManager(), this.isEditMode() && this.muteMigrationTraces(), this.elements.$window.trigger("elementor/frontend/init"), this.initOnReadyElements(), this.initOnReadyComponents()
    }
   }, {
    key: "Module",
    get: function get() {
     return this.isEditMode() && parent.elementorCommon.helpers.deprecatedMethod("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"), elementorModules.frontend.handlers.Base
    }
   }]), Frontend
  }(elementorModules.ViewModule);
 window.elementorFrontend = new y, elementorFrontend.isEditMode() || jQuery(function() {
  return elementorFrontend.init()
 })
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(7)),
  u = i(n(232)),
  c = function(e) {
   function _default() {
    var e, t;
    (0, r.default)(this, _default);
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
    return (t = (0, a.default)(this, (e = (0, s.default)(_default)).call.apply(e, [this].concat(i)))).documents = {}, t.initDocumentClasses(), t.attachDocumentsClasses(), t
   }
   return (0, l.default)(_default, e), (0, o.default)(_default, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       document: ".elementor"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors");
     return {
      $documents: jQuery(e.document)
     }
    }
   }, {
    key: "initDocumentClasses",
    value: function initDocumentClasses() {
     this.documentClasses = {
      base: u.default
     }, elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
    }
   }, {
    key: "addDocumentClass",
    value: function addDocumentClass(e, t) {
     this.documentClasses[e] = t
    }
   }, {
    key: "attachDocumentsClasses",
    value: function attachDocumentsClasses() {
     var e = this;
     this.elements.$documents.each(function(t, n) {
      return e.attachDocumentClass(jQuery(n))
     })
    }
   }, {
    key: "attachDocumentClass",
    value: function attachDocumentClass(e) {
     var t = e.data(),
      n = t.elementorId,
      i = t.elementorType,
      r = this.documentClasses[i] || this.documentClasses.base;
     this.documents[n] = new r({
      $element: e,
      id: n
     })
    }
   }]), _default
  }(elementorModules.ViewModule);
 t.default = c
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(7)),
  u = function(e) {
   function YoutubeLoader() {
    return (0, r.default)(this, YoutubeLoader), (0, a.default)(this, (0, s.default)(YoutubeLoader).apply(this, arguments))
   }
   return (0, l.default)(YoutubeLoader, e), (0, o.default)(YoutubeLoader, [{
    key: "getApiURL",
    value: function getApiURL() {
     return "https://www.youtube.com/iframe_api"
    }
   }, {
    key: "getURLRegex",
    value: function getURLRegex() {
     return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
    }
   }, {
    key: "isApiLoaded",
    value: function isApiLoaded() {
     return window.YT && YT.loaded
    }
   }, {
    key: "getApiObject",
    value: function getApiObject() {
     return YT
    }
   }]), YoutubeLoader
  }(i(n(266)).default);
 t.default = u
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(7)),
  u = function(e) {
   function VimeoLoader() {
    return (0, r.default)(this, VimeoLoader), (0, a.default)(this, (0, s.default)(VimeoLoader).apply(this, arguments))
   }
   return (0, l.default)(VimeoLoader, e), (0, o.default)(VimeoLoader, [{
    key: "getApiURL",
    value: function getApiURL() {
     return "https://player.vimeo.com/api/player.js"
    }
   }, {
    key: "getURLRegex",
    value: function getURLRegex() {
     return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/)?(\d+)([^?&#"'>]?)/
    }
   }, {
    key: "isApiLoaded",
    value: function isApiLoaded() {
     return window.Vimeo
    }
   }, {
    key: "getApiObject",
    value: function getApiObject() {
     return Vimeo
    }
   }]), VimeoLoader
  }(i(n(266)).default);
 t.default = u
}, function(e, t, n) {
 "use strict";
 var i = n(0),
  r = i(n(484)),
  o = i(n(485)),
  a = i(n(486)),
  s = i(n(487)),
  l = i(n(488)),
  u = i(n(489)),
  c = i(n(490)),
  d = i(n(491)),
  f = i(n(492)),
  p = i(n(493)),
  h = i(n(498)),
  g = i(n(499));
 e.exports = function(e) {
  var t = this,
   n = {
    section: p.default,
    column: h.default,
    "accordion.default": r.default,
    "alert.default": o.default,
    "counter.default": a.default,
    "progress.default": s.default,
    "tabs.default": l.default,
    "toggle.default": u.default,
    "video.default": c.default,
    "image-carousel.default": d.default,
    "text-editor.default": f.default
   },
   i = {};
  this.initHandlers = function() {
    ! function addGlobalHandlers() {
     elementorFrontend.hooks.addAction("frontend/element_ready/global", g.default)
    }(),
    function addElementsHandlers() {
     e.each(n, function(e, t) {
      elementorFrontend.hooks.addAction("frontend/element_ready/" + e, t)
     })
    }()
   }, this.addHandler = function(e, t) {
    var n, r = t.$element.data("model-cid");
    if (r) {
     n = e.prototype.getConstructorID(), i[r] || (i[r] = {});
     var o = i[r][n];
     o && o.onDestroy()
    }
    var a = new e(t);
    r && (i[r][n] = a)
   }, this.getHandlers = function(e) {
    return e ? n[e] : n
   }, this.runReadyTrigger = function(t) {
    var n = jQuery(t),
     i = n.attr("data-element_type");
    i && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e), elementorFrontend.hooks.doAction("frontend/element_ready/" + i, n, e), "widget" === i && elementorFrontend.hooks.doAction("frontend/element_ready/" + n.attr("data-widget_type"), n, e))
   },
   function init() {
    t.initHandlers()
   }()
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(233));
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(r.default, {
   $element: e,
   showTabFn: "slideDown",
   hideTabFn: "slideUp"
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(7)),
  u = function(e) {
   function Alert() {
    return (0, r.default)(this, Alert), (0, a.default)(this, (0, s.default)(Alert).apply(this, arguments))
   }
   return (0, l.default)(Alert, e), (0, o.default)(Alert, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       dismissButton: ".elementor-alert-dismiss"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors");
     return {
      $dismissButton: this.$element.find(e.dismissButton)
     }
    }
   }, {
    key: "bindEvents",
    value: function bindEvents() {
     this.elements.$dismissButton.on("click", this.onDismissButtonClick.bind(this))
    }
   }, {
    key: "onDismissButtonClick",
    value: function onDismissButtonClick() {
     this.$element.fadeOut()
    }
   }]), Alert
  }(elementorModules.frontend.handlers.Base);
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(u, {
   $element: e
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(181), n(140), n(98), n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function Counter() {
    return (0, r.default)(this, Counter), (0, a.default)(this, (0, s.default)(Counter).apply(this, arguments))
   }
   return (0, u.default)(Counter, e), (0, o.default)(Counter, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       counterNumber: ".elementor-counter-number"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors");
     return {
      $counterNumber: this.$element.find(e.counterNumber)
     }
    }
   }, {
    key: "onInit",
    value: function onInit() {
     var e = this;
     (0, l.default)((0, s.default)(Counter.prototype), "onInit", this).call(this), elementorFrontend.waypoint(this.elements.$counterNumber, function() {
      var t = e.elements.$counterNumber.data(),
       n = t.toValue.toString().match(/\.(.*)/);
      n && (t.rounding = n[1].length), e.elements.$counterNumber.numerator(t)
     })
    }
   }]), Counter
  }(elementorModules.frontend.handlers.Base);
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(c, {
   $element: e
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function Progress() {
    return (0, r.default)(this, Progress), (0, a.default)(this, (0, s.default)(Progress).apply(this, arguments))
   }
   return (0, u.default)(Progress, e), (0, o.default)(Progress, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       progressNumber: ".elementor-progress-bar"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors");
     return {
      $progressNumber: this.$element.find(e.progressNumber)
     }
    }
   }, {
    key: "onInit",
    value: function onInit() {
     var e = this;
     (0, l.default)((0, s.default)(Progress.prototype), "onInit", this).call(this), elementorFrontend.waypoint(this.elements.$progressNumber, function() {
      var t = e.elements.$progressNumber;
      t.css("width", t.data("max") + "%")
     })
    }
   }]), Progress
  }(elementorModules.frontend.handlers.Base);
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(c, {
   $element: e
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(233));
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(r.default, {
   $element: e,
   toggleSelf: !1
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(233));
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(r.default, {
   $element: e,
   showTabFn: "slideDown",
   hideTabFn: "slideUp",
   hidePrevious: !1,
   autoExpand: "editor"
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(192), n(193), n(80), n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(7)),
  u = function(e) {
   function VideoModule() {
    return (0, r.default)(this, VideoModule), (0, a.default)(this, (0, s.default)(VideoModule).apply(this, arguments))
   }
   return (0, l.default)(VideoModule, e), (0, o.default)(VideoModule, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       imageOverlay: ".elementor-custom-embed-image-overlay",
       video: ".elementor-video",
       videoIframe: ".elementor-video-iframe"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors");
     return {
      $imageOverlay: this.$element.find(e.imageOverlay),
      $video: this.$element.find(e.video),
      $videoIframe: this.$element.find(e.videoIframe)
     }
    }
   }, {
    key: "getLightBox",
    value: function getLightBox() {
     return elementorFrontend.utils.lightbox
    }
   }, {
    key: "handleVideo",
    value: function handleVideo() {
     this.getElementSettings("lightbox") || (this.elements.$imageOverlay.remove(), this.playVideo())
    }
   }, {
    key: "playVideo",
    value: function playVideo() {
     if (this.elements.$video.length) this.elements.$video[0].play();
     else {
      var e = this.elements.$videoIframe,
       t = e.data("lazy-load");
      t && e.attr("src", t);
      var n = e[0].src.replace("&autoplay=0", "");
      if (e[0].src = n + "&autoplay=1", e[0].src.includes("vimeo.com")) {
       var i = e[0].src,
        r = /#t=[^&]*/.exec(i);
       e[0].src = i.slice(0, r.index) + i.slice(r.index + r[0].length) + r[0]
      }
     }
    }
   }, {
    key: "animateVideo",
    value: function animateVideo() {
     this.getLightBox().setEntranceAnimation(this.getCurrentDeviceSetting("lightbox_content_animation"))
    }
   }, {
    key: "handleAspectRatio",
    value: function handleAspectRatio() {
     this.getLightBox().setVideoAspectRatio(this.getElementSettings("aspect_ratio"))
    }
   }, {
    key: "bindEvents",
    value: function bindEvents() {
     this.elements.$imageOverlay.on("click", this.handleVideo.bind(this))
    }
   }, {
    key: "onElementChange",
    value: function onElementChange(e) {
     if (0 !== e.indexOf("lightbox_content_animation")) {
      var t = this.getElementSettings("lightbox");
      "lightbox" !== e || t ? "aspect_ratio" === e && t && this.handleAspectRatio() : this.getLightBox().getModal().hide()
     } else this.animateVideo()
    }
   }]), VideoModule
  }(elementorModules.frontend.handlers.Base);
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(u, {
   $element: e
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function ImageCarouselHandler() {
    return (0, r.default)(this, ImageCarouselHandler), (0, a.default)(this, (0, s.default)(ImageCarouselHandler).apply(this, arguments))
   }
   return (0, u.default)(ImageCarouselHandler, e), (0, o.default)(ImageCarouselHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       carousel: ".elementor-image-carousel-wrapper",
       slideContent: ".swiper-slide"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors"),
      t = {
       $carousel: this.$element.find(e.carousel)
      };
     return t.$swiperSlides = t.$carousel.find(e.slideContent), t
    }
   }, {
    key: "getSlidesCount",
    value: function getSlidesCount() {
     return this.elements.$swiperSlides.length
    }
   }, {
    key: "getSwiperSettings",
    value: function getSwiperSettings() {
     var e = this.getElementSettings(),
      t = +e.slides_to_show || 3,
      n = 1 === t,
      i = n ? 1 : 2,
      r = elementorFrontend.config.breakpoints,
      o = {
       slidesPerView: t,
       loop: "yes" === e.infinite,
       speed: e.speed,
       breakpoints: {}
      };
     o.breakpoints[r.md] = {
      slidesPerView: +e.slides_to_show_mobile || 1,
      slidesPerGroup: +e.slides_to_scroll_mobile || 1
     }, o.breakpoints[r.lg] = {
      slidesPerView: +e.slides_to_show_tablet || i,
      slidesPerGroup: +e.slides_to_scroll_tablet || 1
     }, this.isEdit || "yes" !== e.autoplay || (o.autoplay = {
      delay: e.autoplay_speed,
      disableOnInteraction: !!e.pause_on_hover
     }), !0 === o.loop && (o.loopedSlides = this.getSlidesCount()), n ? (o.effect = e.effect, "fade" === e.effect && (o.fadeEffect = {
      crossFade: !0
     })) : o.slidesPerGroup = +e.slides_to_scroll || 1, e.image_spacing_custom && (o.spaceBetween = e.image_spacing_custom.size);
     var a = "arrows" === e.navigation || "both" === e.navigation,
      s = "dots" === e.navigation || "both" === e.navigation;
     return a && (o.navigation = {
      prevEl: ".elementor-swiper-button-prev",
      nextEl: ".elementor-swiper-button-next"
     }), s && (o.pagination = {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: !0
     }), o
    }
   }, {
    key: "updateSpaceBetween",
    value: function updateSpaceBetween() {
     this.swiper.params.spaceBetween = this.getElementSettings("image_spacing_custom").size || 0, this.swiper.update()
    }
   }, {
    key: "onInit",
    value: function onInit() {
     for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
     (e = (0, l.default)((0, s.default)(ImageCarouselHandler.prototype), "onInit", this)).call.apply(e, [this].concat(n)), !this.elements.$carousel.length || 2 > this.elements.$swiperSlides.length || (this.swiper = new Swiper(this.elements.$carousel, this.getSwiperSettings()))
    }
   }, {
    key: "onElementChange",
    value: function onElementChange(e) {
     0 === e.indexOf("image_spacing_custom") ? this.updateSpaceBetween() : "arrows_position" === e && this.swiper.update()
    }
   }, {
    key: "onEditSettingsChange",
    value: function onEditSettingsChange(e) {
     "activeItemIndex" === e && this.swiper.slideToLoop(this.getEditSettings("activeItemIndex") - 1)
    }
   }]), ImageCarouselHandler
  }(elementorModules.frontend.handlers.Base);
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(c, {
   $element: e
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(98), n(80), n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function TextEditor() {
    return (0, r.default)(this, TextEditor), (0, a.default)(this, (0, s.default)(TextEditor).apply(this, arguments))
   }
   return (0, u.default)(TextEditor, e), (0, o.default)(TextEditor, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       paragraph: "p:first"
      },
      classes: {
       dropCap: "elementor-drop-cap",
       dropCapLetter: "elementor-drop-cap-letter"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors"),
      t = this.getSettings("classes"),
      n = jQuery("<span>", {
       class: t.dropCap
      }),
      i = jQuery("<span>", {
       class: t.dropCapLetter
      });
     return n.append(i), {
      $paragraph: this.$element.find(e.paragraph),
      $dropCap: n,
      $dropCapLetter: i
     }
    }
   }, {
    key: "wrapDropCap",
    value: function wrapDropCap() {
     if (this.getElementSettings("drop_cap")) {
      var e = this.elements.$paragraph;
      if (e.length) {
       var t = e.html().replace(/&nbsp;/g, " "),
        n = t.match(/^ *([^ ] ?)/);
       if (n) {
        var i = n[1],
         r = i.trim();
        if ("<" !== r) {
         this.dropCapLetter = i, this.elements.$dropCapLetter.text(r);
         var o = t.slice(i.length).replace(/^ */, function(e) {
          return new Array(e.length + 1).join("&nbsp;")
         });
         e.html(o).prepend(this.elements.$dropCap)
        }
       }
      }
     } else this.dropCapLetter && (this.elements.$dropCap.remove(), this.elements.$paragraph.prepend(this.dropCapLetter), this.dropCapLetter = "")
    }
   }, {
    key: "onInit",
    value: function onInit() {
     for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
     (e = (0, l.default)((0, s.default)(TextEditor.prototype), "onInit", this)).call.apply(e, [this].concat(n)), this.wrapDropCap()
    }
   }, {
    key: "onElementChange",
    value: function onElementChange(e) {
     "drop_cap" === e && this.wrapDropCap()
    }
   }]), TextEditor
  }(elementorModules.frontend.handlers.Base);
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(c, {
   $element: e
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(267)),
  o = i(n(494)),
  a = i(n(495)),
  s = i(n(496)),
  l = i(n(497));
 t.default = function _default(e) {
  (elementorFrontend.isEditMode() || e.hasClass("elementor-section-stretched")) && elementorFrontend.elementsHandler.addHandler(s.default, {
   $element: e
  }), elementorFrontend.isEditMode() && (elementorFrontend.elementsHandler.addHandler(l.default, {
   $element: e
  }), elementorFrontend.elementsHandler.addHandler(a.default, {
   $element: e
  })), elementorFrontend.elementsHandler.addHandler(o.default, {
   $element: e
  }), elementorFrontend.elementsHandler.addHandler(r.default, {
   $element: e
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(98), n(89), n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function BackgroundVideo() {
    return (0, r.default)(this, BackgroundVideo), (0, a.default)(this, (0, s.default)(BackgroundVideo).apply(this, arguments))
   }
   return (0, u.default)(BackgroundVideo, e), (0, o.default)(BackgroundVideo, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       backgroundVideoContainer: ".elementor-background-video-container",
       backgroundVideoEmbed: ".elementor-background-video-embed",
       backgroundVideoHosted: ".elementor-background-video-hosted"
      }
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = this.getSettings("selectors"),
      t = {
       $backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)
      };
     return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed), t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted), t
    }
   }, {
    key: "calcVideosSize",
    value: function calcVideosSize(e) {
     var t = "16:9";
     "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
     var n = this.elements.$backgroundVideoContainer.outerWidth(),
      i = this.elements.$backgroundVideoContainer.outerHeight(),
      r = t.split(":"),
      o = r[0] / r[1],
      a = n / i > o;
     return {
      width: a ? n : i * o,
      height: a ? n / o : i
     }
    }
   }, {
    key: "changeVideoSize",
    value: function changeVideoSize() {
     var e;
     if (("hosted" === this.videoType || this.player) && ("youtube" === this.videoType ? e = jQuery(this.player.getIframe()) : "vimeo" === this.videoType ? e = jQuery(this.player.element) : "hosted" === this.videoType && (e = this.elements.$backgroundVideoHosted), e)) {
      var t = this.calcVideosSize(e);
      e.width(t.width).height(t.height)
     }
    }
   }, {
    key: "startVideoLoop",
    value: function startVideoLoop(e) {
     var t = this;
     if (this.player.getIframe().contentWindow) {
      var n = this.getElementSettings(),
       i = n.background_video_start || 0,
       r = n.background_video_end;
      if (!n.background_play_once || e) {
       if (this.player.seekTo(i), r) setTimeout(function() {
        t.startVideoLoop(!1)
       }, 1e3 * (r - i + 1))
      } else this.player.stopVideo()
     }
    }
   }, {
    key: "prepareVimeoVideo",
    value: function prepareVimeoVideo(e, t) {
     var n = this,
      i = this.getElementSettings(),
      r = i.background_video_start ? i.background_video_start : 0,
      o = {
       id: t,
       width: this.elements.$backgroundVideoContainer.outerWidth().width,
       autoplay: !0,
       loop: !i.background_play_once,
       transparent: !1,
       playsinline: !1,
       background: !0,
       muted: !0
      };
     this.player = new e.Player(this.elements.$backgroundVideoContainer, o), this.handleVimeoStartEndTimes(i, r), this.player.ready().then(function() {
      jQuery(n.player.element).addClass("elementor-background-video-embed"), n.changeVideoSize()
     })
    }
   }, {
    key: "handleVimeoStartEndTimes",
    value: function handleVimeoStartEndTimes(e, t) {
     var n = this;
     t && this.player.on("play", function(e) {
      0 === e.seconds && n.player.setCurrentTime(t)
     }), this.player.on("timeupdate", function(i) {
      e.background_video_end && e.background_video_end < i.seconds && (e.background_play_once ? n.player.pause() : n.player.setCurrentTime(t)), n.player.getDuration().then(function(r) {
       t && !e.background_video_end && i.seconds > r - .5 && n.player.setCurrentTime(t)
      })
     })
    }
   }, {
    key: "prepareYTVideo",
    value: function prepareYTVideo(e, t) {
     var n = this,
      i = this.elements.$backgroundVideoContainer,
      r = this.getElementSettings(),
      o = e.PlayerState.PLAYING;
     window.chrome && (o = e.PlayerState.UNSTARTED), i.addClass("elementor-loading elementor-invisible"), this.player = new e.Player(this.elements.$backgroundVideoEmbed[0], {
      videoId: t,
      events: {
       onReady: function onReady() {
        n.player.mute(), n.changeVideoSize(), n.startVideoLoop(!0), n.player.playVideo()
       },
       onStateChange: function onStateChange(t) {
        switch (t.data) {
         case o:
          i.removeClass("elementor-invisible elementor-loading");
          break;
         case e.PlayerState.ENDED:
          n.player.seekTo(r.background_video_start || 0), r.background_play_once && n.player.destroy()
        }
       }
      },
      playerVars: {
       controls: 0,
       rel: 0
      }
     })
    }
   }, {
    key: "activate",
    value: function activate() {
     var e, t = this,
      n = this.getElementSettings("background_video_link"),
      i = this.getElementSettings("background_play_once");
     if (-1 !== n.indexOf("vimeo.com") ? (this.videoType = "vimeo", this.apiProvider = elementorFrontend.utils.vimeo) : n.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (this.videoType = "youtube", this.apiProvider = elementorFrontend.utils.youtube), this.apiProvider) e = this.apiProvider.getVideoIDFromURL(n), this.apiProvider.onApiReady(function(n) {
      "youtube" === t.videoType && t.prepareYTVideo(n, e), "vimeo" === t.videoType && t.prepareVimeoVideo(n, e)
     });
     else {
      this.videoType = "hosted";
      var r = this.getElementSettings("background_video_start"),
       o = this.getElementSettings("background_video_end");
      (r || o) && (n += "#t=" + (r || 0) + (o ? "," + o : "")), this.elements.$backgroundVideoHosted.attr("src", n).one("canplay", this.changeVideoSize.bind(this)), i && this.elements.$backgroundVideoHosted.on("ended", function() {
       t.elements.$backgroundVideoHosted.hide()
      })
     }
     elementorFrontend.elements.$window.on("resize", this.changeVideoSize)
    }
   }, {
    key: "deactivate",
    value: function deactivate() {
     "youtube" === this.videoType && this.player.getIframe() || "vimeo" === this.videoType ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"), elementorFrontend.elements.$window.off("resize", this.changeVideoSize)
    }
   }, {
    key: "run",
    value: function run() {
     var e = this.getElementSettings();
     (e.background_play_on_mobile || "mobile" !== elementorFrontend.getCurrentDeviceMode()) && ("video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate())
    }
   }, {
    key: "onInit",
    value: function onInit() {
     for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
     (e = (0, l.default)((0, s.default)(BackgroundVideo.prototype), "onInit", this)).call.apply(e, [this].concat(n)), this.changeVideoSize = this.changeVideoSize.bind(this), this.run()
    }
   }, {
    key: "onElementChange",
    value: function onElementChange(e) {
     "background_background" === e && this.run()
    }
   }]), BackgroundVideo
  }(elementorModules.frontend.handlers.Base);
 t.default = c
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(7)),
  u = function(e) {
   function HandlesPosition() {
    return (0, r.default)(this, HandlesPosition), (0, a.default)(this, (0, s.default)(HandlesPosition).apply(this, arguments))
   }
   return (0, l.default)(HandlesPosition, e), (0, o.default)(HandlesPosition, [{
    key: "isFirstSection",
    value: function isFirstSection() {
     return this.$element.is(".elementor-edit-mode .elementor-top-section:first")
    }
   }, {
    key: "isOverflowHidden",
    value: function isOverflowHidden() {
     return "hidden" === this.$element.css("overflow")
    }
   }, {
    key: "getOffset",
    value: function getOffset() {
     if ("body" === elementor.config.document.container) return this.$element.offset().top;
     var e = jQuery(elementor.config.document.container);
     return this.$element.offset().top - e.offset().top
    }
   }, {
    key: "setHandlesPosition",
    value: function setHandlesPosition() {
     var e = this.isOverflowHidden();
     if (e || this.isFirstSection()) {
      var t = e ? 0 : this.getOffset(),
       n = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
      t < 25 ? (this.$element.addClass("elementor-section--handles-inside"), t < -5 ? n.css("top", -t) : n.css("top", "")) : this.$element.removeClass("elementor-section--handles-inside")
     }
    }
   }, {
    key: "onInit",
    value: function onInit() {
     this.setHandlesPosition(), this.$element.on("mouseenter", this.setHandlesPosition.bind(this))
    }
   }]), HandlesPosition
  }(elementorModules.frontend.handlers.Base);
 t.default = u
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function StretchedSection() {
    return (0, r.default)(this, StretchedSection), (0, a.default)(this, (0, s.default)(StretchedSection).apply(this, arguments))
   }
   return (0, u.default)(StretchedSection, e), (0, o.default)(StretchedSection, [{
    key: "bindEvents",
    value: function bindEvents() {
     var e = this.getUniqueHandlerID();
     elementorFrontend.addListenerOnce(e, "resize", this.stretch), elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element), elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element)
    }
   }, {
    key: "unbindEvents",
    value: function unbindEvents() {
     elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch)
    }
   }, {
    key: "initStretch",
    value: function initStretch() {
     this.stretch = this.stretch.bind(this), this.stretchElement = new elementorModules.frontend.tools.StretchElement({
      element: this.$element,
      selectors: {
       container: this.getStretchContainer()
      }
     })
    }
   }, {
    key: "getStretchContainer",
    value: function getStretchContainer() {
     return elementorFrontend.getGeneralSettings("elementor_stretched_section_container") || window
    }
   }, {
    key: "stretch",
    value: function stretch() {
     this.getElementSettings("stretch_section") && this.stretchElement.stretch()
    }
   }, {
    key: "onInit",
    value: function onInit() {
     var e;
     this.initStretch();
     for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
     (e = (0, l.default)((0, s.default)(StretchedSection.prototype), "onInit", this)).call.apply(e, [this].concat(n)), this.stretch()
    }
   }, {
    key: "onElementChange",
    value: function onElementChange(e) {
     "stretch_section" === e && (this.getElementSettings("stretch_section") ? this.stretch() : this.stretchElement.reset())
    }
   }, {
    key: "onGeneralSettingsChange",
    value: function onGeneralSettingsChange(e) {
     "elementor_stretched_section_container" in e && (this.stretchElement.setSettings("selectors.container", this.getStretchContainer()), this.stretch())
    }
   }]), StretchedSection
  }(elementorModules.frontend.handlers.Base);
 t.default = c
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0, n(98), n(80), n(26);
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function Shapes() {
    return (0, r.default)(this, Shapes), (0, a.default)(this, (0, s.default)(Shapes).apply(this, arguments))
   }
   return (0, u.default)(Shapes, e), (0, o.default)(Shapes, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
     return {
      selectors: {
       container: "> .elementor-shape-%s"
      },
      svgURL: elementorFrontend.config.urls.assets + "shapes/"
     }
    }
   }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
     var e = {},
      t = this.getSettings("selectors");
     return e.$topContainer = this.$element.find(t.container.replace("%s", "top")), e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")), e
    }
   }, {
    key: "getSvgURL",
    value: function getSvgURL(e, t) {
     var n = this.getSettings("svgURL") + t + ".svg";
     return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e]), n
    }
   }, {
    key: "buildSVG",
    value: function buildSVG(e) {
     var t = "shape_divider_" + e,
      n = this.getElementSettings(t),
      i = this.elements["$" + e + "Container"];
     if (i.attr("data-shape", n), n) {
      var r = n;
      this.getElementSettings(t + "_negative") && (r += "-negative");
      var o = this.getSvgURL(n, r);
      jQuery.get(o, function(e) {
       i.empty().append(e.childNodes[0])
      }), this.setNegative(e)
     } else i.empty()
    }
   }, {
    key: "setNegative",
    value: function setNegative(e) {
     this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
    }
   }, {
    key: "onInit",
    value: function onInit() {
     for (var e, t = this, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
     (e = (0, l.default)((0, s.default)(Shapes.prototype), "onInit", this)).call.apply(e, [this].concat(i)), ["top", "bottom"].forEach(function(e) {
      t.getElementSettings("shape_divider_" + e) && t.buildSVG(e)
     })
    }
   }, {
    key: "onElementChange",
    value: function onElementChange(e) {
     var t = e.match(/^shape_divider_(top|bottom)$/);
     if (t) this.buildSVG(t[1]);
     else {
      var n = e.match(/^shape_divider_(top|bottom)_negative$/);
      n && (this.buildSVG(n[1]), this.setNegative(n[1]))
     }
    }
   }]), Shapes
  }(elementorModules.frontend.handlers.Base);
 t.default = c
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(267));
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(r.default, {
   $element: e
  })
 }
}, function(e, t, n) {
 "use strict";
 var i = n(0);
 n(2)(t, "__esModule", {
  value: !0
 }), t.default = void 0;
 var r = i(n(4)),
  o = i(n(5)),
  a = i(n(6)),
  s = i(n(3)),
  l = i(n(44)),
  u = i(n(7)),
  c = function(e) {
   function GlobalHandler() {
    return (0, r.default)(this, GlobalHandler), (0, a.default)(this, (0, s.default)(GlobalHandler).apply(this, arguments))
   }
   return (0, u.default)(GlobalHandler, e), (0, o.default)(GlobalHandler, [{
    key: "getWidgetType",
    value: function getWidgetType() {
     return "global"
    }
   }, {
    key: "animate",
    value: function animate() {
     var e = this.$element,
      t = this.getAnimation();
     if ("none" !== t) {
      var n = this.getElementSettings(),
       i = n._animation_delay || n.animation_delay || 0;
      e.removeClass(t), this.currentAnimation && e.removeClass(this.currentAnimation), this.currentAnimation = t, setTimeout(function() {
       e.removeClass("elementor-invisible").addClass("animated " + t)
      }, i)
     } else e.removeClass("elementor-invisible")
    }
   }, {
    key: "getAnimation",
    value: function getAnimation() {
     return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
    }
   }, {
    key: "onInit",
    value: function onInit() {
     for (var e, t = this, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
     (e = (0, l.default)((0, s.default)(GlobalHandler.prototype), "onInit", this)).call.apply(e, [this].concat(i)), this.getAnimation() && elementorFrontend.waypoint(this.$element, function() {
      return t.animate()
     })
    }
   }, {
    key: "onElementChange",
    value: function onElementChange(e) {
     /^_?animation/.test(e) && this.animate()
    }
   }]), GlobalHandler
  }(elementorModules.frontend.handlers.Base);
 t.default = function _default(e) {
  elementorFrontend.elementsHandler.addHandler(c, {
   $element: e
  })
 }
}, function(e, t, n) {
 "use strict";
 e.exports = elementorModules.ViewModule.extend({
  getDefaultSettings: function getDefaultSettings() {
   return {
    scrollDuration: 500,
    selectors: {
     links: 'a[href*="#"]',
     targets: ".elementor-element, .elementor-menu-anchor",
     scrollable: "html, body"
    }
   }
  },
  getDefaultElements: function getDefaultElements() {
   return {
    $scrollable: jQuery(this.getSettings("selectors").scrollable)
   }
  },
  bindEvents: function bindEvents() {
   elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
  },
  handleAnchorLinks: function handleAnchorLinks(e) {
   var t, n = e.currentTarget,
    i = location.pathname === n.pathname;
   if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
    try {
     t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
    } catch (e) {
     return
    }
    if (t.length) {
     var r = t.offset().top,
      o = elementorFrontend.elements.$wpAdminBar,
      a = jQuery(".elementor-section.elementor-sticky--active");
     o.length > 0 && (r -= o.height()), a.length > 0 && (r -= Math.max.apply(null, a.map(function() {
      return jQuery(this).outerHeight()
     }).get())), e.preventDefault(), r = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", r), this.elements.$scrollable.animate({
      scrollTop: r
     }, this.getSettings("scrollDuration"), "linear")
    }
   }
  },
  onInit: function onInit() {
   elementorModules.ViewModule.prototype.onInit.apply(this, arguments), this.bindEvents()
  }
 })
}, function(e, t, n) {
 "use strict";
 n(26), n(161), n(98), n(80), e.exports = elementorModules.ViewModule.extend({
  oldAspectRatio: null,
  oldAnimation: null,
  swiper: null,
  player: null,
  getDefaultSettings: function getDefaultSettings() {
   return {
    classes: {
     aspectRatio: "elementor-aspect-ratio-%s",
     item: "elementor-lightbox-item",
     image: "elementor-lightbox-image",
     videoContainer: "elementor-video-container",
     videoWrapper: "elementor-fit-aspect-ratio",
     playButton: "elementor-custom-embed-play",
     playButtonIcon: "fa",
     playing: "elementor-playing",
     hidden: "elementor-hidden",
     invisible: "elementor-invisible",
     preventClose: "elementor-lightbox-prevent-close",
     slideshow: {
      container: "swiper-container",
      slidesWrapper: "swiper-wrapper",
      prevButton: "elementor-swiper-button elementor-swiper-button-prev",
      nextButton: "elementor-swiper-button elementor-swiper-button-next",
      prevButtonIcon: "eicon-chevron-left",
      nextButtonIcon: "eicon-chevron-right",
      slide: "swiper-slide"
     }
    },
    selectors: {
     links: "a, [data-elementor-lightbox]",
     slideshow: {
      activeSlide: ".swiper-slide-active",
      prevSlide: ".swiper-slide-prev",
      nextSlide: ".swiper-slide-next"
     }
    },
    modalOptions: {
     id: "elementor-lightbox",
     entranceAnimation: "zoomIn",
     videoAspectRatio: 169,
     position: {
      enable: !1
     }
    }
   }
  },
  getModal: function getModal() {
   return e.exports.modal || this.initModal(), e.exports.modal
  },
  initModal: function initModal() {
   var t = e.exports.modal = elementorFrontend.getDialogsManager().createWidget("lightbox", {
    className: "elementor-lightbox",
    closeButton: !0,
    closeButtonClass: "eicon-close",
    selectors: {
     preventClose: "." + this.getSettings("classes.preventClose")
    },
    hide: {
     onClick: !0
    }
   });
   t.on("hide", function() {
    t.setMessage("")
   })
  },
  showModal: function showModal(e) {
   var t = this,
    n = t.getDefaultSettings().modalOptions;
   t.setSettings("modalOptions", jQuery.extend(n, e.modalOptions));
   var i = t.getModal();
   switch (i.setID(t.getSettings("modalOptions.id")), i.onShow = function() {
    DialogsManager.getWidgetType("lightbox").prototype.onShow.apply(i, arguments), t.setEntranceAnimation()
   }, i.onHide = function() {
    DialogsManager.getWidgetType("lightbox").prototype.onHide.apply(i, arguments), i.getElements("message").removeClass("animated")
   }, e.type) {
    case "image":
     t.setImageContent(e.url);
     break;
    case "video":
     t.setVideoContent(e);
     break;
    case "slideshow":
     t.setSlideshowContent(e.slideshow);
     break;
    default:
     t.setHTMLContent(e.html)
   }
   i.show()
  },
  setHTMLContent: function setHTMLContent(e) {
   this.getModal().setMessage(e)
  },
  setImageContent: function setImageContent(e) {
   var t = this.getSettings("classes"),
    n = jQuery("<div>", {
     class: t.item
    }),
    i = jQuery("<img>", {
     src: e,
     class: t.image
    });
   n.append(i), this.getModal().setMessage(n)
  },
  setVideoContent: function setVideoContent(e) {
   var t, n = this.getSettings("classes"),
    i = jQuery("<div>", {
     class: "".concat(n.videoContainer, " ").concat(n.preventClose)
    }),
    r = jQuery("<div>", {
     class: n.videoWrapper
    }),
    o = this.getModal();
   if ("hosted" === e.videoType) {
    var a = jQuery.extend({
     src: e.url,
     autoplay: ""
    }, e.videoParams);
    t = jQuery("<video>", a)
   } else {
    var s = e.url.replace("&autoplay=0", "") + "&autoplay=1";
    t = jQuery("<iframe>", {
     src: s,
     allowfullscreen: 1
    })
   }
   i.append(r), r.append(t), o.setMessage(i), this.setVideoAspectRatio();
   var l = o.onHide;
   o.onHide = function() {
    l(), o.getElements("message").removeClass("elementor-fit-aspect-ratio")
   }
  },
  setSlideshowContent: function setSlideshowContent(e) {
   var t = jQuery,
    n = this,
    i = n.getSettings("classes"),
    r = i.slideshow,
    o = t("<div>", {
     class: r.container
    }),
    a = t("<div>", {
     class: r.slidesWrapper
    }),
    s = t("<div>", {
     class: r.prevButton + " " + i.preventClose
    }).html(t("<i>", {
     class: r.prevButtonIcon
    })),
    l = t("<div>", {
     class: r.nextButton + " " + i.preventClose
    }).html(t("<i>", {
     class: r.nextButtonIcon
    }));
   e.slides.forEach(function(e) {
    var n = r.slide + " " + i.item;
    e.video && (n += " " + i.video);
    var o = t("<div>", {
     class: n
    });
    if (e.video) {
     o.attr("data-elementor-slideshow-video", e.video);
     var s = t("<div>", {
      class: i.playButton
     }).html(t("<i>", {
      class: i.playButtonIcon
     }));
     o.append(s)
    } else {
     var l = t("<div>", {
       class: "swiper-zoom-container"
      }),
      u = t("<img>", {
       class: i.image + " " + i.preventClose,
       src: e.image
      });
     l.append(u), o.append(l)
    }
    a.append(o)
   }), o.append(a, s, l);
   var u = n.getModal();
   u.setMessage(o);
   var c = u.onShow;
   u.onShow = function() {
    c();
    var i = {
     navigation: {
      prevEl: s,
      nextEl: l
     },
     pagination: {
      clickable: !0
     },
     on: {
      slideChangeTransitionEnd: n.onSlideChange
     },
     grabCursor: !0,
     runCallbacksOnInit: !1,
     loop: !0,
     keyboard: !0
    };
    e.swiper && t.extend(i, e.swiper), n.swiper = new Swiper(o, i), n.setVideoAspectRatio(), n.playSlideVideo()
   }
  },
  setVideoAspectRatio: function setVideoAspectRatio(e) {
   e = e || this.getSettings("modalOptions.videoAspectRatio");
   var t = this.getModal().getElements("widgetContent"),
    n = this.oldAspectRatio,
    i = this.getSettings("classes.aspectRatio");
   this.oldAspectRatio = e, n && t.removeClass(i.replace("%s", n)), e && t.addClass(i.replace("%s", e))
  },
  getSlide: function getSlide(e) {
   return jQuery(this.swiper.slides).filter(this.getSettings("selectors.slideshow." + e + "Slide"))
  },
  playSlideVideo: function playSlideVideo() {
   var e = this,
    t = this.getSlide("active"),
    n = t.data("elementor-slideshow-video");
   if (n) {
    var i, r, o = this.getSettings("classes"),
     a = jQuery("<div>", {
      class: o.videoContainer + " " + o.invisible
     }),
     s = jQuery("<div>", {
      class: o.videoWrapper
     }),
     l = t.children("." + o.playButton);
    a.append(s), t.append(a), -1 !== n.indexOf("vimeo.com") ? (i = "vimeo", r = elementorFrontend.utils.vimeo) : n.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (i = "youtube", r = elementorFrontend.utils.youtube);
    var u = r.getVideoIDFromURL(n);
    r.onApiReady(function(t) {
     "youtube" === i ? e.prepareYTVideo(t, u, a, s, l) : "vimeo" === i && e.prepareVimeoVideo(t, u, a, s, l)
    }), l.addClass(o.playing).removeClass(o.hidden)
   }
  },
  prepareYTVideo: function prepareYTVideo(e, t, n, i, r) {
   var o = this,
    a = this.getSettings("classes"),
    s = jQuery("<div>"),
    l = e.PlayerState.PLAYING;
   i.append(s), window.chrome && (l = e.PlayerState.UNSTARTED), n.addClass("elementor-loading " + a.invisible), this.player = new e.Player(s[0], {
    videoId: t,
    events: {
     onReady: function onReady() {
      r.addClass(a.hidden), n.removeClass(a.invisible), o.player.playVideo()
     },
     onStateChange: function onStateChange(e) {
      e.data === l && n.removeClass("elementor-loading " + a.invisible)
     }
    },
    playerVars: {
     controls: 0,
     rel: 0
    }
   })
  },
  prepareVimeoVideo: function prepareVimeoVideo(e, t, n, i, r) {
   var o = this.getSettings("classes"),
    a = {
     id: t,
     autoplay: !0,
     transparent: !1,
     playsinline: !1
    };
   this.player = new e.Player(i, a), this.player.ready().then(function() {
    r.addClass(o.hidden), n.removeClass(o.invisible)
   })
  },
  setEntranceAnimation: function setEntranceAnimation(e) {
   e = e || elementorFrontend.getCurrentDeviceSetting(this.getSettings("modalOptions"), "entranceAnimation");
   var t = this.getModal().getElements("message");
   this.oldAnimation && t.removeClass(this.oldAnimation), this.oldAnimation = e, e && t.addClass("animated " + e)
  },
  isLightboxLink: function isLightboxLink(e) {
   if ("A" === e.tagName && (e.hasAttribute("download") || !/\.(png|jpe?g|gif|svg)(\?.*)?$/i.test(e.href))) return !1;
   var t = elementorFrontend.getGeneralSettings("elementor_global_image_lightbox"),
    n = e.dataset.elementorOpenLightbox;
   return "yes" === n || t && "no" !== n
  },
  openLink: function openLink(e) {
   var t = e.currentTarget,
    n = jQuery(e.target),
    i = elementorFrontend.isEditMode(),
    r = !!n.closest("#elementor").length;
   if (this.isLightboxLink(t)) {
    if (e.preventDefault(), !i || elementorFrontend.getGeneralSettings("elementor_enable_lightbox_in_editor")) {
     var o = {};
     if (t.dataset.elementorLightbox && (o = JSON.parse(t.dataset.elementorLightbox)), o.type && "slideshow" !== o.type) this.showModal(o);
     else if (t.dataset.elementorLightboxSlideshow) {
      var a = t.dataset.elementorLightboxSlideshow,
       s = jQuery(this.getSettings("selectors.links")).filter(function() {
        var e = jQuery(this);
        return a === this.dataset.elementorLightboxSlideshow && !e.parent(".swiper-slide-duplicate").length && !e.parents(".slick-cloned").length
       }),
       l = [];
      s.each(function() {
       var e = this.dataset.elementorLightboxVideo,
        t = this.dataset.elementorLightboxIndex;
       void 0 === t && (t = s.index(this));
       var n = {
        image: this.href,
        index: t
       };
       e && (n.video = e), l.push(n)
      }), l.sort(function(e, t) {
       return e.index - t.index
      });
      var u = t.dataset.elementorLightboxIndex;
      void 0 === u && (u = s.index(t)), this.showModal({
       type: "slideshow",
       modalOptions: {
        id: "elementor-lightbox-slideshow-" + a
       },
       slideshow: {
        slides: l,
        swiper: {
         initialSlide: +u
        }
       }
      })
     } else this.showModal({
      type: "image",
      url: t.href
     })
    }
   } else i && r && e.preventDefault()
  },
  bindEvents: function bindEvents() {
   elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.openLink)
  },
  onSlideChange: function onSlideChange() {
   this.getSlide("prev").add(this.getSlide("next")).add(this.getSlide("active")).find("." + this.getSettings("classes.videoWrapper")).remove(), this.playSlideVideo()
  }
 })
}]);
