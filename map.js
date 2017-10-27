var format = function(d) {
    d = d / 1000000;
    return d3.format(',.01f')(d) + 'M';
}

var map = d3.geomap.choropleth()
    .geofile('./d3-geomap/topojson/world/countries.json')
    .width(800)
    .height(400)
    .domain([0, 150000000])
    .colors(colorbrewer.YlOrRd[9])
    .column('boxoffice')
    .format(format)
    .legend(true)
    .duration(8000)
  //  .unitTitle('name', 'boxoffice', 'percent')
    .unitId('id');

d3.csv('./cloroplethmap.csv', function(error, data) {
    d3.select('#map')
        .datum(data)
        .call(map.draw, map);
});
