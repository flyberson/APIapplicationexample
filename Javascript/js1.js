
var userinput;
$(document).ready(function () {

    $("#bt1").click(function () {

        getdata();
    });

})

function getdata(){

    userinput = $("#inputfield1").val();
    var Json= "http://www.dr.dk/mu-online/api/1.4/search/tv/programcards-latest-episode-with-asset/series-title/"+userinput+"?limit=5&offset=0";


    $.getJSON(Json,function (data) {
        //alert(JSON.stringify(data,null," "));
        //var temp = JSON.parse(data);
        //alert(temp);
        var seriesname = data.Items[0].SeriesTitle;
        var primarychannel = data.Items[0].PrimaryChannelSlug;
        var pbday = data.Items[0].PrimaryBroadcastDay;
        var pbstime = data.Items[0].PrimaryBroadcastStartTime;
        alert(seriesname+primarychannel)
        $("#holder1").append(seriesname+"<br>"+primarychannel+"<br>"+pbday+"<br>"+pbstime);

    });
}