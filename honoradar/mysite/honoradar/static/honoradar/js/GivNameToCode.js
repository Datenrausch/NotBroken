function search(source, name) {
    var results = [];
    var index;
    var entry;

    for (index = 0; index < source.length; ++index) {
        entry = source[index];
        if (entry && entry.name && entry.name.toUpperCase().indexOf(name) !== -1) {
            results.push(entry);
        }
    }

    return results;
}



  console.log(mediumcode)
  var element = document.getElementById("id-value-get")
  element.innerHTML = ""
