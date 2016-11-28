/**
 * Created by David on 16/6/25.
 */

var target = "localhost:2048/Main";

$(document).ready(function() {
    $("#Login").click(function() {
        var err = false;
        if(err) {
            //
        } else {
            var info = {
                "Email": $("#Email").val(),
                "Pass": $("#Pass").val()
            };
            $.post(target + "/Login", info, function(data) {
                if(data.states == "Success") {
                    alert("Sign Up Successfully")
                } else {
                    alert("Sign Up Unsuccessfully")
                }
            });
        }
    });
});
