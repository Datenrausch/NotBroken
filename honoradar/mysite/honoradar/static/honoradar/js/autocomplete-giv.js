//Only checking for the names in the inputs
function autocomplete_giv() {

var versionUpdate = (new Date()).getTime();
var options = {
  data: nameJSON["data"],

    getValue: function(element) {
        return element.name;
    },
    requestDelay: 750,
    list: {
        maxNumberOfElements: 5,
        match: {
            enabled: true
        },

        onChooseEvent: function() {
            var value = $("#data_medium").getSelectedItemData().code;

            $("#data_medium").val(value).trigger("change");
        }
    }
};

$("#data_medium").easyAutocomplete(options);}
