var versionUpdate = (new Date()).getTime();

var options = {
  url: "/static/honoradar/mediumsname_temporary.json?v=" + versionUpdate,

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
var value = $("#media-analyse").getSelectedItemData().name;

$("#media-analyse").val(value).trigger("change");
}
}
};

$("#media-analyse").easyAutocomplete(options);
