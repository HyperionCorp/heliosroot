    $(document).ready(function(){
      $('.parallax').parallax();
    });
    $(".asdf").sideNav();

    var options = [
	{selector: '#spikes', offset: 200, callback: function() {
	  Materialize.showStaggeredList('#spikes');
	} },
	{selector: '#power', offset: 200, callback: function() {
	  Materialize.showStaggeredList('#power');
	} },
	{selector: '#defense', offset: 200, callback: function() {
	  Materialize.showStaggeredList('#defense');
	} },
	];
	Materialize.scrollFire(options);
