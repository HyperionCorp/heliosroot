    $(document).ready(function(){
      $('.parallax').parallax();
    });
    $(".asdf").sideNav();

    var options = [
	{selector: '#helios', offset: 200, callback: function() {
	  Materialize.showStaggeredList('#helios');
	} },
	{selector: '#op', offset: 200, callback: function() {
	  Materialize.showStaggeredList('#op');
	} },
	{selector: '#aicareer', offset: 200, callback: function() {
	  Materialize.showStaggeredList('#aicareer');
	} },
	];
	Materialize.scrollFire(options);
