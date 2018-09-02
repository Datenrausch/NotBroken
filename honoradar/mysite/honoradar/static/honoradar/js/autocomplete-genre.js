var options = {
  url: "static/honoradar/genre.json",

getValue: function(element) {
return element.name;
},
requestDelay: 1000,
list: {
maxNumberOfElements: 5,
match: {
  enabled: true
},

onSelectItemEvent: function() {
var value = $("#data_genre").getSelectedItemData().code;

$("#data_genre").val(value).trigger("change");
}
}
};

$("#data_position").easyAutocomplete(options);
