var readdir = require('./readdir.js');
readdir.scan('/etc',function (fileList) {
    fileList.forEach(function (f) {
        console.log(f);
    });
});
