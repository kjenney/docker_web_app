var fs = require('fs');
 
var path = process.cwd();
 
fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});
