var socket = io.connect(),
    id = null;

socket.on('connect',function () {
    id = socket.socket.sessionid;
    var filelist = $("#filelist");
    
    filelist.parent()
        .on('drop',function (e) {
            return false;
        })
        .on('dropenter dragover',function () {
            return false;
        });

    socket.on(id,function (data) {
        filelist.empty().trigger("add-files");
        $.each(data,function (index,fileName) {
            $("li").text(fileName).appendTo(filelist);
        });
    });
});

$(function () {
    var dropArea = $('#target'),
        h2 = dropArea.find('> h2');
    dropArea.on('drop',function (e) {
        return false;
    });
    h2.css({
        'marginTop' : "-" + (h2.outerHeight() / 2) + "px",
        'marginLeft': "-" + (h2.outerWidth() / 2) + "px",
        'opacity'   : '0.6'
    });
    $("#filelist")
        .empty()
        .on('add-files',function () {
            h2.fadeTo(1000,'0.1');
        });
});
