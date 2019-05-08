$(document).ready(function() {
    $('#salvarUsuarioGrupo').on('click', function() {
        $.ajax({
            url: device.hostname + '/create_objects.fcgi?session=' + session,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                object: 'user_groups',
                values: [
                    {
                        user_id: Number.parseInt($('#grupoUsuarioId').val()),
                        group_id: Number.parseInt($('#grupoId').val())
                    }
                ]
            }),
            success: function(data) {
                usuarioGrupoId = JSON.stringify(data.ids[0]);
            },
            error: function(data) {
                usuarioGrupoId = JSON.stringify(data);
            }
        });
    });

    setInterval(function() {
        if (usuarioGrupoId != $('#usuarioGrupoId').val()) {
            $('#usuarioGrupoId').text(usuarioGrupoId);
        }
    }, 1);
});