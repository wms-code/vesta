function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function showIoLog(){
    $(".l-content .l-center").css("margin-right", 240);
    $(".to-top").css("right", 285);
    $(".to-shortcuts").css("right", 330);
    $(".io-log").css("right", 0);

    $.ajax({url: "/list/log/", success: function(result){
            $( ".io-log div" ).remove();
            $($(result).find('.l-center.units')).insertAfter(".io-log h2");
            $( ".io-log div" ).removeClass();
    }});
}

function hideIoLog(){
    $(".l-content .l-center").css("margin-right", 40);
    $(".to-top").css("right", 85);
    $(".to-shortcuts").css("right", 130);
    $(".io-log").css("right", -200);
}

function checkCookie() {
    iolog = getCookie("iolog");
    // alert(iolog);
    if (iolog === '1') {
        showIoLog();
        return 1;
    } else {
        setCookie("iolog", 0, 365);
        return 0;
    }
}

var iohtml = '<div class="io-box clearfix">\n' +
    '        <div class="io-box-left clearfix">\n' +
    '          <div class="io-box-left-items io-apache">\n' +
    '            <a href="https://www.apache.org" target="_blank">Apache</a>\n' +
    '            <span class="io-description">PHP 7.X</span>\n' +
    '          </div>\n' +
    '          <div class="io-box-left-items io-backup">\n' +
    '            <a href="/list/backup/" target="_self">BackUp</a>\n' +
    '            <span class="io-description">Everyday</span>\n' +
    '          </div>\n' +
    '          <div class="io-box-left-items io-webmail">\n' +
    '            <a href="https://roundcube.net" target="_blank">WebMail</a>\n' +
    '            <span class="io-description">E-mail Manager</span>\n' +
    '          </div>\n' +
    '          <div class="io-box-left-items io-nginx">\n' +
    '            <a href="https://nginx.org" target="_blank">Nginx</a>\n' +
    '            <span class="io-description">Reverse Proxy</span>\n' +
    '          </div>\n' +
    '          <div class="io-box-left-items io-phpmyadmin">\n' +
    '            <a href="https://www.phpmyadmin.net" target="_blank">phpMyAdmin</a>\n' +
    '            <span class="io-description">Database Manager</span>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="io-box-right io-banner clearfix">\n' +
    '          <a href="https://iotheme.com" target="_blank"><img src="/images/banner2.png" alt="iotheme.com"></a>\n' +
    '        </div>\n' +
    '      </div>';

$(document).ready(function(){
    setTimeout(checkCookie, 1);
    $( ".body-user .l-content > .l-center.units" ).first().prepend( iohtml );
    $( ".io-log" ).on( "click", function() {

        if(checkCookie() === 1){
            setCookie("iolog", 0, 365);
            hideIoLog();
        }else{
            setCookie("iolog", 1, 365);
            showIoLog();
        }

    });
});

