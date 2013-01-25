(function() {
    // Keyup listener for all of the content parameter input fields (content parameter input fields should belong only to PUT or POST methods)
    $('.content > table.parameters > tbody > tr > td.parameter input').keyup(function (event) {
        
        // Obtain the parameter name and parameter value
        fieldName = $(this).parent().siblings('.name').text();
        // Will want to do some processing here in the future for more
        // complicated data types. 
        fieldVal = $(this).val();

        // Determine the text area to which this parameter belongs
        var goal = $(this).closest('li.method')
                        .children('form')
                        .children('div.content')
                        .children('div.fields')
                        .children('textarea');

        // Check whether the text area has data stored there already.
        // If it does, create an javascript object with that data;
        // if not, initialize the object.
        var textAreaObj;
        if (goal.val() == '') {
            textAreaObj = {};
        }
        else {
            textAreaObj = JSON.parse(goal.val());
        }

        // Add the new parameter data to the object
        textAreaObj[fieldName] = fieldVal;
        //console.log(textAreaObj);

        // Update the text field
        goal.val(JSON.stringify(textAreaObj, null, 2));
    });
})();