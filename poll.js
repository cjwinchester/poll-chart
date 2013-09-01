function displayContent(json) {
            var len = json.feed.entry.length;
            
            // create four empty arrays
            var johnarray = [];
            var georgearray = [];
            var paularray = [];
            var ringoarray = [];
                        
            // loop through spreadsheet content
            for (var i=0; i<len; i++) {        
            
            // push each spreadsheet entry to the appropriate array
            if (json.feed.entry[i].gsx$beatle.$t == "George") {georgearray.push(json.feed.entry[i].gsx$beatle.$t)} else if (json.feed.entry[i].gsx$beatle.$t == "John") {johnarray.push(json.feed.entry[i].gsx$beatle.$t)} else if (json.feed.entry[i].gsx$beatle.$t == "Paul") {paularray.push(json.feed.entry[i].gsx$beatle.$t)} else if (json.feed.entry[i].gsx$beatle.$t == "Ringo") {ringoarray.push(json.feed.entry[i].gsx$beatle.$t)};
            
            // store the length of each array in a variable
            var georgelen = georgearray.length;
            var paullen = paularray.length;
            var ringolen = ringoarray.length;
            var johnlen = johnarray.length;
            
            // get percentages
            var total = georgelen + paullen + ringolen + johnlen;
            var georgepct = ((georgelen / total) * 100).toFixed(0) + '%';
            var paulpct = ((paullen / total) * 100).toFixed(0) + '%';
            var ringopct = ((ringolen / total) * 100).toFixed(0) + '%';
            var johnpct = ((johnlen / total) * 100).toFixed(0) + '%';
}

// create chart with array length as data
document.getElementById('chartdiv').innerHTML = '<img src="http://chart.googleapis.com/chart?chs=240x180&chco=084594&chma=50,40,40,40&chl=Paul+(' + paulpct + ')|George+(' + georgepct + ')|Ringo+(' + ringopct + ')|John+(' + johnpct + ')&cht=p&chd=t:' + paullen + ',' + georgelen + ',' + ringolen + ',' + johnlen + '" width="240" height="180" title="" alt="" />'

document.getElementById('johncount').innerHTML = johnlen;
document.getElementById('georgecount').innerHTML = georgelen;
document.getElementById('ringocount').innerHTML = ringolen;
document.getElementById('paulcount').innerHTML = paullen;

}
