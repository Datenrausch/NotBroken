//Only checking for the names in the inputs
var versionUpdate = (new Date()).getTime();
var options = {
    url: "static/honoradar/mediumsname.json?v="+versionUpdate,

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
            var value = $("#data_medium").getSelectedItemData().name;

            $("#data_medium").val(value).trigger("change");
        }
    }
};

$("#data_medium").easyAutocomplete(options);
