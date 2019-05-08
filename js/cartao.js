$(document).ready(function() {
    $('#salvarCartao').on('click', function() {
        $.ajax({
            url: device.hostname + '/create_objects.fcgi?session=' + session,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                object: 'cards',
                values: [
                    {
                        value: Number.parseInt($('#cartaoNumeroCalculado').text()),
                        user_id: Number.parseInt($('#cartaoUsuarioId').val())
                    }
                ]
            }),
            success: function(data) {
                cartaoId = JSON.stringify(data.ids[0]);
            },
            error: function(data) {
                cartaoId = JSON.stringify(data);
            }
        });
    });

    setInterval(function() {
        if (cartaoId != $('#cartaoId').text()) {
            $('#cartaoId').text(cartaoId);
        }
    }, 1);

    $('#cartaoNumeroAntesVirgula,#cartaoNumeroDepoisVirgula').on('change keyup', function() {
        var cartaoNumeroAntesVirgula = $('#cartaoNumeroAntesVirgula').val() != '' ? Number.parseInt($('#cartaoNumeroAntesVirgula').val()) : 0;
        var cartaoNumeroDepoisVirgula = $('#cartaoNumeroDepoisVirgula').val() != '' ? Number.parseInt($('#cartaoNumeroDepoisVirgula').val()) : 0;

        $('#cartaoNumeroCalculado').text(((cartaoNumeroAntesVirgula * (2 ** 32)) + cartaoNumeroDepoisVirgula));
    });
});