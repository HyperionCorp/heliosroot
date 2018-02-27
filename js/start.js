$(document).ready(function(){
  $('.parallax').parallax();
});
$(".asdf").sideNav();

var options = [
{selector: '#hel', offset: 200, callback: function() {
  Materialize.showStaggeredList('#hel');
} },
{selector: '#lb', offset: 200, callback: function() {
  Materialize.showStaggeredList('#lb');
} },
{selector: '#wp', offset: 200, callback: function() {
  Materialize.showStaggeredList('#wp');
} },
{selector: '#sh', offset: 200, callback: function() {
  Materialize.showStaggeredList('#sh');
} },
];
Materialize.scrollFire(options);

 $(document).ready(function(){
  $('.tap-target').tapTarget('open');
 });