/** @license Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl> */

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;

// Cut BEGIN delete
(function()
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
  const /** !Node */ diva = newel("div");

  function /** !Node */ newel(/** string */ n)
  { return D.createElement(n);
  }

  const /** !Object */ g =
  { "abstract2dom":
      function /** !Node */(/** !Array */ tpl,/** !Node= */ node)
      { var /** !Node */ newnodes = node || diva;
	newnodes.innerHTML = abstract2txt(tpl, 1);
	var /** !NodeList<!Element> */ scripts
	 = newnodes.querySelectorAll("script");
	var /** number */ i = 0;
	while (i < scripts.length)
	{ var /** !Node */ olds = scripts[i++];
	  // Clone script tag
          var /** !Node */ ns = D.createElement("script");
          ns.text = olds.text;
          var /** NamedNodeMap<!Attr> */ attrs = olds.attributes;
          var /** number */ j;
          for (j = 0; j < attrs.length; )
          { let /** Attr */ attr = attrs[j++];
            ns.setAttribute(attr.name, attr.value);
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

  if (!O.assign)
    O.defineProperty(O, "assign",
    { "value": function(d, s, i)
      { if (s) for (i in s) d[i] = s[i]; return d;
      }
    });

  const /** string */ rxs = "remixml";

  function /** string */ retit(/** string */ s) { return s; }

  function /** !Object */ factory(/** !Object */ rxml)
  { var ra2t = abstract2txt = rxml["abstract2txt"];
    var ttypes = W.trustedTypes;
    if (ttypes && ttypes.createPolicy)
      // Add TrustedHTML properties to the string from abstract2txt()
      abstract2txt
       = function/** string*/(/** !Array */ abstract,/** number= */ html)
       { return ttypes.createPolicy(rxs,
          { "createHTML": retit })["createHTML"](ra2t(abstract, html));
       }
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
