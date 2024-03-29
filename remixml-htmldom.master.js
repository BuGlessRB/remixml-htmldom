/** @license Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl> */

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;
/** @define {number} */ var FALSE = 0;

// Cut BEGIN delete
(() =>
{ "use strict";
// Cut END delete

  // Cut BEGIN for externs
  // Cut BEGIN for prepend
  // Cut END for prepend
  // Cut END for externs
  // Cut BEGIN for prepend
  // Cut END for prepend

  const O = Object;
  const D = document;
  const W = window;

  var /** function(!Array,number=):string */ abstract2txt;
  var /** TrustedTypePolicy */ policy;
  const /** !Node */ diva = newel("div");

  function /** !Node */ newel(/** string */ n)
  { return D.createElement(n);
  }

  const /** !Object */ g =
  { "abstract2dom":
      /** !Node */(/** !Array */ tpl,/** !Node= */ node) =>
      { var /** !Node */ newnodes = node || diva;
	var /** TrustedHTML|TrustedScript|TrustedScriptURL|string */ sanitised;
	sanitised = abstract2txt(tpl, 1);
	if (policy)
	  sanitised = policy.createHTML(sanitised);
	newnodes.innerHTML = sanitised;
	var /** !NodeList<!Element> */ scripts
	 = newnodes.querySelectorAll("script");
	var /** number */ i = 0;
	while (i < scripts.length)
	{ var /** !Node */ olds = scripts[i++];
	  // Clone script tag
          var /** !Node */ ns = D.createElement("script");
          sanitised = olds.text;
	  if (policy)
	    sanitised = policy.createScript(sanitised);
          ns.text = /** @type{string} */(sanitised);
          var /** NamedNodeMap<!Attr> */ attrs = olds.attributes;
          var /** number */ j;
          for (j = 0; j < attrs.length; )
          { let /** Attr */ attr = attrs[j++];
	    sanitised = attr.value;
	    if (policy && attr.name === "src")
	      sanitised = policy.createScriptURL(sanitised);
            ns.setAttribute(attr.name, sanitised);
          }
	  // Execute script tag
	  olds.parentNode.replaceChild(ns, olds);
	}
	if (!node)
	{ var /** Range */ k = D.createRange();
          k.selectNodeContents(newnodes);
          newnodes = /** @type {!Node} */(k.extractContents());
	}
	return newnodes;
      }
  };

  const /** string */ rxs = "remixml";

  function /** string */ retit(/** string */ s) { return s; }

  function /** !Object */ factory(/** !Object */ rxml)
  { abstract2txt = rxml["abstract2txt"];
    var ttypes = W.trustedTypes;
    if (ttypes)
      policy = ttypes.createPolicy(rxs,
        { createHTML: retit, createScript: retit, createScriptURL: retit });
    O.assign(rxml, g);
    return g;
  }

  if (typeof define == "function" && define["amd"])
    define("remixml-htmldom", [rxs], factory);
  else if (typeof exports == "object")
    O.assign(/** @type{!Object} */(exports),
     factory(require(rxs)));
  else
    W["RemixmlhtmlDOM"] = factory(W["Remixml"]);

// Cut BEGIN delete
}).call(this);
// Cut BEGIN end
