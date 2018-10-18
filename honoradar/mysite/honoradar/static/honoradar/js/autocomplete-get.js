function autocomplete_get() {
    var versionUpdate = (new Date()).getTime();
    console.log(nameJSON)
    var options = {
      data: nameJSON["data"],

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
};
