
var css = '.range::-webkit-slider-runnable-track{background:linear-gradient(90deg,#3498db {value}%,#ecf0f1 0)}'
/*
var outputhappiness = document.getElementById('outputhappiness')
var inputhappiness = document.getElementById('data_athmosphaere')
var stylehappiness = document.getElementById('style-happiness')
*/

var outputtime = document.getElementById('outputtime')
var inputtime = document.getElementById('data_zeit')
var styletime = document.getElementById('style-time')

var outputtext = document.getElementById('outputtext')
var inputtext = document.getElementById('data_laenge_text')
var styletext = document.getElementById('style-text')

var outputaudio = document.getElementById('outputaudio')
var inputaudio = document.getElementById('data_laenge_audio')
var styleaudio = document.getElementById('style-audio')

var outputvideo = document.getElementById('outputvideo')
var inputvideo = document.getElementById('data_laenge_video')
var stylevideo = document.getElementById('style-audio')

var outputhourweek = document.getElementById('outputhourweek')
var inputhourweek = document.getElementById('data_stunden_woche')
var stylehourweek = document.getElementById('style-hour-week')

var outputdaymonth = document.getElementById('outputdaymonth')
var inputdaymonth = document.getElementById('data_tag_monat')
var styledaymonth = document.getElementById('style-day-month')

var outputhourday = document.getElementById('outputhourday')
var inputhourday = document.getElementById('data_stunden_tag')
var stylehourday = document.getElementById('style-hour-day')

/*
inputhappiness.addEventListener('input', rangehappiness)
inputhappiness.addEventListener('change', rangehappiness)
*/

inputtime.addEventListener('input', rangetime)
inputtime.addEventListener('change', rangetime)

inputtext.addEventListener('input', rangetext)
inputtext.addEventListener('change', rangetext)

inputaudio.addEventListener('input', rangeaudio)
inputaudio.addEventListener('change', rangeaudio)

inputvideo.addEventListener('input', rangevideo)
inputvideo.addEventListener('change', rangevideo)

inputhourweek.addEventListener('input', rangehourweek)
inputhourweek.addEventListener('change', rangehourweek)

inputdaymonth.addEventListener('input', rangedaymonth)
inputdaymonth.addEventListener('change', rangedaymonth)

inputhourday.addEventListener('input', rangehourday)
inputhourday.addEventListener('change', rangehourday)

/*
function rangehappiness(event) {
  outputhappiness.textContent = event.target.value
  stylehappiness.textContent = css.replace('{value}', Math.round(event.target.value / 3.6))
}
*/

function rangetime(event) {
  outputtime.textContent = event.target.value
  styletime.textContent = css.replace('{value}', Math.round(event.target.value / 3.6))
}

function rangetext(event) {
  outputtext.textContent = event.target.value
  styletext.textContent = css.replace('{value}', Math.round(event.target.value / 3.6))
}

function rangeaudio(event) {
  outputaudio.textContent = event.target.value
  styleaudio.textContent = css.replace('{value}', Math.round(event.target.value / 3.6))
}

function rangevideo(event) {
  outputvideo.textContent = event.target.value
  stylevideo.textContent = css.replace('{value}', Math.round(event.target.value / 3.6))
}

function rangehourweek(event) {
  outputhourweek.textContent = event.target.value
  stylevideo.textContent = css.replace('{value}', Math.round(event.target.value / 3.6))
}

function rangedaymonth(event) {
  outputdaymonth.textContent = event.target.value
  stylevideo.textContent = css.replace('{value}', Math.round(event.target.value / 3.6))
}

function rangehourday(event) {
  outputhourday.textContent = event.target.value
  stylevideo.textContent = css.replace('{value}', Math.round(event.target.value / 3.6))
}

function festfunction() {
	var element = document.getElementById("data_submit");
	element.disabled = false;
	
	var element = document.getElementById("data_gehalt");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_stunden_woche");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("break-1");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_tag_monat");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_stunden_tag");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_honorar");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_format_text_audio_video");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_format_text_audio_video");
	element.classList.remove("alert-switch");

	var element = document.getElementById("pre-data_laenge_text");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_laenge_audio");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_laenge_video");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("pre-data_genre");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_genre");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_verbreitung_analog_digital_beides");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_zeit");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("banner-left-2");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("banner-left-shadow-2");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("banner-left-triangle");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("data_position");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_position");
    element.classList.add("show");
    element.classList.remove("hide");	

	var element = document.getElementById("pre-data_erfahrung_jahr_1_3_5");
    element.classList.add("show");
    element.classList.remove("hide");
	element.classList.remove("experience-right");

	var element = document.getElementById("pre-data_athmosphaere");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_kommentar");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("disclaimer");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_checkbox");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("data_submit");
    element.classList.add("show");
    element.classList.remove("hide");

	document.getElementById("data_format_text").checked = false;
	document.getElementById("data_format_audio").checked = false;
	document.getElementById("data_format_video").checked = false;
};

