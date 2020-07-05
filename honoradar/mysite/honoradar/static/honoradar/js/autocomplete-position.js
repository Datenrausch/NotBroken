var options = {
    url: "static/honoradar/position.json",

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
            var value = $("#data_position").getSelectedItemData().code;

            $("#data_position").val(value).trigger("change");
        }
    }
};

$("#data_position").easyAutocomplete(options);
