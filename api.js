$(document).ready(function () {
    $.getJSON("https://my.api.mockaroo.com/wedkowanie.json?key=afaaf6d0", function (data) {
        var items = [];

        // Header row
        items.push("<tr>");
        items.push("<th >ID</th>");
        items.push("<th>Imię</th>");
        items.push("<th>Numer tel.</th>");
        items.push("<th>Data ur.</th>");
        items.push("<th>Płeć</th>");
        items.push("<th>Gatunek</th>");
        items.push("<th>Długość</th>");
        items.push("<th>Waga</th>");
        items.push("<th>Karta Wędkarska</th>");
        items.push("</tr>");

        // Data rows
        $.each(data, function (key, val) {
            items.push("<tr>");
            items.push("<td>" + val['id'] + "</td>");
            items.push("<td>" + val['Full_name'] + "</td>");
            items.push("<td>" + val['Phone_number'] + "</td>");
            items.push("<td>" + val['Birthdate'] + "</td>");
            items.push("<td>" + val['gender'] + "</td>");
            items.push("<td>" + val['Fish'] + "</td>");
            items.push("<td>" + val['Lenght'] + "</td>");
            items.push("<td>" + val['Weight'] + "</td>");
            items.push("<td>" + val['Fishing_License'] + "</td>");
            items.push("</tr>");
        });

        $("<table/>", {
            "class": "table table-bordered table-striped",
            html: items.join("")
        }).appendTo(".table-container");
    });
});