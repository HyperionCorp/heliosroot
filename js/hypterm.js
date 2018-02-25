var loggedin = false;
var commandwarg = null;
var act = new Audio('activated.ogg');
var acc = new Audio('access.ogg');
var mr = new Audio('mready.ogg');
var mf = new Audio('mfired.ogg');

var dispatchl = new Audio('lbotd.ogg');
var actb = new Audio('lbac.ogg');
var atkb = new Audio('lbat.ogg');
var evb = new Audio('lbev.ogg');
var sdb = new Audio('lbsd.ogg');

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

        if(cmd == "login" && md5(args) == "f4eb586ac200e11eb02e444d489ed522" && loggedin == false){
        	loggedin = true;
        	$('#outputterm').append("Welcome, CEO! You are now logged in!" + "\n");
        	acc.play();


        } 

      	if(cmd == "login" && md5(args) == "ae4ff3cd814e2c65e50928b8130f6673" && loggedin == false){
        	loggedin = true;
        	$('#outputterm').append("Welcome, Vice CEO! You are now logged in!" + "\n");
        	acc.play();


        }

      	if(cmd == "login" && md5(args) == "99d5add11b7a4837a13bd65d653c33ce" && loggedin == false){
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

        if(cmd == "loaders" && args == "dispatch" && loggedin == true){
        	$('#outputterm').append("Loaders dispatched" + "\n");
        	dispatchl.play();


        }

        if(cmd == "loaders" && args == "activate" && loggedin == true){
        	$('#outputterm').append("Loader systems activated" + "\n");
        	actb.play();


        }

        if(cmd == "loaders" && args == "attack" && loggedin == true){
        	$('#outputterm').append("Loader offensive routines loaded" + "\n");
        	atkb.play();


        }

        if(cmd == "loaders" && args == "evac" && loggedin == true){
        	$('#outputterm').append("Loaders evacuated" + "\n");
        	evb.play();


        }

        if(cmd == "loaders" && args == "sd" && loggedin == true){
        	$('#outputterm').append("SELF DESTRUCT LOADERS, BEEP BEEP BEEP BOOM!" + "\n");
        	sdb.play();


        }
    }
});