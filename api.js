$.getJSON( "https://my.api.mockaroo.com/users.json?key=59296740", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
            items.push( "<tr id='" + key+ "'>" );
            items.push("<th>" + val['id'] + "</th>")
            items.push("<th>" + val['first_name'] + "</th>")
            items.push("<th>" + val['last_name'] + "</th>")
            items.push("<th>" + val['email'] + "</th>")
            items.push("<th>" + val['gender'] + "</th>")
            items.push("<th>" + val['animal'] + "</th>")
            items.push("</tr>")
            });
            
            $( "<table/>", {
            "xd": "xddd",
            html: items.join( "" )
            }).appendTo( "body" );
        });