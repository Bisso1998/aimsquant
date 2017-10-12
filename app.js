// javascript
var jsonobject,items;
var availableTags = [];

	$.ajax({
    url: "XNSE-datasets-codes.csv",
    async: false,
    dataType: "JSON", 
    processdata: true,
    success: function (csvd) {
        items = $.csv.toObjects(csvd);
        // jsonobject = JSON.stringify(items);
        for(var i=0;i<7000;i++)
        {
        	var tmp = items[i].CODE;
        	var len = tmp.length;
 
       		if (!((tmp[len] == 'J')&&(tmp[len-1] == 'D')))
       		{
       			 availableTags.push(items[i].CODE);
       		}
        }
        console.log("availableTags: " + availableTags);

        // alert(jsonobject);
        // $('#appendHere').append(jsonobject);
    },
    dataType: "text",
    complete: function () {
    	// console.log(jsonobject);

    }
});

    


console.log(jsonobject);
  $( function() {
    $( "#searchStock" ).autocomplete({
    	max:10,
     	minLength:3,
    	source: availableTags
    });
  } );
