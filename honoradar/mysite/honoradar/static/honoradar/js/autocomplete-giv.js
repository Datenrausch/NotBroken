var options = {
    url: "static/honoradar/mediumsname.json",

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
