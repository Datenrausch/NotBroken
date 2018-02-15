//<![CDATA[
$(window).load(function(){
var parallax = {
    init: function(){
		parallax.scroll('.title1',0.8); 
        parallax.scroll('.title2',0.75);
		parallax.scroll('.title3',0.69); 
        parallax.scroll('.title4',0.62);
	    parallax.scroll('.title5',0.64);
		parallax.scroll('.title6',0.67); 
        parallax.scroll('.title7',0.66);
		parallax.scroll('.title8',0.6); 
        parallax.scroll('.title9',0.57);
	    parallax.scroll('.title10',0.50);
		parallax.scroll('.title11',0.54); 
        parallax.scroll('.title12',0.51);
		parallax.scroll('.title13',0.7); 
        parallax.scroll('.title14',0.6);
	    parallax.scroll('.title15',0.65);
		parallax.scroll('.title16',0.46); 
        parallax.scroll('.title17',0.5);
		parallax.scroll('.title18',0.39); 
        parallax.scroll('.title19',0.43);
		parallax.scroll('.title20',0.55);
	    parallax.scroll('.title21',0.53);
		parallax.scroll('.title22',0.57); 
        parallax.scroll('.title23',0.62);
		parallax.scroll('.title24',0.65); 
        parallax.scroll('.title25',0.9);
    },
    scroll: function(el,speed){
        var $window = $(window);
        var bodyHeight = $('body').height();
        $(el).each(function(){
            var $this = $(this);
            
            //get the original y position for later use.
            var iniPos = parseInt($this.css('top'));
            
            $window.bind('scroll', function() {
                
                //get the current scroll position
                var scrollTop=$window.scrollTop(); 
                
                //convert the scroll position into a percentage value, using scrollTop divided by the total height of the document body (not window)
                var percentage = Math.round((scrollTop/bodyHeight)*-150);
                
                //calculate the new y position with the speed variable. 0.65 means to decrease the number of units to 65%, therefore moving the element more per 'scroll'. Default is at 100%.
                var pos = -percentage/(100*speed) * bodyHeight + iniPos;
                //apply the new position!
                $this.css('top', pos);
              
                
            });
        });
    }
};
$(document).ready(parallax.init());
});//]]> 

window.onload=function(){
document.querySelector('#data_stunden_woche').addEventListener('input', function rangeChange() {
  // trigger the CSS to update
  this.setAttribute('value', this.value);
});
document.querySelector('#data_tag_monat').addEventListener('input', function rangeChange() {
  // trigger the CSS to update
  this.setAttribute('value', this.value);
});
document.querySelector('#data_stunden_tag').addEventListener('input', function rangeChange() {
  // trigger the CSS to update
  this.setAttribute('value', this.value);
});
document.querySelector('#data_laenge_text').addEventListener('input', function rangeChange() {
  // trigger the CSS to update
  this.setAttribute('value', this.value);
});
document.querySelector('#data_laenge_audio').addEventListener('input', function rangeChange() {
  // trigger the CSS to update
  this.setAttribute('value', this.value);
});
document.querySelector('#data_laenge_video').addEventListener('input', function rangeChange() {
  // trigger the CSS to update
  this.setAttribute('value', this.value);
});
document.querySelector('#data_zeit').addEventListener('input', function rangeChange() {
  // trigger the CSS to update
  this.setAttribute('value', this.value);
});
document.querySelector('#data_athmosphaere').addEventListener('input', function rangeChange() {
  // trigger the CSS to update
  this.setAttribute('value', this.value);
});
document.querySelector('#data_zusammenarbeit').addEventListener('input', function rangeChange() {
  // trigger the CSS to update
  this.setAttribute('value', this.value);
});
}