function pauschalfunction() {
	var element = document.getElementById("data_submit");
	element.disabled = false;
	
	var element = document.getElementById("data_gehalt");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_stunden_woche");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("break-1");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_tag_monat");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_stunden_tag");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("data_honorar");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_format_text_audio_video");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_format_text_audio_video");
	element.classList.remove("alert-switch");

	var element = document.getElementById("pre-data_laenge_text");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_laenge_audio");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_laenge_video");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("pre-data_genre");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_genre");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_verbreitung_analog_digital_beides");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_zeit");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("banner-left-2");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("banner-left-shadow-2");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("banner-left-triangle");
    element.classList.add("show");
    element.classList.remove("hide");
	
	var element = document.getElementById("pre-data_position");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("data_position");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_erfahrung_jahr_1_3_5");
    element.classList.add("show");
    element.classList.remove("hide");
	element.classList.remove("experience-right");

	var element = document.getElementById("pre-data_athmosphaere");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_kommentar");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("disclaimer");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_checkbox");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("data_submit");
    element.classList.add("show");
    element.classList.remove("hide");

	document.getElementById("data_format_text").checked = false;
	document.getElementById("data_format_audio").checked = false;
	document.getElementById("data_format_video").checked = false;
};

function freifunction() {
	var element = document.getElementById("data_submit");
	element.disabled = false;

	var element = document.getElementById("data_gehalt");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_stunden_woche");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("break-1");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_tag_monat");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_stunden_tag");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_honorar");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_format_text_audio_video");
    element.classList.add("show");
    element.classList.remove("hide");
	
	var element = document.getElementById("pre-data_genre");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("data_genre");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_verbreitung_analog_digital_beides");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_zeit");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("banner-left-2");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("banner-left-shadow-2");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("banner-left-triangle");
    element.classList.add("show");
    element.classList.remove("hide");
	
	var element = document.getElementById("pre-data_position");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_position");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_erfahrung_jahr_1_3_5");
    element.classList.add("experience-right");
	element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_athmosphaere");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_kommentar");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("disclaimer");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_checkbox");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("data_submit");
    element.classList.add("show");
    element.classList.remove("hide");
}

function textfunction() {
	var element = document.getElementById("pre-data_laenge_text");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_laenge_audio");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_laenge_video");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_format_text_audio_video");
	element.classList.remove("alert-switch");

}

function audiofunction() {
	var element = document.getElementById("pre-data_laenge_text");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_laenge_audio");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("pre-data_laenge_video");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_format_text_audio_video");
	element.classList.remove("alert-switch");
}

function videofunction() {
	var element = document.getElementById("pre-data_laenge_text");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_laenge_audio");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("pre-data_laenge_video");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("data_format_text_audio_video");
	element.classList.remove("alert-switch");
}

function getfunction() {
	var element = document.getElementById("analyse_submit");
	element.disabled = false;

	var element = document.getElementById("media-analyse");
    element.classList.remove("alert");
}

/*
function getfunctionpauschal() {
	var element = document.getElementById("analyse_submit");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("question-4");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("question-5");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("question-6");
    element.classList.add("hide");
    element.classList.remove("show");
}

function getfunctionfrei() {
	var element = document.getElementById("analyse_submit");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("question-4");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("question-5");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("question-6");
    element.classList.add("hide");
    element.classList.remove("show");
}
*/



function alertoffdatamedium() {
	var element = document.getElementById("data_medium");
    element.classList.remove("alert");
}

function alertoffdataloan() {
	var element = document.getElementById("data_honorar");
    element.classList.remove("alert");
}

function alertoffdatasalary() {
	var element = document.getElementById("data_gehalt");
    element.classList.remove("alert");
}

function alertoffdataposition() {
	var element = document.getElementById("data_position");
    element.classList.remove("alert");
}

