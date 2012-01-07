var test = require('tap').test;
var json = require('../');
var garbage = require('garbage');

test('stringify', function (t) {
    for (var i = 0; i < 50; i++) {
        var obj = garbage(50);
        t.equal(
            json.stringify(obj),
            JSON.stringify(obj)
        );
    }

    // sanitize to toJSON feature of JSON.stringify
    t.equal(json.stringify({toJSON:function(){ return "hello"; }}), '"[SecurityError: user-defined toJSON is not allowed]"');
    
    t.end();
});
