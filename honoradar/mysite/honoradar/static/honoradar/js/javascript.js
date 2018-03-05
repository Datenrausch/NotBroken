

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


function festfunction() {
	var element = document.getElementById("question-1");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("question-2");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("question-3");
    element.classList.add("hide");
    element.classList.remove("show");
	
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
	
	var element = document.getElementById("pre-data_laenge_text");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("pre-data_laenge_audio");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("pre-data_laenge_video");
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
	
	var element = document.getElementById("banner-left-triangle");
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

function pauschalfunction() {
	var element = document.getElementById("question-1");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("question-2");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("question-3");
    element.classList.add("hide");
    element.classList.remove("show");
	
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
	
	var element = document.getElementById("pre-data_laenge_text");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("pre-data_laenge_audio");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("pre-data_laenge_video");
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
	
	var element = document.getElementById("banner-left-triangle");
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
	var element = document.getElementById("question-1");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("question-2");
    element.classList.add("hide");
    element.classList.remove("show");
	
	var element = document.getElementById("question-3");
    element.classList.add("hide");
    element.classList.remove("show");
	
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

	var element = document.getElementById("banner-left-triangle");
    element.classList.add("show");
    element.classList.remove("hide");
	
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
}

function getfunctionfest() {
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


function analysefunction() {
	var element = document.getElementById("result");
    element.classList.add("show");
    element.classList.remove("hide");
}

$('.smooth').on('click', function(e){
  var href = $(this).attr('href');
  $('html, body').animate({
    scrollTop:$(href).offset().top
  },'slow');
  e.preventDefault();
})