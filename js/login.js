$(document).ready(function() {
    $('#hostname').val(device.hostname);

    const auth = {
        login: 'admin',
        password: 'admin'
    };

    $('#adminLogin').on('keyup', function() {
        auth.login = this.value
    });

    $('#adminPassword').on('keyup', function() {
        auth.password = this.value
    });

    $('#hostname').on('keyup', function() {
        device.hostname = this.value
    });

    $('#conectar').on('click', function() {
        $.ajax({
            url: device.hostname + '/login.fcgi',
            method: 'POST',
            data: {
                login: auth.login,
                password: auth.password
            },
            success: function(data) {
                session = data.session;
            },
            error: function(data) {
                session = JSON.stringify(data);
            }
        });
    });

    setInterval(function() {
        if (session != $('#sessaoLogin').text()) {
            $('#sessaoLogin').text(session);
        }
    }, 1);
});