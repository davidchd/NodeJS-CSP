/**
 * Created by david on 08/11/2016.
 */

var target = "localhost:2048/Main";

$(document).ready(function() {
    var errMes = $("#Message");
    errMes.hide();
    $("#Button").click(function() {
        var err = false;
        // Email
        var email = $("#Email").val();
        var firstName = $("#first").val();
        var lastName = $("#Last").val();
        var pass = $("#Pass").val();
        // Email
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(filter.test(email)) {
            $("#EmailText").css('color', 'black');
        } else {
            $("#EmailText").css('color', '#FF2D2D');
            err = true;
        }
        // Name
        filter = /^[a-z]{1,10}$/;
        if(filter.test(firstName)) {
            $("#FirstText").css('color', 'black');
        } else {
            $("#FirstText").css('color', '#FF2D2D');
            err = true;
        }
        filter = /^[a-z']{2,10}$/;
        if(filter.test(lastName)) {
            $("#LastText").css('color', 'black');
        } else {
            $("#LastText").css('color', '#FF2D2D');
            err = true;
        }
        //Password
        filter = /^\w{6,}$/;
        if(!filter.test(pass)) {
            $("#PassText").css('color', '#FF2D2D');
            $("#PassConfText").css('color', 'black');
            err = true;
        } else if($("#PassConf").val() != pass) {
            $("#PassText").css('color', 'black');
            $("#PassConfText").css('color', '#FF2D2D');
            err = true;
        } else {
            $("#PassText").css('color', 'black');
            $("#PassConfText").css('color', 'black');
        }
        // Send
        if(err) {
            errMes.show();
        } else {
            errMes.hide();
            var info = {
                "email": email,
                "firstName": firstName,
                "lastName": lastName,
                "pass": pass
            };
            $.post(target + "/Signup", info, function(data) {
                //
            });
        }
    });
});
