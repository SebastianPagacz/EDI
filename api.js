$.getJSON( "https://my.api.mockaroo.com/wedkowanie.json?key=afaaf6d0", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
            items.push( "<tr id='" + key+ "'>" );
            items.push("<th>" + val['id'] + "</th>")
            items.push("<th>" + val['Full_name'] + "</th>")
            items.push("<th>" + val['Phone_number'] + "</th>")
            items.push("<th>" + val['Birthdate'] + "</th>")
            items.push("<th>" + val['gender'] + "</th>")
            items.push("<th>" + val['Fish'] + "</th>")
            items.push("<th>" + val['Lenght'] + "</th>")
            items.push("<th>" + val['Weight'] + "</th>")
            items.push("<th>" + val['Fishing_License'] + "</th>")
            items.push("</tr>")
            });
            
            $( "<table/>", {
            html: items.join( "" )
            }).appendTo("div");
        });