var readdir = require('./readdir.js');
readdir.scan('',function (fileList) {
    fileList.forEach(function (f) {
        console.log(f);
    });
});
