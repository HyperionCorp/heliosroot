var loggedin = false;
var commandwarg = null;
$(document).keyup(function(event) {
    if ($('#cmdline').is(":focus") && event.key == "Enter" && $('#cmdline').val() != "" && $('#cmdline').val() != null) {
    	commandwarg = $('#cmdline').val();
    	console.log($('#cmdline').val());
        $('#outputterm').append($('#cmdline').val() + "\n");
        $('#outputterm').scrollTop($('#outputterm')[0].scrollHeight);
        var cmdtbl = commandwarg.split("@");
        var cmd = cmdtbl[0];
        var cmdargs = cmdtbl;
		cmdargs.splice(0,1);
		var cmdargs2 = cmdargs.join("@");
		var args = cmdargs2.split("@");
        if(cmd == "login" && args == "706986372" && loggedin == false){
        	loggedin = true;
        	$('#outputterm').append("Welcome, CEO! You are now logged in!" + "\n");


        } 

      	if(cmd == "login" && args == "2163592584" && loggedin == false){
        	loggedin = true;
        	$('#outputterm').append("Welcome, Vice CEO! You are now logged in!" + "\n");


        }

		if(cmd == "help"){
			$('#outputterm').append("Helios Terminal Help v0.1" + "\n" + "login <@args> - log in as CEO or Vice CEO" + "\n");
        }
    }
});