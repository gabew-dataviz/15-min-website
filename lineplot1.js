var data = [
{id: 'starwars', x: 2001, y: 483}, {id: 'disney', x: 2001, y: 610}, {id: 'both', x: 2001, y: 18},
{id: 'starwars', x: 2002, y: 367}, {id: 'disney', x: 2002, y: 600}, {id: 'both', x: 2002, y: 23},
{id: 'starwars', x: 2003, y: 218}, {id: 'disney', x: 2003, y: 573}, {id: 'both', x: 2003, y: 6},
{id: 'starwars', x: 2004, y: 249}, {id: 'disney', x: 2004, y: 720}, {id: 'both', x: 2004, y: 11},
{id: 'starwars', x: 2005, y: 396}, {id: 'disney', x: 2005, y: 571}, {id: 'both', x: 2005, y: 24},
{id: 'starwars', x: 2006, y: 235}, {id: 'disney', x: 2006, y: 598}, {id: 'both', x: 2006, y: 16},
{id: 'starwars', x: 2007, y: 353}, {id: 'disney', x: 2007, y: 672}, {id: 'both', x: 2007, y: 13},
{id: 'starwars', x: 2008, y: 329}, {id: 'disney', x: 2008, y: 725}, {id: 'both', x: 2008, y: 6},
{id: 'starwars', x: 2009, y: 265}, {id: 'disney', x: 2009, y: 665}, {id: 'both', x: 2009, y: 11},
{id: 'starwars', x: 2010, y: 292}, {id: 'disney', x: 2010, y: 582}, {id: 'both', x: 2010, y: 25},
{id: 'starwars', x: 2011, y: 319}, {id: 'disney', x: 2011, y: 650}, {id: 'both', x: 2011, y: 23},
{id: 'starwars', x: 2012, y: 312}, {id: 'disney', x: 2012, y: 742}, {id: 'both', x: 2012, y: 47},
{id: 'starwars', x: 2013, y: 471}, {id: 'disney', x: 2013, y: 957}, {id: 'both', x: 2013, y: 123},
{id: 'starwars', x: 2014, y: 495}, {id: 'disney', x: 2014, y: 1030}, {id: 'both', x: 2014, y: 116},
{id: 'starwars', x: 2015, y: 951}, {id: 'disney', x: 2015, y: 1071}, {id: 'both', x: 2015, y: 250},
{id: 'starwars', x: 2016, y: 902}, {id: 'disney', x: 2016, y: 966}, {id: 'both', x: 2016, y: 213}

];

new d3plus.LinePlot()
  .data(data)
  .groupBy("id")
  .render();
