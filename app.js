var jsonobject,items;
var i=0;
var availableTags = [], chartDraw= [];

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





//////////////////
$(document).ready(function(){
    $( "#createHistory" ).click(function() {
    var code = document.getElementById('searchStock').value;
    document.getElementById('amendAll').style.display = "block";
    console.log(code);

    var len = code.length;
    var codePush = code.slice(5,len);
    console.log(codePush);
    $.ajax({
        type: "GET",        
        url: 'https://www.quandl.com/api/v3/datasets/XNSE/'+codePush+'.json?api_key=gWf2CLShwrGUBVnqzsT4&start_date=2015-07-05&end_date=2016-05-05',        
        dataType: "json",   
        processdata: true   
    }).done(function (value) {
        console.log(value);
        console.log(value.length);
        for(var i=0;i<219;i++)
        {
            chartDraw.push(value.dataset.data[i][4])
        }
    });
    console.log( "chart draw is:" + chartDraw);

Highcharts.chart('abcdef', {

    title: {
        text: 'AimsQuant Stock Research, 2005-2016'
    },

    subtitle: {
        text: 'Source: AimsQuant Lab'
    },

    yAxis: {
        title: {
            text: 'Close Prices'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: chartDraw
    }
    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

$('#saveHistory').append("<li style='color: white' id="+ i+ ">" + codePush + '</li>');
$('#'+i).append('     <input type="checkbox" name="deleteBox" id="c'  +i+ '" /> <label for="c'+i+'">Select</label> ');
i++;
});

function deleteME(i)
{
      $('#'+i).parent().remove();
      console.log("HOWDYYY");
}
})  
