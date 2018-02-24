var loggedin = false;
var commandwarg = null;
var act = new Audio('activated.ogg');
var acc = new Audio('access.ogg');
var mr = new Audio('mready.ogg');
var mf = new Audio('mfired.ogg');
$(".asdf").sideNav();
$('document').ready(function(){act.play();});

$(document).keyup(function(event) {
    if ($('#cmdline').is(":focus") && event.key == "Enter" && $('#cmdline').val() != "" && $('#cmdline').val() != null) {
    	commandwarg = $('#cmdline').val();
    	console.log($('#cmdline').val());
        $('#outputterm').append($('#cmdline').val() + "\n");
        $('#outputterm').scrollTop($('#outputterm')[0].scrollHeight);
        document.getElementById("cmdline").value = document.getElementById("cmdline").defaultValue;
        var cmdtbl = commandwarg.split("@");
        var cmd = cmdtbl[0];
        var cmdargs = cmdtbl;
		cmdargs.splice(0,1);
		var cmdargs2 = cmdargs.join("@");
		var args = cmdargs2.split("@");

        if(cmd == "login" && args == "706986372" && loggedin == false){
        	loggedin = true;
        	$('#outputterm').append("Welcome, CEO! You are now logged in!" + "\n");
        	acc.play();


        } 

      	if(cmd == "login" && args == "2163592584" && loggedin == false){
        	loggedin = true;
        	$('#outputterm').append("Welcome, Vice CEO! You are now logged in!" + "\n");
        	acc.play();


        }

      	if(cmd == "login" && args == "4466393774" && loggedin == false){
        	loggedin = true;
        	$('#outputterm').append("Welcome, Commander of the Weaponry! You are now logged in!" + "\n");
        	acc.play();


        }


        if(cmd == "mshot" && args == "trace" && loggedin == true){
        	$('#outputterm').append("Moonshot tracing... Ready to fire" + "\n");
        	mr.play();


        }

        if(cmd == "mshot" && args == "fire" && loggedin == true){
        	$('#outputterm').append("Moonshot fired!" + "\n");
        	mf.play();


        }
    }
});