function alertoffdatahourweek() {
	var element = document.getElementById("pre-data_stunden_woche");
    element.classList.remove("pre-alert-bar-hour-week");

	var element = document.getElementById("data_stunden_woche");
    element.classList.remove("alert-bar_stunden_woche");
}

function alertoffdatahappiness() {
	var element = document.getElementById("pre-data_athmosphaere");
    element.classList.remove("pre-alert-bar-happiness");

	var element = document.getElementById("data_athmosphaere");
    element.classList.remove("alert-bar_happiness");
}

function alertoffdatadaymonth() {
	var element = document.getElementById("pre-data_tag_monat");
    element.classList.remove("pre-alert-bar-day-month");

	var element = document.getElementById("data_tag_monat");
    element.classList.remove("alert-bar_tag_monat");
}

function alertoffdatahourday() {
	var element = document.getElementById("pre-data_stunden_tag");
    element.classList.remove("pre-alert-bar-hour-day");

	var element = document.getElementById("data_stunden_tag");
    element.classList.remove("alert-bar_stunde_tag");
}

function alertoffdatatime() {
	var element = document.getElementById("pre-data_zeit");
    element.classList.remove("pre-alert-bar-time");

	var element = document.getElementById("data_zeit");
    element.classList.remove("alert-bar_time");
}

function alertoffdatatext() {
	var element = document.getElementById("pre-data_laenge_text");
    element.classList.remove("pre-alert-bar-text");

	var element = document.getElementById("data_laenge_text");
    element.classList.remove("alert-bar_text");
}

function alertoffdataaudio() {
	var element = document.getElementById("pre-data_laenge_audio");
    element.classList.remove("pre-alert-bar-audio");

	var element = document.getElementById("data_laenge_audio");
    element.classList.remove("alert-bar_audio");
}

function alertoffdatavideo() {
	var element = document.getElementById("pre-data_laenge_video");
    element.classList.remove("pre-alert-bar-video");

	var element = document.getElementById("data_laenge_video");
    element.classList.remove("alert-bar_video");
}

/*Datalist Fix*/

(function() {
	var inputs = document.getElementsByTagName('input');
	for( var i = 0; i < inputs.length; i++ ) {
		var input = inputs[i];
		input.onchange = function(evt) {
		var elem = evt ? evt.target : window.event.srcElement;
		};
	}
}())


var slide = document.getElementById("data_athmosphaere");
var text = document.getElementById("outputhappiness");
slide.onchange = function() {
slide.innerHTML = this.value;
slidervalue=(slide.value)

if (slidervalue ==1){
	console.log(slidervalue)
	text.classList.add("fav-output-1");
	text.classList.remove("fav-output-0", "fav-output-2", "fav-output-3", "fav-output-4", "fav-output-5", "fav-output-6", "fav-output-7", "fav-output-8", "fav-output-9");
}

if (slidervalue ==2) {
	console.log(slidervalue)
	text.classList.add("fav-output-2");
	text.classList.remove("fav-output-0", "fav-output-1", "fav-output-3", "fav-output-4", "fav-output-5", "fav-output-6", "fav-output-7", "fav-output-8", "fav-output-9");
}

if (slidervalue ==3) {
	console.log(slidervalue)
	text.classList.add("fav-output-3");
	text.classList.remove("fav-output-0", "fav-output-1", "fav-output-2", "fav-output-4", "fav-output-5", "fav-output-6", "fav-output-7", "fav-output-8", "fav-output-9");
}

if (slidervalue ==4) {
	console.log(slidervalue)
	text.classList.add("fav-output-4");
	text.classList.remove("fav-output-0", "fav-output-1", "fav-output-2", "fav-output-3", "fav-output-5", "fav-output-6", "fav-output-7", "fav-output-8", "fav-output-9");
}

if (slidervalue ==5) {
	console.log(slidervalue)
	text.classList.add("fav-output-5");
	text.classList.remove("fav-output-0", "fav-output-1", "fav-output-2", "fav-output-3", "fav-output-4", "fav-output-6", "fav-output-7", "fav-output-8", "fav-output-9");
}

if (slidervalue ==6) {
	console.log(slidervalue)
	text.classList.add("fav-output-6");
	text.classList.remove("fav-output-0", "fav-output-1", "fav-output-2", "fav-output-3", "fav-output-4", "fav-output-5", "fav-output-7", "fav-output-8", "fav-output-9");
}

if (slidervalue ==7) {
	console.log(slidervalue)
	text.classList.add("fav-output-7");
	text.classList.remove("fav-output-0", "fav-output-1", "fav-output-2", "fav-output-3", "fav-output-4", "fav-output-5", "fav-output-6", "fav-output-8", "fav-output-9");
}

if (slidervalue ==8) {
	console.log(slidervalue)
	text.classList.add("fav-output-8");
	text.classList.remove("fav-output-0", "fav-output-1", "fav-output-2", "fav-output-3", "fav-output-4", "fav-output-5", "fav-output-6", "fav-output-7", "fav-output-9");
}

else if (slidervalue ==9) {
	console.log(slidervalue)
	text.classList.add("fav-output-9");
	text.classList.remove("fav-output-0", "fav-output-1", "fav-output-2", "fav-output-3", "fav-output-4", "fav-output-5", "fav-output-6", "fav-output-7", "fav-output-8");
}

}

