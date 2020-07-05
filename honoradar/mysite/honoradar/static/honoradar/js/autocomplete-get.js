function autocomplete_get() {
    var versionUpdate = (new Date()).getTime();
    var options = {
      data: nameJSON["autofilljson"],

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

                $("#media-analyse").val(value).trigger("change");
            }
        }
    };

    $("#media-analyse").easyAutocomplete(options);
};
