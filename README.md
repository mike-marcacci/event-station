# [![Event-Station](https://cldup.com/nNDX7LGO96.svg)](http://morrisallison.bitbucket.org/event-station)

A versatile and robust event emitter class.

[![npm Version](https://img.shields.io/npm/v/event-station.svg?style=flat-square)](https://www.npmjs.com/package/event-station)
[![Bower Version](https://img.shields.io/bower/v/event-station.svg?style=flat-square)](http://bower.io/search/?q=event-station)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://bitbucket.org/morrisallison/event-station/raw/default/LICENSE)
[![Codeship Build Status](https://img.shields.io/codeship/4ade98f0-4121-0133-db1d-62bb193b9897.svg?style=flat-square)](https://codeship.com/)
[![Codecov Coverage Status](https://img.shields.io/codecov/c/bitbucket/morrisallison/event-station/default.svg?style=flat-square)](https://codecov.io/bitbucket/morrisallison/event-station/commits)
[![Dependencies Status](https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/event-station)

## Features

* [Versatile API](http://morrisallison.bitbucket.org/event-station/api/) that's flexible and consistent
* [Cross-emitter listening](http://morrisallison.bitbucket.org/event-station/usage.html#cross-emitter-listening), allowing for easier management of many listeners
* [Regular expression listeners](http://morrisallison.bitbucket.org/event-station/usage.html#regular-expression-listeners)
* [Listener modifiers](http://morrisallison.bitbucket.org/event-station/usage.html#listener-modifiers); a fluent interface for modifying listeners
    * Set callbacks and contexts with `calling()` and `using()`
    * Migration with `moveTo()`, `addTo()`, and `removeFrom()`
    * Remove listeners from *all* emitters with `off()`
    * Limit occurrences with `occur()`
    * `pause()`, `resume()`, and `isPaused()`
    * `race()` and `all()` Promises
    * Duplication with `clone()`
* [Browser environment compatible](http://morrisallison.bitbucket.org/event-station/usage.html#browser-usage)
* [Competitive and consistent performance](http://morrisallison.bitbucket.org/event-station/performance.html)
* [Rx](https://www.npmjs.com/package/rx) compatible with `toObservable()`
* `stopPropagation()`
* `extend()` any object
* Global and per-instance `config()` options
* Written in [TypeScript](http://www.typescriptlang.org/)

## Examples

### Using cross-emitter listening with a given context

```javascript
var student = new EventStation();
var teacher = new EventStation();

var book = "Harry Potter";

student.hear(teacher, 'read', function (pageNumber) {
    console.log('Today the class is reading ' + this + ' on page ' + pageNumber + '.');
}, book);

// Logs: "Today the class is reading Harry Potter on page 42."
teacher.emit('read', 42);
```
### Using a listener map and the `addTo()` modifier

```javascript
class MyWorker extends EventStation {}

var worker = new MyWorker();
var secondWorker = new MyWorker();

// Add two listeners to the worker
var listeners = worker.on({
    start: () => console.log("Worker started!"),
    stop:  () => console.log("Worker stopped!"),
});

// Add the exact same listeners to the second worker
listeners.addTo(secondWorker);

// Remove the listeners from both workers
listeners.off();
```

### Chaining listener modifiers

```javascript
new EventStation()
    // Create two listeners
    .on('boom pow')
    // That can occur only twice
    .occur(2)
    // That use the given context
    .using(context)
    // That use the given callback
    .calling(function () {})
    // Make a `Promise` that resolves after one of the listeners is called
    .race()
    .then(function () {
        console.log('Either "boom" or "pow" was emitted.');
    });
```

## Installation

Node.js via [npm](https://www.npmjs.com/package/event-station)

```bash
$ npm install event-station
```

SystemJS via [jspm](http://jspm.io/)

```bash
$ jspm install npm:event-station
```

Web browser via [Bower](http://bower.io/search/?q=event-station)

```bash
$ bower install event-station
```

Web browser via `<script>`

```html
<script src="event-station.js"></script>
```

## Downloads

### Latest Release

* [Build](https://bitbucket.org/morrisallison/event-station/src/default/dist/event-station.js)
<br>Compatible with AMD and CommonJS module loaders
<br>Assigns an `EventStation` global when not imported as a module
* [Minified Build](https://bitbucket.org/morrisallison/event-station/src/default/dist/event-station.min.js)
<br>Build minified with [UglifyJS 2](https://github.com/mishoo/UglifyJS2)
* [Source Map](https://bitbucket.org/morrisallison/event-station/src/default/dist/event-station.min.js.map)
<br>The source map for the minified build
* [Definition](https://bitbucket.org/morrisallison/event-station/src/default/dist/event-station.d.ts)
<br>Generated TypeScript definition

## Documentation

* [Usage documentation](http://morrisallison.bitbucket.org/event-station/usage/)
<br>This guide will explain the general usage of Event-Station.
* [API documentation](http://morrisallison.bitbucket.org/event-station/api/)
<br>Generated using [typedoc](http://typedoc.io/).
* [Module definition](https://bitbucket.org/morrisallison/event-station/src/default/dist/event-station.d.ts)
<br>The associated definition file can also be used as an API reference.

## License

Copyright &copy; 2015 [Morris Allison III](http://morris.xyz).
<br>Released under the [MIT License](https://bitbucket.org/morrisallison/event-station/raw/default/LICENSE).

## References

Event-Station was influenced by [EventEmitter2](https://github.com/asyncly/EventEmitter2) and [Backbone.Events](http://backbonejs.org/#Events).