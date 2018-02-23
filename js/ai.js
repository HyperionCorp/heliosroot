    $(document).ready(function(){
      $('.parallax').parallax();
    });
    $(".asdf").sideNav();

    var options = [
	{selector: '#bul', offset: 200, callback: function() {
	  Materialize.showStaggeredList('#bul');
	} },
	{selector: '#clp', offset: 200, callback: function() {
	  Materialize.showStaggeredList('#clp');
	} },
	{selector: '#bdld', offset: 200, callback: function() {
	  Materialize.showStaggeredList('#bdld');
	} },
	];
	Materialize.scrollFire(options);
