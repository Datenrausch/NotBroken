var options = {
  url: "static/honoradar/mediumsname.json",

getValue: function(element) {
return element.name;
},
requestDelay: 1000,
list: {
maxNumberOfElements: 5,
match: {
  enabled: true
},

onChooseEvent: function() {
var value = $("#media-analyse").getSelectedItemData().code;

$("#id-value-get").val(value).trigger("change");
}
}
};

$("#media-analyse").easyAutocomplete(options);
