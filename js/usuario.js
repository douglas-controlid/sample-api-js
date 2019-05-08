$(document).ready(function() {
    $('#salvarUsuario').on('click', function() {
        $.ajax({
            url: device.hostname + '/create_objects.fcgi?session=' + session,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                object: 'users',
                values: [
                    {
                        name: $('#usuarioNome').val(),
                        registration: ''
                    }
                ]
            }),
            success: function(data) {
                usuarioId = JSON.stringify(data.ids[0]);
            },
            error: function(data) {
                usuarioId = JSON.stringify(data);
            }
        });
    });

    setInterval(function() {
        if (usuarioId != $('#usuarioId').text()) {
            $('#usuarioId').text(usuarioId);
        }
    }, 1);
});