function reload() {
	var element = document.getElementById("ACCEPTED");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("data_submit");
    element.classList.add("show");
    element.classList.remove("hide");
	element.disabled = true;
	
	var element = document.getElementById("pre-data_genre");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("pre-data_position");
    element.classList.add("hide");
    element.classList.remove("show");
	
    var element = document.getElementById("outputtime");
	element.innerHTML="0";

	var element = document.getElementById("outputdaymonth");
	element.innerHTML="0";

	var element = document.getElementById("outputhourday");
	element.innerHTML="0";

	var element = document.getElementById("outputhourweek");
	element.innerHTML="0";

	var element = document.getElementById("banner-left-1");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("banner-left-4");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("data_medium");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("data_arbeitsverhaeltnis");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("newsletter_submit");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("reload_submit");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("after-submit-text-1");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("after-submit-text-2");
    element.classList.add("hide");
    element.classList.remove("show");

	console.log("this is smooth")
	var button = document.getElementById("reload_submit");
	console.log(button)

	var href = $(button).attr('linkdirectionup');
	console.log(href)
	$('html, body').animate({
	scrollTop:$(href).offset().top
      },'slow');


};


$('.smooth').on('click', function(e){

})


function hidedenied() {
	var element = document.getElementById("WARNING");
    element.classList.add("hide");
    element.classList.remove("show");
};

function hidedenied2() {
	var element = document.getElementById("WARNING_getdata");
    element.classList.add("hide");
    element.classList.remove("show");
};


function hideaccepted() {
	var element = document.getElementById("ACCEPTED");
    element.classList.add("hide");
    element.classList.remove("show");
};


function smoothfunction(){
  console.log("this is smooth")
  var button = document.getElementById("reload_submit");
  console.log(button)

  var href = $(button).attr('linktdirection');
  console.log(href)
  $('html, body').animate({
    scrollTop:$(href).offset().top
  },'slow');
}
function smoothfunction_submit(){
  console.log("this is smooth")
  var button = document.getElementById("data_submit");
  console.log(button)

  var href = $(button).attr('linkdirection');
  console.log(href)
  $('html, body').animate({
    scrollTop:$(href).offset().top
  },'slow');
}
function textamountloan() {
	var element = document.getElementById("freigrafiktext");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("freigrafikaudio");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("freigrafikvideo");
    element.classList.add("hide");
    element.classList.remove("show");
};

function audioamountloan() {
	var element = document.getElementById("freigrafiktext");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("freigrafikaudio");
    element.classList.add("show");
    element.classList.remove("hide");

	var element = document.getElementById("freigrafikvideo");
    element.classList.add("hide");
    element.classList.remove("show");
};

function videoamountloan() {
	var element = document.getElementById("freigrafiktext");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("freigrafikaudio");
    element.classList.add("hide");
    element.classList.remove("show");

	var element = document.getElementById("freigrafikvideo");
    element.classList.add("show");
    element.classList.remove("hide");
};

function smoothfunction(){
  console.log("this is smooth")
  var button = document.getElementById("reload_submit");
  console.log(button)

  var href = $(button).attr('linkdirection');
  console.log(href)
  $('html, body').animate({
    scrollTop:$(href).offset().top
  },'slow');
};
$('#machmit').on('click', function(event){
  event.preventDefault();

  var href = $(this).attr('href');
  $('html, body').animate({
    scrollTop:$(href).offset().top
  },'slow');
})
