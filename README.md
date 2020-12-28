<h1>Remixml to DOM rendering</h1>

[![NPM version](http://img.shields.io/npm/v/remixml-htmldom.svg?style=flat)](https://npmjs.org/package/remixml-htmldom)
[![Downloads](https://img.shields.io/npm/dm/remixml-htmldom.svg?style=flat)](https://npmjs.org/package/remixml-htmldom)
[![Rate on Openbase](https://badges.openbase.io/js/rating/remixml-htmldom.svg)](https://openbase.io/js/remixml-htmldom?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

Remixml component that renders directly to the DOM in browsers.

Converts to HTML first, then uses innerHTML to get the browser to convert it.
The performance might be slightly higher than with `remixml-dom`, but
it is hampered by the
pseudo-smart parsing rules that the browser HTML parser imposes, i.e.
some DOM structures cannot be created (e.g. a div nested inside a p tag
is not possible).

## Requirements

It runs inside any webbrowser or NodeJS environment.

## Reference documentation

- `Remixmlhtmldom.abstract2dom(abstract, node?)`<br />
  Converts a DOM `abstract` into DOM nodes.  If the optional `node` argument
  is specified, it replaces the children of `node` with the content
  described in DOM `abstract`.  Returns `node` if specified, or the new
  nodes.

## References

- Postprocessor for the high performance Javascript templating engine
  [Remixml](http://remixml.org/).
- Compatible with the
  fastest [lockandload AMD-loader](https://www.npmjs.com/package/lockandload).

Card-carrying member of the `zerodeps` movement.
