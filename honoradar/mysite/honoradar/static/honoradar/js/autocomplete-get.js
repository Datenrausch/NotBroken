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

onSelectItemEvent: function() {
var value = $("#data_medium").getSelectedItemData().code;

$("#media-analyse").val(value).trigger("change");
}
}
};

$("#media-analyse").easyAutocomplete(options);
