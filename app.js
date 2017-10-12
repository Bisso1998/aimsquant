// javascript
var jsonobject,items;
var availableTags = [];
function fireAJAX()
{
	$.ajax({
    url: "XNSE-datasets-codes.csv",
    async: false,
    dataType: "JSON", 
    processdata: true,
    success: function (csvd) {
        items = $.csv.toObjects(csvd);
        jsonobject = JSON.stringify(items);
        console.log(items[0].CODE);
        console.log(items[1]);
        console.log("JSON OBJ");
        // console.log(jsonobject);
        console.log("we are from another worls " + items[0].CODE);
        console.log("availableTags: " + availableTags);
        availableTags.push("HELLO EARTH");
        console.log("after availableTags: " + availableTags);
        for(var i=0;i<7000;i++)
        {
        	availableTags.push(items[i].CODE);
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
}
    


console.log(jsonobject);
  $( function() {
    //  availableTags = [
    //   "ActionScript",
    //   "AppleScript",
    //   "Asp",
    //   "BASIC",
    //   "C",
    //   "C++",
    //   "Clojure",
    //   "COBOL",
    //   "ColdFusion",
    //   "Erlang",
    //   "Fortran",
    //   "Groovy",
    //   "Haskell",
    //   "Java",
    //   "JavaScript",
    //   "Lisp",
    //   "Perl",
    //   "PHP",
    //   "Python",
    //   "Ruby",
    //   "Scala",
    //   "Scheme"
    // ];
    // availableTags.push("HELLO EARTH");

    $( "#searchStock" ).autocomplete({
    	max:10,
     	minLength:3,
    	source: availableTags
    });
  } );
