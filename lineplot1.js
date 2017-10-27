
var data = [
  {id: 'starwars', Year: 2001, Count: 1.00}, {id: 'disney', Year: 2001, Count: 1.00}, {id: 'both', Year: 2001, Count: 1.00},
  {id: 'starwars', Year: 2002, Count: 0.76}, {id: 'disney', Year: 2002, Count: 0.98}, {id: 'both', Year: 2002, Count: 1.28},
  {id: 'starwars', Year: 2003, Count: 0.45}, {id: 'disney', Year: 2003, Count: 0.94}, {id: 'both', Year: 2003, Count: 0.33},
  {id: 'starwars', Year: 2004, Count: 0.52}, {id: 'disney', Year: 2004, Count: 1.18}, {id: 'both', Year: 2004, Count: 0.61},
  {id: 'starwars', Year: 2005, Count: 0.82}, {id: 'disney', Year: 2005, Count: 0.94}, {id: 'both', Year: 2005, Count: 1.33},
  {id: 'starwars', Year: 2006, Count: 0.49}, {id: 'disney', Year: 2006, Count: 0.98}, {id: 'both', Year: 2006, Count: 0.89},
  {id: 'starwars', Year: 2007, Count: 0.73}, {id: 'disney', Year: 2007, Count: 1.10}, {id: 'both', Year: 2007, Count: 0.72},
  {id: 'starwars', Year: 2008, Count: 0.68}, {id: 'disney', Year: 2008, Count: 1.19}, {id: 'both', Year: 2008, Count: 0.33},
  {id: 'starwars', Year: 2009, Count: 0.55}, {id: 'disney', Year: 2009, Count: 1.09}, {id: 'both', Year: 2009, Count: 0.61},
  {id: 'starwars', Year: 2010, Count: 0.60}, {id: 'disney', Year: 2010, Count: 0.95}, {id: 'both', Year: 2010, Count: 1.39},
  {id: 'starwars', Year: 2011, Count: 0.66}, {id: 'disney', Year: 2011, Count: 1.07}, {id: 'both', Year: 2011, Count: 1.28},
  {id: 'starwars', Year: 2012, Count: 0.65}, {id: 'disney', Year: 2012, Count: 1.22}, {id: 'both', Year: 2012, Count: 2.61},
  {id: 'starwars', Year: 2013, Count: 0.98}, {id: 'disney', Year: 2013, Count: 1.57}, {id: 'both', Year: 2013, Count: 6.83},
  {id: 'starwars', Year: 2014, Count: 1.02}, {id: 'disney', Year: 2014, Count: 1.69}, {id: 'both', Year: 2014, Count: 6.44},
  {id: 'starwars', Year: 2015, Count: 1.97}, {id: 'disney', Year: 2015, Count: 1.76}, {id: 'both', Year: 2015, Count: 13.89},
  {id: 'starwars', Year: 2016, Count: 1.87}, {id: 'disney', Year: 2016, Count: 1.58}, {id: 'both', Year: 2016, Count: 11.83},


];

new d3plus.LinePlot()
  .data(data)
  .groupBy("id")
  .y("Count")
  .x("Year")
  .shapeConfig({
      Line: {strokeWidth: 3}
  })
  .xConfig({
    barConfig: {"stroke-width": 2},
    title: "Year",
    labels: [2000, 2005, 2010, 2015]
  })
  .yConfig({
    barConfig: {"stroke-width": 2},
    title: "Normalized Appearances",
    ticks: []
  })
  .render();
