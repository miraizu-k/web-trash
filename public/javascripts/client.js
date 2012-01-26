var socket = io.connect(),
    id = null;

socket.on('connect',function () {
    id = socket.socket.sessionid;
    
    socket.on(message,function (data) {
        $("#filelist").empty();
        $.each(data,function (index,fileName) {
            $("li")
        });
    });
});
