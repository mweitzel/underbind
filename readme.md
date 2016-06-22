## underbind

Bind JavaScript objects without conntext

### installation

```
$ npm install underbind
```

### example usage

It works just like bind, but without context parameter

```
Function.prototype._bind = require('underbind')

function add() { return Array.prototype.reduce.call(arguments, (a,b) => a+b) }

add(1,2,3)
// -> 6

add._bind(1,2)._bind(3)()
// -> 6
```

### license

MIT
